import SpeakingLemon from "@/components/SpeakingLemon";
import Zesty from "./Zesty/StepTwo.png";
import Button from "@mui/material/Button";

const StepTwo = ({ state, setState }) => {
  let index = 2;
  if (index !== state) return null;
  return (
    <div className="grow pb-6 flex flex-col justify-between">
      <SpeakingLemon image={Zesty}>
        Cette outil te permettra de te familiariser avec les <span className="font-bold"> solutions de tri </span> que nous proposons, pour
        que tu puisse t’investir toi aussi pour un monde avec <span className="font-bold"> moins de déchets </span> !
      </SpeakingLemon>
      <div className="flex flex-col gap-5 justify-evenly sm:flex-row max-w-[300px] mx-auto">
        <Button onClick={() => setState(index + 1)} variant="contained" size="large">
          Je participe ! 🤩
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
