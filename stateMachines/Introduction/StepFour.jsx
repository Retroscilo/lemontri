import SpeakingLemon from "@/components/SpeakingLemon";
import Zesty from "./Zesty/StepFour.png";
import Button from "@mui/material/Button";
import Link from "next/link";

const StepFour = ({ state, setState }) => {
  let index = 4;
  if (index !== state) return null;
  return (
    <div className="grow pb-6 flex flex-col justify-between">
      <SpeakingLemon image={Zesty}>
        <span className="font-bold">En effet !</span> <br /> <br />
        <div className="font-bold">Il faut connaitre les consignes de tri !</div>
        👉 À chaque matière sa poubelle ! Tu trouveras un bac dans lequel tu pourra mettre l’emballage du burger de midi et un autre pour
        les cartons propres. <br /> <br />
        <span className="font-bold"> Le bon déroulement du cycle dépend de toi !</span>
      </SpeakingLemon>
      <div className="flex flex-col gap-5 justify-evenly sm:flex-row max-w-[300px] mx-auto">
        <Button color="paper" onClick={() => setState(index + 1)} variant="contained" size="large">
          C&apos;est bon, je les connais 🚀
        </Button>
        <Button variant="contained" size="large">
          <Link href={"/consignes"}>Montre-moi les consignes 🙋‍♀️</Link>
        </Button>
      </div>
    </div>
  );
};

export default StepFour;
