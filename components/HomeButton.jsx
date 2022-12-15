"use client";
import Link from "next/link";
import { Home } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { HomeButtonContext } from "@/lib/HomeButtonContext";
import { useContext } from "react";

const HomeButton = ({}) => {
  const { visible, styles } = useContext(HomeButtonContext);
  if (!visible) return null;
  return (
    <div
      className="rounded-full bg-secondary-light fixed bottom-6 right-6 transition-all transform-none scale-125"
      style={{ display: visible ? "initial" : "none", ...styles }}
    >
      <Link href="/">
        <IconButton color="paper" className="shadow-lg">
          <Home className="text-white" color="paper" />
        </IconButton>
      </Link>
    </div>
  );
};

export default HomeButton;
