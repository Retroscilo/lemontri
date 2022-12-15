"use client";
import Thread from "@/stateMachines/Thread";
import Consignes from "@/stateMachines/consignes";
import Image from "next/image";
import Logo from "@/assets/logos/lemontri_color.png";
import HiveGrid from "@/components/HiveGrid";
import hiveGridElements from "@/lib/hiveGridElements";
import { useEffect, useState } from "react";
import localFont from "@next/font/local";

const edo = localFont({ src: "../../assets/fonts/edosz.ttf" });

let visited;
if (window) visited = localStorage.getItem("Consignes") === "active";

export default function Page({}) {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setTimeout(() => setHidden(false), 200);
  }, []);
  return (
    <div className="h-screen flex flex-col  mx-auto">
      <Image src={Logo} height={60} className="mx-auto py-4" alt="lemon tri logo" />
      <h1 className={`${edo.className} text-center text-xl my-2 text-secondary-light`}>Les consignes</h1>
      {!visited && <Thread pages={Consignes}></Thread>}
      {visited && <HiveGrid elements={hiveGridElements} hidden={hidden} />}
    </div>
  );
}
