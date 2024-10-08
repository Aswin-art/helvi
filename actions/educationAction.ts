"use server";

import { db } from "@/lib/db";

export const getAllEducations = async () => {
  const blogs = await db.blogs.findMany({
    where: {
      type: "EDUCATION",
    },
  });

  return blogs;
};

export const getEducationById = async (id: string) => {
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

export const createNewEducation = async (
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
        type: "EDUCATION",
      },
    });

    return createBlog;
  } catch (err) {
    console.log(err);
  }
};
