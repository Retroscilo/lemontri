"use client";
import Thread from "@/stateMachines/Thread";
import Introduction from "@/stateMachines/Introduction";
import Logo from "@/assets/logos/lemontri_color.png";
import Image from "next/image";

function Page({}) {
  return (
    <div className="h-screen flex flex-col">
      <Image src={Logo} height={100} className="mx-auto py-6" alt="lemon tri logo" />
      <Thread pages={Introduction} />
    </div>
  );
}
export default Page;
