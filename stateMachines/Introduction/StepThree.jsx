import SpeakingLemon from "@/components/SpeakingLemon";
import Zesty from "./Zesty/StepThree.png";
import Button from "@mui/material/Button";

const StepThree = ({ state, setState }) => {
  let index = 3;
  if (index !== state) return null;
  return (
    <div className="grow pb-6 flex flex-col justify-between">
      <SpeakingLemon image={Zesty}>
        <span className="font-bold">Mais attention !</span> <br /> <br />
        Le tri par ilots que nous proposons est totalement différent de ce que tu as chez toi : ici, pas de poubelle{" "}
        <span className="font-bold"> verte</span> ou <span className="font-bold"> jaune</span> !
      </SpeakingLemon>
      <div className="flex flex-col gap-5 justify-evenly sm:flex-row max-w-[300px] mx-auto">
        <Button onClick={() => setState(index + 1)} variant="contained" size="large">
          Ah bon ?! 😱
        </Button>
      </div>
    </div>
  );
};

export default StepThree;
