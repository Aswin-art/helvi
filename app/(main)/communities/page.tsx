"use client";
import { getAllCommunities } from "@/actions/communityAction";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [communities, setCommunities] = useState<any>([]);

  const getData = async () => {
    const data = await getAllCommunities();

    setCommunities(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Wrapper>
      <div className="pt-40">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Komunitas Lingkungan
        </h2>
        <div className="h-1 bg-primary w-[10%] mt-2"></div>

        <div className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="col-span-3 border border-input rounded-md p-4">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-xl">Filter Komunitas</p>
                  <Button variant={"ghost"}>Reset</Button>
                </div>
                <Input placeholder="name" />
              </div>
            </div>
            <div className="col-span-9">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {communities.map((community: any) => (
                  <Link
                    key={community.id}
                    href={"/communities/" + community.id}
                  >
                    <Card>
                      <Image
                        src={community?.image}
                        alt="image"
                        width={600}
                        height={600}
                        className="object-contain rounded"
                      />
                      <CardHeader>
                        <CardTitle>{community.name}</CardTitle>
                        <CardDescription
                          className="max-w-lg"
                          dangerouslySetInnerHTML={{
                            __html:
                              community.description.slice(0, 300) + "....",
                          }}
                        />
                      </CardHeader>
                      <CardFooter>
                        <div className="ms-auto">
                          <Button variant={"outline"}>Detail</Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
