import { checkUser } from "@/actions/userAction";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import RouteGuard from "@/components/RouteGuard";
import Sidebar from "@/components/Sidebar";
import { currentUser } from "@clerk/nextjs/server";
import { Toaster } from "react-hot-toast";

interface UserData {
  id: string;
}

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await checkUser();
  const user = await currentUser();
  let role: string | undefined = "";

  if (user) {
    role = user.privateMetadata.role as string | undefined;
  }
  return (
    <>
      {user ? (
        <RouteGuard role={role}>
          <Toaster />
          <Header />
          <div className="flex h-screen overflow-hidden">
            <Sidebar role={role} />
            <main className="flex-1 overflow-hidden pt-16">{children}</main>
          </div>
        </RouteGuard>
      ) : (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <Loading />
        </div>
      )}
    </>
  );
}
