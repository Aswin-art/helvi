"use client";
import {
  getAllCreatedCommunity,
  getFollowedCommunity,
} from "@/actions/communityAction";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CommunityTable } from "@/components/tables/community-table/community-table";
import { columns } from "@/components/tables/community-table/columns";
import { columns as ManageCommunityColumns } from "@/components/tables/manage-community-table/columns";
import { ManageCommunityTable } from "@/components/tables/manage-community-table/community-table";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";

const breadcrumbItems = [
  { title: "Dashboard", link: "/user" },
  { title: "Komunitas", link: "/users/communities" },
];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function Page() {
  const [followedCommunities, setFollowedCommunities] = useState<any>([]);
  const [createdCommunities, setCreatedCommunities] = useState<any>([]);

  const getData = async () => {
    const followedCommunity: any = await getFollowedCommunity();
    const createdCommunity: any = await getAllCreatedCommunity();

    setFollowedCommunities(followedCommunity);
    setCreatedCommunities(createdCommunity);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Komunitas Yang Diikuti (${followedCommunities.length})`}
            description="Manage komunitas"
          />
        </div>
        <Separator />

        <CommunityTable
          searchKey="name"
          pageNo={1}
          columns={columns}
          totalData={followedCommunities.length}
          data={followedCommunities}
          pageCount={1}
        />
      </div>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <div className="flex items-start justify-between">
          <Heading
            title={`Komunitas Yang Dibuat (${createdCommunities.length})`}
            description="Manage komunitas"
          />

          <Link
            href={"/users/communities/create"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />

        <ManageCommunityTable
          searchKey="name"
          pageNo={1}
          columns={ManageCommunityColumns}
          totalData={createdCommunities.length}
          data={createdCommunities}
          pageCount={1}
        />
      </div>
    </ScrollArea>
  );
}
