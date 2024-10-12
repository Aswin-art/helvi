"use client";
import {
  getCommunityById,
  joinCommunities,
  leaveCommunity,
} from "@/actions/communityAction";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Wrapper from "@/components/Wrapper";
import { formatDate } from "@/lib/format";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Page = ({ params }: { params: { id: string } }) => {
  const user = useUser();
  const [communityDetail, setCommunityDetail] = useState<any>();
  const [isJoined, setIsJoined] = useState(false);
  const [loading, setLoading] = useState(false);

  const getDetailCommunity = async () => {
    const community: any = await getCommunityById(params.id);
    setCommunityDetail(community);
    setIsJoined(false);

    if (community?.UserCommunities?.length > 0) {
      const isUserInCommunity = community?.UserCommunities?.find(
        (member: any) => member.user_id === user.user?.id
      );

      setIsJoined(isUserInCommunity);
    }
  };

  const handleJoinCommunity = async () => {
    setLoading(true);
    const join = await joinCommunities(communityDetail.id);

    if (join) {
      toast.success("Berhasil!");
      getDetailCommunity();
    } else {
      toast.error("Server mengalami gangguan!");
    }

    setLoading(false);
  };

  const handleLeaveCommunity = async () => {
    setLoading(true);
    const leave = await leaveCommunity(communityDetail.id);

    setLoading(false);

    if (leave) {
      toast.success("Berhasil!");
      getDetailCommunity();
    } else {
      toast.error("Server mengalami gangguan!");
    }
  };

  useEffect(() => {
    getDetailCommunity();
  }, []);
  return (
    <Wrapper>
      <div className="mt-40">
        <div className="w-full h-[400px] lg:h-[600px]">
          <Image
            src={communityDetail?.image}
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
                {communityDetail?.UserCommunities?.length > 0 ? (
                  <>
                    {communityDetail?.UserCommunities?.map((community: any) => (
                      <Card
                        key={community.user.id}
                        className="hover:border-primary"
                      >
                        <CardHeader>
                          <div className="flex gap-4 items-center">
                            <Avatar>
                              <AvatarImage src={community.user?.photo_url} />
                              <AvatarFallback>IN</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col gap-1">
                              <CardTitle>{community.user?.name}</CardTitle>
                              <CardDescription>
                                {community.user?.email}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </>
                ) : (
                  <p className="text-gray-600 text-center">Tidak ada anggota</p>
                )}
              </div>
            </div>
            <div className="col-span-8 lg:order-2 order-1">
              <div className="border border-input rounded-md p-4">
                <p className="text-2xl font-bold">
                  {communityDetail?.user?.name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {formatDate(communityDetail?.created_at)}
                </p>
                <p className="text-2xl font-bold mt-10">
                  {communityDetail?.name}
                </p>
                <div
                  className="mt-3"
                  dangerouslySetInnerHTML={{
                    __html: communityDetail?.description,
                  }}
                />
              </div>

              <div className="mt-10 border border-input rounded-md p-4">
                <p className="text-xl font-bold">
                  Event <span className="text-primary">Komunitas</span>
                </p>
                <div className="mt-10 flex flex-col gap-4">
                  {communityDetail?.Events?.length > 0 ? (
                    <>
                      {communityDetail?.Events?.map((event: any) => (
                        <Link
                          key={event?.id}
                          href={`/events/${event.id}`}
                          className="group hover:-translate-y-4 duration-200 transition-all ease-in"
                        >
                          <Card className="group-hover:border-primary">
                            <CardHeader>
                              <div className="flex flex-row gap-4">
                                <Image
                                  src={event?.image}
                                  alt="events"
                                  width={200}
                                  height={200}
                                  className="object-contain border border-muted rounded-md"
                                />
                                <div className="flex flex-col gap-2">
                                  <CardTitle>{event?.title}</CardTitle>
                                  <CardDescription>
                                    {formatDate(event?.created_at)}
                                  </CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent
                              dangerouslySetInnerHTML={{
                                __html: event?.description,
                              }}
                            />
                          </Card>
                        </Link>
                      ))}
                    </>
                  ) : (
                    <p className="text-gray-600 text-center">Tidak ada event</p>
                  )}
                </div>
              </div>

              <div className="mt-10 ms-auto w-full">
                <Button
                  variant={isJoined ? "destructive" : "outline"}
                  size={"lg"}
                  disabled={loading}
                  onClick={
                    isJoined ? handleLeaveCommunity : handleJoinCommunity
                  }
                >
                  {isJoined ? "Tinggalkan komunitas" : "Ikuti komunitas"}
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
