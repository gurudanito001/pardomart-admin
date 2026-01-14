import { useQueries, keepPreviousData } from "@tanstack/react-query";
import { adminApi } from "@/lib/apiClient";
import type { AxiosResponse } from "axios";
import type {
  Transaction,
  TransactionsAdminOverviewGet200Response,
} from "../../api-client";

// Define a more accurate PaginatedTransactions type based on the API response structure
interface PaginatedTransactions {
  data: Transaction[];
  page: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
}

// Mock transaction status type since TransactionStatus is not available in API
type MockTransactionStatus =
  | "pending"
  | "completed"
  | "failed"
  | "cancelled"
  | string;

interface UseAdminTransactionsProps {
  page?: number;
  pageSize?: number;
  status?: MockTransactionStatus; // Use mock status type
  search?: string;
  searchBy?: string;
  createdAtStart?: string;
  createdAtEnd?: string;
}

export function useAdminTransactions({
  page = 1,
  pageSize = 10,
  status,
  search,
  searchBy,
  createdAtStart,
  createdAtEnd,
}: UseAdminTransactionsProps) {
  const results = useQueries({
    queries: [
      {
        queryKey: [
          "adminTransactions",
          page,
          pageSize,
          status,
          search,
          searchBy,
          createdAtStart,
          createdAtEnd,
        ],
        queryFn: async () => {
          // Map search and searchBy to the correct API parameters if needed.
          // For now, transactionsAdminAllGet doesn't seem to have searchBy/search params directly.
          // If search is needed, the API would need to be updated or client-side filtering would apply.
          const response = await adminApi.transactionsAdminAllGet(
            undefined, // orderCode
            undefined, // customerName
            status, // Pass the single TransactionStatus
            createdAtStart,
            createdAtEnd,
            page,
            pageSize,
          );
          // The generated client's transactionsAdminAllGet returns AxiosPromise<void>
          // We cast it here assuming the actual response data matches PaginatedTransactions.
          return (response as unknown as AxiosResponse<PaginatedTransactions>)
            .data;
        },
        placeholderData: keepPreviousData,
      },
      {
        queryKey: ["adminTransactionsOverview"],
        queryFn: async () => {
          const response = await adminApi.transactionsAdminOverviewGet();
          return response.data as TransactionsAdminOverviewGet200Response;
        },
        staleTime: 60000, // Refetch overview data less frequently
      },
    ],
  });

  const transactionsQuery = results[0];
  const overviewQuery = results[1];

  // The overview object from the API is directly available on overviewQuery.data
  const overview = overviewQuery.data;
  const transactions = transactionsQuery.data?.data ?? [];
  const total = transactionsQuery.data?.totalCount;
  const totalPages = transactionsQuery.data?.totalPages;

  return {
    transactions,
    overview: overviewQuery.data,
    loading: transactionsQuery.isLoading || overviewQuery.isLoading,
    error: transactionsQuery.error || overviewQuery.error,
    total,
    totalPages,
  };
}
