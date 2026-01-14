import React, { useMemo, useState } from "react";
import { SupportStatCard } from "@/components/support/SupportStatCard";
import { DataTable } from "@/components/ui/data-table";
import { DataTableToolbar } from "@/components/ui/data-table-toolbar";
import type { ColumnDef } from "@tanstack/react-table";
import { supportApi } from "@/lib/apiClient";
import type {
  PaginatedSupportTickets,
  SupportTicket,
  TicketStatus,
} from "../../api-client";
import { useQuery } from "@tanstack/react-query";
import { useAdminSupportOverview } from "@/hooks/useAdminSupportOverview";
import { UpdateTicketStatusModal } from "@/components/support/UpdateTicketStatusModal";
import { toast } from "sonner";

import {
  TotalTicketsIcon,
  OpenTicketsIcon,
  ClosedTicketsIcon,
  AnsweredTicketsIcon,
  ExportIcon,
  FilterIcon,
  AddIcon,
  MessageIcon,
  DeleteIcon,
} from "@/components/support/SupportIcons";

function statusColor(status?: TicketStatus) {
  switch (status) {
    case "OPEN":
      return { dot: "#21C45D", textClass: "text-[#21C45D]", label: "Open" };
    case "IN_PROGRESS":
      return {
        dot: "#FBBD23",
        textClass: "text-[#FBBD23]",
        label: "In Progress",
      };
    case "RESOLVED":
      return { dot: "#06A561", textClass: "text-[#06A561]", label: "Resolved" };
    case "CLOSED":
      return { dot: "#EF4343", textClass: "text-[#EF4343]", label: "Closed" };
    default:
      return {
        dot: "#6A717F",
        textClass: "text-[#6A717F]",
        label: String(status ?? "-"),
      };
  }
}

export default function Support() {
  const [searchValue, setSearchValue] = useState("");
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(
    null,
  );
  const [activeTab, setActiveTab] = useState<string>("all");

  const { overview, loading: overviewLoading } = useAdminSupportOverview();

  const getStatusFromTab = (tabId: string): TicketStatus | undefined => {
    switch (tabId) {
      case "open":
        return "OPEN" as TicketStatus;
      case "in_progress":
        return "IN_PROGRESS" as TicketStatus;
      case "resolved":
        return "RESOLVED" as TicketStatus;
      case "closed":
        return "CLOSED" as TicketStatus;
      default:
        return undefined;
    }
  };

  const { data, isLoading, refetch } = useQuery<PaginatedSupportTickets>({
    queryKey: ["supportTickets", pageIndex, pageSize, activeTab],
    queryFn: async () => {
      const status = getStatusFromTab(activeTab);
      const res = await supportApi.supportTicketsGet(
        undefined,
        status,
        undefined,
        undefined,
        pageIndex + 1,
        pageSize,
      );
      return res.data as PaginatedSupportTickets;
    },
    refetchOnWindowFocus: false,
    staleTime: 30_000,
  });

  const tickets = data?.data ?? [];
  const totalPages = data?.totalPages ?? 1;
  const totalCount = data?.totalCount ?? tickets.length;

  const handleStatusUpdated = (updatedTicket: SupportTicket) => {
    setSelectedTicket(null);
    void refetch();
  };

  const handleActiveTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setPageIndex(0);
  };

  const filtered = useMemo(() => {
    if (!searchValue) return tickets;
    const q = searchValue.toLowerCase();
    return tickets.filter((t) =>
      [t.title, t.description, t.id, t.userId]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q)),
    );
  }, [tickets, searchValue]);

  const statusCounts = useMemo(() => {
    if (overviewLoading) {
      return {
        all: totalCount,
        open: 0,
        inProgress: 0,
        resolved: 0,
        closed: 0,
      };
    }

    if (overview) {
      return {
        all: overview.totalTickets ?? totalCount,
        open: overview.openTickets ?? 0,
        inProgress: 0, // Not provided by API, will be calculated from tickets
        resolved: 0, // Not provided by API, will be calculated from tickets
        closed: overview.closedTickets ?? 0,
      };
    }

    const base = {
      all: totalCount,
      open: 0,
      inProgress: 0,
      resolved: 0,
      closed: 0,
    };
    for (const t of tickets) {
      switch (t.status) {
        case "OPEN":
          base.open++;
          break;
        case "IN_PROGRESS":
          base.inProgress++;
          break;
        case "RESOLVED":
          base.resolved++;
          break;
        case "CLOSED":
          base.closed++;
          break;
      }
    }
    return base;
  }, [tickets, totalCount, overview, overviewLoading]);

  const columns: ColumnDef<SupportTicket>[] = [
    {
      header: "Ticket",
      cell: ({ row }) => (
        <span className="font-sans text-[15px]">{row.original.id}</span>
      ),
      meta: { headerClassName: "min-w-[140px]" },
    },
    {
      header: "Subject",
      cell: ({ row }) => (
        <span className="font-sans text-[15px] leading-5 text-[#131523]">
          {row.original.title || "-"}
        </span>
      ),
      meta: { headerClassName: "min-w-[240px]" },
    },
    {
      header: "Status",
      cell: ({ row }) => {
        const s = statusColor(row.original.status);
        return (
          <div className="flex items-center justify-start gap-2.5">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill={s.dot} />
            </svg>
            <span
              className={
                "font-sans text-[15px] font-normal leading-normal " +
                s.textClass
              }
            >
              {s.label}
            </span>
          </div>
        );
      },
      meta: { headerClassName: "min-w-[140px]" },
    },
    {
      header: "Date",
      cell: ({ row }) =>
        row.original.createdAt
          ? new Date(row.original.createdAt).toLocaleString()
          : "",
      meta: { headerClassName: "min-w-[180px]" },
    },
    {
      header: "Action",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setSelectedTicket(row.original);
              setStatusModalOpen(true);
            }}
            className="hover:opacity-70 transition-opacity"
            title="Update status"
          >
            <MessageIcon />
          </button>
          <button
            className="hover:opacity-70 transition-opacity"
            title="Delete ticket"
          >
            <DeleteIcon />
          </button>
        </div>
      ),
      meta: { headerClassName: "min-w-[120px]" },
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {activeTab === "all" && (
          <>
            <SupportStatCard
              icon={<TotalTicketsIcon />}
              title="Total Tickets"
              value={overviewLoading ? "..." : String(statusCounts.all)}
            />
            <SupportStatCard
              icon={<OpenTicketsIcon />}
              title="Open Tickets"
              value={overviewLoading ? "..." : String(statusCounts.open)}
            />
            <SupportStatCard
              icon={<ClosedTicketsIcon />}
              title="Closed Tickets"
              value={overviewLoading ? "..." : String(statusCounts.closed)}
            />
            <SupportStatCard
              icon={<AnsweredTicketsIcon />}
              title="Resolved"
              value={overviewLoading ? "..." : String(statusCounts.resolved)}
            />
          </>
        )}
        {activeTab === "open" && (
          <SupportStatCard
            icon={<OpenTicketsIcon />}
            title="Open Tickets"
            value={overviewLoading ? "..." : String(statusCounts.open)}
          />
        )}
        {activeTab === "in_progress" && (
          <SupportStatCard
            icon={<AnsweredTicketsIcon />}
            title="In Progress"
            value={overviewLoading ? "..." : String(statusCounts.inProgress)}
          />
        )}
        {activeTab === "resolved" && (
          <SupportStatCard
            icon={<AnsweredTicketsIcon />}
            title="Resolved"
            value={overviewLoading ? "..." : String(statusCounts.resolved)}
          />
        )}
        {activeTab === "closed" && (
          <SupportStatCard
            icon={<ClosedTicketsIcon />}
            title="Closed Tickets"
            value={overviewLoading ? "..." : String(statusCounts.closed)}
          />
        )}
      </div>

      <DataTable
        columns={columns}
        data={filtered}
        loading={isLoading}
        enableRowSelection
        manualPagination
        pageCount={totalPages}
        pageIndex={pageIndex}
        pageSize={pageSize}
        onPaginationChange={(p) => {
          setPageIndex(p.pageIndex);
          setPageSize(p.pageSize);
          void refetch();
        }}
        toolbar={
          <DataTableToolbar
            tabs={[
              { id: "all", label: "All Tickets" },
              { id: "open", label: "Open" },
              { id: "in_progress", label: "In Progress" },
              { id: "resolved", label: "Resolved" },
              { id: "closed", label: "Closed" },
            ]}
            activeTab={activeTab}
            onTabChange={handleActiveTabChange}
            searchColumn={"title"}
            onSearchColumnChange={() => {}}
            searchValue={searchValue}
            onSearchValueChange={setSearchValue}
            onExport={() => {}}
            onFilter={() => {}}
            showSearch={false}
            ctaButton={{
              label: "Add Ticket",
              onClick: () => {},
              icon: <AddIcon />,
            }}
          />
        }
      />

      <UpdateTicketStatusModal
        open={statusModalOpen}
        onOpenChange={setStatusModalOpen}
        ticket={selectedTicket}
        onStatusUpdated={handleStatusUpdated}
      />
    </div>
  );
}
