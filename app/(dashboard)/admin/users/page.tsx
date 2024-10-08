import { getAllBlogs } from "@/actions/blogAction";
import { getAllUsers } from "@/actions/userAction";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogTable } from "@/components/tables/blog-table/blog-table";
import { columns } from "@/components/tables/user-table/columns";
import { EmployeeTable } from "@/components/tables/employee-tables/employee-table";
import { UserTable } from "@/components/tables/user-table/user-table";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Employee } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin" },
  { title: "Pengguna", link: "/admin/users" },
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

  const res = await getAllUsers();
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
            title={`Jumlah Pengguna (${res.length})`}
            description="Kelola pengguna tentang sampah"
          />

          <Link
            href={"/admin/users/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />

        {/* <EmployeeTable
          searchKey="country"
          pageNo={page}
          columns={columns}
          totalUsers={totalUsers}
          data={employee}
          pageCount={pageCount}
        /> */}

        <UserTable
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
