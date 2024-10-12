import { getAllUserCleaningServices } from "@/actions/cleaningServiceAction";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CleaningServiceTable } from "@/components/tables/cleaningService-table/community-table";
import { columns } from "@/components/tables/cleaningService-table/columns";
import { EmployeeTable } from "@/components/tables/employee-tables/employee-table";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Employee } from "@/constants/data";
import { cn } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { Plus } from "lucide-react";
import Link from "next/link";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Employee", link: "/dashboard/employee" },
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

  // const user = await currentUser();
  // let res = [];

  // if (user) {
  //   res = await getAllUserCleaningServices(user.id);
  // }

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
            title={`jasa Kebersihan`}
            description="Manage jasa kebersihan"
          />

          <Link
            href={"/users/cleaning_services/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />

        {/* <CleaningServiceTable
          searchKey="country"
          pageNo={1}
          columns={columns}
          total={res.length}
          data={res}
          pageCount={1}
        /> */}
      </div>
    </>
  );
}
