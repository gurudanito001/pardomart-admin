import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { NotificationApi } from "../../api-client/endpoints/notification-api";
import { axiosInstance } from "@/lib/apiClient";

type NotificationAny = any;

export function useNotifications(page = 1, size = 20) {
  const api = new NotificationApi(undefined, undefined, axiosInstance);
  const queryClient = useQueryClient();

  const notificationsQuery = useQuery<NotificationAny[]>({
    queryKey: ["notifications", page, size],
    queryFn: async () => {
      const res = await api.notificationsGet(page, size);
      return (res.data as any)?.data ?? [];
    },
    refetchInterval: 60_000,
    refetchOnWindowFocus: false,
  });

  const unreadQuery = useQuery<number>({
    queryKey: ["notifications", "unreadCount"],
    queryFn: async () => {
      const res = await api.notificationsUnreadCountGet();
      return (res.data as any)?.count ?? 0;
    },
    refetchInterval: 60_000,
    refetchOnWindowFocus: false,
  });

  const markAsReadMutation = useMutation({
    mutationFn: async (notificationId: string) => {
      await api.notificationsNotificationIdReadPatch(notificationId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      queryClient.invalidateQueries({
        queryKey: ["notifications", "unreadCount"],
      });
    },
  });

  const markAllAsReadMutation = useMutation({
    mutationFn: async () => {
      await api.notificationsReadAllPatch();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      queryClient.invalidateQueries({
        queryKey: ["notifications", "unreadCount"],
      });
    },
  });

  return {
    notifications: notificationsQuery.data ?? [],
    unreadCount: unreadQuery.data ?? 0,
    isLoading: notificationsQuery.isLoading || unreadQuery.isLoading,
    refetch: () => {
      notificationsQuery.refetch();
      unreadQuery.refetch();
    },
    markAsRead: (id: string) => markAsReadMutation.mutate(id),
    markAllAsRead: () => markAllAsReadMutation.mutate(),
  };
}
