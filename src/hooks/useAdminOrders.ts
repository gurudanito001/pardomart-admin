import { useQueries, keepPreviousData } from "@tanstack/react-query";
import { adminApi } from "@/lib/apiClient";
import type { AxiosResponse } from "axios";
import type {
  Order,
  OrderAdminOverviewGet200Response,
  OrderStatus,
} from "../../api-client"; // Import OrderStatus and the correct overview response type

// Define a more accurate PaginatedOrders type based on the API response structure
// This should ideally come from your generated API types if it's correct.
// If not, you might need to adjust your OpenAPI spec or manually define it.
interface PaginatedOrders {
  data: Order[];
  page: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
}

interface UseAdminOrdersProps {
  page?: number;
  pageSize?: number;
  status?: OrderStatus | OrderStatus[] | string; // Allow single status, array of statuses, or string
  search?: string;
  searchBy?: string;
}

export function useAdminOrders({
  page = 1,
  pageSize = 10,
  status,
  search,
  searchBy,
}: UseAdminOrdersProps) {
  const results = useQueries({
    queries: [
      {
        queryKey: ["adminOrders", page, pageSize, status, search, searchBy],
        queryFn: async () => {
          // Map search and searchBy to the correct API parameters
          const orderCodeParam = searchBy === "id" ? search : undefined;
          const customerNameParam =
            searchBy === "customer" ? search : undefined;
          // For 'date' search, assuming it's a single date string for both start and end.
          // If the API expects a date range, more complex parsing would be needed here.
          const createdAtStartParam = searchBy === "date" ? search : undefined;
          const createdAtEndParam = searchBy === "date" ? search : undefined;

          const response = await adminApi.orderAdminAllGet(
            orderCodeParam,
            apiStatus as OrderStatus, // Cast apiStatus to OrderStatus, assuming API handles string or enum or comma-separated string
            customerNameParam,
            createdAtStartParam,
            createdAtEndParam,
            page,
            pageSize, // The API parameter is 'size', but the hook prop is 'pageSize'
          );
          // The generated client's orderAdminAllGet returns AxiosPromise<void> in the context.
          // This is likely incorrect and should return a PaginatedOrders structure.
          // We cast it here assuming the actual response data matches PaginatedOrders.
          return (response as unknown as AxiosResponse<PaginatedOrders>).data;
        },
        placeholderData: keepPreviousData,
      },
      {
        queryKey: ["adminOrdersOverview"],
        queryFn: async () => {
          const response = await adminApi.orderAdminOverviewGet();
          return response.data as OrderAdminOverviewGet200Response;
        },
        staleTime: 60000, // Refetch overview data less frequently
      },
    ],
  });

  const ordersQuery = results[0];
  const overviewQuery = results[1];

  // No need to join with commas as we are now passing single status group alias
  const apiStatus = status as string;

  const orders = ordersQuery.data?.data ?? [];
  const total = ordersQuery.data?.totalCount;
  const totalPages = ordersQuery.data?.totalPages;

  return {
    orders,
    overview: overviewQuery.data,
    loading: ordersQuery.isLoading || overviewQuery.isLoading,
    error: ordersQuery.error || overviewQuery.error,
    total,
    totalPages,
  };
}
