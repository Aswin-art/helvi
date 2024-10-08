"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { CLEANINGTYPE } from "@prisma/client";
import { redirect } from "next/navigation";

export const getAllCommunities = async () => {
  const communities = await db.communities.findMany();

  return communities;
};

export const getCommunityById = async (id: string) => {
  const communities = await db.communities.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
      UserCommunities: true,
    },
  });

  return communities;
};

export const createNewCommunity = async (
  name: string,
  description: string,
  image: string,
  user_id: string
) => {
  try {
    const createNewCommunity = await db.communities.create({
      data: {
        name,
        description,
        image,
        user_id,
      },
    });

    return createNewCommunity;
  } catch (err) {
    console.log(err);
  }
};

export const joinCommunities = async (community_id: string) => {
  const user = await currentUser();

  if (user) {
    try {
      await db.userCommunities.create({
        data: {
          community_id,
          user_id: user.id,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  redirect("/sign-in");
};
