"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const getAllComments = async (blogId: string) => {
  try {
    const comments = await db.comments.findMany({
      where: {
        blog_id: blogId,
      },
      include: {
        user: true,
      },
    });

    return comments;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const createComment = async (content: string, blog_id: string) => {
  const user = await currentUser();

  if (!user) redirect("/sign-in");

  const blogExists = await db.blogs.findUnique({
    where: {
      id: blog_id,
    },
  });

  if (!blogExists) {
    return null;
  }
  try {
    const comment = await db.comments.create({
      data: {
        content,
        blog_id,
        user_id: user.id,
      },
    });

    if (comment) {
      return comment;
    }

    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
};
