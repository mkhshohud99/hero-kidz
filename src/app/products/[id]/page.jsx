import { getSingleProduct } from "@/action/server/product";
import ProductClient from "./ProductClient";

export default async function ProductDetails({ params }) {
  // ✅ FIX: unwrap params (Next.js 15+)
  const { id } = await params;

  const product = await getSingleProduct(id);

  if (!product) {
    return <p className="text-center">Product not found</p>;
  }

  const discountedPrice = Math.round(
    product.price - (product.price * product.discount) / 100
  );

  return (
    <ProductClient
      product={product}
      discountedPrice={discountedPrice}
    />
  );
}