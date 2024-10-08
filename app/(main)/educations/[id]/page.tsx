import { getEducationById } from "@/actions/educationAction";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  params: { id: string };
};

const Page = async ({ params }: { params: { id: string } }) => {
  const educationDetail = await getEducationById(params.id);
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
                  Edukasi <span className="text-primary">Lingkungan</span>
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
                <p className="text-xl font-bold">{educationDetail?.title}</p>
                <p className="text-muted-foreground">20 April 2024</p>
                <div className="mt-3">{educationDetail?.description}</div>
              </div>

              <div className="mt-10 border border-input rounded-md p-4">
                <p className="text-xl font-bold">
                  Video <span className="text-primary">Tutorial</span>
                </p>
                <div className="mt-10">
                  <iframe
                    src={
                      educationDetail?.video_url
                        ? educationDetail.video_url
                        : "https://www.youtube.com/embed/uW8XjhO5lWM?si=QsiLYwj5gNgKEcwU"
                    }
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-lg border-muted border w-full h-[500px]"
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
