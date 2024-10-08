import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <main className="h-full">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default layout;
