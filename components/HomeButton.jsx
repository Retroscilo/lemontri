"use client";
import Link from "next/link";
import { Home } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { HomeButtonContext } from "@/lib/HomeButtonContext";
import { useContext } from "react";

const HomeButton = ({}) => {
  const { visible, styles } = useContext(HomeButtonContext);
  return (
    <div
      className="rounded-full bg-secondary-light fixed bottom-6 left-6 transition-all"
      style={{ display: visible ? "initial" : "none", ...styles }}
    >
      <Link href="/">
        <IconButton color="paper">
          <Home color="paper" />
        </IconButton>
      </Link>
    </div>
  );
};

export default HomeButton;
