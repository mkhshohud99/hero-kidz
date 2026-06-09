import { getProducts } from "@/action/server/product";
import ProductCard from "../carts/ProductCart";

const Products = async () => {
  const products = await getProducts();

  if (!products.length) {
    return <p className="text-center">No products found</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;