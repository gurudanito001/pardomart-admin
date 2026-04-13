import { MessageSquare, Phone } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// --- ADDED THE TOTAL SPENT ICON ---
const TotalSpentIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1V17M12.5 3.5H7C5.89543 3.5 5 4.39543 5 5.5C5 6.60457 5.89543 7.5 7 7.5H11C12.1046 7.5 13 8.39543 13 9.5C13 10.6046 12.1046 11.5 11 11.5H5.5M12.5 14.5H7C5.89543 14.5 5 13.6046 5 12.5" stroke="#06888C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

type CustomerProfileHeaderProps = {
  name?: string;
  email?: string;
  avatarUrl?: string;
  totalOrders?: number;
  completedOrders?: number;
  cancelledOrders?: number;
  totalSpent?: number; // <-- ADDED THIS PROP
  onSuspendClick?: () => void;
  loading?: boolean;
};

export function CustomerProfileHeader({
  name,
  email,
  avatarUrl,
  totalOrders,
  completedOrders,
  cancelledOrders,
  totalSpent,
  onSuspendClick,
  loading = false,
}: CustomerProfileHeaderProps) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 flex flex-col gap-9">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
        <div className="flex items-center gap-7">
          <img
            src={avatarUrl || "https://api.builder.io/api/v1/image/assets/TEMP/a9e103d8b6d8d3b7227ec3db30eb8b13847c23dd?width=192"}
            alt="Customer"
            className="w-24 h-24 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-1.5">
              <h2 className="text-xl font-sans font-bold text-[#131523] leading-6">
                {name || "N/A"}
              </h2>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 3L8 6H4L5 10L2 12L5 14L4 18H8L9 21L12 19L15 21L16 18H20L19 14L22 12L19 10L20 6H16L15 3L12 5L9 3ZM16 8L17 9L10 16L7 13L8 12L10 14L16 8Z"
                  fill="#8BC34A"
                />
              </svg>
            </div>
            <p className="text-base font-sans font-normal text-[#131523] leading-6">
              {email || "N/A"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-7">
          <button className="w-[60px] h-[60px] rounded-full border-2 border-[#06888C] bg-white flex items-center justify-center hover:bg-[#06888C] transition-colors group disabled:opacity-50 disabled:cursor-not-allowed" disabled={loading}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:[&_path]:fill-white"
            >
              <path
                d="M8 9H16M8 13H14M18 4C18.7956 4 19.5587 4.31607 20.1213 4.87868C20.6839 5.44129 21 6.20435 21 7V15C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18H13L8 21V18H6C5.20435 18 4.44129 17.6839 3.87868 17.1213C3.31607 16.5587 3 15.7956 3 15V7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4H18Z"
                stroke="#06888C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-white"
              />
            </svg>
          </button>
          <button className="w-[60px] h-[60px] rounded-full border-2 border-[#06888C] bg-white flex items-center justify-center hover:bg-[#06888C] transition-colors group disabled:opacity-50 disabled:cursor-not-allowed" disabled={loading}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:[&_path]:fill-white"
            >
              <path
                d="M21 15.46L15.73 14.85L13.21 17.37C10.3714 15.9259 8.06409 13.6186 6.62002 10.78L9.15002 8.25L8.54002 3H3.03002C2.45002 13.18 10.82 21.55 21 20.97V15.46Z"
                fill="#06888C"
                className="group-hover:fill-white"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full h-px bg-[#D9D9D9]" />

      <div className="flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h3 className="text-xl font-sans font-bold text-black leading-6">
            Order Overview
          </h3>
          <button
            onClick={onSuspendClick}
            disabled={loading}
            className="px-4 py-3 bg-[#06888C] rounded-lg hover:bg-[#057579] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-[15px] font-sans font-bold text-white leading-normal tracking-[-0.3px]">
              Suspend Account
            </span>
          </button>
        </div>

        {/* <-- CHANGED TO lg:grid-cols-4 --> */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-20 rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="flex items-center gap-2.5 px-4 py-6 rounded-lg border border-[#06888C]">
              <div className="w-[30px] h-[30px] rounded-full bg-[rgba(210,234,227,0.5)] flex items-center justify-center flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3333 2.66699H4.66665C3.93027 2.66699 3.33331 3.26395 3.33331 4.00033V12.667C3.33331 13.4034 3.93027 14.0003 4.66665 14.0003H11.3333C12.0697 14.0003 12.6666 13.4034 12.6666 12.667V4.00033C12.6666 3.26395 12.0697 2.66699 11.3333 2.66699Z"
                    stroke="#6A717F"
                    strokeWidth="2"
                  />
                  <path
                    d="M6 6H10M6 8.66667H10M6 11.3333H8.66667"
                    stroke="#6A717F"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-base font-sans font-bold text-black leading-normal">
                {totalOrders ?? 0} Total order{totalOrders !== 1 ? 's' : ''}
              </span>
            </div>

            <div className="flex items-center gap-2.5 px-4 py-6 rounded-lg border border-[#06888C]">
              <div className="w-[30px] h-[30px] rounded-full bg-[rgba(210,234,227,0.5)] flex items-center justify-center flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3333 2.66699H4.66665C3.93027 2.66699 3.33331 3.26395 3.33331 4.00033V12.667C3.33331 13.4034 3.93027 14.0003 4.66665 14.0003H11.3333C12.0697 14.0003 12.6666 13.4034 12.6666 12.667V4.00033C12.6666 3.26395 12.0697 2.66699 11.3333 2.66699Z"
                    stroke="#6A717F"
                    strokeWidth="2"
                  />
                  <path
                    d="M6 6H10M6 8.66667H10M6 11.3333H8.66667"
                    stroke="#6A717F"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-base font-sans font-bold text-[#06888C] leading-normal">
                {completedOrders ?? 0} Completed
              </span>
            </div>

            <div className="flex items-center gap-2.5 px-4 py-6 rounded-lg border border-[#06888C]">
              <div className="w-[30px] h-[30px] rounded-full bg-[rgba(210,234,227,0.5)] flex items-center justify-center flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3333 2.66699H4.66665C3.93027 2.66699 3.33331 3.26395 3.33331 4.00033V12.667C3.33331 13.4034 3.93027 14.0003 4.66665 14.0003H11.3333C12.0697 14.0003 12.6666 13.4034 12.6666 12.667V4.00033C12.6666 3.26395 12.0697 2.66699 11.3333 2.66699Z"
                    stroke="#6A717F"
                    strokeWidth="2"
                  />
                  <path
                    d="M6 6H10M6 8.66667H10M6 11.3333H8.66667"
                    stroke="#6A717F"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-base font-sans font-bold text-[#EF4343] leading-normal">
                {cancelledOrders ?? 0} Cancelled
              </span>
            </div>

            {/* <-- ADDED THE NEW TOTAL SPENT CARD HERE --> */}
            <div className="flex items-center gap-2.5 px-4 py-6 rounded-lg border border-[#06888C]">
              <div className="w-[30px] h-[30px] rounded-full bg-[rgba(210,234,227,0.5)] flex items-center justify-center flex-shrink-0">
                <TotalSpentIcon />
              </div>
              <span className="text-base font-sans font-bold text-black leading-normal">
                ${totalSpent ? totalSpent.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) : "0.00"} <span className="font-normal text-[#6A717F] text-[15px]">Total spent</span>
              </span>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}