import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";
import { adminApi } from "@/lib/apiClient";
import { X } from "lucide-react";

type TransactionStatus = "complete" | "cancelled" | "pending";

interface TransactionDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  transaction?: {
    id: string;
    date: string;
    time: string;
    amount: string;
    method: string;
    status: TransactionStatus;
  };
}

const getStatusColor = (status: TransactionStatus) => {
  switch (status) {
    case "complete":
      return "text-[#21C45D]";
    case "cancelled":
      return "text-[#EF4343]";
    case "pending":
      return "text-[#FBBD23]";
  }
};

const getStatusDotColor = (status: TransactionStatus) => {
  switch (status) {
    case "complete":
      return "#21C45D";
    case "cancelled":
      return "#EF4343";
    case "pending":
      return "#FBBD23";
  }
};

const getStatusText = (status: TransactionStatus) => {
  switch (status) {
    case "complete":
      return "Complete";
    case "cancelled":
      return "Cancelled";
    case "pending":
      return "Pending";
  }
};

export function TransactionDetailsModal({
  open,
  onOpenChange,
  transaction,
}: TransactionDetailsModalProps) {
  if (!transaction) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-black/30" />
        <DialogContent
          hideClose
          className="flex max-h-[90vh] w-[calc(100%-2rem)] max-w-[913px] flex-col gap-0 overflow-y-auto rounded-2xl border-0 bg-white p-0 sm:w-full"
        >
          <div className="flex w-full flex-col items-center gap-[52px] pb-[109px] pt-9">
            <div className="flex w-full flex-col items-center gap-[33px]">
              <div className="flex w-full items-center justify-between px-4 sm:px-8 lg:px-[75px]">
                <h2 className="font-sans text-2xl font-bold leading-normal tracking-[-0.114px] text-[#202224] sm:text-[32px]">
                  Transaction Information
                </h2>
                <button
                  onClick={() => onOpenChange(false)}
                  className="flex h-8 w-8 shrink-0 items-center justify-center transition-opacity hover:opacity-70"
                  aria-label="Close modal"
                >
                  <X className="h-8 w-8 text-black" />
                </button>
              </div>
              <div className="h-px w-full bg-[#E0E0E0] opacity-50"></div>
            </div>

            <div className="flex w-full flex-col gap-6 px-4 sm:px-8 lg:px-[75px]">
              <div className="flex w-full flex-col items-start gap-6">
                <div className="flex w-full flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="font-sans text-lg font-normal leading-normal tracking-[-0.114px] text-black sm:text-2xl">
                    Date of Transaction
                  </div>
                  <div className="font-sans text-lg font-normal leading-normal tracking-[-0.114px] text-black sm:text-2xl">
                    {transaction.date}
                  </div>
                </div>
                <div className="w-full border-b border-dashed border-[#D9D9D9]"></div>
              </div>

              <div className="flex w-full flex-col items-start gap-6">
                <div className="flex w-full flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="font-sans text-lg font-normal leading-normal tracking-[-0.114px] text-black sm:text-2xl">
                    Time of Transaction
                  </div>
                  <div className="font-sans text-lg font-normal leading-normal tracking-[-0.114px] text-black sm:text-2xl">
                    {transaction.time}
                  </div>
                </div>
                <div className="w-full border-b border-dashed border-[#D9D9D9]"></div>
              </div>

              <div className="flex w-full flex-col items-start gap-6">
                <div className="flex w-full flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="font-sans text-lg font-normal leading-normal tracking-[-0.114px] text-black sm:text-2xl">
                    Transaction ID
                  </div>
                  <div className="font-sans text-lg font-normal leading-normal tracking-[-0.114px] text-black sm:text-2xl">
                    {transaction.id}
                  </div>
                </div>
                <div className="w-full border-b border-dashed border-[#D9D9D9]"></div>
              </div>

              <div className="flex w-full flex-col items-start gap-6">
                <div className="flex w-full flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="font-sans text-lg font-normal leading-normal tracking-[-0.114px] text-black sm:text-2xl">
                    Amount
                  </div>
                  <div className="font-sans text-lg font-normal leading-normal tracking-[-0.114px] text-black sm:text-2xl">
                    {transaction.amount}
                  </div>
                </div>
                <div className="w-full border-b border-dashed border-[#D9D9D9]"></div>
              </div>

              <div className="flex w-full flex-col items-start gap-6">
                <div className="flex w-full flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="font-sans text-lg font-normal leading-normal tracking-[-0.114px] text-black sm:text-2xl">
                    Method
                  </div>
                  <div className="flex items-center gap-2.5">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/8f0fdbc45b316f25f25a06374f9d1b2a49e555b1?width=40"
                      alt="Payment method"
                      className="h-5 w-5"
                    />
                    <span className="font-sans text-[15px] font-normal leading-normal text-black">
                      {transaction.method}
                    </span>
                  </div>
                </div>
                <div className="w-full border-b border-dashed border-[#D9D9D9]"></div>
              </div>

              <div className="flex w-full flex-col items-start gap-6">
                <div className="flex w-full flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="font-sans text-lg font-normal leading-normal tracking-[-0.114px] text-black sm:text-2xl">
                    Status
                  </div>
                  <div className="flex items-center justify-center gap-2.5">
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
                        fill={getStatusDotColor(transaction.status)}
                      />
                    </svg>
                    <span
                      className={`font-sans text-[15px] font-normal leading-normal ${getStatusColor(transaction.status)}`}
                    >
                      {getStatusText(transaction.status)}
                    </span>
                  </div>
                </div>
                <div className="w-full border-b border-dashed border-[#D9D9D9]"></div>
              </div>
            </div>

            <div className="flex w-full flex-1 items-center justify-center px-4 sm:px-8 lg:px-[75px]">
              <button
                onClick={async () => {
                  try {
                    const res =
                      await adminApi.transactionsAdminTransactionIdDownloadReceiptGet(
                        transaction.id,
                      );
                    const html = res.data as string;
                    const blob = new Blob([html], { type: "text/html" });
                    const url = URL.createObjectURL(blob);
                    // Trigger download
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `receipt-${transaction.id}.html`;
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    // Open in new tab for preview
                    window.open(url, "_blank");
                    // Revoke after a delay to allow navigation
                    setTimeout(() => URL.revokeObjectURL(url), 10000);
                  } catch (err) {
                    // eslint-disable-next-line no-console
                    console.error("Failed to download receipt", err);
                    alert("Failed to download receipt. Please try again.");
                  }
                }}
                className="flex h-[62px] w-full items-center justify-center gap-2.5 rounded-lg bg-[#06888C] px-[30px] py-3.5 transition-opacity hover:opacity-90"
              >
                <span className="font-sans text-xl font-bold leading-normal text-white">
                  Download Receipt
                </span>
              </button>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
