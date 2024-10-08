"use server";

import { db } from "@/lib/db";

export const getAllRewards = async () => {
  const rewards = await db.rewards.findMany();

  return rewards;
};

export const createNewReward = async (
  name: string,
  price: number,
  url: string
) => {
  try {
    const createReward = await db.rewards.create({
      data: {
        name,
        price,
        image: url,
      },
    });

    return createReward;
  } catch (err) {
    console.log(err);
  }
};
