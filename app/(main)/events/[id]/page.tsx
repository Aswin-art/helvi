"use client";
import { getEventById, joinEvent } from "@/actions/eventAction";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Wrapper from "@/components/Wrapper";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Props = {
  params: { params: { id: string } };
};

const Page = ({ params }: { params: { id: string } }) => {
  const [event, setEvent] = useState();
  const getEventDetail = async () => {
    const event = await getEventById(params.id);
    if (event) {
      // setEvent(event);
    }
  };
  const handleJoinEvent = async () => {
    const user = await currentUser();
    if (user) {
      // await joinEvent(event.id, user.id);

      toast.success("Berhasil");
    }
  };
  useEffect(() => {
    getEventDetail();
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
                  Event <span className="text-primary">Lingkungan</span>
                </h2>
                <Link href={"/events"}>Lainnya</Link>
              </div>
              <div className="mt-10 flex flex-col gap-4">
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
                <p className="text-xl font-bold">Komunitas Peduli Sehat</p>
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
                  Lokasi <span className="text-primary">Event</span>
                </p>
                <div className="mt-10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.641595163426!2d112.79181327592889!3d-7.2815576927256584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa13a3fa7dd7%3A0x2b376f2c5ad1617c!2sRektorat%20ITS!5e0!3m2!1sid!2sid!4v1722398414886!5m2!1sid!2sid"
                    allowFullScreen
                    loading="lazy"
                    className="rounded-lg border-muted border w-full h-[500px]"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="mt-10 ms-auto w-full">
                <Button
                  variant={"outline"}
                  size={"lg"}
                  onClick={handleJoinEvent}
                >
                  Ikuti Event
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
