"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const getAllEvents = async () => {
  const events = await db.events.findMany();

  return events;
};

export const getUserEvents = async () => {
  const user = await currentUser();

  if (!user) redirect("/sign-in");

  try {
    const events = await db.userEvents.findMany({
      where: {
        user_id: user.id,
      },
      include: {
        event: true,
      },
    });

    return events;
  } catch (err) {
    console.log(err);

    return null;
  }
};

export const getEventById = async (id: string) => {
  const event = await db.events.findUnique({
    where: {
      id,
    },
    include: {
      community: {
        include: {
          user: true,
        },
      },
    },
  });

  return event;
};

export const getAllCommunityEvents = async (communityId: string) => {
  try {
    const community = await db.communities.findUnique({
      where: {
        id: communityId,
      },
    });

    if (!community) return null;

    const events = await db.events.findMany({
      where: {
        community_id: community.id,
      },
    });

    return events;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const joinEvent = async (event_id: string, user_id: string) => {
  const event = await db.userEvents.create({
    data: {
      user_id,
      event_id,
      user_code: "HELVI",
    },
  });

  return event;
};

export const createNewEvent = async (
  title: string,
  community_id: string,
  description: string,
  url: string,
  location: string,
  event_date: Date
) => {
  try {
    const createEvent = await db.events.create({
      data: {
        title,
        description,
        image: url,
        location,
        community_id,
        event_date,
      },
    });

    return createEvent;
  } catch (err) {
    console.log(err);
    return null;
  }
};
