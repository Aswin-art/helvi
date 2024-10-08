import { getAllCommunities } from "@/actions/communityAction";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CommunityTable } from "@/components/tables/community-table/community-table";
import { columns } from "@/components/tables/community-table/columns";
import { EmployeeTable } from "@/components/tables/employee-tables/employee-table";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Employee } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

const breadcrumbItems = [
  { title: "Dashboard", link: "/user" },
  { title: "Komunitas", link: "/user/communities" },
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

  const res = await getAllCommunities();
  // const employeeRes = await res.json();
  // const totalUsers = employeeRes.total_users; //1000
  // const pageCount = Math.ceil(totalUsers / pageLimit);
  // const employee: Employee[] = employeeRes.users;
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Komunitas (${res.length})`}
            description="Manage komunitas"
          />

          <Link
            href={"/user/communities/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />

        <CommunityTable
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
