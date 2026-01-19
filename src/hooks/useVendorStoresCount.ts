import { useState, useEffect } from "react";
import { vendorApi } from "@/lib/apiClient";

interface UseVendorStoresCountResult {
  storesCount: number;
  loading: boolean;
  error: Error | null;
}

export function useVendorStoresCount(
  userId: string,
): UseVendorStoresCountResult {
  const [storesCount, setStoresCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchStoresCount = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await vendorApi.vendorsGet(
          undefined, // name
          undefined, // latitude
          undefined, // longitude
          userId, // userId - filter by vendor owner
          undefined, // isVerified
          undefined, // isPublished
          undefined, // createdAtStart
          undefined, // createdAtEnd
          1, // page
          1, // size - we only need the totalCount
        );

        if (response.data) {
          setStoresCount(response.data.totalCount || 0);
        }
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("Failed to fetch stores count"),
        );
        setStoresCount(0);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchStoresCount();
    }
  }, [userId]);

  return {
    storesCount,
    loading,
    error,
  };
}
