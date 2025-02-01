"use client"
import Link from "next/link";
import React from "react";
import { FaHouse } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);
  
  return (
    <div className="text-lg breadcrumbs pb-10 py-5 max-sm:text-base">
      <ul>
        <li>
          <Link href="/">
            <FaHouse className="mr-2" />
            Home
          </Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        {pathSegments[1] && (
          <li>
            <span className="text-gray-600">
              {pathSegments[1].replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())}
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Breadcrumb;
