"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
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
      UserCommunities: {
        include: {
          user: true,
        },
      },
      Events: true,
    },
  });

  return communities;
};

export const getFollowedCommunity = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect("/sign-in");
  }

  try {
    const community = await db.userCommunities.findMany({
      where: {
        user_id: user.id,
      },
      include: {
        community: true,
      },
    });

    return community;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getAllCreatedCommunity = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect("/sign-in");
  }

  try {
    const community = await db.communities.findMany({
      where: {
        user_id: user.id,
      },
      include: {
        user: true,
        Events: true,
        UserCommunities: true,
      },
    });

    return community;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const createNewCommunity = async (
  name: string,
  description: string,
  image: string
) => {
  const user = await currentUser();

  if (!user) {
    return redirect("/sign-in");
  }
  try {
    const createNewCommunity = await db.communities.create({
      data: {
        name,
        description,
        image,
        user_id: user.id,
      },
    });

    return createNewCommunity;
  } catch (err) {
    console.log(err);
  }
};

export const joinCommunities = async (community_id: string) => {
  const user = await currentUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const isAlreadyJoined = await db.userCommunities.findFirst({
    where: {
      user_id: user.id,
    },
  });

  if (isAlreadyJoined) {
    return null;
  }

  try {
    const res = await db.userCommunities.create({
      data: {
        community_id,
        user_id: user.id,
      },
    });

    return res;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const leaveCommunity = async (communityId: string) => {
  const user = await currentUser();

  if (!user) return redirect("/sign-in");

  const community = await db.userCommunities.findFirst({
    where: {
      community_id: communityId,
      user_id: user.id,
    },
  });

  if (!community) return null;

  try {
    await db.userCommunities.delete({
      where: {
        id: community.id,
      },
    });

    return true;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const deleteCommunity = async (communityId: string) => {
  const user = await currentUser();

  if (!user) return redirect("/sign-in");

  const isCommunityExists = await db.communities.findUnique({
    where: {
      id: communityId,
    },
  });

  if (!isCommunityExists) return null;

  try {
    await db.communities.findUnique({
      where: {
        id: communityId,
      },
    });

    return true;
  } catch (err) {
    console.log(err);
    return null;
  }
};
