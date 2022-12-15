"use client";
import Thread from "@/stateMachines/Thread";
import Consignes from "@/stateMachines/consignes";
import Image from "next/image";
import Logo from "@/assets/logos/lemontri_color.png";

export default function Page({}) {
  return (
    <div className="h-screen flex flex-col">
      <Image src={Logo} height={100} className="mx-auto py-6" alt="lemon tri logo" />
      <Thread pages={Consignes}></Thread>
    </div>
  );
}
