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
import { createNewWasteExchange } from "@/actions/wasteExchangeAction";

const formSchema = z.object({
  weight: z.string(),
  // image: z.string().min(2, {
  //   message: "Image must be at least 2 characters.",
  // }),
  user_id: z.string(),
  total_point: z.string(),
  total_coin: z.string(),
});

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin-post" },
  { title: "Pengumpulan Sampah", link: "/admin-post/waste_exchanges" },
  {
    title: "Buat Pengumpulan Sampah",
    link: "/admin-post/waste_exchanges/create",
  },
];

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      weight: "",
      user_id: "",
      total_point: "",
      total_coin: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const convertedPoint = Number(values.total_point);
    const convertedCoin = Number(values.total_coin);
    const convertedWeight = Number(values.weight);
    const waste = await createNewWasteExchange(
      convertedPoint,
      convertedCoin,
      convertedWeight
    );

    if (waste) {
      toast.success("Berhasil");

      setTimeout(() => {
        router.push("/admin-post/waste_exchanges");
      }, 2000);
    }
  }
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Tambah Pengumpulan Sampah`}
            description="Masukkan data sesuai dengan form."
          />
        </div>
        <Separator />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Berat</FormLabel>
                  <FormControl>
                    <Input disabled={isLoading} type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="total_point"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Point</FormLabel>
                  <FormControl>
                    <Input disabled={isLoading} type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="total_coin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Coin</FormLabel>
                  <FormControl>
                    <Input disabled={isLoading} type="number" {...field} />
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
