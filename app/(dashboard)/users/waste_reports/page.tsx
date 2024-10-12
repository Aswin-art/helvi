"use client";

import { getAllWasteReports } from "@/actions/wasteReportAction";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { columns } from "@/components/tables/wasteReports-table/columns";
import { WasteReportTable } from "@/components/tables/wasteReports-table/wasteReports-table";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Employee", link: "/dashboard/employee" },
];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function Page({ searchParams }: paramsProps) {
  const [waste, setWaste] = useState<any>([]);
  const getData = async () => {
    const res = await getAllWasteReports();
    setWaste(res);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="flex items-start justify-between">
        <Heading
          title={`Laporan Sampah (${waste.length})`}
          description="Manage laporan sampah"
        />

        <Link
          href={"/users/waste_reports/create"}
          className={cn(buttonVariants({ variant: "default" }))}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Link>
      </div>
      <Separator />

      <WasteReportTable
        searchKey="location"
        pageNo={1}
        columns={columns}
        totalData={waste.length}
        data={waste}
        pageCount={1}
      />
    </div>
  );
}
