import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { adminApi } from "@/lib/apiClient";
import { DeliveryGuysStatCard } from "@/components/delivery/DeliveryGuysStatCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUsersCount } from "@/hooks/useUsersCount";
import { useUsersByRole } from "@/hooks/useUsersByRole";
import { Role, type User } from "../../api-client";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { DataTableToolbar } from "@/components/ui/data-table-toolbar";

const TotalDeliveryGuysIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="8.24723"
      cy="6.41667"
      rx="3.66667"
      ry="3.66667"
      stroke="#898A8D"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.75 19.25V17.4167C2.75 15.3916 4.39162 13.75 6.41667 13.75H10.0833C12.1084 13.75 13.75 15.3916 13.75 17.4167V19.25"
      stroke="#898A8D"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.6694 2.86816C16.2919 3.28357 17.4266 4.74549 17.4266 6.42025C17.4266 8.09501 16.2919 9.55693 14.6694 9.97233"
      stroke="#898A8D"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.25 19.2502V17.4169C19.2404 15.7527 18.1113 14.3037 16.5 13.8877"
      stroke="#898A8D"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NewDeliveryGuysIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.8125 11V6.1875M15.8125 6.1875V5.5M15.8125 6.1875C15.8125 6.875 18.5625 9.625 18.5625 10.3125M18.5625 10.3125V5.5M18.5625 10.3125V11M3.4375 19.25V18.5625C3.4375 17.1038 4.01696 15.7049 5.04841 14.6734C6.07986 13.642 7.47881 13.0625 8.9375 13.0625H10.3125C11.7712 13.0625 13.1701 13.642 14.2016 14.6734C15.233 15.7049 15.8125 17.1038 15.8125 18.5625V19.25M13.0625 6.875C13.0625 7.78668 12.7003 8.66102 12.0557 9.30568C11.411 9.95034 10.5367 10.3125 9.625 10.3125C8.71332 10.3125 7.83898 9.95034 7.19432 9.30568C6.54966 8.66102 6.1875 7.78668 6.1875 6.875Z"
      stroke="#6A717F"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const TotalDeliveryIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5833 3.66699H6.41659C5.40406 3.66699 4.58325 4.4878 4.58325 5.50033V17.417C4.58325 18.4295 5.40406 19.2503 6.41659 19.2503H15.5833C16.5958 19.2503 17.4166 18.4295 17.4166 17.417V5.50033C17.4166 4.4878 16.5958 3.66699 15.5833 3.66699Z"
      stroke="#6A717F"
      strokeWidth="2"
    />
    <path
      d="M8.25 8.25H13.75M8.25 11.9167H13.75M8.25 15.5833H11.9167"
      stroke="#6A717F"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const TotalReturnsIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1421_2732)">
      <path
        d="M20.1667 15.5837H1.83341C1.5903 15.5837 1.35714 15.6802 1.18523 15.8521C1.01333 16.0241 0.916748 16.2572 0.916748 16.5003C0.916748 16.7434 1.01333 16.9766 1.18523 17.1485C1.35714 17.3204 1.5903 17.417 1.83341 17.417H20.1667C20.4099 17.417 20.643 17.3204 20.8149 17.1485C20.9868 16.9766 21.0834 16.7434 21.0834 16.5003C21.0834 16.2572 20.9868 16.0241 20.8149 15.8521C20.643 15.6802 20.4099 15.5837 20.1667 15.5837ZM20.1667 19.2503H1.83341C1.5903 19.2503 1.35714 19.3469 1.18523 19.5188C1.01333 19.6907 0.916748 19.9239 0.916748 20.167C0.916748 20.4101 1.01333 20.6433 1.18523 20.8152C1.35714 20.9871 1.5903 21.0837 1.83341 21.0837H20.1667C20.4099 21.0837 20.643 20.9871 20.8149 20.8152C20.9868 20.6433 21.0834 20.4101 21.0834 20.167C21.0834 19.9239 20.9868 19.6907 20.8149 19.5188C20.643 19.3469 20.4099 19.2503 20.1667 19.2503ZM5.50008 6.41699C5.31878 6.41699 5.14155 6.47075 4.99081 6.57148C4.84006 6.6722 4.72257 6.81537 4.65319 6.98287C4.58381 7.15036 4.56566 7.33468 4.60103 7.51249C4.6364 7.69031 4.7237 7.85364 4.8519 7.98184C4.9801 8.11004 5.14343 8.19734 5.32125 8.23271C5.49906 8.26808 5.68338 8.24993 5.85087 8.18055C6.01837 8.11117 6.16154 7.99368 6.26226 7.84293C6.36299 7.69219 6.41675 7.51496 6.41675 7.33366C6.41675 7.09054 6.32017 6.85739 6.14826 6.68548C5.97635 6.51357 5.7432 6.41699 5.50008 6.41699ZM18.3334 0.916992H3.66675C2.9374 0.916992 2.23793 1.20672 1.7222 1.72245C1.20648 2.23817 0.916748 2.93765 0.916748 3.66699V11.0003C0.916748 11.7297 1.20648 12.4291 1.7222 12.9448C2.23793 13.4605 2.9374 13.7503 3.66675 13.7503H18.3334C19.0627 13.7503 19.7622 13.4605 20.2779 12.9448C20.7936 12.4291 21.0834 11.7297 21.0834 11.0003V3.66699C21.0834 2.93765 20.7936 2.23817 20.2779 1.72245C19.7622 1.20672 19.0627 0.916992 18.3334 0.916992Z"
        fill="#6A717F"
      />
    </g>
    <defs>
      <clipPath id="clip0_1421_2732">
        <rect width="22" height="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const MessageIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.44444 7.30577H13.5556M6.44444 10.8613H11.7778M15.3333 2.86133C16.0406 2.86133 16.7189 3.14228 17.219 3.64238C17.719 4.14247 18 4.82075 18 5.52799V12.6391C18 13.3463 17.719 14.0246 17.219 14.5247C16.7189 15.0248 16.0406 15.3058 15.3333 15.3058H10.8889L6.44444 17.9724V15.3058H4.66667C3.95942 15.3058 3.28115 15.0248 2.78105 14.5247C2.28095 14.0246 2 13.3463 2 12.6391V5.52799C2 4.82075 2.28095 4.14247 2.78105 3.64238C3.28115 3.14228 3.95942 2.86133 4.66667 2.86133H15.3333Z"
      stroke="#6A717F"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DeleteIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.2833 7.50043L11.995 15.0004M8.005 15.0004L7.71667 7.50043M16.0233 4.82543C16.3083 4.86877 16.5917 4.9146 16.875 4.96377M16.0233 4.82543L15.1333 16.3946C15.097 16.8656 14.8842 17.3056 14.5375 17.6265C14.1908 17.9474 13.7358 18.1256 13.2633 18.1254H6.73667C6.26425 18.1256 5.80919 17.9474 5.46248 17.6265C5.11578 17.3056 4.90299 16.8656 4.86667 16.3946L3.97667 4.82543M16.0233 4.82543C15.0616 4.68003 14.0948 4.56968 13.125 4.4946M3.97667 4.82543C3.69167 4.86793 3.40833 4.91377 3.125 4.96293M3.97667 4.82543C4.93844 4.68003 5.9052 4.56968 6.875 4.4946M13.125 4.4946V3.73127C13.125 2.74793 12.3667 1.92793 11.3833 1.8971C10.4613 1.86763 9.53865 1.86763 8.61667 1.8971C7.63333 1.92793 6.875 2.74877 6.875 3.73127V4.4946M13.125 4.4946C11.0448 4.33383 8.95523 4.33383 6.875 4.4946"
      stroke="#6A717F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function DeliveryGuys() {
  const { data: totalDeliveryPersons, isLoading: loadingDeliveryPersons } =
    useUsersCount(Role.DeliveryPerson);
  const totalDeliveryPersonsDisplay = loadingDeliveryPersons
    ? "..."
    : (totalDeliveryPersons ?? 0).toLocaleString();
  const [searchValue, setSearchValue] = useState("");
  const { users, isLoading } = useUsersByRole(
    Role.DeliveryPerson,
    1,
    50,
    searchValue,
    "name",
  );

  // Delivery overview (total persons, new persons, total deliveries)
  const DAYS = 7;
  const { data: deliveryOverview, isLoading: loadingDeliveryOverview } =
    useQuery({
      queryKey: ["deliveryOverview", DAYS],
      queryFn: async () =>
        (await adminApi.deliveryPersonsAdminOverviewGet(DAYS)).data,
      staleTime: 30_000,
      refetchOnWindowFocus: false,
    });
  const newDeliveryCount = deliveryOverview?.newDeliveryPersons ?? 0;

  const columns: ColumnDef<User>[] = [
    {
      header: "Delivery Person",
      cell: ({ row }) => {
        const u = row.original;
        const initials = (u.name || u.email || "?")
          .split(" ")
          .map((s) => s[0])
          .join("")
          .slice(0, 2)
          .toUpperCase();
        return (
          <div className="flex items-center gap-1.5">
            <Avatar className="h-6 w-6">
              <AvatarImage src={undefined} alt={u.name ?? ""} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <span className="font-sans text-[15px] font-normal leading-normal text-[#131523]">
              {u.name || "Unknown"}
            </span>
          </div>
        );
      },
      meta: { headerClassName: "min-w-[220px]" },
    },
    {
      accessorKey: "email",
      header: "Email Address",
      meta: { headerClassName: "min-w-[180px]" },
    },
    {
      header: "Status",
      cell: ({ row }) =>
        row.original.active ? (
          <div className="inline-flex h-6 items-center justify-start rounded bg-[#C4F8E2] px-4">
            <span className="text-left font-sans text-sm font-normal leading-5 text-[#06A561]">
              Active
            </span>
          </div>
        ) : (
          <div className="inline-flex h-6 items-center justify-start rounded bg-[#E6E9F4] px-2.5">
            <span className="text-left font-sans text-sm font-normal leading-5 text-[#5A607F]">
              Inactive
            </span>
          </div>
        ),
      meta: { headerClassName: "min-w-[120px]" },
    },
    {
      header: "Joined",
      cell: ({ row }) =>
        row.original.createdAt
          ? new Date(row.original.createdAt).toLocaleDateString()
          : "",
      meta: { headerClassName: "min-w-[140px]" },
    },
    {
      header: "Action",
      cell: () => (
        <div className="flex items-center gap-2">
          <button className="transition-opacity hover:opacity-70">
            <MessageIcon />
          </button>
          <button className="transition-opacity hover:opacity-70">
            <DeleteIcon />
          </button>
        </div>
      ),
      meta: { headerClassName: "min-w-[120px]" },
    },
  ];

  const filtered = users ?? [];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DeliveryGuysStatCard
          icon={<TotalDeliveryGuysIcon />}
          title="Total Delivery guys"
          value={totalDeliveryPersonsDisplay}
        />
        <DeliveryGuysStatCard
          icon={<NewDeliveryGuysIcon />}
          title="New Delivery guys"
          value={
            loadingDeliveryOverview || loadingDeliveryPersons
              ? "..."
              : newDeliveryCount.toLocaleString()
          }
        />
        <DeliveryGuysStatCard
          icon={<TotalDeliveryIcon />}
          title="Total Deliveries"
          value={
            loadingDeliveryOverview
              ? "..."
              : (deliveryOverview?.totalDeliveries ?? 0).toLocaleString()
          }
        />
      </div>

      <div className="p-0">
        <div className="space-y-4">
          <DataTable
            columns={columns}
            data={filtered}
            loading={isLoading}
            enableRowSelection
            toolbar={
              <DataTableToolbar
                tabs={[
                  {
                    id: "all",
                    label: "All Delivery guys",
                    count: loadingDeliveryPersons
                      ? undefined
                      : (totalDeliveryPersons ?? 0),
                  },
                ]}
                activeTab={"all"}
                searchColumn={"name"}
                onSearchColumnChange={() => {}}
                searchValue={searchValue}
                onSearchValueChange={setSearchValue}
                onExport={() => {}}
                onFilter={() => {}}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
