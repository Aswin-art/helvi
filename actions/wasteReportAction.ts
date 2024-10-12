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

export const getUserWasteReports = async () => {
  const user = await currentUser();

  if (!user) return redirect("/sign-in");
  try {
    const wasteReports = await db.wasteReports.findMany({
      where: {
        user_id: user.id,
      },
    });

    return wasteReports;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const createNewWasteReport = async (location: string, image: string) => {
  const user = await currentUser();

  if (user) {
    try {
      const createWasteReports = await db.wasteReports.create({
        data: {
          user_id: user.id,
          image: image,
          point: 10,
          coin: 10,
          location,
        },
      });

      return createWasteReports;
    } catch (err) {
      console.log(err);
      return null;
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

export const deleteWasteReports = async (id: string) => {
  try {
    const wasteReport = await db.wasteReports.findUnique({
      where: {
        id,
      },
    });

    if (!wasteReport) return null;

    const deleteReport = await db.wasteReports.delete({
      where: {
        id,
      },
    });

    if (!deleteReport) return null;

    return true;
  } catch (err) {
    console.log("waste-report-delete", err);
    return null;
  }
};
