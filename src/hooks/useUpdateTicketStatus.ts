import { useState } from "react";
import { supportApi } from "@/lib/apiClient";
import type { SupportTicket, TicketStatus } from "../../api-client";

interface UseUpdateTicketStatusResult {
  updateStatus: (
    ticketId: string,
    newStatus: TicketStatus,
  ) => Promise<SupportTicket | null>;
  loading: boolean;
  error: Error | null;
  success: boolean;
}

export function useUpdateTicketStatus(): UseUpdateTicketStatusResult {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);

  const updateStatus = async (
    ticketId: string,
    newStatus: TicketStatus,
  ): Promise<SupportTicket | null> => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const response = await supportApi.supportTicketsTicketIdStatusPatch(
        { status: newStatus },
        ticketId,
      );

      if (response.data) {
        setSuccess(true);
        return response.data;
      }
      return null;
    } catch (err) {
      const error =
        err instanceof Error
          ? err
          : new Error("Failed to update ticket status");
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    updateStatus,
    loading,
    error,
    success,
  };
}
