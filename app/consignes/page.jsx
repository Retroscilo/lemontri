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
import TextField from "@mui/material/TextField";
import Search from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const edo = localFont({ src: "../../assets/fonts/edosz.ttf" });

export default function Page({}) {
  const [displayedElements, setDisplay] = useState(hiveGridElements);
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setTimeout(() => setHidden(false), 200);
  }, []);
  const handleFilter = (e) => {
    setDisplay(hiveGridElements.filter((el) => el.key.includes(e.target.value) || el.key === "input"));
  };
  if (typeof window === "undefined") return null;
  return (
    <div className="h-screen flex flex-col  mx-auto">
      <div className="grid grid-cols-[30%_70%]">
        <Image src={Logo} height={60} className="py-4 mx-auto" alt="lemon tri logo" />
        <h1 className={`${edo.className} text-center text-xl my-2 text-secondary-light self-center`}>Les consignes</h1>
      </div>
      {localStorage.getItem("Consignes") !== "active" ? (
        <div>
          <Thread pages={Consignes}></Thread>
        </div>
      ) : (
        <>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            className="bg-white rounded-full max-w-[350px] mx-auto my-3 border-none"
            onChange={handleFilter}
          ></TextField>
          <HiveGrid elements={displayedElements} hidden={hidden} />
        </>
      )}
    </div>
  );
}
