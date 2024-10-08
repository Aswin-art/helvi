"use server";

import { db } from "@/lib/db";
import { addPoinCoinUser } from "./userAction";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const getAllWasteReports = async () => {
  const waste_exchanges = await db.wasteReports.findMany({
    include: {
      user: true,
    },
  });

  return waste_exchanges;
};

export const createNewWasteReport = async (location: string) => {
  const user = await currentUser();

  if (user) {
    try {
      const createWasteReports = await db.wasteReports.create({
        data: {
          user_id: user.id,
          image: "test",
          point: 0,
          coin: 0,
          location,
        },
      });

      await addPoinCoinUser(user.id, 10, 10);

      return createWasteReports;
    } catch (err) {
      console.log(err);
    }
  }

  return null;
};

export const updateWasteReports = async (id: string) => {
  try {
    const waste_report = await db.wasteReports.findUnique({
      where: {
        id,
      },
    });

    if (waste_report) {
      await addPoinCoinUser(waste_report.user_id, 20, 20);
    }
  } catch (err) {
    console.log(err);
  }
};
