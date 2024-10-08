"use client";
import { getCommunityById, joinCommunities } from "@/actions/communityAction";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Wrapper from "@/components/Wrapper";
import { currentUser } from "@clerk/nextjs/server";
import { Communities } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Page = ({ params }: { params: { id: string } }) => {
  const [communityDetail, setCommunityDetail] = useState();
  const getDetailCommunity = async () => {
    const community = getCommunityById(params.id);
    // setCommunityDetail(community);
  };
  const handleJoinCommunity = async () => {
    // const join = await joinCommunities(communityDetail.id);
    toast.success("Berhasil!");
  };
  useEffect(() => {
    getDetailCommunity();
  }, []);
  return (
    <Wrapper>
      <div className="mt-40">
        <div className="w-full h-[400px] lg:h-[600px]">
          <Image
            src={"/preview.png"}
            alt="banner"
            width={1800}
            height={600}
            className="object-cover rounded-md w-full h-full object-top border border-input"
          />
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="col-span-4 lg:order-1 order-2 border border-input rounded-md p-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-bold">
                  Anggota <span className="text-primary">Komunitas</span>
                </h2>
                <Link href={"/communities"}>Lainnya</Link>
              </div>
              <div className="mt-10 flex flex-col gap-4">
                <Card className="hover:border-primary">
                  <CardHeader>
                    <div className="flex gap-4 justify-between">
                      <Avatar>
                        <AvatarImage src="/logo.svg" />
                        <AvatarFallback>IN</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col gap-2">
                        <CardTitle>Hendra</CardTitle>
                        <CardDescription>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque necessitatibus officia aliquid rerum
                          beatae esse commodi! Corporis.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
              <div className="flex flex-col gap-4"></div>
            </div>
            <div className="col-span-8 lg:order-2 order-1">
              <div className="border border-input rounded-md p-4">
                <p className="text-xl font-bold">Aswin Arung</p>
                <p className="text-muted-foreground">20 April 2024</p>
                <p className="text-2xl font-bold mt-10">Event manusia</p>
                <div className="mt-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                  enim ex modi rerum saepe fugiat recusandae, laborum incidunt
                  illo vel accusantium neque, sequi velit dicta. Velit quas
                  dolore suscipit nulla nam quae ab soluta pariatur inventore,
                  facilis praesentium, culpa minus est officia consequuntur
                  tempora? Numquam fugiat officia omnis ducimus nulla expedita,
                  voluptatum impedit porro quasi necessitatibus minima possimus
                  quos minus vitae, atque cumque sequi, itaque fugit? Amet culpa
                  corporis vero at ad! Quae tempore itaque voluptatibus
                  distinctio dignissimos deleniti, a illo? Voluptate unde maxime
                  voluptatibus vitae eius quas cumque rem? Aperiam ullam ut
                  architecto molestias quas, officia corporis facere dolor.
                </div>
              </div>

              <div className="mt-10 border border-input rounded-md p-4">
                <p className="text-xl font-bold">
                  Event <span className="text-primary">Komunitas</span>
                </p>
                <div className="mt-10 flex flex-col gap-4">
                  <Link
                    href={"/events"}
                    className="group hover:-translate-y-4 duration-200 transition-all ease-in"
                  >
                    <Card className="group-hover:border-primary">
                      <CardHeader>
                        <div className="flex flex-row gap-4">
                          <Image
                            src={"/preview.png"}
                            alt="events"
                            width={200}
                            height={200}
                            className="object-contain border border-muted rounded-md"
                          />
                          <div className="flex flex-col gap-2">
                            <CardTitle>Event Kemanusiaan</CardTitle>
                            <CardDescription>20 Agustus 2024</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tenetur quod fuga obcaecati consequatur vel
                        nesciunt similique natus labore id harum nulla voluptate
                        et nemo, ratione ipsam, debitis sint, quae tempore
                        repellendus aliquam asperiores voluptates non
                        laudantium! Ut expedita, voluptas aliquam tempora veniam
                        voluptatum error laboriosam distinctio ad tenetur iusto.
                        Magni!
                      </CardContent>
                    </Card>
                  </Link>
                  <Link
                    href={"/events"}
                    className="group hover:-translate-y-4 duration-200 transition-all ease-in"
                  >
                    <Card className="group-hover:border-primary">
                      <CardHeader>
                        <div className="flex flex-row gap-4">
                          <Image
                            src={"/preview.png"}
                            alt="events"
                            width={200}
                            height={200}
                            className="object-contain border border-muted rounded-md"
                          />
                          <div className="flex flex-col gap-2">
                            <CardTitle>Event Kemanusiaan</CardTitle>
                            <CardDescription>20 Agustus 2024</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tenetur quod fuga obcaecati consequatur vel
                        nesciunt similique natus labore id harum nulla voluptate
                        et nemo, ratione ipsam, debitis sint, quae tempore
                        repellendus aliquam asperiores voluptates non
                        laudantium! Ut expedita, voluptas aliquam tempora veniam
                        voluptatum error laboriosam distinctio ad tenetur iusto.
                        Magni!
                      </CardContent>
                    </Card>
                  </Link>
                  <Link
                    href={"/events"}
                    className="group hover:-translate-y-4 duration-200 transition-all ease-in"
                  >
                    <Card className="group-hover:border-primary">
                      <CardHeader>
                        <div className="flex flex-row gap-4">
                          <Image
                            src={"/preview.png"}
                            alt="events"
                            width={200}
                            height={200}
                            className="object-contain border border-muted rounded-md"
                          />
                          <div className="flex flex-col gap-2">
                            <CardTitle>Event Kemanusiaan</CardTitle>
                            <CardDescription>20 Agustus 2024</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tenetur quod fuga obcaecati consequatur vel
                        nesciunt similique natus labore id harum nulla voluptate
                        et nemo, ratione ipsam, debitis sint, quae tempore
                        repellendus aliquam asperiores voluptates non
                        laudantium! Ut expedita, voluptas aliquam tempora veniam
                        voluptatum error laboriosam distinctio ad tenetur iusto.
                        Magni!
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>

              <div className="mt-10 ms-auto w-full">
                <Button
                  variant={"outline"}
                  size={"lg"}
                  onClick={handleJoinCommunity}
                >
                  Ikuti komunitas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
