"use client";
import styles from "../../../styles/consignes.css";
import Image from "next/image";
import PapierCarton from "@/assets/images/PapierCarton/logo.png";
import PapierCartonCard1 from "@/assets/images/PapierCarton/card-1.png";
import PapierCartonCard2 from "@/assets/images/PapierCarton/card-2.png";
import Verre from "@/assets/images/Verre/logo.png";
import VerreCard1 from "@/assets/images/Verre/card-1.png";
import VerreCard2 from "@/assets/images/Verre/card-2.png";
import BioDechet from "@/assets/images/BioDechet/logo.png";
import BioDechetCard1 from "@/assets/images/BioDechet/card-1.png";
import forbidden from "@/assets/images/Forbidden.png";
import { notFound } from "next/navigation";

export default function Page(props) {
  const data = [
    {
      materiel: "PapierCarton",
      title: "PAPIERS ET CARTONS",
      logo: PapierCarton,
      cards: [
        {
          image: PapierCartonCard1,
          text: "ENVELOPPES AVEC FENÊTRE, JOURNAUX, MAGAZINES ET PAPIERS (agrafes et reliures acceptées)",
        },
        {
          image: PapierCartonCard2,
          text: "PETITS CARTONS (sacs kraft, boîtes de gâteaux)",
        },
      ],
      forbiddenText: "MOUCHOIRS, MASQUES ET EMBALLAGES SOUILLÉS",
      color: "#1261ab",
    },
    {
      materiel: "Verre",
      title: "VERRE",
      logo: Verre,
      cards: [
        {
          image: VerreCard1,
          text: "POTS EN VERRE",
        },
        {
          image: VerreCard2,
          text: "BOUTEILLES EN VERRE",
        },
      ],
      forbiddenText: "VAISSELLES, AMPOULES, AUTRES TYPES DE BOUTEILLES",
      color: "#71be50",
    },
    {
      materiel: "BioDechet",
      title: "DÉCHETS ALIMENTAIRES",
      logo: BioDechet,
      cards: [
        {
          image: BioDechetCard1,
          text: "RESTES ALIMENTAIRES : fruits, légumes, oeufs, viandes, agrumes, sachets de thé, marc de café",
        },
      ],
      forbiddenText: "EMBALLAGES ALIMENTAIRES",
      color: "#884f2d",
    },
  ];

  function getItem() {
    return data.find((d) => d.materiel === props.params.materiel);
  }

  if (!getItem()) return notFound();
  return (
    <div className="consignes">
      <div id="rectangle" style={{ backgroundColor: getItem().color }}>
        <div className="title-container">
          <h1 className="title text-center text-[30px] md:text-[70px] lg:text-[100px] font-bold">{getItem().title}</h1>
        </div>
        <div id="circle" className="hidden md:block" style={{ backgroundColor: getItem().color }}></div>
        <Image id="logo" src={getItem().logo} width="150" height="150" />
      </div>
      <div className="section-1 flex flex-col xl:flex-row gap-10 place-content-around mt-[380px] md:mt-[550px] mb-[100px]">
        {getItem().cards.map((card, key) => (
          <div className="flex-1 flex justify-center" key={key}>
            <div className="rounded-lg bg-white max-w-sm flex flex-col justify-between">
              <Image className="rounded-t-lg" src={card.image} width="100 %" />
              <div className="p-6">
                <h5 className="text-center text-2xl mb-2 font-bold" style={{ color: getItem().color }}>
                  {card.text}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-2 border-8 rounded-md mx-20 md:mx-52" style={{ borderColor: getItem().color, color: getItem().color }}>
        <div className="col-sm-4 landing-section2-pillar">
          <div>
            <div className="landing-icon">
              <Image id="forbidden" src={forbidden} width="100" height="100" />
            </div>
            <h1 className="text-center my-5 text-[30px] sm:text-[60px] font-bold underline decoration-[10px]">INTERDITS</h1>
            <p className="text-center font-bold text-[15px] sm:text-[30px]">{getItem().forbiddenText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
