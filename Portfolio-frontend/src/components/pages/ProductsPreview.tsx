import { ProductsListing } from "@/components/products/ProductListing";
import type { Product } from "@/types/products";

const dummyProducts: Product[] = [
  {
    id: "p1",
    title: "Sample Product 1",
    price: 29.99,
    description: "This is a sample product for preview.",
    category: "Sample",
    image: "https://via.placeholder.com/300x300.png?text=Product+1",
    rating: { rate: 4.2, count: 10 },
  },
  {
    id: "p2",
    title: "Sample Product 2",
    price: 49.99,
    description: "Another sample product for preview.",
    category: "Sample",
    image: "https://via.placeholder.com/300x300.png?text=Product+2",
    rating: { rate: 3.9, count: 5 },
  },
  {
    id: "p3",
    title: "Sample Product 3",
    price: 19.99,
    description: "Yet another sample product.",
    category: "Sample",
    image: "https://via.placeholder.com/300x300.png?text=Product+3",
    rating: { rate: 4.7, count: 22 },
  },
];

export default function ProductsPreview() {
  return (
    <section className="pt-60 pb-40 px-10">
      <div className="text-center mb-10">
        <p className="text-gray-500 font-semibold">Products (Preview)</p>
        <h2 className="text-3xl font-bold">
          Our Product <span className="text-gray-600">Collection</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
            Products Preview
          </h3>
        </div>

        <ProductsListing
          products={dummyProducts}
          loading={false}
          refetch={() => {}}
        />
      </div>
    </section>
  );
}
