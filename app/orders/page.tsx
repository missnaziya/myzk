"use client";
import CustomerOrders from "@/components/CustomerOrders";
//import { CustomerOrders, DashboardSidebar } from "@/components";
import React from "react";

const DashboardOrdersPage = () => {
  return (
    <div className="bg-white flex justify-start max-w-screen-2xl mx-auto h-full max-xl:flex-col max-xl:h-fit">
       <h1>Orders</h1>
      <CustomerOrders />
    </div>
  );
};

export default DashboardOrdersPage;
