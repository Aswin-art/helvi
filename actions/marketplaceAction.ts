"use server";

import { db } from "@/lib/db";

export const getAllProducts = async () => {
  const products = await db.products.findMany();

  return products;
};

export const getAllUserProducts = async (user_id: string) => {
  const products = await db.userBuys.findMany({
    where: {
      user_id,
    },
  });

  return products;
};

export const buyProduct = async (user_id: string, product_id: string) => {
  try {
    const createReward = await db.userBuys.create({
      data: {
        user_id,
        product_id,
      },
    });

    return createReward;
  } catch (err) {
    console.log(err);
  }
};
