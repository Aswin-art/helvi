import { getAllWasteExchanges } from "@/actions/wasteExchangeAction";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { columns } from "@/components/tables/wasteExchange-table/columns";
import { WasteExchangesTable } from "@/components/tables/wasteExchange-table/wasteExchange-table";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin-post" },
  { title: "Berita", link: "/admin-post/waste_exchanges" },
];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function page({ searchParams }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const country = searchParams.search || null;
  const offset = (page - 1) * pageLimit;

  const res = await getAllWasteExchanges();
  console.log(res);
  // const employeeRes = await res.json();
  // const totalUsers = employeeRes.length; //1000
  // const pageCount = Math.ceil(totalUsers / pageLimit);
  // const employee: Employee[] = employeeRes.users;
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Jumlah Pengumpulan Sampah (${res.length})`}
            description="Kelola pengumpulan sampah tentang sampah"
          />

          <Link
            href={"/admin-post/waste_exchanges/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />

        <WasteExchangesTable
          searchKey="title"
          pageNo={1}
          columns={columns}
          totalData={res.length}
          data={res}
          pageCount={1}
        />
      </div>
    </>
  );
}
