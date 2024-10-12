"use server";

import { db } from "@/lib/db";

export const getAllBlogs = async () => {
  const blogs = await db.blogs.findMany({
    where: {
      type: "BLOG",
    },
  });

  return blogs;
};

export const getBlogById = async (id: string) => {
  const blog = await db.blogs.findUnique({
    where: {
      id,
    },
    include: {
      Comments: {
        include: {
          user: true,
        },
      },
    },
  });

  return blog;
};

export const createNewBlog = async (
  title: string,
  description: string,
  url: string
) => {
  try {
    const createBlog = await db.blogs.create({
      data: {
        title,
        description,
        image: url,
      },
    });

    return createBlog;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const createNewComment = async (
  blog_id: string,
  user_id: string,
  content: string
) => {
  try {
    const createBlog = await db.comments.create({
      data: {
        user_id,
        blog_id,
        content,
      },
    });

    return createBlog;
  } catch (err) {
    console.log(err);
  }
};
