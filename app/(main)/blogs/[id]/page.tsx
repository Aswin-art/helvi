"use client";
import { createNewComment, getBlogById } from "@/actions/blogAction";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Wrapper from "@/components/Wrapper";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Props = {};

const Page = ({ params }: { params: { id: string } }) => {
  const [blogDetail, setBlogDetail] = useState();
  const [content, setContent] = useState("");

  const getBlogDetail = async () => {
    const blog = getBlogById(params.id);
    // setBlogDetail(blog);
  };
  const handleComment = async () => {
    const user = await currentUser();

    if (user) {
      // await createNewComment(blogDetail.id, user.id, content);

      toast.success("Berhasil");
    }
  };
  useEffect(() => {
    getBlogDetail();
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
                  Berita <span className="text-primary">Lingkungan</span>
                </h2>
                <Link href={"/blogs"}>Lainnya</Link>
              </div>
              <div className="mt-10 flex flex-col gap-4">
                <Link
                  href={"/blogs"}
                  className="group hover:-translate-y-4 duration-200 transition-all ease-in"
                >
                  <Card className="group-hover:border-primary">
                    <CardHeader>
                      <CardTitle>Event Kemanusiaan</CardTitle>
                      <CardDescription>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Cumque necessitatibus officia aliquid rerum beatae
                        esse commodi! Corporis.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
                <Link
                  href={"/events"}
                  className="group hover:-translate-y-4 duration-200 transition-all ease-in"
                >
                  <Card className="group-hover:border-primary">
                    <CardHeader>
                      <CardTitle>Event Kemanusiaan</CardTitle>
                      <CardDescription>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Cumque necessitatibus officia aliquid rerum beatae
                        esse commodi! Corporis.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
                <Link
                  href={"/events"}
                  className="group hover:-translate-y-4 duration-200 transition-all ease-in"
                >
                  <Card className="group-hover:border-primary">
                    <CardHeader>
                      <CardTitle>Event Kemanusiaan</CardTitle>
                      <CardDescription>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Cumque necessitatibus officia aliquid rerum beatae
                        esse commodi! Corporis.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
                <Link
                  href={"/events"}
                  className="group hover:-translate-y-4 duration-200 transition-all ease-in"
                >
                  <Card className="group-hover:border-primary">
                    <CardHeader>
                      <CardTitle>Event Kemanusiaan</CardTitle>
                      <CardDescription>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Cumque necessitatibus officia aliquid rerum beatae
                        esse commodi! Corporis.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </div>
              <div className="flex flex-col gap-4"></div>
            </div>
            <div className="col-span-8 lg:order-2 order-1">
              <div className="border border-input rounded-md p-4">
                <p className="text-xl font-bold">Berita Sampah Hari Ini</p>
                <p className="text-muted-foreground">20 April 2024</p>
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
                  Tinggalkan <span className="text-primary">Komentar</span>
                </p>
                <div className="mt-10">
                  <div className="border border-muted rounded-md min-h-[500px] overflow-auto p-4">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-justify-between gap-4">
                        <Avatar>
                          <AvatarImage src="/logo.svg" />
                          <AvatarFallback>IN</AvatarFallback>
                        </Avatar>
                        <div className="border border-muted rounded-md p-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Rem dignissimos eligendi consequuntur corrupti
                          ipsam dolore laboriosam necessitatibus unde nostrum
                          nemo.
                        </div>
                      </div>
                      <div className="flex flex-justify-between gap-4">
                        <div className="border border-primary rounded-md p-4">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Rem dignissimos eligendi consequuntur corrupti
                          ipsam dolore laboriosam necessitatibus unde nostrum
                          nemo.
                        </div>
                        <Avatar>
                          <AvatarImage src="/logo.svg" />
                          <AvatarFallback>IN</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <Textarea
                      placeholder="ketikan komentar..."
                      onChange={(e) => setContent(e.target.value)}
                    />
                    <Button
                      variant={"outline"}
                      className="mt-5"
                      onClick={handleComment}
                    >
                      Kirim
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
