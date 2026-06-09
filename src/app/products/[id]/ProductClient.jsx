"use client";

import Image from "next/image";
import { useState } from "react";

const ProductClient = ({ product, discountedPrice }) => {
  const [zoom, setZoom] = useState(false);

  return (
    <div className="grid md:grid-cols-2 gap-10 p-6">

      {/* IMAGE ZOOM SECTION */}
      <div
        className="relative overflow-hidden rounded-xl"
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
      >
        <Image
          src={product.image}
          alt={product.title}
          width={600}
          height={500}
          className={`transition-transform duration-300 ${
            zoom ? "scale-150" : "scale-100"
          }`}
        />
      </div>

      {/* DETAILS */}
      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <p className="text-gray-500 mt-2">{product.description}</p>

        <div className="mt-4 text-xl font-bold text-primary">
          ৳{discountedPrice}
        </div>

        <button className="btn btn-primary mt-5">
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default ProductClient;