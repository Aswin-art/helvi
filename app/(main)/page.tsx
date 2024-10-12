"use client";
import TextEffect from "@/components/TextEffect";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Wrapper from "@/components/Wrapper";
import {
  CalendarClock,
  Gamepad2,
  Handshake,
  Inbox,
  Layers,
  Newspaper,
  ShieldPlus,
  Store,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute h-[1500px] left-0 right-0 top-0 bg-[linear-gradient(to_right,#e0e0e0_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
      <Wrapper>
        <main className="pt-40">
          <div className="flex flex-col gap-4 mx-auto justify-center items-center text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider flex gap-4">
              Jaga <TextEffect />
            </h2>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider">
              Ciptakan{" "}
              <span
                className="underline"
                style={{ textDecorationColor: "#1e40af" }}
              >
                Masa Depan
              </span>
            </h2>
            <p className="text-muted-foreground max-w-lg">
              HELVI bantu kamu{" "}
              <span className="text-primary">kelolah sampah</span> untuk
              menciptakan lingkungan yang sehat demi{" "}
              <span className="text-primary">
                masa depan yang berkelanjutan
              </span>
              .
            </p>
            <div className="relative mt-14">
              <Image
                src={"/preview.png"}
                alt="preview"
                width={1200}
                height={1200}
                className="object-contain border-2 border-muted rounded-2xl"
              />
              <div className="bottom-0 top-[50%] bg-gradient-to-t from-background left-0 right-0 absolute z-10"></div>
            </div>
          </div>

          <div className="mt-40">
            <div className="flex flex-col gap-4 justify-center items-center text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Our <span className="text-primary">Features</span>
              </h2>
              <p className="text-muted-foreground max-w-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
                omnis delectus! Laudantium, hic voluptate accusamus cumque
                dignissimos eos aliquid dolore.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
              <Card>
                <CardHeader>
                  <div className="flex gap-4 items-center">
                    <div className="border rounded-md p-4">
                      <Layers />
                    </div>
                    <h3 className="text-xl">Pengumpulan Sampah</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Dengan HELVI, kamu dapat menukarkan sampah-sampahmu untuk
                    mendapatkan poin dan koin yang dapat ditukarkan dengan
                    hadiah menarik dari HELVI.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="border rounded-md p-4">
                      <Inbox />
                    </div>
                    <h3 className="text-xl">Pelaporan Sampah</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    HELVI berkerjasama dengan dinas kesehatan setempat supaya
                    kamu bisa melaporkan penumpukan sampah.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="border rounded-md p-4">
                      <ShieldPlus />
                    </div>
                    <h3 className="text-xl">Jasa Kebersihan</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Kamu dapat memanggil HELVI untuk menjemput sampah-sampahmu.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="border rounded-md p-4">
                      <CalendarClock />
                    </div>
                    <h3 className="text-xl">Sampah Keliling</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    HELVI menjemput sampahmu yang kemudian kami kelola agar
                    menjadi barang yang memiliki nilai guna.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="border rounded-md p-4">
                      <Handshake />
                    </div>
                    <h3 className="text-xl">Komunitas & Event</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    HELVI mengayomi komunitas-komunitas peduli lingkungan dalam
                    menjalakan acaranya. Kamu bisa berkontribusi ke
                    komunitas-komunitas tersebut untuk menciptakan masa depan
                    yang berkelanjutan.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="border rounded-md p-4">
                      <Newspaper />
                    </div>
                    <h3 className="text-xl">Blog & Edukasi</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Guna menciptakan smarty society yang penting untuk
                    menciptakan masa depan yang berkelanjutan, HELVI melakukan
                    edukasi tentang menjaga lingkungan lewat blog.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="border rounded-md p-4">
                      <Gamepad2 />
                    </div>
                    <h3 className="text-xl">Sistem Gamifikasi</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    HELVI menyadari dengan menyatukan unsur gim ke dalam HELVI,
                    HELVI dapat memberikan daya tarik kepada generasi muda.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="border rounded-md p-4">
                      <Store />
                    </div>
                    <h3 className="text-xl">Pembelian Olahan Sampah</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    HELVI menjual berbagai olahan bekas sampah yang dapat kamu
                    beli.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-40">
            <div className="flex flex-col gap-4 justify-center items-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Let&apos;s Use Our
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Platform <span className="text-primary">Business</span>
              </h2>
              <p className="text-muted-foreground max-w-lg text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
                omnis delectus! Laudantium, hic voluptate accusamus cumque
                dignissimos eos aliquid dolore.
              </p>
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  );
}
