import { useParams } from "react-router-dom";
import { CustomerProfileHeader } from "@/components/customers/CustomerProfileHeader";
import { CustomerInfoSidebar } from "@/components/customers/CustomerInfoSidebar";
import { TransactionHistory } from "@/components/customers/TransactionHistory";
import { useAdminCustomer } from "@/hooks/useAdminCustomer";
import { userApi } from "@/lib/apiClient";
import { useState } from "react";
import { toast } from "sonner";

export default function CustomerInformation() {
  const { id } = useParams();
  const { customer, loading, error } = useAdminCustomer({
    customerId: id || "",
  });
  const [isSuspending, setIsSuspending] = useState(false);

  const name = customer?.name || customer?.email?.split("@")[0] || "";
  const email = customer?.email;
  const avatarUrl = customer?.profileImage;
  const phone = customer?.mobileNumber;
  const address = customer?.address || "";
  const totalOrders = customer?.totalOrders;
  const completedOrders = customer?.completedOrders;
  const cancelledOrders = customer?.cancelledOrders;

  const handleSuspendAccount = async () => {
    if (!id || !customer) return;

    try {
      setIsSuspending(true);
      await userApi.usersAdminIdDeactivatePatch(id);
      toast.success("Account suspended successfully");
      // Ideally refetch customer data here or invalidate query
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      toast.error("Failed to suspend account");
      console.error(err);
    } finally {
      setIsSuspending(false);
    }
  };

  if (error) {
    return (
      <div className="w-full flex items-center justify-center p-8">
        <div className="text-center">
          <p className="text-lg font-semibold text-red-600">
            Error loading customer
          </p>
          <p className="text-sm text-gray-600 mt-2">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_379px] gap-5">
        <div className="space-y-6">
          <CustomerProfileHeader
            name={name}
            email={email}
            avatarUrl={avatarUrl}
            totalOrders={totalOrders}
            completedOrders={completedOrders}
            cancelledOrders={cancelledOrders}
            onSuspendClick={handleSuspendAccount}
            loading={loading || isSuspending}
          />
        </div>
        <CustomerInfoSidebar address={address} email={email} phone={phone} />
      </div>
      {id ? (
        <TransactionHistory customerId={id} useAdminEndpoint={true} />
      ) : null}
    </div>
  );
}
