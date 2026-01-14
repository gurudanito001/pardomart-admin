import { useQuery } from "@tanstack/react-query";
import { userApi } from "@/lib/apiClient";
import type { Role } from "../../api-client";

export function useUsersCount(
  role?: Role,
  createdAtStart?: string,
  createdAtEnd?: string,
  days?: number,
) {
  return useQuery({
    queryKey: ["usersTotal", role, createdAtStart, createdAtEnd, days],
    queryFn: async () => {
      // If days is provided, some endpoints support a 'days' param — fall back to createdAtStart/end otherwise
      if (typeof days === "number") {
        // The generated client maps days as the first param for some overview endpoints; for users we use usersGet with createdAt range
      }
      // userApi.usersGet signature: usersGet(mobileVerified?, active?, role?, language?, page?, size?, search?)
      const res = await userApi.usersGet(
        undefined, // mobileVerified
        undefined, // active
        role,
        undefined, // language
        1, // page
        1, // size
        undefined, // search
      );
      const total = res.data.totalCount ?? 0;
      return total;
    },
    staleTime: 60_000,
    refetchOnWindowFocus: false,
  });
}
