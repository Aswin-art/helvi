"use client";
import { getAllEvents, getEventById } from "@/actions/eventAction";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Wrapper from "@/components/Wrapper";
import { formatDate } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  params: { params: { id: string } };
};

const Page = ({ params }: { params: { id: string } }) => {
  const [event, setEvent] = useState<any>();
  const [otherEvents, setOtherEvents] = useState<any>();
  const getEventDetail = async () => {
    const getEventDetail = await getEventById(params.id);
    const getOtherEvents = await getAllEvents();
    setEvent(getEventDetail);
    setOtherEvents(getOtherEvents);
  };
  useEffect(() => {
    getEventDetail();
  }, []);
  return (
    <Wrapper>
      <div className="mt-40">
        <div className="w-full h-[400px] lg:h-[600px]">
          <Image
            src={event?.image}
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
                {otherEvents?.map((event: any) => (
                  <Link
                    key={event.id}
                    href={`/events/${event.id}`}
                    className="group hover:-translate-y-4 duration-200 transition-all ease-in"
                  >
                    <Card className="group-hover:border-primary">
                      <CardHeader>
                        <CardTitle>{event.title}</CardTitle>
                        <CardDescription
                          dangerouslySetInnerHTML={{
                            __html: event.description,
                          }}
                        />
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4"></div>
            </div>
            <div className="col-span-8 lg:order-2 order-1">
              <div className="border border-input rounded-md p-4">
                <p className="text-xl font-bold">{event?.community.name}</p>
                <p className="text-muted-foreground">
                  {formatDate(event?.event_date)}
                </p>
                <p className="text-2xl font-bold mt-10">{event?.title}</p>
                <div
                  className="mt-3"
                  dangerouslySetInnerHTML={{ __html: event?.description }}
                />
              </div>

              <div className="mt-10 border border-input rounded-md p-4">
                <p className="text-xl font-bold">
                  Lokasi <span className="text-primary">Event</span>
                </p>
                <div className="mt-10">
                  <iframe
                    title="location"
                    src={event?.location}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-lg border-muted border w-full h-[500px]"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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
