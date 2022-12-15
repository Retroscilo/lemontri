"use client";
import { useContext, useEffect } from "react";
import { ThreadContext } from "../Thread/context";
import SpeakingLemon from "@/components/SpeakingLemon";
import Zesty from "./Zesty/Zesty.png";
import Button from "@mui/material/Button";
import Link from "next/link";
import { HomeButtonContext } from "@/lib/HomeButtonContext";

const Start = ({}) => {
  const index = 1;
  const { state } = useContext(ThreadContext);
  const { visible, setVisible } = useContext(HomeButtonContext);
  useEffect(() => {
    if (!visible) setVisible(true);
    return () => setVisible(false);
  }, []);
  if (state !== index) return null;
  return (
    <div className="grow pb-6 flex flex-col justify-between">
      <SpeakingLemon image={Zesty} position={{ top: "-10px" }}>
        Clique simplement sur l’<span className="font-bold"> icône</span> correspondant au type du chanceux déchet que tu veux{" "}
        <span className="font-bold"> recycler</span>, et tu saura dans quel <span className="font-bold"> bac</span> le mettre&nbsp;! <br />{" "}
        Si tu a besoin d’un <span className="font-bold"> coup de main</span>, clique sur{" "}
        <span className="font-bold"> l’appareil photo</span> et je te dirais dans quel <span className="font-bold"> bac</span> il va.
      </SpeakingLemon>
      <div className="flex flex-col gap-5 justify-evenly sm:flex-row max-w-[300px] mx-auto">
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            localStorage?.setItem("Consignes", "active");
            window.location.reload();
          }}
        >
          C&apos;est parti 👍
        </Button>
      </div>
    </div>
  );
};

export default Start;
