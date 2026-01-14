import { useState, useEffect } from "react";
import { customersApi } from "@/lib/apiClient";

export interface AdminCustomer {
  id?: string;
  name?: string | null;
  email?: string | null;
  mobileNumber?: string;
  profileImage?: string;
  address?: string;
  active?: boolean;
  createdAt?: string;
  updatedAt?: string;
  mobileVerified?: boolean;
  language?: string | null;
  notification?: { [key: string]: any } | null;
  referralCode?: string | null;
  stripeCustomerId?: string | null;
  vendorId?: string | null;
  totalOrders?: number;
  completedOrders?: number;
  cancelledOrders?: number;
  [key: string]: any;
}

interface UseAdminCustomerResult {
  customer: AdminCustomer | null;
  loading: boolean;
  error: Error | null;
}

interface UseAdminCustomerOptions {
  customerId: string;
}

export function useAdminCustomer(
  options: UseAdminCustomerOptions,
): UseAdminCustomerResult {
  const [customer, setCustomer] = useState<AdminCustomer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const { customerId } = options;

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        setLoading(true);
        setError(null);

        const response =
          await customersApi.customersAdminCustomerIdGet(customerId);
        const data = (response as any)?.data as AdminCustomer | undefined;
        if (data) {
          setCustomer(data);
        }
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch customer"),
        );
        setCustomer(null);
      } finally {
        setLoading(false);
      }
    };

    if (customerId) {
      fetchCustomer();
    }
  }, [customerId]);

  return {
    customer,
    loading,
    error,
  };
}
