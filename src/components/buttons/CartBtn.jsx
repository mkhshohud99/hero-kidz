"use client";

import { usePathname, useRouter } from "next/navigation";
import { FaCartPlus } from "react-icons/fa";

const CartBtn = ({ product }) => {
    const router = useRouter();
    const path = usePathname();
    const isLogin = true;
  const handleAddToCart = () => {
    if(isLogin){
        alert(`Added to cart: ${product._id}`);
    }router.push(`/login?callbackUrl=${path}`)
  };

  return (
    <button
      onClick={handleAddToCart}
      className="btn btn-primary"
    >
        <FaCartPlus></FaCartPlus>
      Add to Cart
    </button>
  );
};

export default CartBtn;