import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="card bg-base-100 shadow-xl h-full">
      <figure className="h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body flex flex-col">
        <h2 className="card-title">{product.title}</h2>

        <p className="text-gray-500 flex-grow">
          {product.description?.slice(0, 80)}...
        </p>

        <div className="card-actions mt-auto">
          <Link
            href={`/products/${product._id}`}
            className="btn btn-primary w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}