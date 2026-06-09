import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const discountedPrice = Math.round(
    product.price - (product.price * product.discount) / 100
  );

  return (
    <Link href={`/products/${product._id}`}>
      <div className="card bg-base-100 shadow-md hover:shadow-xl transition cursor-pointer">

        <figure className="relative h-64">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />

          {product.discount > 0 && (
            <div className="badge badge-error absolute top-2 right-2 text-white">
              -{product.discount}%
            </div>
          )}
        </figure>

        <div className="card-body">
          <h2 className="card-title text-base line-clamp-2">
            {product.title}
          </h2>

          <div className="flex items-center gap-2 text-sm">
            <FaStar className="text-warning" />
            {product.ratings} ({product.reviews})
          </div>

          <p className="font-bold text-primary">
            ৳{discountedPrice}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;