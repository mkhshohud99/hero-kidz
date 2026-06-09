"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const path = usePathname();

  const isActive =
    href === "/"
      ? path === "/"              // ✅ home only active on exact "/"
      : path.startsWith(href);   // other routes

  return (
    <Link
      href={href}
      className={`font-medium ${isActive ? "text-primary" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;