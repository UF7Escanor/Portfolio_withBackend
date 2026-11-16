import toast from "react-hot-toast";
import { AddNewProductModal } from "../products/AddProductModal";

import { useFetchService } from "@/components/hooks/useService";
import { ProductsListing } from "@/components/products/ProductListing";
import { Button } from "@/components/ui/button";
import { productService } from "@/service/productService";
import { Loader } from "lucide-react";

export default function ProductsPage() {
  const { loading, data, refetch } = useFetchService({
    fetchFunction: () =>
      productService.getProducts({
        onFailure: (message) => toast.error(message),
      }),
  });

  return (
    <section className="pt-60 pb-40 px-10">
      <div className="text-center mb-10">
        <p className="text-[#00F5FF] font-semibold">Products</p>
        <h2 className="text-3xl font-bold">
          Our Product <span className="text-[#3B82F6]">Collection</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
            Products
          </h3>

          <div className="flex gap-3">
            <AddNewProductModal refetch={refetch} />

            <Button
              variant="outline"
              onClick={refetch}
              disabled={loading}
              className="text-gray-900"
            >
              {loading ? (
                <Loader className="animate-spin text-gray-900" />
              ) : (
                "Refresh"
              )}
            </Button>
          </div>
        </div>

        <ProductsListing
          products={data?.data || []}
          loading={loading}
          refetch={refetch}
        />
      </div>
    </section>
  );
}
