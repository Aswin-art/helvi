"use client";
import { getUserEvents } from "@/actions/eventAction";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { columns } from "@/components/tables/event-table/columns";
import { EventTable } from "@/components/tables/event-table/event-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

const breadcrumbItems = [
  { title: "Dashboard", link: "/users/events" },
  { title: "Event", link: "/users/events/employee" },
];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function Page({ searchParams }: paramsProps) {
  const [events, setEvents] = useState<any>([]);

  const getData = async () => {
    const getEvents = await getUserEvents();
    setEvents(getEvents);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="flex items-start justify-between">
        <Heading
          title={`Event (${events.length})`}
          description="Manage event"
        />
      </div>
      <Separator />

      <EventTable
        searchKey="title"
        pageNo={1}
        columns={columns}
        totalData={events.length}
        data={events}
        pageCount={0}
      />
    </div>
  );
}
