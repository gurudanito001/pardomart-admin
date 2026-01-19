import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CustomerStatCard } from "@/components/customers/CustomerStatCard";
import { useUsersByRole } from "@/hooks/useUsersByRole";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Role, type User } from "../../api-client";
import type { ColumnDef, Row } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { DataTableToolbar } from "@/components/ui/data-table-toolbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { adminApi, userApi } from "@/lib/apiClient";
import { useToast } from "@/hooks/use-toast";

const TotalAdminsIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="8.24711"
      cy="6.41667"
      rx="3.66667"
      ry="3.66667"
      stroke="#898A8D"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.75 19.25V17.4167C2.75 15.3916 4.39162 13.75 6.41667 13.75H10.0833C12.1084 13.75 13.75 15.3916 13.75 17.4167V19.25"
      stroke="#898A8D"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.6696 2.86816C16.292 3.28357 17.4267 4.74549 17.4267 6.42025C17.4267 8.09501 16.292 9.55693 14.6696 9.97233"
      stroke="#898A8D"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.25 19.2502V17.4169C19.2404 15.7527 18.1113 14.3037 16.5 13.8877"
      stroke="#898A8D"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ActiveAdminsIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.8125 11V6.1875M15.8125 6.1875V5.5M15.8125 6.1875C15.8125 6.875 18.5625 9.625 18.5625 10.3125M18.5625 10.3125V5.5M18.5625 10.3125V11M3.4375 19.25V18.5625C3.4375 17.1038 4.01696 15.7049 5.04841 14.6734C6.07986 13.642 7.47881 13.0625 8.9375 13.0625H10.3125C11.7712 13.0625 13.1701 13.642 14.2016 14.6734C15.233 15.7049 15.8125 17.1038 15.8125 18.5625V19.25M13.0625 6.875C13.0625 7.78668 12.7003 8.66102 12.0557 9.30568C11.411 9.95034 10.5367 10.3125 9.625 10.3125C8.71332 10.3125 7.83898 9.95034 7.19432 9.30568C6.54966 8.66102 6.1875 7.78668 6.1875 6.875C6.1875 5.96332 6.54966 5.08898 7.19432 4.44432C7.83898 3.79966 8.71332 3.4375 9.625 3.4375C10.5367 3.4375 11.411 3.79966 12.0557 4.44432C12.7003 5.08898 13.0625 5.96332 13.0625 6.875Z"
      stroke="#6A717F"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const EditIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.1667 2.5C14.3855 2.28113 14.6454 2.10752 14.9314 2.08906C15.2173 2.0706 15.5238 2.20764 15.8333 2.5C16.1429 2.79236 16.4805 3.12574 16.7664 3.41169C17.0524 3.69764 17.281 3.99285 17.5 4.16667C17.719 4.34048 17.9264 4.54298 17.9264 4.83333C17.9264 5.12369 17.719 5.38546 17.5 5.58333L6.33333 16.75L2.5 17.5L3.25 13.6667L14.4167 2.5H14.1667ZM14.1667 2.5L15.8333 4.16667"
      stroke="#6A717F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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

export default function Admins() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchValue, setSearchValue] = useState("");
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 50 });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<User | null>(null);

  const queryClient = useQueryClient();

  // Form state for add/edit admin modal (combined)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    active: true,
  });

  // Fetch admin stats
  const { data: stats, isLoading: loadingStats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await adminApi.usersAdminStatsGet();
      return res.data;
    },
  });

  // Fetch admin users with search
  const { users, totalCount, isLoading, refetch } = useUsersByRole(
    Role.Admin,
    pagination.pageIndex + 1,
    pagination.pageSize,
    searchValue || undefined,
  );

  const totalAdminsDisplay = loadingStats
    ? "..."
    : (stats?.totalAdmins ?? 0).toLocaleString();

  const activeAdminsDisplay = loadingStats
    ? "..."
    : (stats?.activeAdmins ?? 0).toLocaleString();

  const formatDate = (iso?: string) =>
    iso ? new Date(iso).toLocaleDateString() : "";

  const handleExport = () => {
    // Prepare CSV data
    const headers = ["Name", "Email", "Role", "Status", "Joined"];
    const csvRows = [headers.join(",")];

    users.forEach((admin) => {
      const row = [
        `"${admin.name || "N/A"}"`,
        `"${admin.email || "N/A"}"`,
        `"${admin.role || "N/A"}"`,
        `"${admin.active ? "Active" : "Inactive"}"`,
        `"${formatDate(admin.createdAt)}"`,
      ];
      csvRows.push(row.join(","));
    });

    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `admins_${new Date().toISOString().split("T")[0]}.csv`,
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (selectedAdmin && selectedAdmin.id) {
        // Edit mode
        await adminApi.usersAdminIdPatch(
          {
            name: formData.name,
            email: formData.email,
            mobileNumber: formData.mobileNumber,
            active: formData.active,
          },
          selectedAdmin.id,
        );
        toast({
          title: "Success",
          description: "Admin details updated successfully.",
        });
      } else {
        // Create mode
        await adminApi.usersAdminPost({
          name: formData.name,
          email: formData.email,
          mobileNumber: formData.mobileNumber,
          role: "admin" as any,
          password: "Password123!", // Temporary password, should be handled better in prod
        });
        toast({
          title: "Success",
          description: "Admin account created successfully.",
        });
      }

      // Reset form and close modal
      setFormData({ name: "", email: "", mobileNumber: "", active: true });
      setSelectedAdmin(null);
      setIsAddModalOpen(false); // Using isAddModalOpen for both add/edit now

      // Refresh the admin list and stats
      refetch();
      queryClient.invalidateQueries({ queryKey: ["admin-stats"] });
    } catch (error: any) {
      toast({
        title: "Error",
        description:
          error?.response?.data?.message || "Failed to save admin account",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (adminId: string) => {
    if (!confirm("Are you sure you want to delete this admin?")) return;

    try {
      await userApi.usersIdDelete(adminId);
      toast({
        title: "Success",
        description: "Admin deleted successfully.",
      });
      refetch();
      queryClient.invalidateQueries({ queryKey: ["admin-stats"] });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.response?.data?.message || "Failed to delete admin",
        variant: "destructive",
      });
    }
  };

  const handleEditClick = (admin: User) => {
    setSelectedAdmin(admin);
    setFormData({
      name: admin.name || "",
      email: admin.email || "",
      mobileNumber: admin.mobileNumber || "",
      active: admin.active ?? true,
    });
    setIsAddModalOpen(true);
  };

  const columns: ColumnDef<User>[] = [
    {
      header: "Admin",
      cell: ({ row }) => {
        const u = row.original;
        const initials = (u.name || u.email || "?")
          .split(" ")
          .map((s) => s[0])
          .join("")
          .slice(0, 2)
          .toUpperCase();
        return (
          <Link
            to={`/admins/${u.id ?? ""}`}
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <Avatar className="h-6 w-6">
              <AvatarImage src={undefined} alt={u.name ?? ""} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <span className="font-sans text-[15px] font-normal leading-normal text-[#131523]">
              {u.name || "Unknown"}
            </span>
          </Link>
        );
      },
      meta: { headerClassName: "min-w-[200px]" },
    },
    {
      accessorKey: "email",
      header: "Email",
      meta: { headerClassName: "min-w-[180px]" },
    },
    {
      accessorKey: "role",
      header: "Role",
      meta: { headerClassName: "min-w-[120px]" },
    },
    {
      header: "Status",
      cell: ({ row }) => (
        <div className="flex items-center justify-start gap-2.5">
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
              fill={row.original.active ? "#21C45D" : "#EF4343"}
            />
          </svg>
          <span
            className="font-sans text-[15px] font-normal leading-normal"
            style={{ color: row.original.active ? "#21C45D" : "#EF4343" }}
          >
            {row.original.active ? "Active" : "Inactive"}
          </span>
        </div>
      ),
      meta: { headerClassName: "min-w-[120px]" },
    },
    {
      header: "Joined",
      cell: ({ row }) => formatDate(row.original.createdAt),
      meta: { headerClassName: "min-w-[140px]" },
    },
    {
      header: "Action",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <button
            className="text-[#6A717F] hover:text-[#023337]"
            onClick={(e) => {
              e.stopPropagation();
              handleEditClick(row.original);
            }}
          >
            <EditIcon />
          </button>
          <button
            className="text-[#6A717F] hover:text-red-600"
            onClick={(e) => {
              e.stopPropagation();
              if (row.original.id) handleDelete(row.original.id);
            }}
          >
            <TrashIcon />
          </button>
        </div>
      ),
      meta: { headerClassName: "min-w-[120px]" },
    },
  ];

  return (
    <>
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <CustomerStatCard
            icon={<TotalAdminsIcon />}
            title="Total Admins"
            value={totalAdminsDisplay}
          />
          <CustomerStatCard
            icon={<ActiveAdminsIcon />}
            title="Active Admins"
            value={activeAdminsDisplay}
          />
        </div>

        <div className="p-0">
          <div className="space-y-4">
            <DataTable
              columns={columns}
              data={users}
              loading={isLoading}
              enableRowSelection
              onRowClick={(row: Row<User>) =>
                navigate(`/admins/${row.original.id}`)
              }
              toolbar={
                <DataTableToolbar
                  tabs={[
                    {
                      id: "all",
                      label: "All Admins",
                      count: loadingStats
                        ? undefined
                        : (stats?.totalAdmins ?? 0),
                    },
                  ]}
                  activeTab={"all"}
                  searchColumn={"name"}
                  onSearchColumnChange={() => {}}
                  searchValue={searchValue}
                  onSearchValueChange={setSearchValue}
                  onExport={handleExport}
                  onFilter={() => {}}
                  responsiveActions
                  ctaButton={{
                    label: "Add Admin",
                    onClick: () => {
                      setSelectedAdmin(null);
                      setFormData({
                        name: "",
                        email: "",
                        mobileNumber: "",
                        active: true,
                      });
                      setIsAddModalOpen(true);
                    },
                  }}
                />
              }
            />
          </div>
        </div>
      </div>

      {/* Add Admin Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle>
              {selectedAdmin ? "Edit Admin" : "Add New Admin"}
            </DialogTitle>
            <DialogDescription>
              {selectedAdmin
                ? "Update admin details."
                : "Create a new admin account."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter admin name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobileNumber">Mobile Number</Label>
              <Input
                id="mobileNumber"
                type="tel"
                placeholder="+1234567890 (E.164 format)"
                value={formData.mobileNumber}
                onChange={(e) =>
                  setFormData({ ...formData, mobileNumber: e.target.value })
                }
                required
              />
              <p className="text-xs text-gray-500">
                Enter mobile number in E.164 format (e.g., +1234567890)
              </p>
            </div>
            {selectedAdmin && (
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="active"
                  checked={formData.active}
                  onChange={(e) =>
                    setFormData({ ...formData, active: e.target.checked })
                  }
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <Label htmlFor="active">Active</Label>
              </div>
            )}
            <div className="flex justify-end gap-3 mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsAddModalOpen(false);
                  setSelectedAdmin(null);
                  setFormData({
                    name: "",
                    email: "",
                    mobileNumber: "",
                    active: true,
                  });
                }}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#06888C] hover:bg-[#057a7d] text-white"
              >
                {isSubmitting
                  ? selectedAdmin
                    ? "Updating..."
                    : "Creating..."
                  : selectedAdmin
                    ? "Update Admin"
                    : "Create Admin"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
