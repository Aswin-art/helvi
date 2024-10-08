"use server";

import { db } from "@/lib/db";
import { addPoinCoinUser } from "./userAction";

export const getAllWasteSchedule = async () => {
  const waste_schedules = await db.wasteTransportationSchedules.findMany();

  return waste_schedules;
};

export const createNewWasteSchedules = async (
  location: string,
  date_pickup: Date
) => {
  try {
    const createWasteSchedules = await db.wasteTransportationSchedules.create({
      data: {
        location,
        date_pickup,
      },
    });

    return createWasteSchedules;
  } catch (err) {
    console.log(err);
  }
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
