"use client";

import Image from "next/image";
import CartBtn from "@/components/buttons/CartBtn";

const ProductClient = ({ product }) => {
  const discountedPrice = Math.round(
    product.price - (product.price * product.discount) / 100
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Top Section */}
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left Side Image */}
        <div className="bg-white rounded-xl overflow-hidden border">
          <Image
            src={product.image}
            alt={product.title}
            width={700}
            height={700}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Right Side Details */}
        <div>
          <h1 className="text-4xl font-bold">
            {product.title}
          </h1>

          <p className="text-lg text-gray-500 mt-2">
            {product.bangla}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-4 mt-5">
            <div className="badge badge-warning badge-lg">
              ⭐ {product.ratings}
            </div>

            <span className="text-gray-500">
              {product.reviews} Reviews
            </span>

            <span className="text-gray-500">
              {product.sold} Sold
            </span>
          </div>

          {/* Price */}
          <div className="mt-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-primary">
                ৳{discountedPrice}
              </span>

              <span className="text-xl line-through text-gray-400">
                ৳{product.price}
              </span>

              <span className="badge badge-error">
                -{product.discount}%
              </span>
            </div>
          </div>

          {/* Add To Cart */}
          <div className="mt-8">
            <CartBtn product={product} />
          </div>

          {/* Quick Info */}
          <div className="mt-8 pt-6">
            <div className="grid grid-cols-2 gap-4">

              <div>
                <p className="font-semibold">Availability</p>
                <p className="text-green-600">
                  In Stock
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Details Section */}
      <div className="mt-16">
        <div className="divider text-2xl font-bold">
          Product Details
        </div>

        <div className="bg-base-100 p-6 rounded-xl border">
          <p className="leading-8 text-gray-700">
            {product.description}
          </p>
        </div>

        {/* Product Info */}
        {product.info?.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-5">
              Product Information
            </h2>

            <div className="bg-base-100 border rounded-xl p-6">
              <ul className="space-y-3">
                {product.info.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-2"
                  >
                    <span>✔️</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* QNA */}
        {product.qna?.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-5">
              Questions & Answers
            </h2>

            <div className="space-y-4">
              {product.qna.map((item, index) => (
                <div
                  key={index}
                  className="collapse collapse-arrow bg-base-200"
                >
                  <input type="radio" name="qna" />
                  <div className="collapse-title font-medium">
                    {item.question}
                  </div>

                  <div className="collapse-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductClient;