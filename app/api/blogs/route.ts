import { db } from "@/lib/db";

export async function GET(request: Request) {
  const blogs = await db.blogs.findMany({
    where: {
      type: "BLOG",
    },
  });

  return Response.json(blogs);
}

export async function POST(request: Request) {
  const res = await request.json();
  return Response.json(res);
}
