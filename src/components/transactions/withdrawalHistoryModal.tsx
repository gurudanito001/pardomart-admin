import { X, CheckCircle, Clock, XCircle } from "lucide-react";

interface WithdrawalHistoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  wallet: { user: string; role: string; balance: string } | null;
}

// Mock Data for the history
const MOCK_HISTORY = [
  { id: "WD-8472", date: "Apr 08, 2026 10:30 AM", amount: "$500.00", status: "completed", account: "**** 4920" },
  { id: "WD-8499", date: "Apr 09, 2026 02:15 PM", amount: "$250.00", status: "completed", account: "**** 4920" },
  { id: "WD-8510", date: "Apr 10, 2026 09:00 AM", amount: "$150.00", status: "pending", account: "**** 4920" },
];

export function WithdrawalHistoryModal({ open, onOpenChange, wallet }: WithdrawalHistoryModalProps) {
  if (!open || !wallet) return null;

  const getStatusDisplay = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <span className="flex items-center gap-1 text-[#01891C] bg-[#E9F3E9] px-2.5 py-1 rounded-full text-xs font-semibold">
            <CheckCircle size={14} /> Completed
          </span>
        );
      case "pending":
        return (
          <span className="flex items-center gap-1 text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full text-xs font-semibold">
            <Clock size={14} /> Pending
          </span>
        );
      case "rejected":
        return (
          <span className="flex items-center gap-1 text-red-600 bg-red-50 px-2.5 py-1 rounded-full text-xs font-semibold">
            <XCircle size={14} /> Rejected
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 p-6">
          <div>
            <h2 className="font-sans text-xl font-bold text-black">Withdrawal History</h2>
            <p className="font-sans text-sm text-[#6A717F]">
              {wallet.user} • <span className="font-medium text-[#06888C]">{wallet.role}</span>
            </p>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Quick Stats inside the modal */}
          <div className="mb-6 flex items-center gap-4 rounded-xl bg-[#F8FAFC] p-4 border border-gray-100">
            <div className="flex-1">
              <p className="text-xs text-[#6A717F] font-medium uppercase tracking-wider mb-1">Current Balance</p>
              <p className="text-xl font-bold text-[#01891C]">{wallet.balance}</p>
            </div>
            <div className="h-10 w-px bg-gray-200"></div>
            <div className="flex-1">
              <p className="text-xs text-[#6A717F] font-medium uppercase tracking-wider mb-1">Pending Payouts</p>
              <p className="text-xl font-bold text-orange-500">$150.00</p>
            </div>
          </div>

          {/* History List */}
          <div className="max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
            <h3 className="font-sans text-sm font-bold text-black mb-4 uppercase tracking-wider">Recent Requests</h3>
            <div className="space-y-4">
              {MOCK_HISTORY.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-xl border border-gray-100 p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E9F3F3]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06888C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans font-bold text-black">{item.amount}</p>
                      <p className="font-sans text-xs text-[#6A717F]">{item.date} • {item.account}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {getStatusDisplay(item.status)}
                    <span className="text-xs text-gray-400 font-mono">{item.id}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}