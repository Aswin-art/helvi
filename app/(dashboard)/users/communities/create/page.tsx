"use client";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import FileUpload from "@/components/FileUpload";
import { ScrollArea } from "@/components/ui/scroll-area";
import dynamic from "next/dynamic";
import { createNewCommunity } from "@/actions/communityAction";
const Editor = dynamic(() => import("@/components/EditableEditor"), {
  ssr: false,
});

const breadcrumbItems = [
  { title: "Dashboard", link: "/users" },
  { title: "Komunitas", link: "/users/communities" },
  { title: "Create", link: "/users/create" },
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  image: z.string().min(2, {
    message: "Image must be exists.",
  }),
});

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const create = await createNewCommunity(
      values.name,
      values.description,
      values.image
    );

    if (create) {
      toast.success("Berhasil menambahkan data!");
      router.push("/users/communities");
    } else {
      toast.error("Server mengalami gangguan!");
    }
  };

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Buat Komunitas Baru`}
            description="Lengkapi form untuk menambahkan komunitas baru"
          />
        </div>
        <Separator />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Background Komunitas</FormLabel>
                  <FormControl>
                    <FileUpload
                      apiEndpoint="image"
                      onChange={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Komunitas</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      {...field}
                      placeholder="nama komunitas...."
                    />
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
                  <FormLabel>Deskripsi Komunitas</FormLabel>
                  <FormControl>
                    <Editor onChange={field.onChange} value={field.value} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </ScrollArea>
  );
}
