import { useState, useEffect } from "react";
import { supportApi } from "@/lib/apiClient";
import type { SupportAdminOverviewGet200Response } from "../../api-client";

interface UseAdminSupportOverviewResult {
  overview: SupportAdminOverviewGet200Response | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function useAdminSupportOverview(): UseAdminSupportOverviewResult {
  const [overview, setOverview] =
    useState<SupportAdminOverviewGet200Response | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchOverview = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await supportApi.supportAdminOverviewGet();

      if (response?.data) {
        setOverview(response.data);
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err
          : new Error("Failed to fetch support overview"),
      );
      setOverview(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOverview();
  }, []);

  return {
    overview,
    loading,
    error,
    refetch: fetchOverview,
  };
}
