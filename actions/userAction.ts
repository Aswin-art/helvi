"use server";
import { db } from "@/lib/db";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { ROLE } from "@prisma/client";
import { redirect } from "next/navigation";

type UserData = {
  id: string;
  name: string | null;
  email: string;
  photo_url: string;
  role: ROLE | undefined;
};

const insertUser = async ({ id, name, email, photo_url, role }: UserData) => {
  try {
    await db.user.create({
      data: {
        id,
        email,
        name,
        role,
        photo_url,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) return redirect("/sign-in");

  const getUserFromDB = await db.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!getUserFromDB) {
    let role: ROLE = "USER";

    if (
      user.emailAddresses[0].emailAddress ===
      "22081010099@student.upnjatim.ac.id"
    ) {
      role = "ADMIN";
    }

    if (user.emailAddresses[0].emailAddress === "aswinarung@gmail.com") {
      role = "ADMIN_POST";
    }

    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        role,
      },
    });

    const data: UserData = {
      id: user.id,
      name: user.fullName,
      email: user.emailAddresses[0].emailAddress,
      photo_url: user.imageUrl,
      role,
    };

    await insertUser(data);

    return data;
  }

  return user;
};

export const getCurrentUser = async () => {
  const user = await currentUser();

  return user;
};

export const getAllUsers = async () => {
  const users = db.user.findMany({
    where: {
      role: "USER",
    },
  });

  return users;
};

export const addPoinCoinUser = async (
  id: string,
  point: number,
  coin: number
) => {
  try {
    const data = await db.user.update({
      where: {
        id,
      },
      data: {
        point: {
          increment: point,
        },
        coin: {
          increment: coin,
        },
      },
    });

    return data;
  } catch (err) {
    console.log(err);
  }
};
