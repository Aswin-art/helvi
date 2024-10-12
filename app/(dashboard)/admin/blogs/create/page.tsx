"use client";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Separator } from "@/components/ui/separator";

import { z } from "zod";
import dynamic from "next/dynamic";
import { Heading } from "@/components/ui/heading";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FileUpload from "@/components/FileUpload";
import TextareaAutosize from "react-textarea-autosize";
import { createNewBlog } from "@/actions/blogAction";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Editor = dynamic(() => import("@/components/EditableEditor"), {
  ssr: false,
});

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title is required!",
  }),
  description: z.string().min(2, {
    message: "Description is required!",
  }),
  image_url: z.string().min(2, {
    message: "Image is required!",
  }),
});

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin" },
  { title: "Berita", link: "/admin/blogs" },
  { title: "Buat Berita", link: "/admin/blogs/create" },
];

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      image_url: "",
    },
  });

  const router = useRouter();

  const handleCreateBlog = async (values: z.infer<typeof formSchema>) => {
    try {
      const req = await createNewBlog(
        values.title,
        values.description,
        values.image_url
      );

      if (req) {
        toast.success("Berhasil menambahkan data!", {
          duration: 800,
        });

        setTimeout(() => {
          router.push("/admin/blogs");
        }, 1000);
      } else {
        toast.error("Gagal menambahkan data!", {
          duration: 800,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Tambah Berita`}
            description="Masukkan data sesuai dengan form."
          />
        </div>
        <Separator />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleCreateBlog)}>
            <FormField
              control={form.control}
              name="image_url"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FileUpload
                      onChange={field.onChange}
                      value={field.value}
                      apiEndpoint="image"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <TextareaAutosize
                      placeholder="Untitled"
                      className="w-full resize-none appearance-none overflow-hidden mt-5 bg-transparent text-5xl font-bold focus:outline-none"
                      value={field.value}
                      onChange={field.onChange}
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
                  <FormControl>
                    <Editor onChange={field.onChange} value={field.value} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button
                variant={"outline"}
                size={"lg"}
                type="submit"
                className="hover:text-primary hover:border-primary transition-all duration-300"
              >
                Simpan
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </ScrollArea>
  );
}
