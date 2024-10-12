"use client";
import { getAllBlogs } from "@/actions/blogAction";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogTable } from "@/components/tables/blog-table/blog-table";
import { columns } from "@/components/tables/blog-table/columns";
import { EmployeeTable } from "@/components/tables/employee-tables/employee-table";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Employee } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin" },
  { title: "Berita", link: "/admin/blogs" },
];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function Page({ searchParams }: paramsProps) {
  const [blogs, setBlogs] = useState<any[]>([]);

  const handleGetBlogs = async () => {
    const res = await getAllBlogs();
    console.log(res);

    if (res) {
      setBlogs(res);
    }
  };

  useEffect(() => {
    handleGetBlogs();
  }, []);
  return (
    <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="flex items-start justify-between">
        <Heading
          title={`Jumlah Berita (${blogs.length})`}
          description="Kelola berita tentang sampah"
        />

        <Link
          href={"/admin/blogs/create"}
          className={cn(buttonVariants({ variant: "default" }))}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Link>
      </div>
      <Separator />

      <BlogTable
        searchKey="title"
        pageNo={1}
        columns={columns}
        totalData={blogs.length}
        data={blogs}
        pageCount={1}
      />
    </div>
  );
}
