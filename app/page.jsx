"use client";
import { useEffect, useState } from "react";
import Logo from "@/assets/logos/lemontri_color.png";
import Image from "next/image";
import FileInput from "@/components/FileInput";
import Link from "next/link";
import AubureauActived from "@/assets/icons/aubureau-actived.png";
import AubureauInactived from "@/assets/icons/aubureau-inactived.png";
import ConsignesActived from "@/assets/icons/consignes-actived.png";
import ConsignesInactived from "@/assets/icons/consignes-inactived.png";
import LemonTriActived from "@/assets/icons/lemontri-actived.png";
import LemonTriInactived from "@/assets/icons/lemontri-inactived.png";
import Discutons from "@/assets/icons/discutons.png";
import localFont from "@next/font/local";
import useWindowSize from "@/lib/useWindowDimensions";
import UnderMaintenance from "@/components/UnderMaintenance";

const edo = localFont({ src: "../assets/fonts/edosz.ttf", variable: "--font-edo" });

const sections = [
  {
    name: "Au bureau",
    Src: localStorage.getItem("Au bureau") ? AubureauActived : AubureauInactived,
    url: "/entreprise",
  },
  {
    name: "Lemon Tri",
    Src: localStorage.getItem("Lemon Tri") ? LemonTriActived : LemonTriInactived,
    url: "/lemontri",
  },
  {
    name: "discutons",
    Src: Discutons,
    url: "/discutons",
  },
  {
    name: "Consignes",
    Src: localStorage.getItem("Consignes") ? ConsignesActived : ConsignesInactived,
    url: "/consignes",
  },
];

let firstVisit;
if (window) firstVisit = localStorage.getItem("Lemon Tri") !== "active";
if (firstVisit) window.location.href = "/lemontri";

export default function Page({}) {
  const setIntoLocalStorage = (name) => {
    localStorage.setItem(name, "active");
  };

  const size = useWindowSize();

  if (size.width > 600) return <UnderMaintenance />;

  return (
    <div className="container flex flex-col items-center bg-light h-screen w-screen relative">
      <div className="px-24 py-3 relative">
        <Image priority={true} src={Logo} alt="logo.png" />
      </div>
      <h1 className={`text-3xl text-center my-3 text-sans text-secondary-light ${edo.className}`}>Adoptons les bons gestes</h1>
      <div className="grid grid-cols-2 grid-rows-2 p-2 gap-y-5 ">
        {sections.map(({ name, SrcActive, SrcInactive, Src, url }, i) => (
          <Link
            href={url}
            key={name}
            onClick={() => name !== "Consignes" && setIntoLocalStorage(name)}
            className=" buble-link relative first-of-type:translate-y-10 [&:nth-child(3)]:mt-8 last-of-type:-translate-y-5"
          >
            <div>{Src ? <Image src={Src} alt="logo.png" priority={true} /> : <Image priority={true} src={SrcActive} alt="couc.png" />}</div>
          </Link>
        ))}
      </div>
      <div className="flex justify-end">
        <div className="bg-white p-2 rounded-full fixed bottom-5 right-5 drop-shadow-lg">
          <FileInput onChange={() => console.log("file")} className="bg-white scale-100" />
        </div>
      </div>
    </div>
  );
}
