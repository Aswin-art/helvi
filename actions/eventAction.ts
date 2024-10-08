"use server";

import { db } from "@/lib/db";

export const getAllEvents = async () => {
  const events = await db.events.findMany();

  return events;
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
  }
};
