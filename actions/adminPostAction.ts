"use server";

import { db } from "@/lib/db";

export const getAllAdminPosts = async () => {
  const admin_posts = await db.adminPosts.findMany();

  return admin_posts;
};

export const createNewAdminPost = async (
  name: string,
  description: string,
  location: string
) => {
  try {
    const createAdminPosts = await db.adminPosts.create({
      data: {
        name,
        description,
        location,
      },
    });

    return createAdminPosts;
  } catch (err) {
    console.log(err);
  }
};
