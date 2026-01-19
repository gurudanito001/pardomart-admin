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
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex flex-nowrap gap-[15px] md:gap-[25px] min-w-max pr-2">
          {statCards.map((card, index) => (
            <div
              key={index}
              className="flex-1 min-w-[220px] sm:min-w-[250px] max-w-[267px]"
            >
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
