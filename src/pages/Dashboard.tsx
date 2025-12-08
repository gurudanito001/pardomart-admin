import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
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

type TransactionRow = {
  name: string;
  date: string;
  amount: string;
  status: string;
};

export default function Dashboard() {
  const { data: ordersOverview } = useQuery({
    queryKey: ["ordersOverview"],
    queryFn: async () => (await adminApi.orderAdminOverviewGet()).data,
    staleTime: 60_000,
  });

  const { data: storesOverview } = useQuery({
    queryKey: ["storesOverview"],
    queryFn: async () => (await adminApi.vendorsOverviewGet()).data,
    staleTime: 60_000,
  });

  const { data: deliveryOverview } = useQuery({
    queryKey: ["deliveryOverview"],
    queryFn: async () => (await adminApi.deliveryPersonsAdminOverviewGet()).data,
    staleTime: 60_000,
  });

  const {
    data: transactionsResponse,
    isLoading: transactionsLoading,
  } = useQuery({
    queryKey: ["recentTransactions", 1, 5],
    queryFn: async () => {
      const res = await adminApi.transactionsAdminAllGet(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        1,
        5,
      );
      return res.data as any;
    },
    staleTime: 30_000,
  });

  const recentTransactions: TransactionRow[] = useMemo(() => {
    const apiRows = (transactionsResponse?.data ?? []).slice(0, 5);
    return apiRows.map((t: any) => ({
      name: t.customerName ?? t.user?.name ?? "N/A",
      date: t.createdAt
        ? new Date(t.createdAt).toLocaleDateString()
        : "—",
      amount:
        typeof t.totalAmount === "number"
          ? `$${t.totalAmount.toFixed(2)}`
          : "$0.00",
      status: t.status ?? "Pending",
    }));
  }, [transactionsResponse]);

  const statCards = useMemo(
    () => [
      {
        title: "Total Users",
        value: "61,876",
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
          ordersOverview?.totalOrders !== undefined
            ? ordersOverview.totalOrders.toLocaleString()
            : "0",
        change: "+ 0.03%",
        icon: OrderIcon,
        iconSize: 22,
      },
      {
        title: "Total Delivered",
        value:
          deliveryOverview?.totalDeliveries !== undefined
            ? deliveryOverview.totalDeliveries.toLocaleString()
            : "0",
        change: "+ 0.03%",
        icon: DeliveredIcon,
        iconSize: 22,
      },
    ],
    [storesOverview, ordersOverview, deliveryOverview],
  );

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {/* Stat Cards */}
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex flex-nowrap gap-[15px] md:gap-[25px] min-w-max pr-2">
          {statCards.map((card, index) => (
            <div key={index} className="min-w-[220px] sm:min-w-[250px] max-w-[267px] flex-1">
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
          <RecentTransactions transactions={recentTransactions} loading={transactionsLoading} />
        </div>
        <div className="w-full h-full dashboard-right dashboard-right-2">
          <AverageOrderValue />
        </div>
      </div>
    </div>
  );
}
