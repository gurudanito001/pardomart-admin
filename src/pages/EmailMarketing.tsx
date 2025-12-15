import { useState, useMemo } from "react";
import { Plus } from "lucide-react";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { DataTableToolbar } from "@/components/ui/data-table-toolbar";
import { CreateEmailModal, EmailPreviewModal } from "@/components/emails";

export interface Email {
  id: number;
  subject: string;
  content: string;
  email: string;
  date: string;
}

const mockEmails: Email[] = [
  {
    id: 1,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 2,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 3,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 4,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 5,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 6,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 7,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 9,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 10,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 11,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 12,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
  {
    id: 13,
    subject: "Request",
    content: "How to generate refund...",
    email: "jameskelvin12@hotmail.com",
    date: "12 Aug, 2025",
  },
];

const MessageIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.44444 7.30577H13.5556M6.44444 10.8613H11.7778M15.3333 2.86133C16.0406 2.86133 16.7189 3.14228 17.219 3.64238C17.719 4.14247 18 4.82075 18 5.52799V12.6391C18 13.3463 17.719 14.0246 17.219 14.5247C16.7189 15.0248 16.0406 15.3058 15.3333 15.3058H10.8889L6.44444 17.9724V15.3058H4.66667C3.95942 15.3058 3.28115 15.0248 2.78105 14.5247C2.28095 14.0246 2 13.3463 2 12.6391V5.52799C2 4.82075 2.28095 4.14247 2.78105 3.64238C3.28115 3.14228 3.95942 2.86133 4.66667 2.86133H15.3333Z"
      stroke="#6A717F"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TrashIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.2833 7.50043L11.995 15.0004M8.005 15.0004L7.71667 7.50043M16.0233 4.82543C16.3083 4.86877 16.5917 4.9146 16.875 4.96377M16.0233 4.82543L15.1333 16.3946C15.097 16.8656 14.8842 17.3056 14.5375 17.6265C14.1908 17.9474 13.7358 18.1256 13.2633 18.1254H6.73667C6.26425 18.1256 5.80919 17.9474 5.46248 17.6265C5.11578 17.3056 4.90299 16.8656 4.86667 16.3946L3.97667 4.82543M16.0233 4.82543C15.0616 4.68003 14.0948 4.56968 13.125 4.4946M3.97667 4.82543C3.69167 4.86793 3.40833 4.91377 3.125 4.96293M3.97667 4.82543C4.93844 4.68003 5.9052 4.56968 6.875 4.4946M13.125 4.4946V3.73127C13.125 2.74793 12.3667 1.92793 11.3833 1.8971C10.4613 1.86763 9.53865 1.86763 8.61667 1.8971C7.63333 1.92793 6.875 2.74877 6.875 3.73127V4.4946M13.125 4.4946C11.0448 4.33383 8.95523 4.33383 6.875 4.4946"
      stroke="#6A717F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function EmailMarketing() {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [searchColumn, setSearchColumn] = useState("subject");
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  const filteredEmails = useMemo(() => {
    if (!searchValue) return mockEmails;

    const searchLower = searchValue.toLowerCase();
    return mockEmails.filter((email) => {
      if (searchColumn === "subject") {
        return email.subject.toLowerCase().includes(searchLower);
      }
      if (searchColumn === "email") {
        return email.email.toLowerCase().includes(searchLower);
      }
      return true;
    });
  }, [searchColumn, searchValue]);

  const columns = useMemo<ColumnDef<Email, unknown>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        cell: ({ row }) => row.original.id,
      },
      {
        accessorKey: "subject",
        header: "Subject",
        cell: ({ row }) => row.original.subject,
      },
      {
        accessorKey: "content",
        header: "Content",
        cell: ({ row }) => row.original.content,
      },
      {
        accessorKey: "email",
        header: "Email",
        cell: ({ row }) => row.original.email,
      },
      {
        accessorKey: "date",
        header: "Date",
        cell: ({ row }) => row.original.date,
      },
      {
        id: "actions",
        header: "Action",
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setSelectedEmail(row.original);
                setIsPreviewModalOpen(true);
              }}
              className="text-[#6A717F] hover:text-[#023337]"
            >
              <MessageIcon />
            </button>
            <button className="text-[#6A717F] hover:text-red-600">
              <TrashIcon />
            </button>
          </div>
        ),
      },
    ],
    [],
  );

  const handleSearch = (value: string) => {
    setSearchValue(value);
    setPagination((prev) => ({ ...prev, pageIndex: 0 }));
  };

  return (
    <>
      <div className="p-0">
        <div className="space-y-4">
          <DataTable
            columns={columns}
            data={filteredEmails}
            toolbar={
              <DataTableToolbar
                tabs={[{ id: "all", label: "All Emails", count: 700 }]}
                activeTab="all"
                searchOptions={[
                  { value: "subject", label: "Search by Subject" },
                  { value: "email", label: "Search by Email" },
                ]}
                searchColumn={searchColumn}
                onSearchColumnChange={setSearchColumn}
                searchValue={searchValue}
                onSearchValueChange={handleSearch}
                onExport={() => console.log("Exporting emails...")}
                showSearch={false}
                ctaButton={{
                  label: "Send Email",
                  icon: <Plus className="h-5 w-5 text-white" />,
                  onClick: () => setIsModalOpen(true),
                }}
                responsiveActions
              />
            }
            enableRowSelection
            manualPagination
            pageCount={3}
            pageIndex={pagination.pageIndex}
            pageSize={pagination.pageSize}
            onPaginationChange={setPagination}
            getRowId={(row: Email) => row.id.toString()}
            wrapperClassName="bg-white"
            tableClassName="min-w-max"
          />
        </div>
      </div>

      <CreateEmailModal open={isModalOpen} onOpenChange={setIsModalOpen} />

      {selectedEmail && (
        <EmailPreviewModal
          open={isPreviewModalOpen}
          onOpenChange={setIsPreviewModalOpen}
          email={selectedEmail}
        />
      )}
    </>
  );
}
