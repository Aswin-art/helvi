"use client";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { columns } from "@/components/tables/employee-tables/columns";
import { EmployeeTable } from "@/components/tables/employee-tables/employee-table";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Employee } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createNewBlog } from "@/actions/blogAction";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/EditableEditor"), {
  ssr: false,
});

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
});

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin" },
  { title: "Edukasi", link: "/admin/educations" },
  { title: "Buat Edukasi", link: "/admin/educations/create" },
];

export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Tambah Edukasi`}
            description="Masukkan data sesuai dengan form."
          />
        </div>
        <Separator />

        <Editor />
      </div>
    </>
  );
}
