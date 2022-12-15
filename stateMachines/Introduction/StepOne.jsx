import SpeakingLemon from "@/components/SpeakingLemon";
import Zesty from "./Zesty/StepOne.png";
import Button from "@mui/material/Button";

const StepOne = ({ state, setState }) => {
  let index = 1;
  if (index !== state) return null;
  return (
    <div className="grow pb-6 flex flex-col justify-between">
      <SpeakingLemon image={Zesty} left={true}>
        Lemon Tri, c’est une start-up sociale qui lutte contre
        <span className="font-bold"> l’enfouissement et l’incinération des déchets</span>, <br></br> en proposant des solutions en faveur du{" "}
        <span className="font-bold">réemploi </span>
        et du <span className="font-bold">recyclage</span> à destination des entreprises, des campus, des centres commerciaux... bref tous
        les lieux <span className="font-bold">hors-domicile</span> dans lesquels on produit des déchets.
      </SpeakingLemon>
      <div className="flex flex-col gap-5 justify-evenly sm:flex-row max-w-[300px] mx-auto">
        <Button onClick={() => setState(index + 1)} variant="contained" size="large">
          C&apos;est super ! 🙌
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
