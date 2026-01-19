import { useState, useEffect } from "react";
import { userApi } from "@/lib/apiClient";
import { Role } from "../../api-client";
import type { PaginatedUsers, User } from "../../api-client";

interface UseVendorUsersOptions {
  page?: number;
  size?: number;
  name?: string;
  search?: string;
}

interface UseVendorUsersResult {
  vendors: User[];
  loading: boolean;
  error: Error | null;
  total: number;
  totalPages: number;
  pageSize: number;
}

export function useVendorUsers(
  options: UseVendorUsersOptions = {},
): UseVendorUsersResult {
  const [vendors, setVendors] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [pagination, setPagination] = useState({
    total: 0,
    totalPages: 0,
    pageSize: 10,
  });

  const { page = 1, size = 10, search } = options;

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await userApi.usersGet(
          undefined, // mobileVerified
          undefined, // active
          Role.Vendor, // role filter for vendors
          undefined, // language
          page, // page
          size, // size
          search || undefined, // search
        );

        if (response.data) {
          setVendors(response.data.data || []);
          setPagination({
            total: response.data.totalCount || 0,
            totalPages: response.data.totalPages || 0,
            pageSize: response.data.pageSize || size,
          });
        }
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch vendors"),
        );
        setVendors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, [page, size, search]);

  return {
    vendors,
    loading,
    error,
    total: pagination.total,
    totalPages: pagination.totalPages,
    pageSize: pagination.pageSize,
  };
}
