import { useState, useMemo } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table"; // Keep this import
import { DataTableToolbar } from "@/components/ui/data-table-toolbar";
import { cn } from "@/lib/utils";
import { TransactionDetailsModal } from "@/components/transactions";
import { useAdminTransactions } from "@/hooks/useAdminTransactions";

const TotalTransactionIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5835 3.66699H6.41683C5.40431 3.66699 4.5835 4.4878 4.5835 5.50033V17.417C4.5835 18.4295 5.40431 19.2503 6.41683 19.2503H15.5835C16.596 19.2503 17.4168 18.4295 17.4168 17.417V5.50033C17.4168 4.4878 16.596 3.66699 15.5835 3.66699Z"
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

const TotalIncomeIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.5"
      d="M8.53764 14.5536L7.87764 15.1952C8.29197 15.9772 8.1618 16.9598 7.48439 17.6162L6.43205 18.6373C6.02101 19.0301 5.47435 19.2493 4.90581 19.2493C4.33726 19.2493 3.7906 19.0301 3.37956 18.6373C3.18073 18.4473 3.02247 18.219 2.91435 17.9661C2.80623 17.7132 2.75049 17.4411 2.75049 17.1661C2.75049 16.8911 2.80623 16.6189 2.91435 16.366C3.02247 16.1132 3.18073 15.8848 3.37956 15.6948L4.03956 15.055C3.83259 14.6636 3.75892 14.2154 3.82972 13.7783C3.90052 13.3412 4.11194 12.9392 4.43189 12.6332L5.48422 11.612C5.89527 11.2192 6.44193 11 7.01047 11C7.57902 11 8.12568 11.2192 8.53672 11.612C8.73555 11.802 8.8938 12.0303 9.00192 12.2832C9.11004 12.5361 9.16579 12.8082 9.16579 13.0832C9.16579 13.3583 9.11004 13.6304 9.00192 13.8833C8.8938 14.1362 8.73555 14.3645 8.53672 14.5545M7.93997 13.9953C8.06286 13.8775 8.16065 13.7361 8.22745 13.5795C8.29426 13.4229 8.32869 13.2544 8.32869 13.0842C8.32869 12.9139 8.29426 12.7454 8.22745 12.5888C8.16065 12.4323 8.06286 12.2908 7.93997 12.173C7.68989 11.9329 7.35666 11.7989 7.01001 11.7989C6.66336 11.7989 6.33014 11.9329 6.08005 12.173L5.02681 13.1942C4.86022 13.3544 4.7407 13.5571 4.68123 13.7805C4.62176 14.0038 4.62461 14.2392 4.68947 14.461C5.0847 14.1862 5.55859 14.0474 6.03962 14.0656C6.52065 14.0838 6.9827 14.258 7.35605 14.5618L7.93997 13.9953ZM5.15697 15.1247C5.38889 15.2961 5.66971 15.3887 5.95814 15.3887C6.24657 15.3887 6.52739 15.2961 6.75931 15.1247C6.52739 14.9532 6.24657 14.8606 5.95814 14.8606C5.66971 14.8606 5.38889 14.9532 5.15697 15.1247Z"
      fill="#6A717F"
    />
    <path
      d="M15.4273 3.89551H6.57234C6.08192 3.89551 5.674 3.89551 5.33942 3.92301C4.99109 3.95051 4.66475 4.01284 4.35584 4.17051C3.88141 4.41221 3.4957 4.79792 3.254 5.27234C3.1715 5.43459 3.1385 5.63534 3.12017 5.75451C3.09538 5.931 3.07704 6.10834 3.06517 6.28617C3.03584 6.68034 3.01659 7.16984 3.00375 7.67034C2.979 8.67134 2.979 9.75117 2.979 10.2645V10.2663C2.979 10.4487 3.05144 10.6235 3.18037 10.7525C3.3093 10.8814 3.48417 10.9538 3.6665 10.9538C3.84884 10.9538 4.02371 10.8814 4.15264 10.7525C4.28157 10.6235 4.354 10.4487 4.354 10.2663C4.354 10.0097 4.354 9.61734 4.35675 9.16634H17.6457V13.5663C17.6457 14.0907 17.6457 14.4436 17.6228 14.714C17.6017 14.978 17.5632 15.1036 17.521 15.1861C17.4111 15.402 17.2355 15.5776 17.0196 15.6875C16.9371 15.7297 16.8115 15.7682 16.5475 15.7893C16.2771 15.8113 15.9242 15.8122 15.3998 15.8122H10.9998C10.8175 15.8122 10.6426 15.8846 10.5137 16.0135C10.3848 16.1425 10.3123 16.3173 10.3123 16.4997C10.3123 16.682 10.3848 16.8569 10.5137 16.9858C10.6426 17.1147 10.8175 17.1872 10.9998 17.1872H15.4273C15.9178 17.1872 16.3257 17.1872 16.6603 17.1597C17.0086 17.1322 17.3349 17.0698 17.6438 16.9122C18.1181 16.6707 18.5038 16.2853 18.7457 15.8113C18.9033 15.5014 18.9657 15.1751 18.9932 14.8268C19.0207 14.4922 19.0207 14.0843 19.0207 13.5948V7.48884C19.0207 6.99842 19.0207 6.59051 18.9932 6.25592C18.9657 5.90759 18.9033 5.58126 18.7457 5.27234C18.5045 4.7982 18.1194 4.41252 17.6457 4.17051C17.3358 4.01284 17.0095 3.95051 16.6612 3.92301C16.3266 3.89551 15.9178 3.89551 15.4273 3.89551Z"
      fill="#6A717F"
    />
  </svg>
);

const TotalExpensesIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.3332 1.83301H9.1665C8.43716 1.83301 7.73769 2.12274 7.22196 2.63846C6.70623 3.15419 6.4165 3.85366 6.4165 4.58301V10.9997C6.4165 11.729 6.70623 12.4285 7.22196 12.9442C7.73769 13.4599 8.43716 13.7497 9.1665 13.7497H18.3332C19.0625 13.7497 19.762 13.4599 20.2777 12.9442C20.7934 12.4285 21.0832 11.729 21.0832 10.9997V4.58301C21.0832 3.85366 20.7934 3.15419 20.2777 2.63846C19.762 2.12274 19.0625 1.83301 18.3332 1.83301ZM19.2498 10.9997C19.2498 11.2428 19.1533 11.4759 18.9814 11.6479C18.8094 11.8198 18.5763 11.9163 18.3332 11.9163H9.1665C8.92339 11.9163 8.69023 11.8198 8.51832 11.6479C8.34641 11.4759 8.24984 11.2428 8.24984 10.9997V4.58301C8.24984 4.33989 8.34641 4.10674 8.51832 3.93483C8.69023 3.76292 8.92339 3.66634 9.1665 3.66634H18.3332C18.5763 3.66634 18.8094 3.76292 18.9814 3.93483C19.1533 4.10674 19.2498 4.33989 19.2498 4.58301V10.9997ZM16.0415 7.33301C15.7023 7.33503 15.3758 7.46236 15.1248 7.69051C14.9277 7.51135 14.6828 7.39329 14.4199 7.3507C14.1569 7.30811 13.8873 7.3428 13.6437 7.45058C13.4001 7.55835 13.193 7.73455 13.0477 7.95778C12.9024 8.181 12.825 8.44164 12.825 8.70801C12.825 8.97438 12.9024 9.23501 13.0477 9.45824C13.193 9.68146 13.4001 9.85767 13.6437 9.96544C13.8873 10.0732 14.1569 10.1079 14.4199 10.0653C14.6828 10.0227 14.9277 9.90467 15.1248 9.72551C15.2904 9.87596 15.4901 9.98375 15.7067 10.0395C15.9234 10.0953 16.1503 10.0974 16.3679 10.0456C16.5856 9.99386 16.7872 9.88976 16.9555 9.74239C17.1238 9.59502 17.2536 9.40882 17.3336 9.19993C17.4137 9.00104 17.4419 8.77999 17.4161 8.56245C17.3902 8.34491 17.3114 8.13575 17.1859 7.95394C17.0604 7.77214 16.8918 7.62337 16.693 7.51737C16.4941 7.41137 16.2707 7.35052 16.0415 7.33301Z"
      fill="#6A717F"
    />
  </svg>
);

const TotalRevenueIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.8335 6.41634H18.3335M14.6668 1.83301L19.2502 6.41634L14.6668 10.9997M20.1668 15.583H3.66683M7.3335 10.9997L2.75016 15.583L7.3335 20.1663"
      stroke="#6A717F"
      strokeWidth="2"
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

const ArrowFallIcon = ({ color = "#01891C" }: { color?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.65373 12.3607C1.45453 12.1695 1.44807 11.8529 1.63931 11.6537L4.99931 8.15373C5.09359 8.05552 5.22385 8 5.36 8C5.49615 8 5.62641 8.05552 5.72069 8.15373L7.76 10.278L10.1766 7.76067L8.45488 6.10777L14 4.5L12.6198 10.1061L10.898 8.4532L8.12069 11.3463C8.02641 11.4445 7.89615 11.5 7.76 11.5C7.62385 11.5 7.49359 11.4445 7.39931 11.3463L5.36 9.22199L2.36069 12.3463C2.16946 12.5455 1.85294 12.5519 1.65373 12.3607Z"
      fill={color}
    />
  </svg>
);

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  period: string;
}

const StatCard = ({
  icon,
  title,
  value,
  change,
  isPositive,
  period,
}: StatCardProps) => (
  <div className="flex flex-col items-start gap-2.5 rounded-2xl bg-white p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.20)]">
    <div className="flex flex-col items-start justify-center gap-4 self-stretch">
      <div className="flex items-center gap-2">
        {icon}
        <div className="font-sans text-sm font-normal leading-5 text-[#6A717F]">
          {title}
        </div>
      </div>
      <div className="flex h-5 items-start justify-between self-stretch">
        <div className="font-sans text-2xl font-bold leading-5 text-black">
          {value}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-start justify-center rounded-xl">
            <div className="self-stretch font-sans text-xs font-normal leading-4 text-black">
              {change}
            </div>
          </div>
          <div className="flex items-center justify-center rounded-lg">
            <ArrowFallIcon color={isPositive ? "#01891C" : "#FF0000"} />
          </div>
        </div>
      </div>
    </div>
    <div className="font-sans text-xs font-normal leading-normal text-[#6A717F]">
      {period}
    </div>
  </div>
);

type TransactionStatus = "complete" | "cancelled" | "pending";

interface TransactionDisplay {
  id: string;
  dateTime: string;
  amount: string;
  method: string;
  status: TransactionStatus;
}

const formatTransactionStatus = (status?: string): TransactionStatus => {
  if (!status) return "pending";
  const statusLower = status.toLowerCase();
  if (statusLower.includes("complete") || statusLower.includes("success"))
    return "complete";
  if (statusLower.includes("cancel") || statusLower.includes("failed"))
    return "cancelled";
  return "pending";
};

const formatAmount = (amount?: number): string => {
  if (!amount) return "$0.00";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

const formatDateTime = (dateTime?: string): string => {
  if (!dateTime) return "N/A";
  try {
    const date = new Date(dateTime);
    const formatter = new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    return formatter.format(date);
  } catch {
    return dateTime;
  }
};

export default function Transactions() {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [searchColumn, setSearchColumn] = useState("id");
  const [searchValue, setSearchValue] = useState("");
  const [activeTab, setActiveTab] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<{
    id: string;
    date: string;
    time: string;
    amount: string;
    method: string;
    status: TransactionStatus;
  } | null>(null);

  const { transactions, overview, loading, error, total, totalPages } =
    useAdminTransactions({
      page: pagination.pageIndex + 1,
      pageSize: pagination.pageSize,
      // status: activeTab !== "all" ? getStatusForApi(activeTab) : undefined, // Temporarily disabled
    });

  const getStatusDisplay = (status: TransactionStatus) => {
    const statusConfig = {
      complete: { color: "#21C45D", label: "Complete" },
      cancelled: { color: "#EF4343", label: "Cancelled" },
      pending: { color: "#FBBD23", label: "Pending" },
    };

    const config = statusConfig[status];
    return (
      <div className="flex items-center justify-start gap-2.5">
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill={config.color} />
        </svg>
        <span
          className={cn("font-sans text-[15px] font-normal leading-normal")}
          style={{ color: config.color }}
        >
          {config.label}
        </span>
      </div>
    );
  };

  const transactionDisplays = useMemo((): TransactionDisplay[] => {
    return transactions.map((tx) => ({
      id: tx.id || "N/A",
      dateTime: formatDateTime(tx.createdAt),
      amount: formatAmount(tx.amount),
      method: tx.source || "Unknown",
      status: formatTransactionStatus(tx.status), // tx.status is already TransactionStatus
    }));
  }, [transactions]);

  // Client-side filtering since API status filter is not ready
  const filteredTransactions = useMemo(() => {
    if (activeTab === "all") {
      return transactionDisplays;
    }
    const statusMap: { [key: string]: TransactionDisplay["status"] } = {
      completed: "complete",
      pending: "pending",
      cancelled: "cancelled",
    };
    const targetStatus = statusMap[activeTab];
    return transactionDisplays.filter((tx) => tx.status === targetStatus);
  }, [transactionDisplays, activeTab]);

  // Client-side counting for tabs
  const statusCounts = useMemo(() => {
    return {
      all: transactionDisplays.length,
      completed: transactionDisplays.filter((tx) => tx.status === "complete")
        .length,
      pending: transactionDisplays.filter((tx) => tx.status === "pending")
        .length,
      cancelled: transactionDisplays.filter((tx) => tx.status === "cancelled")
        .length,
    };
  }, [transactionDisplays]);

  const columns = useMemo<ColumnDef<TransactionDisplay, unknown>[]>(
    () => [
      {
        accessorKey: "id",
        header: "Transaction ID",
        cell: ({ row }) => row.original.id || "N/A",
      },
      {
        accessorKey: "dateTime",
        header: "Date & Time",
        cell: ({ row }) => row.original.dateTime || "N/A",
      },
      {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => row.original.amount || "N/A",
      },
      {
        accessorKey: "method",
        header: "Method",
        cell: ({ row }) => {
          const method = row.original.method;
          return (
            <div className="flex items-center gap-2.5">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8f0fdbc45b316f25f25a06374f9d1b2a49e555b1?width=40"
                alt="Payment method"
                className="h-5 w-5"
              />
              <span className="font-sans text-[15px] font-normal leading-normal text-black">
                {method}
              </span>
            </div>
          );
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => getStatusDisplay(row.original.status), // Use TransactionDisplay status
      },
      {
        id: "actions",
        header: "Action",
        cell: ({ row }) => (
          <button
            onClick={() => handleViewDetails(row.original)}
            className="text-center font-sans text-[15px] font-normal leading-normal text-[#06888C] hover:underline"
          >
            View Details
          </button>
        ),
      },
    ],
    [getStatusDisplay],
  );

  const handleViewDetails = (transaction: TransactionDisplay) => {
    const dateParts = transaction.dateTime.split(" ");
    const date = dateParts.slice(0, 3).join(" ");
    const time = dateParts.slice(3).join(" ");
    setSelectedTransaction({
      id: transaction.id,
      date: date || "N/A",
      time: time || "N/A",
      amount: transaction.amount,
      method: transaction.method,
      status: transaction.status,
    });
    setIsModalOpen(true);
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
    setPagination((prev) => ({ ...prev, pageIndex: 0 }));
  };

  // Helper to format enum values into readable labels
  const formatStatusLabel = (status: string) => {
    return status
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setPagination((prev) => ({ ...prev, pageIndex: 0 }));
  };

  if (error) {
    return (
      <div className="space-y-8">
        <div className="rounded-lg border border-red-200 bg-red-50 p-6">
          <h2 className="font-sans text-lg font-semibold text-red-800">
            Error Loading Transactions
          </h2>
          <p className="mt-2 font-sans text-sm text-red-700">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex flex-nowrap gap-[15px] md:gap-[25px] min-w-max pr-2">
          <div className="flex-1 min-w-[220px] sm:min-w-[250px] max-w-[267px]">
            <StatCard // totalTransactions is a number, no need for toLocaleString() if it's already formatted
              icon={<TotalTransactionIcon />}
              title="Total Transaction"
              value={overview?.totalTransactions.toLocaleString() || "0"}
              change={loading ? "Loading..." : "+ 0.03%"}
              isPositive={true}
              period="Last 30 days"
            />
          </div>
          <div className="flex-1 min-w-[220px] sm:min-w-[250px] max-w-[267px]">
            <StatCard
              icon={<TotalIncomeIcon />}
              title="Total Income" // totalIncome is a number, format to currency
              value={
                overview?.totalIncome !== undefined
                  ? formatAmount(overview.totalIncome).replace("$", "")
                  : "0"
              }
              change={loading ? "Loading..." : "+ 0.03%"}
              isPositive={true}
              period="Last 30 days"
            />
          </div>
          <div className="flex-1 min-w-[220px] sm:min-w-[250px] max-w-[267px]">
            <StatCard
              icon={<TotalExpensesIcon />}
              title="Total Expenses" // totalExpenses is a number, format to currency
              value={
                overview?.totalExpense !== undefined
                  ? formatAmount(overview.totalExpense).replace("$", "")
                  : "0"
              }
              change={loading ? "Loading..." : "+ 0.03%"}
              isPositive={true}
              period="Last 30 days"
            />
          </div>
          <div className="flex-1 min-w-[220px] sm:min-w-[250px] max-w-[267px]">
            <StatCard
              icon={<TotalRevenueIcon />}
              title="Total Revenue" // totalRevenue is a number, format to currency
              value={
                overview?.revenue !== undefined
                  ? formatAmount(overview.revenue).replace("$", "")
                  : "0"
              }
              change={loading ? "Loading..." : "- 0.03%"}
              isPositive={false}
              period="Last 30 days"
            />
          </div>
        </div>
      </div>

      <div className="p-0">
        <div className="space-y-4">
          <DataTable
            columns={columns}
            data={filteredTransactions} // Use client-side filtered data
            loading={loading}
            emptyMessage={
              searchValue
                ? "No transactions found. Try adjusting your search filters."
                : "No transactions to display yet."
            }
            toolbar={
              <DataTableToolbar
                tabs={[
                  {
                    id: "all",
                    label: "All Transactions",
                    count: statusCounts.all,
                  },
                  {
                    id: "completed",
                    label: "Completed",
                    count: statusCounts.completed,
                  },
                  {
                    id: "pending",
                    label: "Pending",
                    count: statusCounts.pending,
                  },
                  {
                    id: "cancelled",
                    label: "Cancelled",
                    count: statusCounts.cancelled,
                  },
                ]}
                activeTab={activeTab}
                onTabChange={handleTabChange}
                searchOptions={[
                  { value: "id", label: "Search by Transaction ID" },
                  { value: "amount", label: "Search by Amount" },
                ]}
                searchColumn={searchColumn}
                onSearchColumnChange={setSearchColumn}
                searchValue={searchValue}
                onSearchValueChange={handleSearch}
                onExport={() => console.log("Exporting transactions...")}
                onFilter={() => console.log("Filtering transactions...")}
                responsiveActions
              />
            }
            enableRowSelection
            manualPagination
            pageCount={totalPages}
            pageIndex={pagination.pageIndex}
            pageSize={pagination.pageSize}
            onPaginationChange={setPagination}
            getRowId={(row: TransactionDisplay) => row.id}
            wrapperClassName="bg-white"
            tableClassName="min-w-max"
          />
        </div>
      </div>

      <TransactionDetailsModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        transaction={selectedTransaction || undefined}
      />
    </div>
  );
}
