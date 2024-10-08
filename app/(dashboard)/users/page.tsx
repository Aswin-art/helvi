import { checkUser } from "@/actions/userAction";
import { AreaGraph } from "@/components/charts/area-graph";
import { BarGraph } from "@/components/charts/bar-graph";
import { PieGraph } from "@/components/charts/pie-graph";
import { RecentSales } from "@/components/recent-sales";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <div className="grid grid-cols-2 justify-between items-center gap-4">
                  <div className="flex gap-4 flex-col">
                    <CardTitle>Login Harian</CardTitle>
                    <CardDescription>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor nobis magni velit repellendus rerum sit quam,
                      repudiandae, voluptatum minima ea itaque! Nihil dolore
                      error repudiandae tempore? Sit nemo quasi autem!
                    </CardDescription>
                  </div>
                  <Button variant="outline">Login hari ini</Button>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="grid grid-cols-2 justify-between items-center gap-4">
                  <div className="flex gap-4 flex-col">
                    <CardTitle>Misi Harian</CardTitle>
                    <CardDescription>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor nobis magni velit repellendus rerum sit quam,
                      repudiandae, voluptatum minima ea itaque! Nihil dolore
                      error repudiandae tempore? Sit nemo quasi autem!
                    </CardDescription>
                  </div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline">Lihat Misi</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Kumpulkan 5kg sampah!
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction>Mengerti</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold">Achievements</h3>
          <div className="mt-3 flex flex-col lg:flex-row gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Image
                    src={"/hero.jpeg"}
                    width={200}
                    height={200}
                    alt="achievement"
                    className="bg-cover rounded-2xl hover:cursor-pointer"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  Penghargaan pengumpul sampah terbanyak
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Image
                    src={"/pemulung.jpeg"}
                    width={200}
                    height={200}
                    alt="achievement"
                    className="bg-cover rounded-2xl hover:cursor-pointer"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  Penghargaan pengumpul sampah terbanyak
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-bold">Komunitas</h3>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-bold">Events</h3>
        </div>
      </div>
    </ScrollArea>
  );
}
