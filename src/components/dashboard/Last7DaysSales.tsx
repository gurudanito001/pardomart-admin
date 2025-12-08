const dailySales = [
  { day: "12", value: 65 },
  { day: "13", value: 92 },
  { day: "14", value: 79 },
  { day: "15", value: 94 },
  { day: "16", value: 126 },
  { day: "17", value: 158 },
  { day: "18", value: 148 },
];

export function Last7DaysSales() {
  return (
    <div className="last7days-card w-[377px] h-[459px] bg-white rounded-[6px] shadow-[0_1px_4px_0_rgba(21,34,50,0.08)] relative">
      <h2 className="absolute left-7 top-7 text-[#131523] font-sans text-base font-bold leading-6">
        Last 7 Days Sales
      </h2>

      <div className="absolute left-7 top-[76px] flex flex-col justify-center items-start pr-px w-[70px] h-12">
        <p className="text-[#131523] font-sans text-xl font-bold leading-7">
          1,259
        </p>
        <p className="text-[#5A607F] font-sans text-sm leading-5">
          Items Sold
        </p>
      </div>

      <div className="absolute left-7 top-36 flex flex-col justify-center items-start pr-[7px] w-[82px] h-12">
        <p className="text-[#131523] font-sans text-xl font-bold leading-7">
          $12,546
        </p>
        <p className="text-[#5A607F] font-sans text-sm leading-5">Revenue</p>
      </div>

      <div className="absolute left-7 top-[222px] w-[321px] h-px bg-[#E6E9F4]" />

      <div className="absolute top-[243px] w-[196px] h-[194px] last7days-chart">
        <div className="flex items-end justify-between gap-0 h-full relative">
          {dailySales.map((day, index) => (
            <div
              key={index}
              className="relative"
              style={{
                width: "28px",
                height: `${day.value + 28}px`,
              }}
            >
              <div
                className="absolute left-[10px] top-0 w-2 bg-[#1FD286] rounded"
                style={{ height: `${day.value}px` }}
              />
              <div
                className="absolute left-0 w-7 h-7 bg-white"
                style={{ bottom: "0px" }}
              />
              <span
                className="absolute left-[7px] w-[14px] h-4 text-[#A1A7C4] text-center font-sans text-xs leading-4"
                style={{ bottom: "6px" }}
              >
                {day.day}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute left-16 top-3 w-[68px] h-[46px]">
          <svg
            width="68"
            height="46"
            viewBox="0 0 68 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 top-0"
          >
            <path
              d="M28 40H4C1.79086 40 0 38.2091 0 36V4C0 1.79086 1.79086 0 4 0H64C66.2091 0 68 1.79086 68 4V36C68 38.2091 66.2091 40 64 40H40L34 46L28 40Z"
              fill="#333752"
            />
          </svg>
          <div className="absolute left-3 top-3 w-11 h-4">
            <span className="text-white font-sans text-xs font-bold leading-4">
              $2,525
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
