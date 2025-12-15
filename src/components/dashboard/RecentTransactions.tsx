const fallbackTransactions: TransactionRow[] = [
  { name: "Bill Smith", date: "24.08.2025", amount: "$190.34", status: "Paid" },
  { name: "Deborah Kate", date: "24.08.2025", amount: "$51.77", status: "Pending" },
  { name: "Adepoju king", date: "24.08.2025", amount: "$809.60", status: "Paid" },
  { name: "Bill Smith", date: "24.08.2025", amount: "$341.00", status: "Pending" },
  { name: "Daniel Matt", date: "24.08.2025", amount: "$23.25", status: "Paid" },
];

type TransactionRow = {
  name: string;
  date: string;
  amount: string;
  status: string;
};

type RecentTransactionsProps = {
  transactions?: TransactionRow[];
  loading?: boolean;
};

export function RecentTransactions({ transactions, loading }: RecentTransactionsProps) {
  const rows = transactions?.length ? transactions : fallbackTransactions;

  return (
    <div className="w-full h-full bg-white rounded-md shadow-[0_1px_3px_0_rgba(0,0,0,0.20)] flex flex-col">
      <div className="p-7 flex flex-col flex-1 min-h-0">
        <h2 className="text-base font-bold text-[#131523] font-sans leading-6 mb-5">
          Recent Transactions
        </h2>

        {loading && (
          <div className="text-sm text-[#5A607F] font-sans mb-3">Loading latest transactions…</div>
        )}

        <div className="flex flex-col flex-1 min-h-0 overflow-y-auto w-full">
          {/* Header */}
          <div className="flex items-center h-11 bg-white border-b-2 border-[#E6E9F4] w-full">
            <div className="flex-1 min-w-0 px-2 text-sm font-normal text-[#5A607F] font-sans leading-5">
              Name
            </div>
            <div className="flex-1 min-w-0 px-2 text-sm font-normal text-[#5A607F] font-sans leading-5">
              Date
            </div>
            <div className="flex-1 min-w-0 px-2 text-sm font-normal text-[#5A607F] font-sans leading-5">
              Amount
            </div>
            <div className="flex-1 min-w-0 px-2 text-sm font-normal text-[#5A607F] font-sans leading-5">
              Status
            </div>
          </div>

          {/* Rows */}
          {rows.map((transaction, index) => (
            <div
              key={index}
              className="flex items-center h-[52px] bg-white border-b border-[#E6E9F4] last:border-0 w-full"
            >
              <div className="flex-1 min-w-0 px-2 text-sm font-semibold text-[#131523] font-sans leading-5 truncate">
                {transaction.name}
              </div>
              <div className="flex-1 min-w-0 px-2 text-sm text-[#131523] font-sans leading-5">
                {transaction.date}
              </div>
              <div className="flex-1 min-w-0 px-2 text-sm text-[#131523] font-sans leading-5">
                {transaction.amount}
              </div>
              <div className="flex-1 min-w-0 px-2">
                <span
                  className={`inline-flex items-center h-6 px-2 rounded text-sm font-sans leading-5 ${
                    transaction.status === "Paid"
                      ? "bg-[#C4F8E2] text-[#06A561]"
                      : "bg-[#E6E9F4] text-[#5A607F]"
                  }`}
                >
                  {transaction.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
