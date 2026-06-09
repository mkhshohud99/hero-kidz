import Products from '@/components/Home/Products';
import React from 'react';
export const metadata = {
  title: "%s | Products",

  description:
    "Browse our complete collection of fashion and lifestyle products. Find quality items at competitive prices.",

  openGraph: {
    title: "Products | Hero Kids",
    description:
      "Explore our latest product collection and discover your next favorite item.",
    images: ["/products-preview.jpg"],
  },
};

const ProductPage = () => {
    return (
        <div>
            <Products></Products>
        </div>
    );
};

export default ProductPage;