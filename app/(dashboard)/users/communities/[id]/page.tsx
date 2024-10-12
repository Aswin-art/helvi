"use client";
import {
  getAllCreatedCommunity,
  getCommunityById,
} from "@/actions/communityAction";
import { getAllCommunityEvents } from "@/actions/eventAction";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import FallbackLoading from "@/components/Loading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Plus, UserRoundPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const breadcrumbItems = [
  { title: "Dashboard", link: "/users" },
  { title: "Kelola Komunitas", link: "/users/communities" },
];

export default function Page() {
  const [communities, setCommunities] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const params: any = useParams();

  const getData = async () => {
    const req = await getCommunityById(params.id);
    console.log(req);

    setCommunities(req);
    setLoading(false);
  };

  const router = useRouter();

  useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />
        {loading ? (
          <div className="w-full h-[300px] flex justify-center items-center">
            <FallbackLoading />
          </div>
        ) : (
          <>
            {communities ? (
              <>
                <div className="relative h-[300px]">
                  <Image
                    src={communities?.image || ""}
                    fill
                    alt="background"
                    sizes="100%"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="mt-10">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-40 h-40">
                        <AvatarImage src={communities?.users?.image || ""} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-2xl">
                          {communities?.name}
                        </h3>
                        <div className="flex gap-2">
                          <p className="text-muted-foreground text-sm">
                            {communities?.Events?.length ?? 0} Event
                          </p>
                          <p className="text-muted-foreground text-sm">|</p>
                          <p className="text-muted-foreground text-sm">
                            {communities?.UserCommunities?.length ?? 0} Anggota
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={`/users/communities/${params.id}/events/create`}
                        className={cn(
                          buttonVariants({ variant: "secondary" }),
                          "hover:text-primary"
                        )}
                      >
                        <Plus className="mr-2 h-4 w-4" /> Tambah Event
                      </Link>
                      <Link
                        href={"/users/communities/update/" + communities?.id}
                        className={cn(buttonVariants({ variant: "default" }))}
                      >
                        <UserRoundPen className="mr-2 h-4 w-4" /> Edit komunitas
                      </Link>
                    </div>
                  </div>
                </div>
                <Separator />
                <Tabs defaultValue="events" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="events">Daftar Event</TabsTrigger>
                    <TabsTrigger value="description">Deskripsi</TabsTrigger>
                    <TabsTrigger value="members">Daftar Anggota</TabsTrigger>
                  </TabsList>
                  <TabsContent value="events" className="space-y-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      {communities?.Events?.map((event: any) => (
                        <Card
                          key={event.id}
                          className="group hover:-translate-y-3 hover:border-primary transition-all duration-300"
                        >
                          <div className="relative w-full h-[300px]">
                            <Image
                              src={event.image || ""}
                              alt="image"
                              fill
                              sizes="100%"
                              loading="lazy"
                              className="object-cover w-full h-full rounded-t-lg"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle>
                              <div className="flex w-full justify-between items-center">
                                {event.name}
                                {event.status == "ONGOING" ||
                                  (event.status == "DONE" && (
                                    <Button disabled>Event Berjalan</Button>
                                  ))}
                              </div>
                            </CardTitle>
                            <CardDescription className="max-w-lg">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: event.description
                                    ? event.description.length > 100
                                      ? `${event.description.slice(0, 100)}...`
                                      : event.description
                                    : "",
                                }}
                              />
                            </CardDescription>
                          </CardHeader>
                          <CardFooter>
                            <div className="ms-auto flex gap-2">
                              <Link href={"/events/" + event.id}>
                                <Button
                                  variant={"secondary"}
                                  className="hover:text-primary transition-all duration-300"
                                >
                                  Lihat detail
                                </Button>
                              </Link>
                              <Link
                                href={
                                  "/users/communities/events/update/" + event.id
                                }
                              >
                                <Button variant={"default"}>Edit Event</Button>
                              </Link>
                            </div>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="description" className="space-y-4">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: communities?.description ?? "",
                      }}
                    />
                  </TabsContent>
                  <TabsContent value="members" className="space-y-4">
                    <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
                      {communities?.UserCommunities?.map((member: any) => (
                        <Card
                          key={member.id}
                          className="hover:border-primary hover:-translate-y-2 transition-all duration-300 ease-in-out"
                        >
                          <CardHeader>
                            <div className="flex gap-4 items-center">
                              <Avatar>
                                <AvatarImage src={member?.user?.photo_url} />
                                <AvatarFallback>IN</AvatarFallback>
                              </Avatar>
                              <div className="flex flex-col gap-1">
                                <CardTitle>{member?.user?.name}</CardTitle>
                                <CardDescription>
                                  {member?.user?.email}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </>
            ) : (
              <div className="border-2 border-dotted rounded-lg mt-10 h-[200px] flex justify-center items-center">
                <Link
                  href={"/users/communities/create"}
                  className={cn(buttonVariants({ variant: "default" }))}
                >
                  <Plus className="mr-2 h-4 w-4" /> Buat Komunitas
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </ScrollArea>
  );
}
