import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SupportResponseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ticketId: string;
  email: string;
  status: "open" | "answered" | "closed";
  subject: string;
  date: string;
  message: string;
}

export function SupportResponseModal({
  open,
  onOpenChange,
  ticketId,
  email,
  status,
  subject,
  date,
  message,
}: SupportResponseModalProps) {
  const [ticketStatus, setTicketStatus] = useState(status);

  const handleSubmit = () => {
    console.log("Ticket status changed to:", ticketStatus);
    onOpenChange(false);
  };

  const getInitial = (email: string) => {
    return email.charAt(0).toUpperCase();
  };

  const getStatusColor = (status: "open" | "answered" | "closed") => {
    switch (status) {
      case "open":
        return "#21C45D";
      case "answered":
        return "#FBBD23";
      case "closed":
        return "#EF4343";
    }
  };

  const getStatusText = (status: "open" | "answered" | "closed") => {
    switch (status) {
      case "open":
        return "Open";
      case "answered":
        return "Answered";
      case "closed":
        return "Closed";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-black/30" />
        <DialogContent className="max-w-[calc(100vw-2rem)] gap-0 rounded-2xl bg-white p-0 sm:max-w-[828px] [&>button]:hidden">
          <div className="flex flex-col items-end gap-[27px] px-6 py-8 sm:px-[72px] sm:py-[51px] sm:pb-[51px]">
            <div className="relative h-[33px] w-full">
              <h2 className="absolute left-0 top-0 font-sans text-xl font-bold leading-normal text-black sm:text-2xl">
                Ticket ID - #{ticketId}
              </h2>
              <button
                onClick={() => onOpenChange(false)}
                className="absolute right-0 top-0.5 h-6 w-6 transition-opacity hover:opacity-70"
                aria-label="Close"
              >
                <svg
                  width="24"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.3529 2.54626L21.9002 0L12.1765 10.0947L2.45269 0L0 2.54626L9.72378 12.641L0 22.7357L2.45269 25.282L12.1765 15.1873L21.9002 25.282L24.3529 22.7357L14.6292 12.641L24.3529 2.54626Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>

            <div className="w-full">
              <div className="flex min-h-[93px] flex-col items-start gap-2.5 rounded-xl border-[0.6px] border-[#D5D5D5] bg-[#FBFCFF] p-5 sm:p-7">
                <div className="flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex h-9 items-center gap-3 sm:gap-[14px]">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#A3C8FF]">
                      <span className="font-nunito text-xl font-bold leading-normal text-[#1235E3]">
                        {getInitial(email)}
                      </span>
                    </div>
                    <h3 className="break-all font-sans text-base font-bold leading-[27px] text-[#2E2E2E] sm:text-xl">
                      {email}
                    </h3>
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
                        fill={getStatusColor(status)}
                      />
                    </svg>
                    <span
                      className="font-sans text-[15px] font-normal leading-normal"
                      style={{ color: getStatusColor(status) }}
                    >
                      {getStatusText(status)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex flex-col items-center gap-5 rounded-[14px] border-[0.3px] border-[#B9B9B9] bg-white py-5">
                <div className="flex w-full flex-col items-start gap-2 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-12">
                  <div className="flex items-center gap-3 sm:gap-[21px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0"
                    >
                      <path
                        d="M10.89 2.53761C11.1941 2.33464 11.5481 2.21892 11.9134 2.20306C12.2787 2.18719 12.6414 2.27177 12.962 2.44761L13.109 2.53761L21.109 7.87061C21.3596 8.03763 21.5693 8.2591 21.7224 8.51848C21.8754 8.77787 21.968 9.06847 21.993 9.36861L22 9.53461V18.9996C22.0002 19.5042 21.8096 19.9902 21.4665 20.3602C21.1234 20.7301 20.6532 20.9568 20.15 20.9946L20 20.9996H4C3.49542 20.9998 3.00943 20.8092 2.63945 20.4661C2.26947 20.123 2.04284 19.6528 2.005 19.1496L2 18.9996V9.53461C2.00001 9.23352 2.06799 8.9363 2.1989 8.66515C2.3298 8.394 2.52024 8.1559 2.756 7.96861L2.891 7.87061L10.89 2.53761ZM20 10.8676L12.832 15.6476C12.5856 15.8119 12.2961 15.8995 12 15.8995C11.7039 15.8995 11.4144 15.8119 11.168 15.6476L4 10.8666V18.9996H20V10.8676ZM12 4.20161L4.803 8.99961L12 13.7976L19.197 8.99961L12 4.20161Z"
                        fill="black"
                      />
                    </svg>
                    <h4 className="font-sans text-sm font-bold leading-normal text-[#202224] sm:text-base">
                      {subject}
                    </h4>
                  </div>
                  <span className="font-nunito text-xs font-normal leading-normal text-[#50555C]">
                    {date}
                  </span>
                </div>

                <div className="h-px w-full max-w-[680px] bg-[#E0E0E0] opacity-50"></div>

                <div className="w-full px-6 sm:px-12">
                  <div className="relative w-full">
                    <div className="h-[348px] w-full overflow-hidden rounded-md bg-[#F5F5F5] p-6">
                      <div className="h-full overflow-y-auto">
                        <p className="whitespace-pre-wrap font-sans text-sm font-normal leading-[26px] tracking-[0.1px] text-[#202224] opacity-95">
                          {message}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex flex-1 flex-col items-start gap-3">
                  <label className="font-sans text-[15px] font-bold leading-normal text-[#023337]">
                    Change Ticket Status
                  </label>
                  <Select
                    value={ticketStatus}
                    onValueChange={(v) =>
                      setTicketStatus(v as "open" | "answered" | "closed")
                    }
                  >
                    <SelectTrigger className="h-12 w-full rounded-[11px] border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 font-sans text-[15px] font-semibold leading-normal text-[#6A717F] sm:max-w-[435px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="open">Open</SelectItem>
                      <SelectItem value="answered">Answered</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <button
                  onClick={handleSubmit}
                  className="flex h-[51px] w-full items-center justify-center gap-2.5 rounded-lg bg-[#06888C] px-[30px] py-3 font-sans text-xl font-bold leading-normal text-white transition-colors hover:bg-[#057579] sm:w-40"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
