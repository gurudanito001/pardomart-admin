import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, MessageSquare, Phone, Edit, Camera, MapPin, User, Clock, X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { orderApi } from "@/lib/apiClient";
import type { Order } from "../../api-client";

// --- ADDED DELIVERY PROOF COMPONENT ---
export function DeliveryProofCard() {
  // MOCK DATA: Ready to be swapped with your API data (e.g., order.deliveryDetails)
  const deliveryData = {
    status: "Completed",
    driverName: "Michael Okoye",
    dropoffTime: "Apr 10, 2026 • 2:45 PM",
    dropoffLocation: "Front Porch",
    proofPhotoUrl: "https://api.builder.io/api/v1/image/assets/TEMP/a9e103d8b6d8d3b7227ec3db30eb8b13847c23dd?width=600", 
  };

  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4 rounded-xl border border-[#D9D9D9] bg-white p-5 mt-6">
        <h3 className="font-sans text-base font-bold text-black leading-5">Delivery Proof</h3>
        
        {/* Status & Timestamp */}
        <div className="flex items-center justify-between border-b border-[#D9D9D9] pb-3">
          <div className="flex items-center gap-2">
            <span className={`rounded-md px-2 py-1 text-xs font-bold ${deliveryData.status === 'Completed' ? 'bg-[#E9F3E9] text-[#01891C]' : 'bg-red-50 text-red-600'}`}>
              {deliveryData.status}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#707070]">
            <Clock size={14} />
            <span>{deliveryData.dropoffTime}</span>
          </div>
        </div>

        {/* Driver & Location */}
        <div className="flex flex-col gap-3 py-1">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5F6FA] text-[#7E84A3]">
              <User size={14} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wide text-[#707070]">Delivery Agent</p>
              <p className="font-sans text-sm font-semibold text-black">{deliveryData.driverName}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5F6FA] text-[#7E84A3]">
              <MapPin size={14} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wide text-[#707070]">Drop-off Location</p>
              <p className="font-sans text-sm font-semibold text-black">{deliveryData.dropoffLocation}</p>
            </div>
          </div>
        </div>

        {/* Proof of Delivery Photo Thumbnail */}
        <div className="mt-1">
          <p className="mb-2 text-[10px] uppercase tracking-wide text-[#707070]">Proof Photo</p>
          <div 
            onClick={() => setIsPhotoModalOpen(true)}
            className="group relative h-32 w-full cursor-pointer overflow-hidden rounded-lg border border-[#D9D9D9] bg-[#F5F6FA]"
          >
            <img 
              src={deliveryData.proofPhotoUrl} 
              alt="Proof of Delivery" 
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex items-center gap-2 rounded-lg bg-white/20 px-3 py-1.5 backdrop-blur-md">
                <Camera size={14} className="text-white" />
                <span className="text-xs font-medium text-white">View Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Photo Modal */}
      {isPhotoModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <button 
              onClick={() => setIsPhotoModalOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>
            <img 
              src={deliveryData.proofPhotoUrl} 
              alt="Proof of Delivery Full Size" 
              className="max-h-[80vh] w-auto object-contain"
            />
            <div className="bg-white p-5 border-t border-gray-100">
              <p className="font-sans text-sm font-bold text-black">Delivered by {deliveryData.driverName}</p>
              <p className="text-sm text-[#707070]">{deliveryData.dropoffTime}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
// ----------------------------------------

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 17.5C10.9849 17.5 11.9602 17.306 12.8701 16.9291C13.7801 16.5522 14.6069 15.9997 15.3033 15.3033C15.9997 14.6069 16.5522 13.7801 16.9291 12.8701C17.306 11.9602 17.5 10.9849 17.5 10C17.5 9.01509 17.306 8.03982 16.9291 7.12987C16.5522 6.21993 15.9997 5.39314 15.3033 4.6967C14.6069 4.00026 13.7801 3.44781 12.8701 3.0709C11.9602 2.69399 10.9849 2.5 10 2.5C8.01088 2.5 6.10322 3.29018 4.6967 4.6967C3.29018 6.10322 2.5 8.01088 2.5 10C2.5 11.9891 3.29018 13.8968 4.6967 15.3033C6.10322 16.7098 8.01088 17.5 10 17.5ZM9.80667 13.0333L13.9733 8.03333L12.6933 6.96667L9.11 11.2658L7.25583 9.41083L6.0775 10.5892L8.5775 13.0892L9.2225 13.7342L9.80667 13.0333Z"
      fill="#088034"
    />
  </svg>
);

const CheckedCardIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 1.875C5.5 1.875 1.875 5.5 1.875 10C1.875 14.5 5.5 18.125 10 18.125C14.5 18.125 18.125 14.5 18.125 10C18.125 9.125 18.0075 8.25375 17.695 7.44125L16.68 8.4375C16.805 8.9375 16.8756 9.4375 16.8756 10C16.8756 13.8125 13.8131 16.875 10.0006 16.875C6.18812 16.875 3.125 13.8125 3.125 10C3.125 6.1875 6.1875 3.125 10 3.125C11.875 3.125 13.5588 3.87125 14.7463 5.05875L15.625 4.18C14.1875 2.7425 12.1875 1.875 10 1.875ZM17.05 4.55L10 11.6019L7.325 8.92688L6.425 9.825L9.55 12.95L10 13.3787L10.45 12.9494L17.95 5.44937L17.05 4.54937V4.55Z"
      fill="#21C45D"
    />
  </svg>
);

export default function OrderDetails() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const {
    data: order,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["order", id],
    queryFn: async () => {
      if (!id) throw new Error("Order ID is required");
      const response = await orderApi.orderIdGet(id);
      return response.data as Order; 
    },
    enabled: !!id,
  });

  if (isLoading) return <div className="p-8">Loading order details...</div>;
  if (error)
    return (
      <div className="p-8 text-red-500">
        Error loading order: {(error as Error).message}
      </div>
    );
  if (!order) return <div className="p-8">Order not found</div>;

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (dateString?: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5 w-full">
      {/* Left Column - Order Information */}
      <div className="flex-1 space-y-6 bg-white p-6 sm:p-8 md:p-12 rounded-[11px]">
        {/* Header */}
        <div className="">
          <div className="mb-2 flex items-center gap-[17px]">
            <button
              onClick={() => navigate("/orders")}
              className="flex items-center gap-3"
            >
              <svg
                width="21"
                height="16"
                viewBox="0 0 21 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.01936 0.335527L6.86863 0.468629L0.468629 6.86863C-0.108145 7.4454 -0.152512 8.35297 0.335527 8.98064L0.468629 9.13137L6.86863 15.5314C7.49347 16.1562 8.50653 16.1562 9.13137 15.5314C9.70814 14.9546 9.75251 14.047 9.26447 13.4194L9.13137 13.2686L5.4624 9.5984L19.2 9.6C20.0837 9.6 20.8 8.88366 20.8 8C20.8 7.11634 20.0837 6.4 19.2 6.4L5.4656 6.3984L9.13137 2.73137C9.70814 2.1546 9.75251 1.24703 9.26447 0.619361L9.13137 0.468629C8.5546 -0.108145 7.64703 -0.152512 7.01936 0.335527Z"
                  fill="#7E84A3"
                />
              </svg>
              <h2 className="font-sans text-2xl font-bold text-[#202224] leading-normal tracking-[-0.114px]">
                Orders Code: #
                {(order as any).orderCode || order.id?.slice(0, 8) || "N/A"}
              </h2>
            </button>
            <div
              className={`flex items-center justify-center gap-[2px] rounded-lg px-[6px] py-[2px] ${order.paymentStatus === "paid" ? "bg-[rgba(33,196,93,0.10)]" : "bg-gray-100"}`}
            >
              {order.paymentStatus === "paid" && <CheckIcon />}
              <span
                className={`font-nunito text-xl leading-5 ${order.paymentStatus === "paid" ? "text-[#21C45D]" : "text-gray-500"}`}
              >
                {order.paymentStatus
                  ? order.paymentStatus.charAt(0).toUpperCase() +
                    order.paymentStatus.slice(1)
                  : "N/A"}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-[15px]">
            <span className="font-sans text-base leading-5">
              <span className="text-[#898A8D]">Order Date</span>{" "}
              <span className="text-black">{formatDate(order.createdAt)}</span>
            </span>
            <span className="font-sans text-base leading-5">
              <span className="text-[#898A8D]">Order Time</span>{" "}
              <span className="text-black">{formatTime(order.createdAt)}</span>
            </span>
          </div>
        </div>

        {/* Order Progress Tracking */}
        <div className="rounded-[11px] border border-[#D9D9D9] bg-white">
          <div className="rounded-t-[11px] bg-[#F5F6FA] px-[41px] py-[19px]">
            <div className="flex items-center justify-between">
              <h3 className="font-sans text-base font-bold text-black leading-normal">
                Order Progress Tracking
              </h3>
              <p className="font-sans text-base font-semibold text-[#707070] leading-normal">
                Current Status:{" "}
                {(order.orderStatus as string)?.replace(/_/g, " ") || "N/A"}
              </p>
            </div>
          </div>
          <div className="px-[41px] py-6">
            <div className="flex items-center gap-3">
              <div className="w-full text-center text-gray-500 italic">
                Detailed tracking steps to be implemented based on status
                history. Current:{" "}
                <span className="font-bold text-black">
                  {(order.orderStatus as string)?.replace(/_/g, " ")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="rounded-[11px] border border-[#D9D9D9] bg-[#FCFCFE] p-[29px_27px]">
          <h3 className="mb-[7px] font-sans text-xl font-bold text-black leading-5">
            Products
          </h3>

          {order.orderItems?.map((item: any, index: number) => (
            <div
              key={item.id || index}
              className="flex items-center gap-[23px] border-b border-[#D9D9D9] py-4 last:border-0"
            >
              <img
                src={
                  item.vendorProduct?.images?.[0] ||
                  "https://placehold.co/138x138?text=No+Image"
                }
                alt={item.vendorProduct?.name || "Product"}
                className="h-[69px] w-[69px] rounded-[11px] object-cover"
              />
              <div className="flex-1">
                <div className="mb-1 flex items-center justify-between">
                  <h4 className="font-sans text-base font-semibold text-black leading-normal">
                    {item.vendorProduct?.name || "Unknown Product"}
                  </h4>
                  <p className="font-sans text-base font-bold text-black leading-5">
                    ${item.price?.toFixed(2)}
                  </p>
                </div>
                <p className="mb-1 font-sans text-sm text-[#707070] leading-normal">
                </p>
                <div className="flex items-center gap-2.5">
                  <span className="font-sans text-sm text-[#707070] leading-normal">
                    Quantity ({item.quantity})
                  </span>
                </div>
              </div>
            </div>
          ))}
          {(!order.orderItems || order.orderItems.length === 0) && (
            <div className="py-4 text-center text-gray-500">
              No items found in this order.
            </div>
          )}
        </div>

        {/* Payment Details */}
        <div className="rounded-[11px] border border-[#D9D9D9] bg-white p-[27px_39px]">
          <h3 className="mb-[21px] font-sans text-xl font-bold text-black leading-5">
            Payment Details
          </h3>
          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="font-sans text-base text-[#50555C] leading-5">
                Transaction ID
              </span>
              <span className="font-sans text-base font-bold text-[#06888C] leading-5">
                {(order as any).transactionId ? `#${String((order as any).transactionId).substring(0, 8)}...` : "N/A"}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-sans text-base text-[#50555C] leading-5">
                Payment Method
              </span>
              <span className="font-sans text-base text-[#50555C] leading-5">
                Card
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-sans text-base text-[#50555C] leading-5">
                Subtotal
              </span>
              <span className="font-sans text-base text-black leading-5">
                $
                {(
                  order.orderItems?.reduce(
                    (acc: number, item: any) =>
                      acc + item.price * item.quantity,
                    0,
                  ) || 0
                ).toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-nunito text-base font-medium text-[#50555C] leading-5">
                Shipping Type
              </span>
              <span className="font-sans text-base text-black leading-5">
                {(order.deliveryMethod as string)?.replace(/_/g, " ") ||
                  "Standard"}
              </span>
            </div>
            {order.deliveryFee !== undefined && (
              <div className="flex items-center justify-between">
                <span className="font-sans text-base text-[#50555C] leading-5">
                  Shipping Fee
                </span>
                <span className="font-sans text-base text-black leading-5">
                  ${order.deliveryFee?.toFixed(2)}
                </span>
              </div>
            )}
            <div className="h-px bg-[#D9D9D9]"></div>
            <div className="flex items-center justify-between">
              <span className="font-sans text-base font-bold text-[#131523] leading-5">
                Total
              </span>
              <span className="font-sans text-base font-bold text-black leading-5">
                ${order.totalAmount?.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Customer & Delivery Information */}
      <div className="w-full lg:w-[363px] lg:shrink-0 flex flex-col gap-5">
        
        {/* Customer Information Card */}
        <div className="space-y-[26px] rounded-[11px] bg-white p-6 sm:p-8">
          <h3 className="font-sans text-base font-bold text-black leading-5">
            Customer Information
          </h3>

          {/* Customer Profile */}
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={
                    (order.user as any)?.profilePicture ||
                    "https://placehold.co/92x92?text=User"
                  }
                  alt="Customer"
                  className="h-[46px] w-[46px] rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-sans text-base font-semibold text-black leading-normal">
                    {(order.user as any)?.name || "Unknown Customer"}
                  </h4>
                  <p className="font-sans text-xs text-[#707070] leading-normal">
                    Customer
                  </p>
                </div>
              </div>
            </div>
            <div className="h-px bg-[rgba(215,219,229,0.93)]"></div>
          </div>

          {/* Contact Information */}
          <div className="space-y-5">
            <div>
              <h4 className="mb-2 font-sans text-base font-bold text-black leading-5">
                Contact Information
              </h4>
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-black leading-normal">
                  {(order.user as any)?.mobileNumber || "N/A"}
                </span>
              </div>
            </div>

            <div>
              <h4 className="mb-2 font-sans text-base font-bold text-black leading-5">
                Email
              </h4>
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-black leading-normal">
                  {order.user?.email || "N/A"}
                </span>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="space-y-[25px]">
            <div className="flex items-center justify-between">
              <h4 className="font-sans text-base font-bold text-black leading-5">
                Delivery Address
              </h4>
            </div>
            <div className="h-[200px] w-full rounded-[11px] bg-gray-100 flex items-center justify-center text-gray-400">
              Map View
            </div>

            <div className="flex items-start justify-between">
              <div>
                <p className="font-sans text-sm text-[#50555C] leading-normal">
                  {(order as any).deliveryAddress?.addressLine1 ||
                    "No address provided"}
                </p>
                <p className="font-sans text-sm text-[#50555C] leading-normal">
                  {(order as any).deliveryAddress?.city},{" "}
                  {(order as any).deliveryAddress?.state}{" "}
                  {(order as any).deliveryAddress?.zipCode}
                </p>
                <p className="font-sans text-sm text-[#50555C] leading-normal">
                  {(order as any).deliveryAddress?.country}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <-- ADDED DELIVERY PROOF CARD HERE --> */}
        {/* Only show if the order status implies a driver has been assigned or completed */}
        
           <DeliveryProofCard />
        
        {/* For testing */}

      </div>
    </div>
  );
}