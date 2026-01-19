import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import jsPDF from "jspdf";

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

const generateReceiptPDF = (transaction: {
  id: string;
  date: string;
  time: string;
  amount: string;
  method: string;
  status: TransactionStatus;
}) => {
  const doc = new jsPDF();

  // Set up colors
  const primaryColor: [number, number, number] = [6, 136, 140]; // #06888C
  const grayColor: [number, number, number] = [107, 114, 128];
  const blackColor: [number, number, number] = [0, 0, 0];

  // Header
  doc.setFillColor(...primaryColor);
  doc.rect(0, 0, 210, 40, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("TRANSACTION RECEIPT", 105, 25, { align: "center" });

  // Company name/logo area
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("PardoMart Admin", 105, 32, { align: "center" });

  // Reset text color
  doc.setTextColor(...blackColor);

  let yPos = 55;

  // Receipt title
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("Transaction Details", 20, yPos);

  yPos += 15;

  // Transaction information
  const lineHeight = 12;
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");

  const details = [
    { label: "Transaction ID:", value: transaction.id },
    { label: "Date:", value: transaction.date },
    { label: "Time:", value: transaction.time },
    { label: "Amount:", value: transaction.amount },
    { label: "Payment Method:", value: transaction.method },
    { label: "Status:", value: getStatusText(transaction.status) },
  ];

  details.forEach((detail, index) => {
    // Label
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...grayColor);
    doc.text(detail.label, 20, yPos);

    // Value
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...blackColor);
    doc.text(detail.value, 80, yPos);

    yPos += lineHeight;

    // Add separator line
    if (index < details.length - 1) {
      doc.setDrawColor(200, 200, 200);
      (doc as any).setLineDash([2, 2]);
      doc.line(20, yPos - 3, 190, yPos - 3);
    }
  });

  // Amount highlight box
  yPos += 10;
  doc.setFillColor(240, 240, 240);
  doc.roundedRect(20, yPos, 170, 25, 3, 3, "F");

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...blackColor);
  doc.text("Total Amount:", 30, yPos + 16);

  doc.setFontSize(16);
  doc.setTextColor(...primaryColor);
  doc.text(transaction.amount, 180, yPos + 16, { align: "right" });

  // Footer
  yPos = 270;
  doc.setDrawColor(...grayColor);
  doc.setLineWidth(0.5);
  doc.line(20, yPos, 190, yPos);

  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(...grayColor);
  doc.text("This is an electronically generated receipt.", 105, yPos + 5, {
    align: "center",
  });
  doc.text(`Generated on: ${new Date().toLocaleString()}`, 105, yPos + 10, {
    align: "center",
  });

  // Save the PDF
  doc.save(`receipt-${transaction.id}.pdf`);
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
                onClick={() => {
                  try {
                    generateReceiptPDF(transaction);
                  } catch (err) {
                    console.error("Failed to generate PDF", err);
                    alert("Failed to generate receipt. Please try again.");
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
