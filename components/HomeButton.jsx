"use client";
import Link from "next/link";
import Home from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import { HomeButtonContext } from "@/lib/HomeButtonContext";
import { useContext } from "react";

const HomeButton = ({}) => {
  const { visible, styles } = useContext(HomeButtonContext);
  if (!visible) return null;
  return (
    <div
      className="rounded-full bg-secondary-light fixed bottom-6 right-6 transform-none"
      style={{ display: visible ? "initial" : "none", transition: "all 400ms ease-in-out", ...styles }}
    >
      <Link href="/">
        <IconButton color="paper" className="shadow-lg ">
          <Home className="text-white" color="paper" />
        </IconButton>
      </Link>
    </div>
  );
};

export default HomeButton;
