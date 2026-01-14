import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAdminTransactions } from "@/hooks/useAdminTransactions";
import { StatCard } from "@/components/dashboard/StatCard";
import { WeeklyReportChart } from "@/components/dashboard/WeeklyReportChart";
import { Last7DaysSales } from "@/components/dashboard/Last7DaysSales";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { AverageOrderValue } from "@/components/dashboard/AverageOrderValue";
import {
  UsersIcon,
  StoreIcon,
  OrderIcon,
  DeliveredIcon,
} from "@/components/icons/CustomIcons";
import { adminApi } from "@/lib/apiClient";
import { useUsersCount } from "@/hooks/useUsersCount";
import { OrderStatus } from "../../api-client";

type TransactionRow = {
  name: string;
  date: string;
  amount: string;
  status: string;
};

export default function Dashboard() {
  const [timeframe, setTimeframe] = useState<string>("7d");

  const getStartEndIso = (preset: string) => {
    const end = new Date();
    const start = new Date();
    if (preset === "7d") start.setDate(end.getDate() - 7);
    else if (preset === "30d") start.setDate(end.getDate() - 30);
    else if (preset === "90d") start.setDate(end.getDate() - 90);
    else start.setDate(end.getDate() - 7);
    return { startIso: start.toISOString(), endIso: end.toISOString() };
  };

  const { startIso: createdAtStart, endIso: createdAtEnd } =
    getStartEndIso(timeframe);
  // derive days from preset for endpoints that accept 'days'
  const days =
    timeframe === "7d"
      ? 7
      : timeframe === "30d"
        ? 30
        : timeframe === "90d"
          ? 90
          : 7;

  const { data: storesOverview } = useQuery({
    queryKey: ["storesOverview", days],
    queryFn: async () =>
      (await adminApi.vendorsOverviewGet({ params: { days } })).data,
    staleTime: 60_000,
  });

  const { data: deliveryOverview } = useQuery({
    queryKey: ["deliveryOverview", days],
    queryFn: async () =>
      (await adminApi.deliveryPersonsAdminOverviewGet(days)).data,
    staleTime: 60_000,
  });

  const { data: totalUsers, isLoading: loadingUsers } = useUsersCount(
    undefined,
    createdAtStart,
    createdAtEnd,
    days,
  );

  const { data: totalOrdersResponse } = useQuery({
    queryKey: ["ordersTotal", createdAtStart, createdAtEnd],
    queryFn: async () => {
      const res = await adminApi.orderAdminAllGet(
        undefined,
        undefined,
        undefined,
        createdAtStart,
        createdAtEnd,
        1,
        1,
      );
      return res.data as any;
    },
    staleTime: 60_000,
  });

  const { data: totalDeliveredResponse } = useQuery({
    queryKey: ["ordersDeliveredTotal", createdAtStart, createdAtEnd],
    queryFn: async () => {
      const res = await adminApi.orderAdminAllGet(
        undefined,
        OrderStatus.Delivered as any,
        undefined,
        createdAtStart,
        createdAtEnd,
        1,
        1,
      );
      return res.data as any;
    },
    staleTime: 60_000,
  });

  const {
    transactions: hookTransactions,
    overview: transactionsOverview,
    loading: transactionsLoading,
  } = useAdminTransactions({
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

  const averageOrderValue = useMemo(() => {
    const overviewAov =
      (transactionsOverview as any)?.averageOrderValue ??
      (transactionsOverview as any)?.avgOrderValue;
    if (typeof overviewAov === "number") return overviewAov;
    const vals = (hookTransactions ?? []).map((t: any) =>
      typeof t.totalAmount === "number" ? t.totalAmount : 0,
    );
    const total = vals.reduce((s: number, n: number) => s + n, 0);
    return vals.length ? total / vals.length : 0;
  }, [transactionsOverview, hookTransactions]);

  const statCards = useMemo(
    () => [
      {
        title: "Total Users",
        value: loadingUsers ? "..." : (totalUsers ?? 0).toLocaleString(),
        change: "+ 0.03%",
        icon: UsersIcon,
        iconSize: 22,
      },
      {
        title: "Total Stores",
        value:
          storesOverview?.totalStores !== undefined
            ? storesOverview.totalStores.toLocaleString()
            : "0",
        change: "+ 0.03%",
        icon: StoreIcon,
        iconSize: 22,
      },
      {
        title: "Total Orders",
        value:
          totalOrdersResponse?.totalCount !== undefined
            ? totalOrdersResponse.totalCount.toLocaleString()
            : "0",
        change: "+ 0.03%",
        icon: OrderIcon,
        iconSize: 22,
      },
      {
        title: "Total Delivered",
        value:
          totalDeliveredResponse?.totalCount !== undefined
            ? totalDeliveredResponse.totalCount.toLocaleString()
            : "0",
        change: "+ 0.03%",
        icon: DeliveredIcon,
        iconSize: 22,
      },
    ],
    [
      storesOverview,
      deliveryOverview,
      totalUsers,
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
          className="rounded border px-2 py-1 text-sm"
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
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
          <WeeklyReportChart />
        </div>
        <div className="w-full min-w-0 dashboard-right">
          <Last7DaysSales />
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
