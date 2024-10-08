"use server";

import { db } from "@/lib/db";
import { addPoinCoinUser } from "./userAction";
import { currentUser } from "@clerk/nextjs/server";

export const getAllWasteExchanges = async () => {
  const waste_exchanges = await db.wasteExchanges.findMany({
    include: {
      user: true,
    },
  });

  return waste_exchanges;
};

export const getAllUserWasteExchanges = async () => {
  const user = await currentUser();

  if (user) {
    const waste_exchanges = await db.wasteExchanges.findMany({
      where: {
        user_id: user.id,
      },
    });

    return waste_exchanges;
  }

  return null;
};

export const getWasteExchangeById = async (id: string) => {
  const blog = await db.wasteExchanges.findUnique({
    where: {
      id,
    },
  });

  return blog;
};

export const createNewWasteExchange = async (
  weight: number,
  // url: string,
  total_point: number,
  total_coin: number
) => {
  try {
    const user = await currentUser();

    if (user) {
      const createWasteExchange = await db.wasteExchanges.create({
        data: {
          user_id: user?.id,
          weight,
          image: "test",
          total_point,
          total_coin,
        },
      });

      await addPoinCoinUser(user.id, total_point, total_coin);
      return createWasteExchange;
    }

    return null;
  } catch (err) {
    console.log(err);
  }
};
