"use client";
import { AdminOrders, DashboardSidebar } from "@/components";
import AdminWarranties from "@/components/AdminWarranties";
import React from "react";

const DashboardWarrantiesPage = () => {
  return (
    <div className="bg-white flex justify-start max-w-screen-2xl mx-auto h-full max-xl:flex-col max-xl:h-fit">
      <DashboardSidebar />
      <AdminWarranties />
    </div>
  );
};

export default DashboardWarrantiesPage;
