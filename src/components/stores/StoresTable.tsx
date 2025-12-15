import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import type { ColumnDef, Row } from "@tanstack/react-table";
import { useVendorUsers } from "@/hooks/useVendorUsers";
import { useVendorStoresCount } from "@/hooks/useVendorStoresCount";
import { cn } from "@/lib/utils";
import { DataTable } from "@/components/ui/data-table";
import { DataTableToolbar } from "../ui/data-table-toolbar";

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

const TrashIcon = () => (
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

interface StoresCountCellProps {
  userId: string;
}

function StoresCountCell({ userId }: StoresCountCellProps) {
  const { storesCount, loading } = useVendorStoresCount(userId);

  return (
    <span className="font-sans text-[15px] font-normal leading-normal text-black">
      {loading ? "..." : storesCount}
    </span>
  );
}

export function StoresTable() {
  const navigate = useNavigate();
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
  const [searchColumn, setSearchColumn] = useState("name"); // Default search column
  const [searchValue, setSearchValue] = useState("");
  const pageSize = 10;

  const { vendors, loading, error, total, totalPages } = useVendorUsers({
    page: pagination.pageIndex + 1,
    size: pagination.pageSize,
  });

  const columns = useMemo<ColumnDef<any, unknown>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Store Name",
        cell: ({ row }) => (
          <span className="font-sans text-[15px] font-normal leading-normal text-[#131523] truncate">
            {row.original.name || "N/A"}
          </span>
        ),
      },
      {
        id: "storesCount",
        header: "Stores",
        cell: ({ row }) => (
          <StoresCountCell userId={row.original.id} />
        ),
      },
      {
        accessorKey: "email",
        header: "Email Address",
        cell: ({ row }) => (
          <span className="truncate">{row.original.email || "N/A"}</span>
        ),
      },
      {
        accessorKey: "mobileNumber",
        header: "Phone Number",
        cell: ({ row }) => (
          <span className="truncate">{row.original.mobileNumber || "N/A"}</span>
        ),
      },
      {
        accessorKey: "createdAt",
        header: "Date Created",
        cell: ({ row }) => (
          <span>
            {row.original.createdAt
              ? new Date(row.original.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : "N/A"}
          </span>
        ),
      },
      {
        accessorKey: "active",
        header: "Status",
        cell: ({ row }) => (
          <div className="flex items-center gap-2.5">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="4"
                cy="4"
                r="4"
                fill={row.original.active ? "#21C45D" : "#CCCCCC"}
              />
            </svg>
            <span
              className={cn(
                "font-sans text-[15px] font-normal leading-normal",
                row.original.active ? "text-[#21C45D]" : "text-[#999999]",
              )}
            >
              {row.original.active ? "Active" : "Inactive"}
            </span>
          </div>
        ),
      },
      {
        id: "actions",
        header: "Action",
        cell: () => (
          <div className="flex items-center gap-2">
            <button className="text-[#6A717F] hover:text-[#023337]">
              <MessageIcon />
            </button>
            <button className="text-[#6A717F] hover:text-red-600">
              <TrashIcon />
            </button>
          </div>
        ),
      },
    ],
    [],
  );

  const toolbar = (
    <DataTableToolbar
      tabs={[{ id: "all", label: "All Stores", count: total }]}
      activeTab="all"
      onTabChange={(id) => console.log("Tab changed to:", id)} // Implement actual tab change logic
      searchOptions={[
        { value: "name", label: "Search by Store Name" },
        { value: "email", label: "Search by Email" },
        { value: "mobileNumber", label: "Search by Phone" },
      ]}
      searchColumn={searchColumn}
      onSearchColumnChange={setSearchColumn}
      searchValue={searchValue}
      onSearchValueChange={setSearchValue}
      onExport={() => console.log("Export stores")} // Implement actual export logic
      onFilter={() => console.log("Filter stores")} // Implement actual filter logic
      responsiveActions
    />
  );

  if (error) {
    return (
      <div className="rounded-2xl bg-white p-7 sm:p-11">
        <div className="text-center text-red-500">
          Error loading stores: {error.message}
        </div>
      </div>
    );
  }

  return (
    <DataTable
      columns={columns}
      data={vendors}
      loading={loading}
      wrapperClassName="bg-white" // Apply bg-white wrapper
      tableClassName="min-w-max" // Prevent shrink; overflow container handles scroll
      toolbar={toolbar}
      enableRowSelection
      onRowClick={(row: Row<any>) => navigate(`/store-management/substore/${row.original.id}`)}
      manualPagination
      pageCount={totalPages}
      pageIndex={pagination.pageIndex}
      pageSize={pagination.pageSize}
      onPaginationChange={setPagination}
      getRowId={(row: any) => row.id}
      rowClassName={() => "cursor-pointer"}
    />
  );
}
