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
import { useParams, useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import FileUpload from "@/components/FileUpload";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

import { format } from "date-fns";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { createNewEvent } from "@/actions/eventAction";
const EditableEditor = dynamic(() => import("@/components/EditableEditor"), {
  ssr: false,
});

const breadcrumbItems = [
  { title: "Dashboard", link: "/users" },
  { title: "Komunitas", link: "/users/communities" },
  { title: "Buat Event", link: "/users/communities" },
];

const formSchema = z.object({
  title: z.string().min(2, {
    message: "title is required.",
  }),
  description: z.string().min(2, {
    message: "description is required.",
  }),
  image: z.string().min(2, {
    message: "image is required.",
  }),
  location: z.string().min(2, {
    message: "location is required.",
  }),
  event_date: z.date(),
});

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      event_date: new Date(),
      image: "",
      location: "",
      title: "",
    },
  });

  const params: any = useParams();

  const router = useRouter();

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const data = {
      title: values.title,
      description: values.description,
      image: values.image,
      location: values.location,
      community_id: params.id,
      event_date: values.event_date,
    };

    const create = await createNewEvent(
      data.title,
      data.community_id,
      data.description,
      data.image,
      data.location,
      data.event_date
    );

    if (create) {
      toast.success("Berhasil menambah data!");

      router.push(`/users/communities/${params.id}`);
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
            title={`Buat Event Baru`}
            description="Lengkapi form untuk menambahkan event baru"
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
                  <FormLabel>Poster Event</FormLabel>
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
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Event</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="nama event..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="event_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tanggal Event</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lokasi Event</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="lokasi event..." />
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
                  <FormLabel>Deskripsi Event</FormLabel>
                  <FormControl>
                    <EditableEditor
                      onChange={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Separator className="mt-5" />
            <Button type="submit" disabled={isLoading} className="z-50">
              {isLoading ? "Loading..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </ScrollArea>
  );
}
