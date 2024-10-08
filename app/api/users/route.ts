import { NextResponse } from "next/server";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  const userPrivate = await clerkClient.users.getUser(user?.id);
  return NextResponse.json(userPrivate.privateMetadata);
}
