"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { CLEANINGTYPE } from "@prisma/client";

export const getAllCleaningServices = async () => {
  const cleaning_services = await db.cleaningServices.findMany({
    include: {
      user: true,
    },
  });

  return cleaning_services;
};

export const getAllUserCleaningServices = async (user_id: string) => {
  const cleaning_services = await db.cleaningServices.findMany({
    where: {
      user_id,
    },
  });

  return cleaning_services;
};

export const createNewCleaningService = async (
  address: string,
  description: string,
  customer_contact: string
) => {
  const user = await currentUser();

  if (user) {
    try {
      const createCleaningService = await db.cleaningServices.create({
        data: {
          address,
          cleaning_date: new Date(),
          customer_contact,
          description,
          user_id: user.id,
        },
      });

      return createCleaningService;
    } catch (err) {
      console.log(err);
    }
  }
};

export const updateCleaningServiceStatus = async (id: string) => {
  try {
    await db.cleaningServices.update({
      where: {
        id,
      },
      data: {
        status: true,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
