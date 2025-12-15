import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  RowSelectionState,
  useReactTable,
  PaginationState,
  Row,
} from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type DataTableColumnMeta = {
  headerClassName?: string;
  cellClassName?: string;
  align?: "left" | "center" | "right";
};

export type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  loading?: boolean;
  className?: string;
  wrapperClassName?: string; // New prop for the wrapper div
  tableClassName?: string;
  headerRowClassName?: string;
  headerCellClassName?: string;
  rowClassName?: (row: Row<TData>) => string | undefined;
  cellClassName?: (row: Row<TData>) => string | undefined;
  emptyMessage?: string;
  // selection
  enableRowSelection?: boolean;
  rowSelection?: RowSelectionState;
  onRowSelectionChange?: (updater: RowSelectionState) => void;
  // row click
  onRowClick?: (
    row: Row<TData>,
    event: React.MouseEvent<HTMLTableRowElement>,
  ) => void;
  // pagination
  manualPagination?: boolean;
  pageCount?: number; // required when manualPagination
  pageIndex?: number;
  pageSize?: number;
  onPaginationChange?: (updater: PaginationState) => void;
  // custom slots
  toolbar?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  // tabs (like Orders)
  tabs?: { id: string; label: string; count?: number }[];
  activeTab?: string;
  onTabChange?: (id: string) => void;
  // get row id (stable id for selection across pages)
  getRowId?: (originalRow: TData, index: number, parent?: Row<TData>) => string;
};

export function DataTable<TData, TValue>(props: DataTableProps<TData, TValue>) {
  const {
    columns,
    data,
    loading,
    wrapperClassName, // Destructure new prop
    className,
    tableClassName,
    headerRowClassName,
    headerCellClassName,
    rowClassName,
    cellClassName,
    emptyMessage = "No results.",
    enableRowSelection,
    rowSelection,
    onRowSelectionChange,
    onRowClick,
    manualPagination,
    pageCount,
    pageIndex,
    pageSize,
    onPaginationChange,
    toolbar,
    footer,
    children,
    tabs,
    activeTab: activeTabProp,
    onTabChange,
    getRowId,
  } = props;

  const [internalSorting, setInternalSorting] = React.useState<SortingState>(
    [],
  );
  const [internalRowSelection, setInternalRowSelection] =
    React.useState<RowSelectionState>({});
  const [internalPagination, setInternalPagination] =
    React.useState<PaginationState>({ pageIndex: 0, pageSize: 10 });

  // tabs state
  const [internalActiveTab, setInternalActiveTab] = React.useState<
    string | undefined
  >(activeTabProp ?? (tabs && tabs.length ? tabs[0].id : undefined));

  const activeTab = activeTabProp ?? internalActiveTab;

  // do not inject a separate select column; instead render the checkbox inside the first column header/cell
  const sortedColumns = React.useMemo(() => columns, [columns]);

  const table = useReactTable<TData>({
    data,
    columns: sortedColumns,
    state: {
      sorting: internalSorting,
      rowSelection: rowSelection ?? internalRowSelection,
      pagination: manualPagination
        ? { pageIndex: pageIndex ?? 0, pageSize: pageSize ?? 10 }
        : internalPagination,
    },
    onSortingChange: setInternalSorting,
    onRowSelectionChange: onRowSelectionChange ?? setInternalRowSelection,
    onPaginationChange: manualPagination
      ? onPaginationChange
      : setInternalPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: manualPagination
      ? undefined
      : getPaginationRowModel(),
    getRowId,
    manualPagination: !!manualPagination,
    pageCount: manualPagination ? pageCount : undefined,
    enableRowSelection: !!enableRowSelection,
    debugTable: false,
  });

  return (
    <div className={cn("space-y-4 w-full", className)}>
      {tabs && tabs.length ? (
        <div className="inline-flex items-center gap-1 rounded-lg bg-[#D2EAE3] p-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                onTabChange ? onTabChange(t.id) : setInternalActiveTab(t.id);
              }}
              className={cn(
                "flex items-center gap-1 px-3 py-1.5 font-sans text-[15px] leading-5 transition-colors",
                activeTab === t.id
                  ? "rounded-md bg-white text-black"
                  : "text-[#4B5563]",
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
      ) : null}

      <div
        className={cn(
          "rounded-2xl bg-white p-4 sm:p-6 space-y-4 w-full overflow-x-auto",
          wrapperClassName,
        )}
      >
        {toolbar ? (
          <div className="flex items-center justify-between flex-wrap gap-2">
            {toolbar}
            {children}
          </div>
        ) : null}

        <div className="rounded-xl">
          <Table className={cn("border-collapse", tableClassName)}>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className={cn("bg-[#D2EAE3]", headerRowClassName)}
                >
                  {headerGroup.headers.map((header, headerIndex) => {
                    const meta = (header.column.columnDef.meta ||
                      {}) as DataTableColumnMeta;
                    const align = meta.align ?? "left";
                    const isFirstHeader =
                      enableRowSelection && headerIndex === 0;
                    return (
                      <TableHead
                        key={header.id}
                        className={cn(
                          "px-4 py-[13px] font-sans text-[15px] font-semibold leading-normal text-[#023337]",
                          headerCellClassName,
                          meta.headerClassName,
                          align === "center" && "text-center",
                          align === "right" && "text-right",
                          headerIndex === 0 && "rounded-l-lg",
                          headerIndex === headerGroup.headers.length - 1 &&
                            "rounded-r-lg",
                        )}
                      >
                        {header.isPlaceholder ? null : (
                          <div
                            className={cn(
                              "inline-flex items-center",
                              isFirstHeader && "gap-2.5",
                            )}
                          >
                            {isFirstHeader ? (
                              <>
                                <Checkbox
                                  checked={
                                    table.getIsAllPageRowsSelected() ||
                                    (table.getIsSomePageRowsSelected() &&
                                      "indeterminate") ||
                                    false
                                  }
                                  onCheckedChange={(v) =>
                                    table.toggleAllPageRowsSelected(!!v)
                                  }
                                  className="h-4 w-4 rounded border-[#707070]"
                                />
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext(),
                                )}
                              </>
                            ) : (
                              flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )
                            )}
                          </div>
                        )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell
                    colSpan={table.getAllColumns().length}
                    className="h-24 text-center text-[#656565]"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin text-[#06888C]" />
                      <span>Loading...</span>
                    </div>
                  </TableCell>
                </TableRow>
              ) : table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className={cn(
                      "border-b border-[#D1D5DB] hover:bg-[#F9FAFB] transition-colors",
                      rowClassName?.(row),
                    )}
                    onClick={(e) => {
                      const target = e.target as HTMLElement;
                      if (
                        target.closest(
                          'input[type=\"checkbox\"],button,[role=\"checkbox\"],a',
                        )
                      )
                        return;
                      onRowClick?.(row, e);
                    }}
                  >
                    {row.getVisibleCells().map((cell, cellIndex) => {
                      const meta = (cell.column.columnDef.meta ||
                        {}) as DataTableColumnMeta;
                      const align = meta.align ?? "left";
                      const isFirstCell = enableRowSelection && cellIndex === 0;
                      return (
                        <TableCell
                          key={cell.id}
                          className={cn(
                            "px-4 py-5 font-sans text-[15px] leading-normal text-black",
                            cellClassName?.(row),
                            meta.cellClassName || "",
                            align === "center" && "text-center",
                            align === "right" && "text-right",
                          )}
                        >
                          {isFirstCell ? (
                            <div className="flex items-center gap-2.5">
                              <Checkbox
                                checked={row.getIsSelected()}
                                onCheckedChange={(v) => row.toggleSelected(!!v)}
                                className="h-4 w-4 rounded border-[#707070]"
                              />
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext(),
                              )}
                            </div>
                          ) : (
                            flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={table.getAllColumns().length}
                    className="h-24 text-center text-[#656565]"
                  >
                    {emptyMessage}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {manualPagination ? (
          <DataTablePagination
            pageIndex={pageIndex ?? 0}
            pageSize={pageSize ?? 10}
            pageCount={pageCount ?? 0}
            onChange={onPaginationChange}
          />
        ) : (
          <DataTablePagination
            pageIndex={table.getState().pagination.pageIndex}
            pageSize={table.getState().pagination.pageSize}
            pageCount={table.getPageCount()}
            onChange={(next) =>
              table.setOptions((prev) => ({
                ...prev,
                state: { ...prev.state, pagination: next },
              }))
            }
          />
        )}
      </div>

      {footer}
    </div>
  );
}

type DataTablePaginationProps = {
  pageIndex: number;
  pageSize: number;
  pageCount: number; // total pages
  onChange?: (updater: PaginationState) => void;
};

function getPageButtons(
  current: number,
  total: number,
  max = 5,
): (number | "ellipsis")[] {
  if (total <= max) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "ellipsis")[] = [];
  const start = Math.max(1, current - 2);
  const end = Math.min(total, start + max - 1);
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < total) {
    if (end + 1 < total) pages.push("ellipsis");
    pages.push(total);
  }
  if (start > 1) {
    pages.unshift(1);
    if (start > 2) pages.splice(1, 0, "ellipsis");
  }
  return pages;
}

export function DataTablePagination({
  pageIndex,
  pageSize,
  pageCount,
  onChange,
}: DataTablePaginationProps) {
  const currentPage = pageIndex + 1;
  const buttons = getPageButtons(currentPage, Math.max(pageCount, 1));

  // Hide pagination if only one page
  if (pageCount <= 1) {
    return null;
  }

  const setPage = (page: number) =>
    onChange?.({ pageIndex: page - 1, pageSize });

  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= (pageCount || 1);

  return (
    <div className="flex flex-row items-center justify-between gap-4 w-full">
      <button
        onClick={() => setPage(Math.max(1, currentPage - 1))}
        disabled={isFirstPage}
        className={cn(
          "flex h-[42px] items-center justify-center gap-1 rounded-lg px-3 py-2.5 shadow-[0_1px_3px_0_rgba(0,0,0,0.20)] transition-all flex-shrink-0",
          isFirstPage
            ? "bg-[#F0F0F0] text-[#A0A0A0] cursor-not-allowed"
            : "bg-white text-black hover:bg-[#F9FAFB]",
        )}
      >
        <ArrowLeftIcon />
        <span className="hidden sm:inline font-sans text-[15px] font-normal leading-normal">
          Previous
        </span>
      </button>

      <div className="flex items-center gap-2 sm:gap-3 justify-center flex-nowrap overflow-x-auto no-scrollbar min-w-0">
        {buttons.map((b, idx) =>
          b === "ellipsis" ? (
            <button
              key={`e-${idx}`}
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded border border-[#D1D5DB] font-sans text-[15px] font-bold leading-normal text-[#023337] flex-shrink-0"
              disabled
            >
              .....
            </button>
          ) : (
            <button
              key={b}
              onClick={() => setPage(b)}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded font-sans text-[15px] leading-normal flex-shrink-0",
                b === currentPage
                  ? "bg-[#D2EAE3] font-bold text-[#023337]"
                  : "border border-[#D1D5DB] text-[#023337] hover:bg-[#F9FAFB]",
                // On mobile, only show current page and adjacent pages
                Math.abs(b - currentPage) > 1 && "hidden sm:flex",
              )}
            >
              {b}
            </button>
          ),
        )}
      </div>

      <button
        onClick={() => setPage(Math.min(pageCount || 1, currentPage + 1))}
        disabled={isLastPage}
        className={cn(
          "flex h-[42px] items-center justify-center gap-1 rounded-lg px-3 py-2.5 shadow-[0_1px_3px_0_rgba(0,0,0,0.20)] transition-all flex-shrink-0",
          isLastPage
            ? "bg-[#F0F0F0] text-[#A0A0A0] cursor-not-allowed"
            : "bg-white text-black hover:bg-[#F9FAFB]",
        )}
      >
        <span className="hidden sm:inline font-sans text-[15px] font-normal leading-normal">
          Next
        </span>
        <ArrowRightIcon />
      </button>
    </div>
  );
}

const ArrowLeftIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-1"
  >
    <path
      d="M11.1667 16.375L7 12M7 12L11.1667 7.625M7 12H17"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-1"
  >
    <path
      d="M12.8333 16.375L17 12M17 12L12.8333 7.625M17 12H7"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DataTable;
