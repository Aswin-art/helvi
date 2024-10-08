"use server";

import { db } from "@/lib/db";

export const getAllAchievements = async () => {
  const achievements = await db.achievements.findMany();

  return achievements;
};

export const createNewAchievement = async (
  name: string,
  description: string,
  url: string
) => {
  try {
    const createBlog = await db.achievements.create({
      data: {
        name,
        description,
        image: url,
      },
    });

    return createBlog;
  } catch (err) {
    console.log(err);
  }
};
