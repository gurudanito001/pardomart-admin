export function AverageOrderValue() {
  return (
    <div className="w-full h-full bg-white rounded-md shadow-[0_1px_3px_0_rgba(0,0,0,0.20)] flex flex-col">
      <div className="p-7 flex flex-col flex-1 min-h-0">
        <div className="flex flex-col items-start gap-[23px] mb-6">
          <h2 className="text-base font-bold text-[#131523] font-sans leading-6">
            Average Order Value
          </h2>

          <div className="flex items-center gap-[45px] w-full flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#5A607F] font-sans leading-5">
                This Month
              </span>
              <span className="text-sm font-bold text-[#131523] font-sans leading-5">
                $48.90
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#5A607F] font-sans leading-5">
                Previous Month
              </span>
              <span className="text-sm font-bold text-[#131523] font-sans leading-5">
                $48.90
              </span>
            </div>
          </div>
        </div>

        {/* Chart area */}
        <div className="relative h-[257px]">
          {/* Y-axis */}
          <div className="absolute left-0 top-0 bottom-14 flex flex-col justify-between w-10">
            <span className="text-xs text-[#A1A7C4] font-sans leading-4">
              $80
            </span>
            <span className="text-xs text-[#A1A7C4] font-sans leading-4">
              $60
            </span>
            <span className="text-xs text-[#A1A7C4] font-sans leading-4">
              $40
            </span>
            <span className="text-xs text-[#A1A7C4] font-sans leading-4">
              $20
            </span>
            <span className="text-xs text-[#A1A7C4] font-sans leading-4">
              $0
            </span>
          </div>

          {/* Grid lines */}
          <div className="absolute left-[70px] right-0 top-0 bottom-14 flex flex-col justify-between">
            <div className="w-full h-px border-t border-dashed border-[#D9E1EC]" />
            <div className="w-full h-px border-t border-dashed border-[#D9E1EC]" />
            <div className="w-full h-px border-t border-dashed border-[#D9E1EC]" />
            <div className="w-full h-px border-t border-dashed border-[#D9E1EC]" />
            <div className="w-full h-px border-t border-dashed border-[#D9E1EC]" />
          </div>

          {/* Dotted line after $0 */}
          <div className="absolute left-[70px] right-0 bottom-14 h-px border-t border-dashed border-[#D9E1EC]" />

          {/* Chart line */}
          <div className="absolute left-[70px] right-0 top-4 bottom-[68px]">
            <svg
              className="w-full h-full"
              viewBox="0 0 490 151"
              preserveAspectRatio="none"
            >
              <path
                d="M2.00024 124.737L40.7474 148.552L124.331 72.8333L205.7 124.126L287.622 99.7011L369.545 2L452.021 110.082L488 85.046"
                stroke="#06888C"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          {/* X-axis labels */}
          <div className="absolute left-[75px] right-0 bottom-0 flex items-center justify-between h-10">
            <span className="text-xs text-[#A1A7C4] font-sans leading-4 text-center">
              4am
            </span>
            <span className="text-xs text-[#A1A7C4] font-sans leading-4 text-center">
              8am
            </span>
            <span className="text-xs text-[#A1A7C4] font-sans leading-4 text-center">
              12pm
            </span>
            <span className="text-xs text-[#A1A7C4] font-sans leading-4 text-center">
              4pm
            </span>
            <span className="text-xs text-[#A1A7C4] font-sans leading-4 text-center">
              8pm
            </span>
            <span className="text-xs text-[#A1A7C4] font-sans leading-4 text-center">
              =
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
