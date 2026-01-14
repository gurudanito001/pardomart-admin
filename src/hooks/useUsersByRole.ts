import { useQuery } from "@tanstack/react-query";
import { userApi } from "@/lib/apiClient";
import type { Role, PaginatedUsers, User } from "../../api-client";

export type UseUsersByRoleResult = {
  users: User[];
  totalCount: number;
  totalPages: number;
  page: number;
  size: number;
  isLoading: boolean;
  refetch: () => void;
};

export function useUsersByRole(
  role: Role,
  page = 1,
  size = 20,
  search?: string,
  searchBy?: string,
  createdAtStart?: string,
  createdAtEnd?: string,
): UseUsersByRoleResult {
  const query = useQuery({
    queryKey: [
      "usersByRole",
      role,
      page,
      size,
      search,
      searchBy,
      createdAtStart,
      createdAtEnd,
    ],
    queryFn: async () => {
      // The generated API uses the signature: usersGet(mobileVerified?, active?, role?, language?, page?, size?, search?)
      // We only need to pass role, page, size and search (single search param)
      const res = await userApi.usersGet(
        undefined, // mobileVerified
        undefined, // active
        role,
        undefined, // language
        page,
        size,
        search,
      );
      return res.data as PaginatedUsers;
    },
    staleTime: 30_000,
    refetchOnWindowFocus: false,
  });

  const paged = query.data;
  return {
    users: paged?.data ?? [],
    totalCount: paged?.totalCount ?? 0,
    totalPages: paged?.totalPages ?? 1,
    page,
    size,
    isLoading: query.isLoading || query.isFetching,
    refetch: () => query.refetch(),
  };
}
