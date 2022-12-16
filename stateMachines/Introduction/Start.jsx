"use client";
import { useContext, useEffect } from "react";
import { ThreadContext } from "../Thread/context";
import SpeakingLemon from "@/components/SpeakingLemon";
import Zesty from "./Zesty/Start.png";
import Button from "@mui/material/Button";
import Link from "next/link";

const Start = ({}) => {
  const index = 0;
  const { state, setState } = useContext(ThreadContext);
  useEffect(() => {
    localStorage?.setItem("Lemon Tri", "active");
  }, []);
  if (state !== index) return null;
  return (
    <div className="grow pb-6 flex flex-col justify-between">
      <SpeakingLemon image={Zesty} position={{ top: "-10px" }}>
        <p>
          Salut, je m’appelle <span className="font-bold">zesty !</span>
        </p>
        <p>
          Tu veux que je te présente <span className="font-bold">Lemon Tri</span> ?
        </p>
      </SpeakingLemon>
      <div className="flex flex-col gap-5 justify-evenly sm:flex-row max-w-[300px] mx-auto">
        <Button color="paper" variant="contained" size="large">
          <Link href="/">Je connais déjà !</Link>
        </Button>
        <Button onClick={() => setState(index + 1)} variant="contained" size="large">
          Avec plaisir !
        </Button>
      </div>
    </div>
  );
};

export default Start;
