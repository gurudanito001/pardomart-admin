import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Bell, ChevronDown, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetOverlay,
  SheetPortal,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NotificationApi } from "../../api-client/endpoints/notification-api";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useNotifications } from "@/hooks/useNotifications";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// Assuming you have an Axios instance configured for your API
import { axiosInstance } from "@/lib/apiClient"; // Adjust path as needed
import { Notification, PaginatedNotifications } from "../../api-client/models";

interface LayoutProps {
  children: ReactNode;
}

const getPageTitle = (pathname: string): string => {
  const titles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/store-management": "Store Management",
    "/store-management/substore": "Store Management",
    "/orders": "Order Management",
    "/transactions": "Transaction",
    "/invoices": "Invoices",
    "/marketing": "Email Marketing",
    "/profile": "Profile",
    "/customers": "Customers",
    "/delivery": "Delivery Guys",
    "/settings": "Settings",
    "/support": "Support",
    "/messages": "Messages",
    "/help": "Help Center",
    "/privacy": "Privacy Policy",
  };

  const mainPath = "/" + pathname.split("/")[1];
  return titles[pathname] || titles[mainPath] || "Dashboard";
};

const HomeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.50008 17.4167H8.25008V11.9167H13.7501V17.4167H16.5001V9.16667L11.0001 5.04167L5.50008 9.16667V17.4167ZM3.66675 19.25V8.25L11.0001 2.75L18.3334 8.25V19.25H11.9167V13.75H10.0834V19.25H3.66675Z"
      fill="currentColor"
    />
  </svg>
);

const StoreIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.58335 3.66699H17.4167C17.6764 3.66699 17.8943 3.75499 18.0703 3.93099C18.2463 4.10699 18.334 4.32455 18.3333 4.58366C18.3327 4.84277 18.2447 5.06063 18.0693 5.23724C17.894 5.41385 17.6764 5.50155 17.4167 5.50033H4.58335C4.32363 5.50033 4.10607 5.41233 3.93068 5.23633C3.75529 5.06033 3.66729 4.84277 3.66668 4.58366C3.66607 4.32455 3.75407 4.10699 3.93068 3.93099C4.10729 3.75499 4.32485 3.66699 4.58335 3.66699ZM4.58335 18.3337C4.32363 18.3337 4.10607 18.2457 3.93068 18.0697C3.75529 17.8937 3.66729 17.6761 3.66668 17.417V12.8337H3.50627C3.21599 12.8337 2.97918 12.7227 2.79585 12.5009C2.61252 12.2791 2.55141 12.0233 2.61252 11.7337L3.52918 7.15033C3.57502 6.93644 3.68196 6.76074 3.85002 6.62324C4.01807 6.48574 4.20904 6.41699 4.42293 6.41699H17.5771C17.791 6.41699 17.982 6.48574 18.15 6.62324C18.3181 6.76074 18.425 6.93644 18.4708 7.15033L19.3875 11.7337C19.4486 12.0239 19.3875 12.2797 19.2042 12.5009C19.0208 12.7221 18.784 12.833 18.4938 12.8337H18.3333V17.417C18.3333 17.6767 18.2453 17.8946 18.0693 18.0706C17.8933 18.2466 17.6758 18.3343 17.4167 18.3337C17.1576 18.333 16.94 18.245 16.764 18.0697C16.588 17.8943 16.5 17.6767 16.5 17.417V12.8337H12.8333V17.417C12.8333 17.6767 12.7453 17.8946 12.5693 18.0706C12.3933 18.2466 12.1758 18.3343 11.9167 18.3337H4.58335ZM5.50002 16.5003H11V12.8337H5.50002V16.5003ZM4.62918 11.0003H17.3708L16.8208 8.25033H5.17918L4.62918 11.0003Z"
      fill="currentColor"
    />
  </svg>
);

const CartIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1428_4153)">
      <path
        d="M6.41943 17.3242C6.97671 17.3242 7.42822 17.7757 7.42822 18.333C7.42822 18.8903 6.97672 19.3418 6.41943 19.3418C5.86753 19.3418 5.42041 18.8957 5.42041 18.333C5.42041 17.7703 5.86753 17.3242 6.41943 17.3242ZM15.5864 17.3242C16.1436 17.3244 16.5942 17.7758 16.5942 18.333C16.5942 18.8902 16.1436 19.3416 15.5864 19.3418C15.0345 19.3418 14.5874 18.8957 14.5874 18.333C14.5874 17.7703 15.0345 17.3242 15.5864 17.3242ZM3.39111 2.6582L4.0376 4.02051L4.26123 4.49121H18.3364C18.3606 4.4913 18.3838 4.50144 18.4009 4.51855C18.418 4.53573 18.4282 4.55877 18.4282 4.58301C18.4282 4.60062 18.4238 4.61049 18.4224 4.61328H18.4214L18.4155 4.625L15.1411 10.5684C14.9638 10.8843 14.632 11.0917 14.2573 11.0918H6.93994L6.70459 11.5195L5.88428 13.0137C5.8155 13.138 5.77715 13.2671 5.76221 13.3926L5.75439 13.5205L5.76025 13.6289C5.8142 14.1616 6.26172 14.5742 6.80908 14.5742H16.5942V14.7578H6.41943C5.86226 14.7578 5.41082 14.3071 5.41064 13.75C5.41064 13.578 5.45408 13.4159 5.53369 13.2637L6.771 11.0176L6.97412 10.6475L6.79346 10.2656L3.49854 3.31348L3.2749 2.8418H1.74463V2.6582H3.39111Z"
        stroke="currentColor"
        strokeWidth="1.65"
      />
    </g>
    <defs>
      <clipPath id="clip0_1428_4153">
        <rect width="22" height="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const CardIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.6687 4.40039H4.6062C3.27727 4.40039 2.19995 5.47771 2.19995 6.80664V15.7441C2.19995 17.0731 3.27727 18.1504 4.6062 18.1504H17.6687C18.9976 18.1504 20.075 17.0731 20.075 15.7441V6.80664C20.075 5.47771 18.9976 4.40039 17.6687 4.40039Z"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.19995 8.7998H20.075M5.63745 13.4404H7.69995V14.2998H5.63745V13.4404Z"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinejoin="round"
    />
  </svg>
);

const InvoiceIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.7499 6.41667H8.24992M13.7499 10.0833H8.24992M13.7499 13.75H10.0833M4.58325 2.75H17.4166V19.25L16.4706 18.4397C16.1383 18.1549 15.7151 17.9984 15.2775 17.9984C14.8399 17.9984 14.4168 18.1549 14.0845 18.4397L13.1385 19.25L12.1934 18.4397C11.8611 18.1547 11.4377 17.998 10.9999 17.998C10.5621 17.998 10.1388 18.1547 9.80642 18.4397L8.86133 19.25L7.91534 18.4397C7.58307 18.1549 7.1599 17.9984 6.72229 17.9984C6.28469 17.9984 5.86152 18.1549 5.52925 18.4397L4.58325 19.25V2.75Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MarketingIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6C12.943 6 13.414 6 13.707 6.293C14 6.586 14 7.057 14 8V16C14 16.943 14 17.414 13.707 17.707C13.414 18 12.943 18 12 18M12 6C11.057 6 10.586 6 10.293 6.293C10 6.586 10 7.057 10 8V16C10 16.943 10 17.414 10.293 17.707C10.586 18 11.057 18 12 18M12 6V3M12 18V21M19 5C19.943 5 20.414 5 20.707 5.293C21 5.586 21 6.057 21 7V9C21 9.943 21 10.414 20.707 10.707C20.414 11 19.943 11 19 11M19 5C18.057 5 17.586 5 17.293 5.293C17 5.586 17 6.057 17 7V9C17 9.943 17 10.414 17.293 10.707C17.586 11 18.057 11 19 11M19 5V3M19 11V13M5 10C5.943 10 6.414 10 6.707 10.293C7 10.586 7 11.057 7 12V14C7 14.943 7 15.414 6.707 15.707C6.414 16 5.943 16 5 16M5 10C4.057 10 3.586 10 3.293 10.293C3 10.586 3 11.057 3 12V14C3 14.943 3 15.414 3.293 15.707C3.586 16 4.057 16 5 16M5 10V8M5 16V18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProfileIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.66675 16.5007C3.66675 15.5282 4.05306 14.5956 4.74069 13.9079C5.42832 13.2203 6.36095 12.834 7.33341 12.834H14.6667C15.6392 12.834 16.5718 13.2203 17.2595 13.9079C17.9471 14.5956 18.3334 15.5282 18.3334 16.5007C18.3334 16.9869 18.1403 17.4532 17.7964 17.797C17.4526 18.1408 16.9863 18.334 16.5001 18.334H5.50008C5.01385 18.334 4.54754 18.1408 4.20372 17.797C3.8599 17.4532 3.66675 16.9869 3.66675 16.5007Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M11 9.16699C12.5188 9.16699 13.75 7.93578 13.75 6.41699C13.75 4.89821 12.5188 3.66699 11 3.66699C9.48122 3.66699 8.25 4.89821 8.25 6.41699C8.25 7.93578 9.48122 9.16699 11 9.16699Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const CustomersIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
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
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.75 19.25V17.4167C2.75 15.3916 4.39162 13.75 6.41667 13.75H10.0833C12.1084 13.75 13.75 15.3916 13.75 17.4167V19.25"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.6694 2.86816C16.2919 3.28357 17.4266 4.74549 17.4266 6.42025C17.4266 8.09501 16.2919 9.55693 14.6694 9.97233"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.25 19.2502V17.4169C19.2404 15.7527 18.1113 14.3037 16.5 13.8877"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DeliveryIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.2708 15.7588C18.0909 16.263 19.25 17.0238 19.25 17.8745C19.25 19.3929 15.5563 20.6245 11 20.6245C6.44371 20.6245 2.75 19.3929 2.75 17.8745C2.75 17.0238 3.90867 16.263 5.72917 15.7588"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 18.3329C10.4 18.3329 9.80054 18.2893 9.31471 18.2403C8.68725 18.1766 8.21471 17.6624 8.16475 17.0335L7.8485 13.0863C7.42625 13.0316 7.00563 12.9648 6.58717 12.8861C6.28155 12.83 6.00939 12.658 5.82749 12.4061C5.64559 12.1542 5.56801 11.8417 5.61092 11.534C5.75126 10.4566 5.99767 9.39579 6.34655 8.36689C6.63163 7.53639 7.38925 7.00427 8.26604 6.95064C8.60017 6.93047 8.99388 6.91122 9.44854 6.89747C8.89393 6.55915 8.46511 6.04881 8.22741 5.4442C7.98971 4.83959 7.95616 4.17385 8.13187 3.54841C8.30758 2.92296 8.68292 2.37209 9.20071 1.97973C9.71849 1.58736 10.3503 1.375 11 1.375C11.6497 1.375 12.2815 1.58736 12.7993 1.97973C13.3171 2.37209 13.6924 2.92296 13.8681 3.54841C14.0438 4.17385 14.0103 4.83959 13.7726 5.4442C13.5349 6.04881 13.1061 6.55915 12.5515 6.89747C12.9459 6.90921 13.3401 6.92693 13.734 6.95064C14.6108 7.00427 15.3684 7.53639 15.6535 8.36689C16.0023 9.39579 16.2487 10.4566 16.3891 11.534C16.432 11.8418 16.3543 12.1543 16.1723 12.4062C15.9904 12.6582 15.7181 12.8301 15.4124 12.8861C14.9941 12.9648 14.5736 13.0315 14.1515 13.0863L13.8357 17.0335C13.7853 17.6628 13.3132 18.1761 12.6853 18.2403C12.1995 18.2893 11.6 18.3329 11 18.3329ZM11 18.3329V14.2079"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 13.75C12.5188 13.75 13.75 12.5188 13.75 11C13.75 9.48122 12.5188 8.25 11 8.25C9.48122 8.25 8.25 9.48122 8.25 11C8.25 12.5188 9.48122 13.75 11 13.75Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M12.6178 1.97234C12.2814 1.83301 11.8543 1.83301 10.9999 1.83301C10.1456 1.83301 9.71842 1.83301 9.38201 1.97234C9.15942 2.06448 8.95718 2.19958 8.78684 2.36992C8.6165 2.54026 8.4814 2.74251 8.38926 2.96509C8.30493 3.16951 8.27101 3.40876 8.25817 3.75617C8.25221 4.00728 8.18264 4.25276 8.056 4.46967C7.92935 4.68657 7.74975 4.86781 7.53401 4.99642C7.31475 5.11905 7.06796 5.18404 6.81675 5.18532C6.56553 5.18661 6.31809 5.12414 6.09759 5.00376C5.78959 4.84059 5.56684 4.75076 5.34592 4.72142C4.86405 4.65806 4.37673 4.78862 3.99109 5.08442C3.70326 5.30717 3.48876 5.67659 3.06159 6.41634C2.63442 7.15609 2.41992 7.52551 2.37317 7.88759C2.34167 8.12634 2.35752 8.36895 2.4198 8.60158C2.48209 8.8342 2.58959 9.05227 2.73617 9.24334C2.87184 9.41934 3.06159 9.56692 3.35584 9.75209C3.78942 10.0243 4.06809 10.4882 4.06809 10.9997C4.06809 11.5112 3.78942 11.975 3.35584 12.2463C3.06159 12.4324 2.87092 12.58 2.73617 12.756C2.58959 12.9471 2.48209 13.1651 2.4198 13.3978C2.35752 13.6304 2.34167 13.873 2.37317 14.1118C2.42084 14.4729 2.63442 14.8433 3.06067 15.583C3.48876 16.3228 3.70234 16.6922 3.99109 16.9149C4.18216 17.0615 4.40023 17.169 4.63285 17.2313C4.86548 17.2936 5.10809 17.3094 5.34684 17.2779C5.56684 17.2486 5.78959 17.1588 6.09759 16.9956C6.31809 16.8752 6.56553 16.8127 6.81675 16.814C7.06796 16.8153 7.31475 16.8803 7.53401 17.0029C7.97676 17.2596 8.23984 17.7317 8.25817 18.2432C8.27101 18.5915 8.30401 18.8298 8.38926 19.0343C8.4814 19.2568 8.6165 19.4591 8.78684 19.6294C8.95718 19.7998 9.15942 19.9349 9.38201 20.027C9.71842 20.1663 10.1456 20.1663 10.9999 20.1663C11.8543 20.1663 12.2814 20.1663 12.6178 20.027C12.8404 19.9349 13.0427 19.7998 13.213 19.6294C13.3834 19.4591 13.5185 19.2568 13.6106 19.0343C13.6949 18.8298 13.7288 18.5915 13.7417 18.2432C13.76 17.7317 14.0231 17.2587 14.4658 17.0029C14.6851 16.8803 14.9319 16.8153 15.1831 16.814C15.4343 16.8127 15.6818 16.8752 15.9023 16.9956C16.2103 17.1588 16.433 17.2486 16.653 17.2779C16.8918 17.3094 17.1344 17.2936 17.367 17.2313C17.5996 17.169 17.8177 17.0615 18.0088 16.9149C18.2975 16.6931 18.5111 16.3228 18.9383 15.583C19.3654 14.8433 19.5799 14.4738 19.6267 14.1118C19.6582 13.873 19.6423 13.6304 19.58 13.3978C19.5178 13.1651 19.4103 12.9471 19.2637 12.756C19.128 12.58 18.9383 12.4324 18.644 12.2473C18.4294 12.1165 18.2516 11.9335 18.127 11.7153C18.0024 11.4971 17.9352 11.2509 17.9318 10.9997C17.9318 10.4882 18.2104 10.0243 18.644 9.75301C18.9383 9.56692 19.1289 9.41934 19.2637 9.24334C19.4103 9.05227 19.5178 8.8342 19.58 8.60158C19.6423 8.36895 19.6582 8.12634 19.6267 7.88759C19.579 7.52642 19.3654 7.15609 18.9392 6.41634C18.5111 5.67659 18.2975 5.30717 18.0088 5.08442C17.8177 4.93784 17.5996 4.83034 17.367 4.76805C17.1344 4.70577 16.8918 4.68992 16.653 4.72142C16.433 4.75076 16.2103 4.84059 15.9013 5.00376C15.681 5.12397 15.4337 5.18635 15.1826 5.18507C14.9316 5.18379 14.685 5.11888 14.4658 4.99642C14.2501 4.86781 14.0705 4.68657 13.9439 4.46967C13.8172 4.25276 13.7476 4.00728 13.7417 3.75617C13.7288 3.40784 13.6958 3.16951 13.6106 2.96509C13.5185 2.74251 13.3834 2.54026 13.213 2.36992C13.0427 2.19958 12.8404 2.06448 12.6178 1.97234Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const SupportIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.7528 4.58301V6.41634"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.7528 10.083V11.9163"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.7528 15.583V17.4163"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.58333 4.58301H17.4167C18.4292 4.58301 19.25 5.40382 19.25 6.41634V9.16634C18.2375 9.16634 17.4167 9.98715 17.4167 10.9997C17.4167 12.0122 18.2375 12.833 19.25 12.833V15.583C19.25 16.5955 18.4292 17.4163 17.4167 17.4163H4.58333C3.57081 17.4163 2.75 16.5955 2.75 15.583V12.833C3.76252 12.833 4.58333 12.0122 4.58333 10.9997C4.58333 9.98715 3.76252 9.16634 2.75 9.16634V6.41634C2.75 5.40382 3.57081 4.58301 4.58333 4.58301"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MessagesIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.33333 8.25033H14.6667M7.33333 11.917H12.8333M16.5 3.66699C17.2293 3.66699 17.9288 3.95672 18.4445 4.47245C18.9603 4.98817 19.25 5.68765 19.25 6.41699V13.7503C19.25 14.4797 18.9603 15.1791 18.4445 15.6949C17.9288 16.2106 17.2293 16.5003 16.5 16.5003H11.9167L7.33333 19.2503V16.5003H5.5C4.77065 16.5003 4.07118 16.2106 3.55546 15.6949C3.03973 15.1791 2.75 14.4797 2.75 13.7503V6.41699C2.75 5.68765 3.03973 4.98817 3.55546 4.47245C4.07118 3.95672 4.77065 3.66699 5.5 3.66699H16.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HelpIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.9541 16.4997C11.2749 16.4997 11.5463 16.3888 11.7681 16.1669C11.9899 15.9451 12.1005 15.6741 12.0999 15.3538C12.0993 15.0336 11.9887 14.7623 11.7681 14.5398C11.5475 14.3174 11.2761 14.2068 10.9541 14.208C10.632 14.2092 10.361 14.3201 10.141 14.5408C9.921 14.7614 9.81009 15.0324 9.80825 15.3538C9.80642 15.6753 9.91734 15.9466 10.141 16.1678C10.3647 16.3891 10.6357 16.4997 10.9541 16.4997ZM10.9999 20.1663C9.73186 20.1663 8.5402 19.9256 7.42492 19.444C6.30964 18.9625 5.3395 18.3095 4.5145 17.4851C3.6895 16.6607 3.03653 15.6906 2.55559 14.5747C2.07464 13.4588 1.83386 12.2671 1.83325 10.9997C1.83264 9.73223 2.07342 8.54056 2.55559 7.42467C3.03775 6.30879 3.69073 5.33865 4.5145 4.51426C5.33828 3.68987 6.30842 3.0369 7.42492 2.55534C8.54142 2.07379 9.73309 1.83301 10.9999 1.83301C12.2668 1.83301 13.4584 2.07379 14.5749 2.55534C15.6914 3.0369 16.6616 3.68987 17.4853 4.51426C18.3091 5.33865 18.9624 6.30879 19.4452 7.42467C19.9279 8.54056 20.1684 9.73223 20.1666 10.9997C20.1648 12.2671 19.924 13.4588 19.4443 14.5747C18.9645 15.6906 18.3116 16.6607 17.4853 17.4851C16.6591 18.3095 15.689 18.9628 14.5749 19.4449C13.4609 19.9271 12.2692 20.1676 10.9999 20.1663ZM10.9999 18.333C13.0471 18.333 14.7812 17.6226 16.202 16.2018C17.6228 14.7809 18.3333 13.0469 18.3333 10.9997C18.3333 8.95245 17.6228 7.21842 16.202 5.79759C14.7812 4.37676 13.0471 3.66634 10.9999 3.66634C8.9527 3.66634 7.21867 4.37676 5.79784 5.79759C4.377 7.21842 3.66659 8.95245 3.66659 10.9997C3.66659 13.0469 4.377 14.7809 5.79784 16.2018C7.21867 17.6226 8.9527 18.333 10.9999 18.333ZM11.0916 7.05801C11.4735 7.05801 11.806 7.18023 12.0889 7.42467C12.3719 7.66912 12.513 7.97467 12.5124 8.34134C12.5124 8.67745 12.4094 8.97537 12.2035 9.23509C11.9976 9.49481 11.7644 9.73926 11.5041 9.96842C11.1527 10.274 10.8435 10.6101 10.5764 10.9768C10.3094 11.3434 10.1755 11.7559 10.1749 12.2143C10.1749 12.4281 10.2553 12.6078 10.416 12.7533C10.5767 12.8987 10.7637 12.9711 10.977 12.9705C11.2062 12.9705 11.4011 12.8941 11.5618 12.7413C11.7226 12.5886 11.8255 12.3976 11.8708 12.1684C11.9319 11.8476 12.0694 11.5613 12.2833 11.3095C12.4971 11.0577 12.7263 10.817 12.9708 10.5872C13.3221 10.2511 13.624 9.8844 13.8764 9.48717C14.1288 9.08995 14.2547 8.6469 14.2541 8.15801C14.2541 7.37884 13.9372 6.74115 13.3035 6.24492C12.6698 5.7487 11.9325 5.50029 11.0916 5.49967C10.511 5.49967 9.95736 5.6219 9.43059 5.86634C8.90381 6.11079 8.50261 6.48509 8.227 6.98926C8.12006 7.17259 8.08584 7.36754 8.12434 7.57409C8.16284 7.78065 8.26581 7.93709 8.43325 8.04342C8.64714 8.16565 8.86867 8.20384 9.09784 8.15801C9.327 8.11217 9.51798 7.98231 9.67075 7.76842C9.83881 7.53926 10.049 7.36356 10.3014 7.24134C10.5538 7.11912 10.8172 7.05801 11.0916 7.05801Z"
      fill="currentColor"
    />
  </svg>
);

const PrivacyIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 2.92449L17.4167 5.77533V10.0837C17.4167 14.227 14.685 18.0495 11 19.1862C7.315 18.0495 4.58333 14.227 4.58333 10.0837V5.77533L11 2.92449ZM11 0.916992L2.75 4.58366V10.0837C2.75 15.1712 6.27 19.9287 11 21.0837C15.73 19.9287 19.25 15.1712 19.25 10.0837V4.58366L11 0.916992ZM10.0833 6.41699H11.9167V8.25033H10.0833V6.41699ZM10.0833 10.0837H11.9167V15.5837H10.0833V10.0837Z"
      fill="currentColor"
    />
  </svg>
);

const LogoSvg = () => (
  <img
    src="https://api.builder.io/api/v1/image/assets/TEMP/18082d2c4e4ac7eb3f264eda7c76ac17057f1895?width=500"
    alt="PARDOMART"
    className="text-center font-raleway text-2xl font-extrabold leading-normal"
    style={{
      background: "linear-gradient(90deg, #06888C 0%, #4EA674 100%)",
      backgroundSize: "contain",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  />
);

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const mainMenuItems = [
    { path: "/dashboard", label: "Dashboard", icon: HomeIcon },
    { path: "/store-management", label: "Store Management", icon: StoreIcon },
    { path: "/orders", label: "Order Management", icon: CartIcon },
    { path: "/transactions", label: "Transaction", icon: CardIcon },
    { path: "/invoices", label: "Invoices", icon: InvoiceIcon },
    { path: "/marketing", label: "Email Marketing", icon: MarketingIcon },
  ];

  // Notification states
  const [isNotificationsDrawerOpen, setIsNotificationsDrawerOpen] =
    useState(false);

  const auth = useContext(AuthContext);
  const {
    notifications,
    unreadCount,
    isLoading: notificationsLoading,
    markAsRead,
    markAllAsRead,
  } = useNotifications();

  const userItems = [
    { path: "/admins", label: "Admins", icon: ProfileIcon },
    { path: "/customers", label: "Customers", icon: CustomersIcon },
    { path: "/delivery", label: "Delivery guys", icon: DeliveryIcon },
    { path: "/settings", label: "Settings", icon: SettingsIcon },
  ];

  const otherItems = [
    { path: "/support", label: "Support", icon: SupportIcon },
    { path: "/messages", label: "Messages", icon: MessagesIcon },
    { path: "/help", label: "Help Center", icon: HelpIcon },
    { path: "/privacy", label: "Privacy Policy", icon: PrivacyIcon },
  ];

  const isActive = (path: string) => {
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  const handleMarkAsRead = (id: string) => markAsRead(id);
  const handleMarkAllAsRead = () => markAllAsRead();

  const NavSection = ({
    title,
    items,
  }: {
    title: string;
    items: typeof mainMenuItems;
  }) => (
    <div className="mb-[38px]">
      <div className="px-6 mb-3">
        <p className="text-[15px] text-[#6A717F] font-sans font-normal leading-6">
          {title}
        </p>
      </div>
      <nav className="px-3.5 flex flex-col gap-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className={cn(
                "flex items-center gap-2 px-4 py-[9px] rounded-md transition-colors",
                isActive(item.path)
                  ? "bg-[#06888C] text-white font-bold"
                  : "text-[#6A717F] hover:bg-[#F5F6FA] font-normal",
              )}
            >
              <Icon className="w-[22px] h-[22px] shrink-0" />
              <span className="text-base leading-[22px] font-sans flex-1">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 min-[1200px]:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen w-[270px] bg-white shadow-[0_3px_4px_0_rgba(0,0,0,0.12)] flex flex-col py-[39px] px-0 overflow-y-auto z-50 transition-transform duration-300",
          isSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full min-[1200px]:translate-x-0",
        )}
      >
        {/* Mobile Close Button */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="min-[1200px]:hidden absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo */}
        <div className="mb-[38px] px-0 flex items-center justify-center">
          <LogoSvg />
        </div>

        {/* Navigation Sections */}
        <NavSection title="MAIN MENU" items={mainMenuItems} />
        <NavSection title="USERS" items={userItems} />
        <NavSection title="OTHERS" items={otherItems} />
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-[1200px]:ml-[270px] min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between px-4 sm:px-7 py-5">
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="min-[1200px]:hidden p-2 rounded-md hover:bg-gray-100"
              >
                <Menu className="w-6 h-6" />
              </button>

              {/* Back Button - Only show on specific pages */}
              {location.pathname.startsWith("/customers/") && (
                <button
                  onClick={() => navigate("/customers")}
                  className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                >
                  <svg
                    width="13"
                    height="10"
                    viewBox="0 0 13 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.3871 0.209705L4.29289 0.292893L0.292893 4.29289C-0.0675907 4.65338 -0.0953203 5.22061 0.209705 5.6129L0.292893 5.70711L4.29289 9.70711C4.68342 10.0976 5.31658 10.0976 5.70711 9.70711C6.06759 9.34662 6.09532 8.77939 5.7903 8.3871L5.70711 8.29289L3.414 5.999L12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4L3.416 3.999L5.70711 1.70711C6.06759 1.34662 6.09532 0.779392 5.7903 0.387101L5.70711 0.292893C5.34662 -0.0675907 4.77939 -0.0953203 4.3871 0.209705Z"
                      fill="#7E84A3"
                    />
                  </svg>
                  <h1 className="text-lg sm:text-[22px] font-lato font-bold text-[#023337] leading-normal tracking-[0.11px]">
                    {getPageTitle(location.pathname)}
                  </h1>
                </button>
              )}

              {/* Dynamic Page Title */}
              {!location.pathname.startsWith("/customers/") && (
                <h1 className="text-lg sm:text-[22px] font-lato font-bold text-[#023337] leading-normal tracking-[0.11px]">
                  {getPageTitle(location.pathname)}
                </h1>
              )}
            </div>

            <div className="flex items-center gap-4 sm:gap-9">
              <Sheet
                open={isNotificationsDrawerOpen}
                onOpenChange={setIsNotificationsDrawerOpen}
              >
                <SheetTrigger asChild>
                  <button
                    type="button"
                    className="relative w-12 h-[53px] rounded-[11px] bg-[#F5F6FA] flex items-center justify-center cursor-pointer hover:bg-[#E6E9F4] transition-colors"
                  >
                    <Bell className="w-6 h-6 text-[#50555C]" />
                    {unreadCount > 0 && (
                      <span className="absolute -right-1 -top-1 min-w-[19px] h-[19px] rounded-full bg-[#D97474] border-[3px] border-white flex items-center justify-center text-[10px] font-nunito text-white leading-[18px] px-1">
                        {unreadCount}
                      </span>
                    )}
                  </button>
                </SheetTrigger>
                <SheetPortal>
                  <SheetOverlay className="fixed inset-0 bg-black/40 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out" />
                  <SheetContent
                    side="right"
                    className="w-full max-w-md p-0 bg-white data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right duration-300"
                    onOpenAutoFocus={(event) => event.preventDefault()}
                  >
                    <div className="p-4 flex flex-col h-full">
                      <SheetHeader className="flex flex-row items-center justify-between mb-4">
                        <SheetTitle className="text-xl font-bold">
                          Notifications
                        </SheetTitle>
                        <SheetClose className="w-5 h-5" asChild></SheetClose>
                      </SheetHeader>
                      <div className="p-4 overflow-y-auto flex-1">
                        {notifications.length === 0 ? (
                          <p className="text-muted-foreground text-center">
                            No notifications yet.
                          </p>
                        ) : (
                          <div className="space-y-4">
                            {notifications.map((notification: any) => (
                              <div
                                key={notification.id}
                                className={cn(
                                  "p-3 rounded-md border",
                                  notification.isRead
                                    ? "bg-gray-50 text-gray-500"
                                    : "bg-white text-gray-900 font-medium",
                                )}
                              >
                                <p>{notification.body}</p>
                                {!notification.isRead && (
                                  <button
                                    onClick={() =>
                                      handleMarkAsRead(notification.id)
                                    }
                                    className="text-sm text-blue-600 hover:underline mt-1"
                                  >
                                    Mark as Read
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      {notifications.length > 0 && (
                        <div className="p-4 border-t">
                          <button
                            onClick={handleMarkAllAsRead}
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                          >
                            Mark All as Read
                          </button>
                        </div>
                      )}
                    </div>
                  </SheetContent>
                </SheetPortal>
              </Sheet>

              {/* Messages - Hidden on small screens */}
              <div className="hidden sm:block relative w-12 h-[53px]">
                <div className="absolute left-0 top-[5px] w-12 h-12 rounded-[11px] bg-[#F5F6FA] flex items-center justify-center cursor-pointer hover:bg-[#E6E9F4] transition-colors">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 9H16M8 13H14M18 4C18.7956 4 19.5587 4.31607 20.1213 4.87868C20.6839 5.44129 21 6.20435 21 7V15C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18H13L8 21V18H6C5.20435 18 4.44129 17.6839 3.87868 17.1213C3.31607 16.5587 3 15.7956 3 15V7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4H18Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="absolute left-[29px] top-0 w-[19px] h-[19px] rounded-[48px] bg-[#D97474] border-[3px] border-white flex items-center justify-center">
                  <span className="text-[10px] font-nunito text-white leading-[18px]">
                    21
                  </span>
                </div>
              </div>

              {/* User Profile - Simplified on mobile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
                    <div className="hidden sm:block text-right">
                      <p className="text-sm font-nunito font-medium text-black leading-[18px]">
                        {auth?.user?.name ?? "User"}
                      </p>
                      <p className="text-xs font-nunito font-medium text-[#898A8D] leading-[18px]">
                        {auth?.user?.role ?? "Admin"}
                      </p>
                    </div>
                    <img
                      src={
                        ((auth?.user as any)?.avatar as string) ||
                        "https://api.builder.io/api/v1/image/assets/TEMP/1f1d95314b8090d90aa089edbead733e09fd534c?width=96"
                      }
                      alt={auth?.user?.name ?? "User Avatar"}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <ChevronDown className="w-5 h-5 text-[#50555C] hidden sm:block" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex w-full cursor-pointer">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <main className="p-4 sm:p-7">{children}</main>
      </div>
    </div>
  );
}
