"use client";

import { getAllUserWasteExchanges } from "@/actions/wasteExchangeAction";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WasteExchangesTable } from "@/components/tables/wasteExchange-table/wasteExchange-table";
import { columns } from "@/components/tables/wasteExchange-table/columns";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const breadcrumbItems = [
  { title: "Dashboard", link: "/users" },
  { title: "Pengumpulan Sampah", link: "/users/waste_exchanges" },
];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function Page({ searchParams }: paramsProps) {
  const [waste, setWaste] = useState<any>([]);
  const getData = async () => {
    const res: any = await getAllUserWasteExchanges();
    console.log(res);
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
          title={`Riwayat Pengumpulan Sampah (${waste.length})`}
          description="Manage pengumpulan sampah"
        />
      </div>
      <Separator />

      <WasteExchangesTable
        searchKey="point"
        pageNo={1}
        columns={columns}
        totalData={waste.length}
        data={waste}
        pageCount={1}
      />
    </div>
  );
}
