import React from "react";
import { Bars } from "react-loading-icons";

type Props = {};

const loading = (props: Props) => {
  return (
    <main className="h-screen w-screen flex justify-center items-center bg-background/50">
      <Bars />
    </main>
  );
};

export default loading;
