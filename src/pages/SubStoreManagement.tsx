import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { StatCard } from "@/components/dashboard/StatCard";
import { SubStoresTable } from "@/components/stores/SubStoresTable";
import {
  OrderIcon,
  ProductsIcon,
  InStockIcon,
  OutOfStockIcon,
} from "@/components/icons/CustomIcons";
import { useVendorStores } from "@/hooks/useVendorStores";
import { useVendorOrders } from "@/hooks/useVendorOrders";
import { useUserProducts } from "@/hooks/useUserProducts";
import { useUser } from "@/hooks/useUser";

const WalletBalanceIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.25 6.41667H4.58333C3.57081 6.41667 2.75 7.23748 2.75 8.25V17.4167C2.75 18.4292 3.57081 19.25 4.58333 19.25H19.25C20.2625 19.25 21.0833 18.4292 21.0833 17.4167V8.25C21.0833 7.23748 20.2625 6.41667 19.25 6.41667Z" stroke="#06888C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.75 10.0833H21.0833" stroke="#06888C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.25 2.75H4.58333C3.57081 2.75 2.75 3.57081 2.75 4.58333V6.41667" stroke="#06888C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TotalEarningsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 1.83333V20.1667" stroke="#01891C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.5833 4.58333H8.25C7.03337 4.58333 6.05 5.56671 6.05 6.78333C6.05 8.00004 7.03337 8.98333 8.25 8.98333H13.75C14.9666 8.98333 15.95 9.96671 15.95 11.1833C15.95 12.4 14.9666 13.3833 13.75 13.3833H6.41667" stroke="#01891C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function SubStoreManagement() {
  const { userId } = useParams<{ userId: string }>();

  const { user, loading: userLoading } = useUser({
    userId: userId || "",
  });

  const { stores, loading: storesLoading } = useVendorStores({
    userId: userId || "",
    page: 1,
    size: 100,
  });

  const { totalCount: totalOrders, loading: ordersLoading } = useVendorOrders(
    {},
  );

  const {
    products,
    totalCount: totalProducts,
    loading: productsLoading,
  } = useUserProducts({
    userId: userId || "",
  });

  // Calculate in-stock and out-of-stock counts
  const { inStockCount, outOfStockCount } = useMemo(() => {
    if (!products || products.length === 0) {
      return { inStockCount: 0, outOfStockCount: 0 };
    }

    const inStock = products.filter((product: any) => {
      const stock = product.stock ?? 0;
      return stock > 0;
    }).length;

    const outOfStock = products.filter((product: any) => {
      const stock = product.stock ?? 0;
      return stock === 0;
    }).length;

    return { inStockCount: inStock, outOfStockCount: outOfStock };
  }, [products]);

  const vendorName = user?.name || "Vendor";
  const vendorImage = user?.profileImage || "";

  const statCards = useMemo(
    () => [
      {
        title: "Total Orders",
        value: ordersLoading ? "Loading..." : totalOrders.toLocaleString(),
        change: "+ 0.03%",
        icon: OrderIcon,
        iconSize: 22,
      },
      {
        title: "Total Products",
        value: productsLoading ? "Loading..." : totalProducts.toLocaleString(),
        change: "+ 0.03%",
        icon: ProductsIcon,
        iconSize: 22,
      },
      {
        title: "In-Stock Products",
        value: productsLoading ? "Loading..." : inStockCount.toLocaleString(),
        change: "+ 0.03%",
        icon: InStockIcon,
        iconSize: 22,
      },
      {
        title: "Out-of-Stock Products",
        value: productsLoading
          ? "Loading..."
          : outOfStockCount.toLocaleString(),
        change: "+ 0.03%",
        icon: OutOfStockIcon,
        iconSize: 22,
      },
      {
        title: "Wallet Balance",
        value: "$1,250.00", // MOCK DATA: Ready for backend hook
        change: "Available",
        icon: WalletBalanceIcon,
        iconSize: 22,
      },
      {
        title: "Total Earnings",
        value: "$15,400.00", // MOCK DATA: Ready for backend hook
        change: "Lifetime",
        icon: TotalEarningsIcon,
        iconSize: 22,
      },
    ],
    [
      totalOrders,
      totalProducts,
      inStockCount,
      outOfStockCount,
      ordersLoading,
      productsLoading,
    ],
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-[15px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 md:gap-[25px]">
          {statCards.map((card, index) => (
            <div key={index} className="w-full">
              <StatCard {...card} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6">
        {vendorImage && (
          <img
            src={vendorImage}
            alt={vendorName}
            className="w-10 h-10 rounded-2xl object-cover"
          />
        )}
        <h2 className="font-lato text-[22px] font-bold text-[#023337] leading-normal tracking-[0.11px]">
          {userLoading ? "Loading..." : vendorName}
        </h2>
      </div>

      <SubStoresTable userId={userId || ""} />
    </div>
  );
}