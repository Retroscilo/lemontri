import requestLabel from "./requestLabel";
import FileInput from "@/components/FileInput";
import Image from "next/image";
import icons from "@/assets/icons";
import Link from "next/link";

const elements = [
  "Arbre",
  "DEE",
  "Megot",
  "BioDechet",
  "DIB",
  "NeonAmpoule",
  "BombeAerosol",
  "DechetsInfectieux",
  "Papier",
  "Bouchon",
  "Engrais",
  "PapierAbsorbant",
  "BouteilleCanette",
  "FilmPlastique",
  "PapierCarton",
  <FileInput
    key={"input"}
    onChange={async (e) => {
      const labelName = await requestLabel(e.target.files[0]);
      alert(labelName.labelName);
    }}
  />,
  "BouteillePlastique",
  "Glassine",
  "PapierConfidentiel",
  "Cagette",
  "GobeletCarton",
  "Pile",
  "Canette",
  "GobeletPlastique",
  "Stylo",
  "CanetteBouteille",
  "HuileAlimentaire",
  "Verre",
  "Capsule",
  "Livre",
  "Vetement",
  "CartonPlie",
  "Marc",
  "Cartouche",
  "Masque",
].map((url) => {
  if (typeof url !== "string") return url;
  return (
    <Link
      href={`/consignes/${url}`}
      key={url}
      className="relative w-full h-full rounded-full cursor-pointer hover:scale-110 transition-all "
      style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
    >
      <Image priority={true} src={icons[url]} alt={url} className="rounded-full overflow-hidden" />
    </Link>
  );
});

export default elements;
