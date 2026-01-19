import { useVendorUsers } from "@/hooks/useVendorUsers";
import { StatCard } from "@/components/dashboard/StatCard";
import { StoresTable } from "@/components/stores/StoresTable";
import {
  UsersIcon,
  StoreIcon,
  OrderIcon,
  DeliveredIcon,
} from "@/components/icons/CustomIcons";
import { useQuery } from "@tanstack/react-query";
import { adminApi } from "@/lib/apiClient";
import type { VendorsOverviewGet200Response } from "../../api-client";

export default function StoreManagement() {
  const { total, loading } = useVendorUsers();

  // Fetch vendors overview statistics
  const { data: overview, isLoading: overviewLoading } = useQuery({
    queryKey: ["vendorsOverview"],
    queryFn: async () => {
      const response = await adminApi.vendorsOverviewGet();
      return response.data as VendorsOverviewGet200Response;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex flex-nowrap gap-[15px] md:gap-[25px] min-w-max pr-2">
          <div className="flex-1 min-w-[220px] sm:min-w-[250px] max-w-[267px]">
            <StatCard
              title="Total Stores"
              value={
                overviewLoading
                  ? "Loading..."
                  : (overview?.totalStores?.toLocaleString() ?? "0")
              }
              change="+ 0.03%"
              icon={StoreIcon}
              iconSize={16}
            />
          </div>
          <div className="flex-1 min-w-[220px] sm:min-w-[250px] max-w-[267px]">
            <StatCard
              title="Total Users"
              value={
                overviewLoading
                  ? "Loading..."
                  : (overview?.totalUsers?.toLocaleString() ?? "0")
              }
              change="+ 0.03%"
              icon={UsersIcon}
              iconSize={22}
            />
          </div>
          <div className="flex-1 min-w-[220px] sm:min-w-[250px] max-w-[267px]">
            <StatCard
              title="Total Orders"
              value={
                overviewLoading
                  ? "Loading..."
                  : (overview?.totalOrders?.toLocaleString() ?? "0")
              }
              change="+ 0.03%"
              icon={OrderIcon}
              iconSize={22}
            />
          </div>
          <div className="flex-1 min-w-[220px] sm:min-w-[250px] max-w-[267px]">
            <StatCard
              title="Total Delivered"
              value={
                overviewLoading
                  ? "Loading..."
                  : (overview?.totalDelivered?.toLocaleString() ?? "0")
              }
              change="+ 0.03%"
              icon={DeliveredIcon}
              iconSize={22}
            />
          </div>
        </div>
      </div>

      <StoresTable totalCount={overview?.totalStores} />
    </div>
  );
}
