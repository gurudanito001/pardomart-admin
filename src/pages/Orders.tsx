import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import type { ColumnDef, Row } from "@tanstack/react-table"; // Keep this import
import { OrderStatCard } from "@/components/orders/OrderStatCard";
import { useAdminOrders } from "@/hooks/useAdminOrders";
import { DataTableToolbar } from "@/components/ui/data-table-toolbar";
import { cn } from "@/lib/utils";
import { DataTable } from "@/components/ui/data-table";
import { OrderStatus } from "../../api-client"; // Import OrderStatus enum
const OrdersIcon = () => (
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
      strokeWidth="1.5"
    />
    <path
      d="M8.25 8.25H13.75M8.25 11.9167H13.75M8.25 15.5833H11.9167"
      stroke="#6A717F"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const ExportIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.2083 7.5C16.9231 7.56133 18.3791 8.84744 18.3322 10.5703C18.3213 10.9711 18.1661 11.4665 17.8555 12.4574C17.1082 14.842 15.8522 16.912 13.0385 17.4087C12.5212 17.5 11.9392 17.5 10.7752 17.5H9.22474C8.06074 17.5 7.47874 17.5 6.96152 17.4087C4.14781 16.912 2.89181 14.842 2.14446 12.4574C1.83392 11.4665 1.67865 10.9711 1.66776 10.5703C1.62092 8.84744 3.07691 7.56133 4.79166 7.5"
      stroke="#06888C"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M9.99999 11.6667V2.5M9.99999 11.6667C9.41649 11.6667 8.32626 10.0048 7.91666 9.58333M9.99999 11.6667C10.5835 11.6667 11.6737 10.0048 12.0833 9.58333"
      stroke="#06888C"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
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

const FilterIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.83334 17.5V15"
      stroke="#06888C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1667 17.5V12.5"
      stroke="#06888C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1667 5V2.5"
      stroke="#06888C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83334 7.5V2.5"
      stroke="#06888C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83334 15C5.05677 15 4.66849 15 4.36219 14.8732C3.95382 14.704 3.62936 14.3795 3.4602 13.9712C3.33334 13.6648 3.33334 13.2766 3.33334 12.5C3.33334 11.7234 3.33334 11.3352 3.4602 11.0288C3.62936 10.6205 3.95382 10.296 4.36219 10.1268C4.66849 10 5.05677 10 5.83334 10C6.6099 10 6.99819 10 7.30448 10.1268C7.71285 10.296 8.03731 10.6205 8.20647 11.0288C8.33334 11.3352 8.33334 11.7234 8.33334 12.5C8.33334 13.2766 8.33334 13.6648 8.20647 13.9712C8.03731 14.3795 7.71285 14.704 7.30448 14.8732C6.99819 15 6.6099 15 5.83334 15Z"
      stroke="#06888C"
      strokeWidth="1.5"
    />
    <path
      d="M14.1667 10C13.3901 10 13.0018 10 12.6955 9.87317C12.2872 9.704 11.9627 9.3795 11.7935 8.97117C11.6667 8.66483 11.6667 8.27657 11.6667 7.5C11.6667 6.72343 11.6667 6.33515 11.7935 6.02886C11.9627 5.62048 12.2872 5.29602 12.6955 5.12687C13.0018 5 13.3901 5 14.1667 5C14.9432 5 15.3315 5 15.6378 5.12687C16.0462 5.29602 16.3707 5.62048 16.5398 6.02886C16.6667 6.33515 16.6667 6.72343 16.6667 7.5C16.6667 8.27657 16.6667 8.66483 16.5398 8.97117C16.3707 9.3795 16.0462 9.704 15.6378 9.87317C15.3315 10 14.9432 10 14.1667 10Z"
      stroke="#06888C"
      strokeWidth="1.5"
    />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.1667 16.375L7 12M7 12L11.1667 7.625M7 12H17"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.8333 16.375L17 12M17 12L12.8333 7.625M17 12H7"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProductsIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1324_2338)">
      <path
        d="M14.4375 0.0214844L22 3.80273V12.2354L20.625 11.5479V5.33887L15.125 8.08887V10.8604L13.75 11.5479V8.08887L8.25 5.33887V7.77734L6.875 7.08984V3.80273L14.4375 0.0214844ZM14.4375 6.89648L16.3389 5.94043L11.3652 3.09375L9.09863 4.23242L14.4375 6.89648ZM17.8213 5.20996L19.7764 4.23242L14.4375 1.55762L12.8369 2.36328L17.8213 5.20996ZM12.375 12.2354L11 12.9229V12.9121L6.875 14.9746V19.8623L11 17.7891V19.3359L6.1875 21.7422L0 18.6377V11.376L6.1875 8.28223L12.375 11.376V12.2354ZM5.5 19.8623V14.9746L1.375 12.9121V17.7891L5.5 19.8623ZM6.1875 13.7822L10.1514 11.8057L6.1875 9.81836L2.22363 11.8057L6.1875 13.7822ZM12.375 13.7715L17.1875 11.3652L22 13.7715V19.4326L17.1875 21.8389L12.375 19.4326V13.7715ZM16.5 19.959V16.6826L13.75 15.3076V18.584L16.5 19.959ZM20.625 18.584V15.3076L17.875 16.6826V19.959L20.625 18.584ZM17.1875 15.4902L19.7764 14.1904L17.1875 12.9014L14.5986 14.1904L17.1875 15.4902Z"
        fill="#6A717F"
      />
    </g>
    <defs>
      <clipPath id="clip0_1324_2338">
        <rect width="22" height="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const InStockIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.25 6.41602V10.9993M2.75 6.41602V15.7303C2.75 16.998 4.53383 17.7515 8.10058 19.2576C9.53333 19.8635 10.2502 20.166 11 20.166V10.4081M13.75 17.416C13.75 17.416 14.5521 17.416 15.3542 19.2493C15.3542 19.2493 17.9025 14.666 20.1667 13.7493"
      stroke="#6A717F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.5 10.9997L7.33333 11.9163M15.5833 3.66634L6.41667 8.24967M7.63217 8.88309L4.95458 7.58784C3.48517 6.87651 2.75 6.52084 2.75 5.95801C2.75 5.39517 3.48517 5.03951 4.95458 4.32817L7.63125 3.03292C9.28583 2.23267 10.1108 1.83301 11 1.83301C11.8892 1.83301 12.7151 2.23267 14.3678 3.03292L17.0454 4.32817C18.5148 5.03951 19.25 5.39517 19.25 5.95801C19.25 6.52084 18.5148 6.87651 17.0454 7.58784L14.3688 8.88309C12.7142 9.68334 11.8892 10.083 11 10.083C10.1108 10.083 9.28492 9.68334 7.63217 8.88309Z"
      stroke="#6A717F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CancelledIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 20.1663C10.2502 20.1663 9.53333 19.8638 8.10058 19.2607C4.53383 17.7583 2.75 17.0075 2.75 15.7434V6.91317M11 20.1663C11.7498 20.1663 12.4667 19.8638 13.8994 19.2607C17.4662 17.7583 19.25 17.0075 19.25 15.7434V6.91317M11 20.1663V11.0272M2.75 6.91317C2.75 7.47509 3.48517 7.82984 4.95458 8.53842L7.63125 9.83092C9.28492 10.6284 10.1108 11.0272 11 11.0272M2.75 6.91317C2.75 6.35217 3.48517 5.99742 4.95458 5.28884L6.41667 4.58301M19.25 6.91317C19.25 7.47509 18.5148 7.82984 17.0454 8.53842L14.3688 9.83092C12.7151 10.6284 11.8892 11.0272 11 11.0272M19.25 6.91317C19.25 6.35217 18.5148 5.99742 17.0454 5.28884L15.5833 4.58301M5.5 11.9402L7.33333 12.8541"
      stroke="#6A717F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.16675 1.83301L11.0001 3.66634M11.0001 3.66634L12.8334 5.49967M11.0001 3.66634L9.16675 5.49967M11.0001 3.66634L12.8334 1.83301"
      stroke="#6A717F"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const searchableColumns = ["id", "customer", "date"] as const;
type SearchableColumn = (typeof searchableColumns)[number];

export default function Orders() {
  const navigate = useNavigate();
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [searchColumn, setSearchColumn] = useState<SearchableColumn>("id");
  const [searchValue, setSearchValue] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  // Define the grouped tabs and their corresponding OrderStatus values
  const ORDER_TAB_GROUPS: {
    [key: string]: { label: string; statuses?: OrderStatus[] };
  } = {
    all: {
      label: "All Orders",
      statuses: undefined, // No specific status filter for 'all'
    },
    pending: {
      label: "Pending",
      statuses: [OrderStatus.Pending, OrderStatus.AcceptedForShopping],
    },
    inProgress: {
      label: "In Progress",
      statuses: [
        OrderStatus.CurrentlyShopping,
        OrderStatus.ReadyForPickup,
        OrderStatus.ReadyForDelivery,
        OrderStatus.AcceptedForDelivery,
        OrderStatus.EnRoute,
      ],
    },
    completed: {
      label: "Completed",
      statuses: [OrderStatus.Delivered, OrderStatus.PickedUpByCustomer],
    },
    cancelled: {
      label: "Cancelled",
      statuses: [OrderStatus.DeclinedByVendor, OrderStatus.CancelledByCustomer],
    },
  };

  const { orders, overview, loading, error, total, totalPages } =
    useAdminOrders({
      page: pagination.pageIndex + 1,
      pageSize: pagination.pageSize,
      status:
        activeTab !== "all" ? ORDER_TAB_GROUPS[activeTab]?.statuses : undefined, // Pass the statuses array or undefined based on activeTab
      search: searchValue || undefined,
      searchBy: searchValue ? searchColumn : undefined,
    });

  const filteredOrders = useMemo(() => {
    // With server-side search, we no longer need to filter on the client.
    // The API returns the filtered and paginated data directly.
    return orders;
  }, [orders, searchColumn, searchValue]);

  // Helper to format enum values into readable labels
  const formatStatusLabel = (status: string) => {
    return status
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };
  const columns = useMemo<ColumnDef<any, unknown>[]>(
    () => [
      {
        accessorKey: "id",
        header: "Order ID",
        cell: ({ row }) => row.original.id || "N/A",
      },
      {
        accessorKey: "customerId",
        header: "Customer",
        cell: ({ row }) => row.original.customerId || "N/A",
      },
      {
        accessorKey: "createdAt",
        header: "Date",
        cell: ({ row }) =>
          row.original.createdAt
            ? new Date(row.original.createdAt).toLocaleDateString()
            : "N/A",
      },
      {
        accessorKey: "paymentStatus",
        header: "Payment Status",
        cell: ({ row }) => {
          const status = row.original.paymentStatus?.toLowerCase() || "pending";
          const colorClass =
            status === "paid"
              ? "bg-[#C4F8E2] text-[#06A561]"
              : "bg-[#E6E9F4] text-[#5A607F]";
          return (
            <div
              className={cn(
                "inline-flex h-6 items-center justify-center rounded px-2 font-sans text-sm font-normal leading-5",
                colorClass,
              )}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </div>
          );
        },
      },
      {
        accessorKey: "status",
        header: "Order Status",
        cell: ({ row }) => {
          const status = row.original.orderStatus?.toLowerCase() || "pending"; // Use orderStatus from API
          const colorClass =
            status === OrderStatus.Delivered.toLowerCase() ||
            status === OrderStatus.PickedUpByCustomer.toLowerCase()
              ? "bg-[#C4F8E2] text-[#06A561]" // Green for completed
              : status === OrderStatus.CancelledByCustomer.toLowerCase() ||
                  status === OrderStatus.DeclinedByVendor.toLowerCase()
                ? "bg-[#FEE2E2] text-[#EF4343]" // Red for cancelled/declined
                : status === OrderStatus.Pending.toLowerCase() ||
                    status === OrderStatus.AcceptedForShopping.toLowerCase() ||
                    status === OrderStatus.CurrentlyShopping.toLowerCase() ||
                    status === OrderStatus.ReadyForPickup.toLowerCase() ||
                    status === OrderStatus.ReadyForDelivery.toLowerCase() ||
                    status === OrderStatus.AcceptedForDelivery.toLowerCase() ||
                    status === OrderStatus.EnRoute.toLowerCase()
                  ? "bg-[rgba(254,189,68,0.20)] text-[#EE9C03]" // Orange for various pending states
                  : "bg-[#E6E9F4] text-[#5A607F]"; // Default/Unknown
          return (
            <div
              className={cn(
                "inline-flex h-6 items-center justify-center rounded px-2 font-sans text-sm font-normal leading-5",
                colorClass,
              )}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </div>
          );
        },
      },
      {
        accessorKey: "totalAmount",
        header: "Total",
        cell: ({ row }) => `$${row.original.totalAmount?.toFixed(2) || "0.00"}`,
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

  const handleSearch = (value: string) => {
    setSearchValue(value);
    setPagination((prev) => ({ ...prev, pageIndex: 0 }));
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setPagination((prev) => ({ ...prev, pageIndex: 0 }));
  };

  if (error) {
    return (
      <div className="space-y-8">
        <div className="rounded-2xl bg-white p-7 sm:p-11">
          <div className="text-center text-red-500">
            Error loading orders: {error.message}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex flex-nowrap gap-[15px] md:gap-[25px] min-w-max pr-2">
          <div className="flex-1 min-w-[220px] sm:min-w-[250px] max-w-[267px]">
            <OrderStatCard
              icon={<OrdersIcon />}
              title="Total Orders"
              value={overview?.totalOrders?.toLocaleString() ?? "0"}
              change={loading ? "Loading..." : "+ 0.03%"}
              isPositive={true}
              period="Last 7 days"
            />
          </div>
          <div className="flex-1 min-w-[220px] sm:min-w-[250px] max-w-[267px]">
            <OrderStatCard
              icon={<ProductsIcon />}
              title="Total Products"
              value={overview?.totalProductsOrdered?.toLocaleString() ?? "0"}
              change={loading ? "Loading..." : "+ 0.03%"}
              isPositive={true}
              period="Last 7 days"
            />
          </div>
          <div className="flex-1 min-w-[220px] sm:min-w-[250px] max-w-[267px]">
            <OrderStatCard
              icon={<InStockIcon />}
              title="In-Stock Products"
              value={overview?.totalInStockProducts?.toLocaleString() ?? "0"}
              change={loading ? "Loading..." : "+ 0.03%"}
              isPositive={true}
              period="Last 7 days"
            />
          </div>
          <div className="flex-1 min-w-[220px] sm:min-w-[250px] max-w-[267px]">
            <OrderStatCard
              icon={<CancelledIcon />}
              title="Cancelled Orders"
              value={overview?.totalCancelledOrders?.toLocaleString() ?? "0"}
              change={loading ? "Loading..." : "- 0.03%"}
              isPositive={false}
              period="Last 7 days"
            />
          </div>
        </div>
      </div>

      {/* Orders Table Section */}
      <div className="p-0">
        <div className="space-y-4">
          <DataTable
            columns={columns}
            data={filteredOrders} // Pass the server-paginated data directly
            toolbar={
              <DataTableToolbar
                tabs={useMemo(() => {
                  return Object.entries(ORDER_TAB_GROUPS).map(
                    ([id, group]) => ({
                      id: id,
                      label: group.label,
                      count: activeTab === id ? total : undefined,
                    }),
                  );
                }, [activeTab, total])}
                activeTab={activeTab}
                onTabChange={handleTabChange}
                searchOptions={[
                  { value: "id", label: "Search by Order ID" },
                  { value: "customer", label: "Search by Customer" },
                  { value: "date", label: "Search by Date" },
                ]}
                searchColumn={searchColumn}
                onSearchColumnChange={(value) =>
                  setSearchColumn(value as SearchableColumn)
                }
                searchValue={searchValue}
                onSearchValueChange={handleSearch}
                onExport={() => console.log("Exporting orders...")}
                onFilter={() => console.log("Filtering orders...")}
                responsiveActions
              />
            }
            loading={loading}
            wrapperClassName="bg-white"
            tableClassName="min-w-max"
            enableRowSelection
            onRowClick={(row: Row<any>) =>
              navigate(`/orders/${row.original.id}`)
            }
            manualPagination
            pageCount={totalPages ?? 1} // Ensure pageCount is always a number and at least 1
            pageIndex={pagination.pageIndex}
            pageSize={pagination.pageSize}
            onPaginationChange={setPagination}
            getRowId={(row: any) => row.id}
            rowClassName={() => "cursor-pointer"}
          />
        </div>
      </div>
    </div>
  );
}
