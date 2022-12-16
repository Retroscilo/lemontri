import SpeakingLemon from "@/components/SpeakingLemon";
import Zesty from "./Zesty/StepFive.png";
import Button from "@mui/material/Button";
import Link from "next/link";

const StepFive = ({ state, setState }) => {
  let index = 5;
  if (index !== state) return null;
  return (
    <div className="grow pb-6 flex flex-col justify-between">
      <SpeakingLemon image={Zesty}>
        <span className="font-bold mb-2">Bravo, c&apos;est du bon boulot !</span> <br /> <br />
        Si tu veux <span className="font-bold"> aller plus loin</span>, tu peux visiter mon{" "}
        <span className="font-bold"> entreprise virtuelle</span>. Tu y retrouvera toute les <span className="font-bold"> astuces</span> pour
        <span className="font-bold"> réduire</span> tes déchets ainsi que des alternatives <span className="font-bold"> zéro-déchets </span>
        à proposer a tes collègues&nbsp;! <br /> <span className="font-bold mt-2"> Encore merci pour ton engagement ! </span>
      </SpeakingLemon>
      <div className="flex flex-col gap-5 justify-evenly sm:flex-row max-w-[300px] mx-auto">
        <Button
          onClick={() => {
            localStorage?.setItem("Lemon Tri", "active");
            window.location.href = "/";
          }}
          color="paper"
          variant="contained"
          size="large"
        >
          Merci Zesty 🔙
        </Button>
        <Button variant="contained" size="large">
          <Link href={"/entreprise"}>Allons visiter ton entreprise ✨</Link>
        </Button>
      </div>
    </div>
  );
};

export default StepFive;
