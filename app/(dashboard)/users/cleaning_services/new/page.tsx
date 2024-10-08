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

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { createNewWasteReport } from "@/actions/wasteReportAction";
import { createNewCleaningService } from "@/actions/cleaningServiceAction";

const formSchema = z.object({
  description: z.string(),
  address: z.string(),
  customer_contact: z.string(),
  // image: z.string().min(2, {
  //   message: "Image must be at least 2 characters.",
  // }),
});

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin-post" },
  { title: "Jasa Kebersihan", link: "/admin-post/waste_exchanges" },
  {
    title: "Buat Jasa Kebersihan",
    link: "/admin-post/waste_exchanges/create",
  },
];

export default function page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      description: "",
      customer_contact: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const waste = await createNewCleaningService(
      values.address,
      values.description,
      values.customer_contact
    );

    if (waste) {
      toast.success("Berhasil");

      setTimeout(() => {
        router.push("/user/cleaning_services");
      }, 2000);
    }
  }
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Pesan Jasa Kebersihan`}
            description="Masukkan data sesuai dengan form."
          />
        </div>
        <Separator />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lokasi Sampah</FormLabel>
                  <FormControl>
                    <Input disabled={isLoading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deskripsi Singkat</FormLabel>
                  <FormControl>
                    <Input disabled={isLoading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customer_contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Customer Contact</FormLabel>
                  <FormControl>
                    <Input disabled={isLoading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "loading..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
