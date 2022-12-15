"use client";
import { useContext, useEffect } from "react";
import { ThreadContext } from "../Thread/context";
import SpeakingLemon from "@/components/SpeakingLemon";
import Zesty from "./Zesty/Zesty.png";
import Button from "@mui/material/Button";
import { HomeButtonContext } from "@/lib/HomeButtonContext";

const Start = ({}) => {
  const index = 0;
  const { state, setState } = useContext(ThreadContext);
  const { setVisible } = useContext(HomeButtonContext);
  useEffect(() => {
    setVisible(true);
    return () => setVisible(false);
  }, []);
  if (state !== index) return null;
  if (typeof window === "undefined") return null;
  if (typeof window !== "undefined") localStorage.setItem("Consignes", "active");
  return (
    <div className="grow pb-6 flex flex-col justify-between">
      <SpeakingLemon image={Zesty} position={{ top: "-10px" }}>
        <p>
          Tu verras, nous proposons tout plein de <span className="font-bold"> solutions différentes </span>pour trier les déchets. <br />
          Mais n&apos;ai pas peur ! Tu n’es pas concerné par tout les <span className="font-bold"> bacs</span>. <br /> Si tu cherche où
          mettre tes restes de citron, tu es au bon endroit !
        </p>
      </SpeakingLemon>
      <div className="flex flex-col gap-5 justify-evenly sm:flex-row max-w-[300px] mx-auto">
        <Button variant="contained" size="large" onClick={() => window.location.reload()}>
          Ca marche 👌
        </Button>
      </div>
    </div>
  );
};

export default Start;
