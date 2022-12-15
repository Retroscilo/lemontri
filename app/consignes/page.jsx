"use client";
import Thread from "@/stateMachines/Thread";
import Consignes from "@/stateMachines/consignes";
import Image from "next/image";
import Logo from "@/assets/logos/lemontri_color.png";
import HiveGrid from "@/components/HiveGrid";
import hiveGridElements from "@/lib/hiveGridElements";
import { useEffect, useState } from "react";
import localFont from "@next/font/local";
import useLocalStorage from "@/lib/useLocalStorage";

const edo = localFont({ src: "../../assets/fonts/edosz.ttf" });

export default function Page({}) {
  const localStorage = useLocalStorage();
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setTimeout(() => setHidden(false), 200);
  }, []);
  if (!localStorage) return null;
  let visited = localStorage.getItem("Consignes") === "active";
  return (
    <div className="h-screen flex flex-col  mx-auto">
      <Image src={Logo} height={60} className="mx-auto py-4" alt="lemon tri logo" />
      <h1 className={`${edo.className} text-center text-xl my-2 text-secondary-light`}>Les consignes</h1>
      {!visited && <Thread pages={Consignes}></Thread>}
      {visited && <HiveGrid elements={hiveGridElements} hidden={hidden} />}
    </div>
  );
}
