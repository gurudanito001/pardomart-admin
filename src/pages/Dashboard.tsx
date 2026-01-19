import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@/hooks/use-debounce";
import { useAdminTransactions } from "@/hooks/useAdminTransactions";
import { StatCard } from "@/components/dashboard/StatCard";
import { WeeklyReportChart } from "@/components/dashboard/WeeklyReportChart";
import { Last7DaysSales } from "@/components/dashboard/Last7DaysSales";
import {
  RecentTransactions,
  TransactionRow,
} from "@/components/dashboard/RecentTransactions";
import { AverageOrderValue } from "@/components/dashboard/AverageOrderValue";
import {
  Users as UsersIcon,
  Store as StoreIcon,
  ShoppingBag as OrderIcon,
  CheckCircle as DeliveredIcon,
} from "lucide-react";
import { adminApi, orderApi, earningsApi } from "@/lib/apiClient";
import { OrderStatus, EarningsTotalGetPeriodEnum } from "../../api-client";

export default function Dashboard() {
  const [timeframe, setTimeframe] = useState<string>("7d");
  const debouncedTimeframe = useDebounce(timeframe, 500);

  const mapTimeframeToEarningsPeriod = (
    tf: string,
  ): EarningsTotalGetPeriodEnum | undefined => {
    switch (tf) {
      case "7d":
        return EarningsTotalGetPeriodEnum._7days;
      case "30d":
        return EarningsTotalGetPeriodEnum._1month;
      case "1y":
        return EarningsTotalGetPeriodEnum._1year;
      default:
        return EarningsTotalGetPeriodEnum._7days;
    }
  };

  const getStartEndIso = (preset: string) => {
    const end = new Date();
    const start = new Date();
    if (preset === "7d") start.setDate(end.getDate() - 7);
    else if (preset === "30d") start.setDate(end.getDate() - 30);
    else if (preset === "1y") start.setDate(end.getDate() - 365);
    else start.setDate(end.getDate() - 7);
    return { startIso: start.toISOString(), endIso: end.toISOString() };
  };

  const { startIso: createdAtStart, endIso: createdAtEnd } = useMemo(
    () => getStartEndIso(debouncedTimeframe),
    [debouncedTimeframe],
  );

  const days = useMemo(() => {
    return debouncedTimeframe === "7d"
      ? 7
      : debouncedTimeframe === "30d"
        ? 30
        : debouncedTimeframe === "1y"
          ? 365
          : 7;
  }, [debouncedTimeframe]);

  const earningsPeriod = useMemo(
    () => mapTimeframeToEarningsPeriod(debouncedTimeframe),
    [debouncedTimeframe],
  );

  // 1. Stores Overview (Total Stores)
  const { data: storesOverview } = useQuery({
    queryKey: ["storesOverview", days],
    queryFn: async () =>
      (await adminApi.vendorsOverviewGet({ params: { days } })).data,
    staleTime: 300000, // 5 minutes
    refetchOnWindowFocus: false,
  });

  // 2. Users Overview (Total Users)
  const { data: usersOverview, isLoading: loadingUsers } = useQuery({
    queryKey: ["usersOverview", days],
    queryFn: async () => (await adminApi.customersAdminOverviewGet(days)).data,
    staleTime: 300000,
    refetchOnWindowFocus: false,
  });

  // 3. Orders Overview (Total Orders - filtered by date)
  const { data: totalOrdersResponse } = useQuery({
    queryKey: ["ordersTotal", createdAtStart, createdAtEnd],
    queryFn: async () => {
      const res = await orderApi.orderAdminAllGet(
        undefined,
        undefined,
        undefined,
        createdAtStart,
        createdAtEnd,
        1,
        1,
      );
      // Explicitly return data. The type might be inferred incorrectly as RequestArgs by some tools,
      // but at runtime `orderApi` (factory instance) performs the request.
      // We cast to any to avoid "property totalCount does not exist on type void" if types are mismatched.
      return res.data as any;
    },
    staleTime: 300000,
    refetchOnWindowFocus: false,
  });

  // 4. Delivered Orders (Total Delivered - filtered by date)
  const { data: totalDeliveredResponse } = useQuery({
    queryKey: ["ordersDeliveredTotal", createdAtStart, createdAtEnd],
    queryFn: async () => {
      const res = await orderApi.orderAdminAllGet(
        undefined,
        OrderStatus.Delivered, // Use Enum
        undefined,
        createdAtStart,
        createdAtEnd,
        1,
        1,
      );
      return res.data as any;
    },
    staleTime: 300000,
    refetchOnWindowFocus: false,
  });

  // 5. Stock Overview (Snapshot - Note: Timeframe doesn't affect this)
  const { data: stockOverview } = useQuery({
    queryKey: ["orderAdminOverview"], // Separate key as it's not time-bound
    queryFn: async () => (await adminApi.orderAdminOverviewGet()).data,
    staleTime: 300000,
    refetchOnWindowFocus: false,
  });

  // 6. Revenue (Earnings)
  const { data: earningsTotal } = useQuery({
    queryKey: ["earningsTotal", earningsPeriod],
    queryFn: async () =>
      (await earningsApi.earningsTotalGet(earningsPeriod)).data,
    staleTime: 300000,
    refetchOnWindowFocus: false,
  });

  // 7. Recent Transactions
  const { transactions: hookTransactions, loading: transactionsLoading } =
    useAdminTransactions({
      page: 1,
      pageSize: 5,
      createdAtStart,
      createdAtEnd,
    });

  const recentTransactions: TransactionRow[] = useMemo(() => {
    const apiRows = (hookTransactions ?? []).slice(0, 5);
    return apiRows.map((t: any) => ({
      name: t.customerName ?? t.user?.name ?? "N/A",
      date: t.createdAt ? new Date(t.createdAt).toLocaleDateString() : "—",
      amount:
        typeof t.totalAmount === "number"
          ? `$${t.totalAmount.toFixed(2)}`
          : "$0.00",
      status: t.status ?? "Pending",
    }));
  }, [hookTransactions]);

  // 7. Average Order Value (Revenue / Total Orders)
  const averageOrderValue = useMemo(() => {
    const revenue = earningsTotal?.totalEarnings ?? 0;
    const ordersCount = totalOrdersResponse?.totalCount ?? 0;
    if (ordersCount === 0) return 0;
    return revenue / ordersCount;
  }, [earningsTotal, totalOrdersResponse]);

  const statCards = useMemo(
    () => [
      {
        title: "Total Users",
        value: loadingUsers
          ? "..."
          : (usersOverview?.totalCustomers ?? 0).toLocaleString(),
        change: undefined,
        icon: UsersIcon,
        iconSize: 22,
      },
      {
        title: "Total Stores",
        value:
          storesOverview?.totalStores !== undefined
            ? storesOverview.totalStores.toLocaleString()
            : "0",
        change: undefined,
        icon: StoreIcon,
        iconSize: 22,
      },
      {
        title: "Total Orders",
        value:
          totalOrdersResponse?.totalCount !== undefined
            ? totalOrdersResponse.totalCount.toLocaleString()
            : "0",
        change: undefined,
        icon: OrderIcon,
        iconSize: 22,
      },
      {
        title: "Total Delivered",
        value:
          totalDeliveredResponse?.totalCount !== undefined
            ? totalDeliveredResponse.totalCount.toLocaleString()
            : "0",
        change: undefined,
        icon: DeliveredIcon,
        iconSize: 22,
      },
    ],
    [
      storesOverview,
      usersOverview,
      totalOrdersResponse,
      totalDeliveredResponse,
      loadingUsers,
    ],
  );

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {/* Timeframe selector */}
      <div className="flex items-center justify-end">
        <label className="mr-2 text-sm text-slate-600">Timeframe:</label>
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="rounded border px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-[#06888C]"
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="1y">Last Year</option>
        </select>
      </div>
      {/* Stat Cards */}
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex flex-nowrap gap-[15px] md:gap-[25px] min-w-max pr-2">
          {statCards.map((card, index) => (
            <div
              key={index}
              className="min-w-[220px] sm:min-w-[250px] max-w-[267px] flex-1"
            >
              <StatCard {...card} />
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Report & Last 7 Days Sales */}
      <div className="flex flex-col gap-4 md:gap-6 dashboard-row">
        <div className="w-full min-w-0 dashboard-left">
          <WeeklyReportChart
            customersCount={
              loadingUsers
                ? "..."
                : (usersOverview?.totalCustomers ?? 0).toLocaleString()
            }
            storesCount={storesOverview?.totalStores?.toLocaleString() ?? "0"}
            // Stock overview is snapshot based, not timeframe based
            stockProductsCount={
              stockOverview?.inStockProducts?.toLocaleString() ?? "0"
            }
            // "Out of Stock" isn't directly available in OrderAdminOverview, but maybe inferred or 0 if unknown
            // The API response has 'inStockProducts' and 'totalProducts'.
            // So Out of stock = totalProducts - inStockProducts
            outOfStockCount={
              stockOverview?.totalProducts && stockOverview?.inStockProducts
                ? (
                    stockOverview.totalProducts - stockOverview.inStockProducts
                  ).toLocaleString()
                : "0"
            }
            revenue={new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            }).format(earningsTotal?.totalEarnings ?? 0)}
          />
        </div>
        <div className="w-full min-w-0 dashboard-right">
          {/* Note: Last7DaysSales usually requires a 7-day specific dataset.
              We'll pass the *total* for the current selected timeframe (if it's 7d)
              or the total period values.
              Ideally, if timeframe != 7d, this chart might look weird saying "Last 7 days"
              while showing 30d data.
              For now we pass the *fetched* orders/revenue which respect the timeframe selector.
              So if user selects 30d, this card shows 30d totals but title says "Last 7 Days".
              We should probably make the title dynamic or just accept this limitation as "Recent Sales".
           */}
          <Last7DaysSales
            totalRevenue={earningsTotal?.totalEarnings ?? 0}
            itemsSold={totalOrdersResponse?.totalCount ?? 0}
          />
        </div>
      </div>

      {/* Recent Transactions & Average Order Value */}
      <div className="flex flex-col gap-4 md:gap-6 dashboard-row">
        <div className="w-full h-full dashboard-left dashboard-left-2">
          <RecentTransactions
            transactions={recentTransactions}
            loading={transactionsLoading}
          />
        </div>
        <div className="w-full h-full dashboard-right dashboard-right-2">
          <AverageOrderValue current={averageOrderValue} previous={undefined} />
        </div>
      </div>
    </div>
  );
}
