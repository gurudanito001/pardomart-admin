import * as React from "react";
import { cn } from "@/lib/utils";

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
      d="M9.99999 11.6667V2.5M9.99999 11.6667C9.41649 11.6667 8.32626 10.0048 7.91666 9.58333M9.99999 11.6667C10.5835 11.6667 11.6737 10.0048 12.0833 9.58333"
      stroke="#06888C"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" />
    <line
      x1="16.65"
      y1="16.65"
      x2="21"
      y2="21"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

interface SearchOption {
  value: string;
  label: string;
}

interface DataTableToolbarProps {
  tabs?: { id: string; label: string; count?: number }[];
  activeTab?: string;
  onTabChange?: (id: string) => void;
  searchOptions?: SearchOption[];
  searchColumn: string;
  onSearchColumnChange: (column: string) => void;
  searchValue: string;
  onSearchValueChange: (value: string) => void;
  onSearch?: (value: string) => void;
  onExport?: () => void;
  onFilter?: () => void;
  children?: React.ReactNode; // For additional custom elements
  showSearch?: boolean; // Toggle search visibility
  ctaButton?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
  responsiveActions?: boolean; // icon-only + animated search on md and below
}

export function DataTableToolbar({
  tabs,
  activeTab,
  onTabChange,
  searchOptions,
  searchColumn,
  onSearchColumnChange,
  searchValue,
  onSearchValueChange,
  onSearch,
  onExport,
  onFilter,
  children,
  showSearch = true,
  ctaButton,
  responsiveActions = false,
}: DataTableToolbarProps) {
  const hasTabs = tabs && tabs.length > 0;
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const triggerSearch = () =>
    onSearch ? onSearch(searchValue) : onSearchValueChange(searchValue);

  const searchInput = (
    <div
      className={cn(
        "flex items-center",
        responsiveActions
          ? "absolute right-0 top-0 w-[240px] rounded-[10px] border border-[#DBDBDB] bg-white shadow-sm transition-all duration-200 md:static md:w-auto md:shadow-none"
          : "rounded-[10px]",
        responsiveActions && !isSearchOpen
          ? "opacity-0 translate-x-4 pointer-events-none md:opacity-100 md:translate-x-0 md:pointer-events-auto"
          : "opacity-100 translate-x-0",
      )}
    >
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => onSearchValueChange(e.target.value)}
        className={cn(
          "w-[220px] rounded-l-[10px] border border-[#DBDBDB] px-3 py-2.5 font-sans text-sm font-normal leading-normal text-[#656565] placeholder:text-[#656565] focus:border-[#06888C] focus:outline-none",
          responsiveActions && "w-full border-0 border-r",
        )}
      />
      <button
        onClick={triggerSearch}
        className="h-[42px] rounded-r-[10px] bg-[#06888C] px-3 flex items-center justify-center hover:bg-[#0a5d66] transition-colors"
        aria-label="Search"
      >
        <SearchIcon />
      </button>
      {responsiveActions && (
        <button
          onClick={() => setIsSearchOpen(false)}
          className="ml-1 h-[42px] px-2 text-[#656565] md:hidden"
          aria-label="Close search"
        >
          ×
        </button>
      )}
    </div>
  );

  return (
    <div
      className={cn(
        "w-full flex flex-row items-center",
        hasTabs ? "justify-between" : "justify-end",
        "gap-4",
      )}
    >
      {tabs && tabs.length > 0 && (
        <div className="w-full overflow-x-auto no-scrollbar md:w-auto">
          <div className="inline-flex items-center gap-1 rounded-lg bg-[#D2EAE3] p-1 min-w-max">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => onTabChange?.(t.id)}
                className={cn(
                  "flex items-center gap-1 px-3 py-1.5 font-sans text-[15px] leading-5 transition-colors rounded-md whitespace-nowrap",
                  activeTab === t.id && tabs.length > 1
                    ? "bg-white text-black"
                    : tabs.length > 1
                      ? "text-[#4B5563]"
                      : "text-black",
                )}
              >
                <span>{t.label}</span>
                {typeof t.count === "number" && (
                  <span className="ml-1 font-sans text-sm font-bold leading-normal text-[#4EA674]">
                    ({t.count})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-row items-center gap-2.5 flex-nowrap relative">
        {onExport && (
          <button
            onClick={onExport}
            className={cn(
              "flex items-center gap-2.5 rounded-lg border border-[#D1D5DB] font-sans text-sm font-normal leading-normal text-[#06888C] transition-colors hover:border-[#b8b8b8]",
              responsiveActions
                ? "h-10 w-10 justify-center px-2 py-2 md:h-auto md:w-auto md:px-[17px] md:py-2.5"
                : "px-[17px] py-2.5",
            )}
          >
            <ExportIcon />
            <span
              className={cn(
                "tracking-[-0.1px]",
                responsiveActions ? "hidden md:inline" : "inline",
              )}
            >
              Export
            </span>
          </button>
        )}

        {showSearch &&
          (responsiveActions ? (
            <>
              <button
                onClick={() => setIsSearchOpen((open) => !open)}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#06888C] text-white hover:bg-[#0a5d66] transition-colors md:hidden"
                aria-label="Toggle search"
              >
                <SearchIcon />
              </button>
              {searchInput}
            </>
          ) : (
            searchInput
          ))}

        {ctaButton && (
          <button
            onClick={ctaButton.onClick}
            className="flex items-center justify-center gap-1 rounded-lg bg-[#06888C] px-[17px] py-2.5 hover:bg-[#0a5d66] transition-colors shrink-0 whitespace-nowrap"
          >
            {ctaButton.icon}
            <span className="font-sans text-sm font-bold leading-normal tracking-[-0.3px] text-white">
              {ctaButton.label}
            </span>
          </button>
        )}

        {children}
      </div>
    </div>
  );
}
