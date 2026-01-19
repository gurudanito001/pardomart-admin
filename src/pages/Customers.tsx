import { useState } from "react";
import { Link } from "react-router-dom";
import { CustomerStatCard } from "@/components/customers/CustomerStatCard";
import { useAdminCustomersOverview } from "@/hooks/useAdminCustomersOverview";
import { useUsersByRole } from "@/hooks/useUsersByRole";
import { userApi } from "@/lib/apiClient";
import { Role, type User } from "../../api-client";
import type { ColumnDef, Row } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { DataTableToolbar } from "@/components/ui/data-table-toolbar";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TotalCustomersIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="8.24711"
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
      d="M14.6696 2.86816C16.292 3.28357 17.4267 4.74549 17.4267 6.42025C17.4267 8.09501 16.292 9.55693 14.6696 9.97233"
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

const NewCustomersIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.8125 11V6.1875M15.8125 6.1875V5.5M15.8125 6.1875C15.8125 6.875 18.5625 9.625 18.5625 10.3125M18.5625 10.3125V5.5M18.5625 10.3125V11M3.4375 19.25V18.5625C3.4375 17.1038 4.01696 15.7049 5.04841 14.6734C6.07986 13.642 7.47881 13.0625 8.9375 13.0625H10.3125C11.7712 13.0625 13.1701 13.642 14.2016 14.6734C15.233 15.7049 15.8125 17.1038 15.8125 18.5625V19.25M13.0625 6.875C13.0625 7.78668 12.7003 8.66102 12.0557 9.30568C11.411 9.95034 10.5367 10.3125 9.625 10.3125C8.71332 10.3125 7.83898 9.95034 7.19432 9.30568C6.54966 8.66102 6.1875 7.78668 6.1875 6.875C6.1875 5.96332 6.54966 5.08898 7.19432 4.44432C7.83898 3.79966 8.71332 3.4375 9.625 3.4375C10.5367 3.4375 11.411 3.79966 12.0557 4.44432C12.7003 5.08898 13.0625 5.96332 13.0625 6.875Z"
      stroke="#6A717F"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const OrdersIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5833 3.66699H6.41666C5.40414 3.66699 4.58333 4.4878 4.58333 5.50033V17.417C4.58333 18.4295 5.40414 19.2503 6.41666 19.2503H15.5833C16.5958 19.2503 17.4167 18.4295 17.4167 17.417V5.50033C17.4167 4.4878 16.5958 3.66699 15.5833 3.66699Z"
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

const InvoicesIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1399_2327)">
      <path
        d="M20.1667 15.5837H1.83333C1.59022 15.5837 1.35706 15.6802 1.18515 15.8521C1.01324 16.0241 0.916664 16.2572 0.916664 16.5003C0.916664 16.7434 1.01324 16.9766 1.18515 17.1485C1.35706 17.3204 1.59022 17.417 1.83333 17.417H20.1667C20.4098 17.417 20.6429 17.3204 20.8148 17.1485C20.9868 16.9766 21.0833 16.7434 21.0833 16.5003C21.0833 16.2572 20.9868 16.0241 20.8148 15.8521C20.6429 15.6802 20.4098 15.5837 20.1667 15.5837ZM20.1667 19.2503H1.83333C1.59022 19.2503 1.35706 19.3469 1.18515 19.5188C1.01324 19.6907 0.916664 19.9239 0.916664 20.167C0.916664 20.4101 1.01324 20.6433 1.18515 20.8152C1.35706 20.9871 1.59022 21.0837 1.83333 21.0837H20.1667C20.4098 21.0837 20.6429 20.9871 20.8148 20.8152C20.9868 20.6433 21.0833 20.4101 21.0833 20.167C21.0833 19.9239 20.9868 19.6907 20.8148 19.5188C20.6429 19.3469 20.4098 19.2503 20.1667 19.2503ZM5.5 6.41699C5.3187 6.41699 5.14147 6.47075 4.99072 6.57148C4.83998 6.6722 4.72249 6.81537 4.65311 6.98287C4.58373 7.15036 4.56557 7.33468 4.60094 7.51249C4.63631 7.69031 4.72362 7.85364 4.85182 7.98184C4.98001 8.11004 5.14335 8.19734 5.32116 8.23271C5.49898 8.26808 5.68329 8.24993 5.85079 8.18055C6.01829 8.11117 6.16145 7.99368 6.26218 7.84293C6.3629 7.69219 6.41666 7.51496 6.41666 7.33366C6.41666 7.09054 6.32009 6.85739 6.14818 6.68548C5.97627 6.51357 5.74311 6.41699 5.5 6.41699ZM18.3333 0.916992H3.66666C2.93732 0.916992 2.23785 1.20672 1.72212 1.72245C1.2064 2.23817 0.916664 2.93765 0.916664 3.66699V11.0003C0.916664 11.7297 1.2064 12.4291 1.72212 12.9449C2.23785 13.4606 2.93732 13.7503 3.66666 13.7503H18.3333C19.0627 13.7503 19.7621 13.4606 20.2779 12.9449C20.7936 12.4291 21.0833 11.7297 21.0833 11.0003V3.66699C21.0833 2.93765 20.7936 2.23817 20.2779 1.72245C19.7621 1.20672 19.0627 0.916992 18.3333 0.916992ZM19.25 11.0003C19.25 11.2434 19.1534 11.4766 18.9815 11.6485C18.8096 11.8204 18.5764 11.917 18.3333 11.917H3.66666C3.42355 11.917 3.19039 11.8204 3.01848 11.6485C2.84657 11.4766 2.75 11.2434 2.75 11.0003V3.66699C2.75 3.42388 2.84657 3.19072 3.01848 3.01881C3.19039 2.8469 3.42355 2.75033 3.66666 2.75033H18.3333C18.5764 2.75033 18.8096 2.8469 18.9815 3.01881C19.1534 3.19072 19.25 3.42388 19.25 3.66699V11.0003ZM11 4.58366C10.4561 4.58366 9.92441 4.74494 9.47218 5.04712C9.01994 5.34929 8.66747 5.77878 8.45933 6.28128C8.25119 6.78378 8.19673 7.33671 8.30284 7.87016C8.40895 8.4036 8.67086 8.89361 9.05545 9.2782C9.44005 9.6628 9.93005 9.92471 10.4635 10.0308C10.9969 10.1369 11.5499 10.0825 12.0524 9.87433C12.5549 9.66619 12.9844 9.31371 13.2865 8.86148C13.5887 8.40924 13.75 7.87756 13.75 7.33366C13.75 6.60431 13.4603 5.90484 12.9445 5.38912C12.4288 4.87339 11.7293 4.58366 11 4.58366ZM11 8.25033C10.8187 8.25033 10.6415 8.19656 10.4907 8.09584C10.34 7.99511 10.2225 7.85195 10.1531 7.68445C10.0837 7.51695 10.0656 7.33264 10.1009 7.15483C10.1363 6.97701 10.2236 6.81368 10.3518 6.68548C10.48 6.55728 10.6433 6.46997 10.8212 6.43461C10.999 6.39924 11.1833 6.41739 11.3508 6.48677C11.5183 6.55615 11.6615 6.67364 11.7622 6.82439C11.8629 6.97513 11.9167 7.15236 11.9167 7.33366C11.9167 7.57677 11.8201 7.80993 11.6482 7.98184C11.4763 8.15375 11.2431 8.25033 11 8.25033ZM16.5 6.41699C16.3187 6.41699 16.1415 6.47075 15.9907 6.57148C15.84 6.6722 15.7225 6.81537 15.6531 6.98287C15.5837 7.15036 15.5656 7.33468 15.6009 7.51249C15.6363 7.69031 15.7236 7.85364 15.8518 7.98184C15.98 8.11004 16.1433 8.19734 16.3212 8.23271C16.499 8.26808 16.6833 8.24993 16.8508 8.18055C17.0183 8.11117 17.1615 7.99368 17.2622 7.84293C17.3629 7.69219 17.4167 7.51496 17.4167 7.33366C17.4167 7.09054 17.3201 6.85739 17.1482 6.68548C16.9763 6.51357 16.7431 6.41699 16.5 6.41699Z"
        fill="#6A717F"
      />
    </g>
    <defs>
      <clipPath id="clip0_1399_2327">
        <rect width="22" height="22" fill="white" />
      </clipPath>
    </defs>
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
      d="M10 11.6667V2.5M10 11.6667C9.41651 11.6667 8.32628 10.0048 7.91667 9.58333M10 11.6667C10.5835 11.6667 11.6738 10.0048 12.0833 9.58333"
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
      d="M5.83333 17.5V15"
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
      d="M5.83333 7.5V2.5"
      stroke="#06888C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83333 15C5.05676 15 4.66848 15 4.36219 14.8732C3.95381 14.704 3.62935 14.3795 3.46019 13.9712C3.33333 13.6648 3.33333 13.2766 3.33333 12.5C3.33333 11.7234 3.33333 11.3352 3.46019 11.0288C3.62935 10.6205 3.95381 10.296 4.36219 10.1268C4.66848 10 5.05676 10 5.83333 10C6.60989 10 6.99818 10 7.30447 10.1268C7.71285 10.296 8.0373 10.6205 8.20646 11.0288C8.33333 11.3352 8.33333 11.7234 8.33333 12.5C8.33333 13.2766 8.33333 13.6648 8.20646 13.9712C8.0373 14.3795 7.71285 14.704 7.30447 14.8732C6.99818 15 6.60989 15 5.83333 15Z"
      stroke="#06888C"
      strokeWidth="1.5"
    />
    <path
      d="M14.1667 10C13.3901 10 13.0018 10 12.6955 9.87317C12.2872 9.704 11.9627 9.3795 11.7935 8.97117C11.6667 8.66483 11.6667 8.27657 11.6667 7.5C11.6667 6.72343 11.6667 6.33515 11.7935 6.02886C11.9627 5.62048 12.2872 5.29602 12.6955 5.12687C13.0018 5 13.3901 5 14.1667 5C14.9433 5 15.3315 5 15.6378 5.12687C16.0462 5.29602 16.3707 5.62048 16.5398 6.02886C16.6667 6.33515 16.6667 6.72343 16.6667 7.5C16.6667 8.27657 16.6667 8.66483 16.5398 8.97117C16.3707 9.3795 16.0462 9.704 15.6378 9.87317C15.3315 10 14.9433 10 14.1667 10Z"
      stroke="#06888C"
      strokeWidth="1.5"
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

type CustomerStatus = "complete" | "pending" | "cancelled";

interface Customer {
  id: string;
  name: string;
  avatar: string;
  invoiceId: string;
  status: CustomerStatus;
  date: string;
  amount: string;
}

const mockCustomers: Customer[] = [
  {
    id: "1",
    name: "Kelvin B. James",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/b2f8c1a58623c001a7b0fa95ee0aaa1c68997881?width=48",
    invoiceId: "#BB45FRT5",
    status: "complete",
    date: "22nd Aug, 2025",
    amount: "$147.44",
  },
  {
    id: "2",
    name: "Kelvin B. James",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/b2f8c1a58623c001a7b0fa95ee0aaa1c68997881?width=48",
    invoiceId: "#BB45FRT5",
    status: "complete",
    date: "22nd Aug, 2025",
    amount: "$147.44",
  },
  {
    id: "3",
    name: "Kelvin B. James",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/b2f8c1a58623c001a7b0fa95ee0aaa1c68997881?width=48",
    invoiceId: "#BB45FRT5",
    status: "complete",
    date: "22nd Aug, 2025",
    amount: "$147.44",
  },
  {
    id: "4",
    name: "Kelvin B. James",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/b2f8c1a58623c001a7b0fa95ee0aaa1c68997881?width=48",
    invoiceId: "#BB45FRT5",
    status: "pending",
    date: "22nd Aug, 2025",
    amount: "$147.44",
  },
  {
    id: "5",
    name: "Kelvin B. James",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/b2f8c1a58623c001a7b0fa95ee0aaa1c68997881?width=48",
    invoiceId: "#BB45FRT5",
    status: "complete",
    date: "22nd Aug, 2025",
    amount: "$147.44",
  },
  {
    id: "6",
    name: "Kelvin B. James",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/b2f8c1a58623c001a7b0fa95ee0aaa1c68997881?width=48",
    invoiceId: "#BB45FRT5",
    status: "complete",
    date: "22nd Aug, 2025",
    amount: "$147.44",
  },
  {
    id: "7",
    name: "Kelvin B. James",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/b2f8c1a58623c001a7b0fa95ee0aaa1c68997881?width=48",
    invoiceId: "#BB45FRT5",
    status: "pending",
    date: "22nd Aug, 2025",
    amount: "$147.44",
  },
  {
    id: "8",
    name: "Kelvin B. James",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/b2f8c1a58623c001a7b0fa95ee0aaa1c68997881?width=48",
    invoiceId: "#BB45FRT5",
    status: "cancelled",
    date: "22nd Aug, 2025",
    amount: "$147.44",
  },
  {
    id: "9",
    name: "Kelvin B. James",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/b2f8c1a58623c001a7b0fa95ee0aaa1c68997881?width=48",
    invoiceId: "#BB45FRT5",
    status: "complete",
    date: "22nd Aug, 2025",
    amount: "$147.44",
  },
];

export default function Customers() {
  const navigate = useNavigate();
  const { overview, loading: loadingOverview } = useAdminCustomersOverview();
  const [searchValue, setSearchValue] = useState("");
  const { users, isLoading } = useUsersByRole(
    Role.Customer,
    1,
    50,
    searchValue,
    "name",
  );

  const totalCustomers = overview?.totalCustomers;
  const totalCustomersDisplay = loadingOverview
    ? "..."
    : (totalCustomers ?? 0).toLocaleString();
  const newCustomers = overview?.newCustomers ?? 0;
  // Use totalPayments for payments count
  const totalPayments = overview?.totalPayments ?? 0;
  const totalCompletedOrders = overview?.totalCompletedOrders ?? 0;

  const formatDate = (iso?: string) =>
    iso ? new Date(iso).toLocaleDateString() : "";

  const handleExport = async () => {
    try {
      const response = await userApi.usersAdminExportGet({
        responseType: "blob",
      });

      const blob = new Blob([response.data as any], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `customers_${new Date().toISOString().split("T")[0]}.csv`,
      );
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to export customers:", error);
      // Fallback or toast notification could be added here
    }
  };

  const columns: ColumnDef<User>[] = [
    {
      header: "Customer",
      cell: ({ row }) => {
        const u = row.original;
        const initials = (u.name || u.email || "?")
          .split(" ")
          .map((s) => s[0])
          .join("")
          .slice(0, 2)
          .toUpperCase();
        return (
          <Link
            to={`/customers/${u.id ?? ""}`}
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <Avatar className="h-6 w-6">
              <AvatarImage src={undefined} alt={u.name ?? ""} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <span className="font-sans text-[15px] font-normal leading-normal text-[#131523]">
              {u.name || "Unknown"}
            </span>
          </Link>
        );
      },
      meta: { headerClassName: "min-w-[200px]" },
    },
    {
      accessorKey: "email",
      header: "Email",
      meta: { headerClassName: "min-w-[180px]" },
    },
    {
      accessorKey: "mobileNumber",
      header: "Mobile",
      meta: { headerClassName: "min-w-[140px]" },
    },
    {
      header: "Status",
      cell: ({ row }) => (
        <div className="flex items-center justify-start gap-2.5">
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
              fill={row.original.active ? "#21C45D" : "#EF4343"}
            />
          </svg>
          <span
            className="font-sans text-[15px] font-normal leading-normal"
            style={{ color: row.original.active ? "#21C45D" : "#EF4343" }}
          >
            {row.original.active ? "Active" : "Inactive"}
          </span>
        </div>
      ),
      meta: { headerClassName: "min-w-[120px]" },
    },
    {
      header: "Joined",
      cell: ({ row }) => formatDate(row.original.createdAt),
      meta: { headerClassName: "min-w-[140px]" },
    },
    {
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
      meta: { headerClassName: "min-w-[120px]" },
    },
  ];

  const filtered = users ?? [];
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);

  const toggleCustomerSelection = (customerId: string) => {
    setSelectedCustomers((prev) =>
      prev.includes(customerId)
        ? prev.filter((id) => id !== customerId)
        : [...prev, customerId],
    );
  };

  const toggleAllCustomers = () => {
    if (selectedCustomers.length === mockCustomers.length) {
      setSelectedCustomers([]);
    } else {
      setSelectedCustomers(mockCustomers.map((customer) => customer.id));
    }
  };

  const getStatusDisplay = (status: CustomerStatus) => {
    switch (status) {
      case "complete":
        return (
          <div className="flex items-center justify-center gap-2.5">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#21C45D" />
            </svg>
            <span className="font-sans text-[15px] font-normal leading-normal text-[#21C45D]">
              Complete
            </span>
          </div>
        );
      case "pending":
        return (
          <div className="flex items-center justify-center gap-2.5">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#FBBD23" />
            </svg>
            <span className="font-sans text-[15px] font-normal leading-normal text-[#FBBD23]">
              Pending
            </span>
          </div>
        );
      case "cancelled":
        return (
          <div className="flex items-center justify-center gap-2.5">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#EF4343" />
            </svg>
            <span className="font-sans text-[15px] font-normal leading-normal text-[#EF4343]">
              Cancelled
            </span>
          </div>
        );
    }
  };

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CustomerStatCard
          icon={<TotalCustomersIcon />}
          title="Total Customers"
          value={totalCustomersDisplay}
        />
        <CustomerStatCard
          icon={<NewCustomersIcon />}
          title="New Customers (last 7 days)"
          value={loadingOverview ? "..." : (newCustomers ?? 0).toLocaleString()}
        />
        <CustomerStatCard
          icon={<OrdersIcon />}
          title="Number of payments"
          value={
            loadingOverview ? "..." : (totalPayments ?? 0).toLocaleString()
          }
        />
        <CustomerStatCard
          icon={<InvoicesIcon />}
          title="Total Completed Orders"
          value={
            loadingOverview
              ? "..."
              : (totalCompletedOrders ?? 0).toLocaleString()
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
            onRowClick={(row: Row<User>) =>
              navigate(`/customers/${row.original.id}`)
            }
            toolbar={
              <DataTableToolbar
                tabs={[
                  {
                    id: "all",
                    label: "All Customers",
                    count: loadingOverview ? undefined : (totalCustomers ?? 0),
                  },
                ]}
                activeTab={"all"}
                searchColumn={"name"}
                onSearchColumnChange={() => {}}
                searchValue={searchValue}
                onSearchValueChange={setSearchValue}
                onExport={handleExport}
                onFilter={() => {}}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
