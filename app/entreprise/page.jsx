"use client";
import Image from "next/image";
import bureau from "/public/salles/Bureau.png";
import cafet from "/public/salles/Cantine.png";
import openspace from "/public/salles/Hotel.png";
import kitchen from "/public/salles/Shop.png";
import reunion from "/public/salles/Ecole.png";
import Popup from "@/components/popup";
import { useState, useEffect, useContext } from "react";
import { HomeButtonContext } from "@/lib/HomeButtonContext";
import { Home } from "@mui/icons-material";

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// import  from '/public/salles/Cantine.png';
export default function Page({}) {
  const { setVisible, setStyles } = useContext(HomeButtonContext);
  const [currentTrick, setCurrentTrick] = useState({});
  const [showPopup, setShowPopup] = useState(true);
  useEffect(() => {
    setVisible(true);
    if (showPopup) setStyles({ transform: "translate(20px, -220px)" });
    else setStyles({ transform: "translate(20px, 0)" });
    return () => setVisible(false);
  }, [showPopup, setStyles, setVisible]);

  const salles = [
    {
      name: "bureau",
      src: bureau,
      size: 3,
    },
    {
      name: "reunion",
      src: reunion,
      size: 3,
    },
    {
      name: "openspace",
      src: openspace,
      size: 6,
    },
    {
      name: "cuisine",
      src: kitchen,
      size: 3,
    },
    {
      name: "cafetaria",
      src: cafet,
      size: 3,
    },
  ];

  const tricks = [
    {
      room: "bureau",
      text: "25% des documents sont jetés 5 minutes après leur impréssion ! Pour limiter le gaspillage, pensez à limiter le nombre d’imprimantes et à bien les paramétrer pour qu'elles impriment en recto-verso par défaut. Installer des bac à brouillons pour récupérer les impréssions et pensez à utiliser du papier recyclé !",
    },
    {
      room: "bureau",
      text: "Bureau 2 hehe 25% des documents sont jetés 5 minutes après leur impréssion ! Pour limiter le gaspillage, pensez à limiter le nombre d’imprimantes et à bien les paramétrer pour qu'elles impriment en recto-verso par défaut. Installer des bac à brouillons pour récupérer les impréssions et pensez à utiliser du papier recyclé !",
    },
    {
      room: "bureau",
      text: "Bureau 3 hehe 25% des documents sont jetés 5 minutes après leur impréssion ! Pour limiter le gaspillage, pensez à limiter le nombre d’imprimantes et à bien les paramétrer pour qu'elles impriment en recto-verso par défaut. Installer des bac à brouillons pour récupérer les impréssions et pensez à utiliser du papier recyclé !",
    },
    {
      room: "bureau",
      text: "Bureau 4 hehe 25% des documents sont jetés 5 minutes après leur impréssion ! Pour limiter le gaspillage, pensez à limiter le nombre d’imprimantes et à bien les paramétrer pour qu'elles impriment en recto-verso par défaut. Installer des bac à brouillons pour récupérer les impréssions et pensez à utiliser du papier recyclé !",
    },
    {
      room: "cuisine",
      text: "cuisine ipsum dolor sit amet consectetur adipisicing elit. At veniam fugit labore! Doloribus, reiciendis! Aut consequatur iusto in aperiam error sapiente, sit, cupiditate odio nemo incidunt illum eos recusandae consequuntur?",
    },
    {
      room: "cuisine",
      text: "cuisine2 ipsum dolor sit amet consectetur adipisicing elit. At veniam fugit labore! Doloribus, reiciendis! Aut consequatur iusto in aperiam error sapiente, sit, cupiditate odio nemo incidunt illum eos recusandae consequuntur?",
    },
    {
      room: "cuisine",
      text: "cuisine3 ipsum dolor sit amet consectetur adipisicing elit. At veniam fugit labore! Doloribus, reiciendis! Aut consequatur iusto in aperiam error sapiente, sit, cupiditate odio nemo incidunt illum eos recusandae consequuntur?",
    },
    {
      room: "cafetaria",
      text: "osjogijipgs pofjsjd!",
    },
    {
      room: "cafetaria",
      text: "cafetaria2 osjogijipgs pofjsjd!",
    },
    {
      room: "cafetaria",
      text: "cafetaria3 osjogijipgs pofjsjd!",
    },
    {
      room: "cafetaria",
      text: "cafetaria4 osjogijipgs pofjsjd!",
    },
    {
      room: "openspace",
      text: "openspace 25% des documents sont jetés 5 minutes après leur impréssion ! Pour limiter le gaspillage, pensez à limiter le nombre d’imprimantes et à bien les paramétrer pour qu'elles impriment en recto-verso par défaut. Installer des bac à brouillons pour récupérer les impréssions et pensez à utiliser du papier recyclé !",
    },
    {
      room: "openspace",
      text: "openspace2 25% des documents sont jetés 5 minutes après leur impréssion ! Pour limiter le gaspillage, pensez à limiter le nombre d’imprimantes et à bien les paramétrer pour qu'elles impriment en recto-verso par défaut. Installer des bac à brouillons pour récupérer les impréssions et pensez à utiliser du papier recyclé !",
    },
    {
      room: "openspace",
      text: "openspace3 25% des documents sont jetés 5 minutes après leur impréssion ! Pour limiter le gaspillage, pensez à limiter le nombre d’imprimantes et à bien les paramétrer pour qu'elles impriment en recto-verso par défaut. Installer des bac à brouillons pour récupérer les impréssions et pensez à utiliser du papier recyclé !",
    },
    {
      room: "reunion",
      text: "reu1 Lorem ipsum dolor sit amet consectetur adipisicing elit. At veniam fugit labore! Doloribus, reiciendis! Aut consequatur iusto in aperiam error sapiente, sit, cupiditate odio nemo incidunt illum eos recusandae consequuntur?",
    },
    {
      room: "reunion",
      text: "reu2 Lorem ipsum dolor sit amet consectetur adipisicing elit. At veniam fugit labore! Doloribus, reiciendis! Aut consequatur iusto in aperiam error sapiente, sit, cupiditate odio nemo incidunt illum eos recusandae consequuntur?",
    },
    {
      room: "reunion",
      text: "reu3 Lorem ipsum dolor sit amet consectetur adipisicing elit. At veniam fugit labore! Doloribus, reiciendis! Aut consequatur iusto in aperiam error sapiente, sit, cupiditate odio nemo incidunt illum eos recusandae consequuntur?",
    },
    {
      room: "cafetaria",
      text: "cafet osjogijipgs pofjsjd!",
    },
  ];

  useEffect(() => {
    const intRandom = getRandomInt(0, tricks.length - 1);

    const trick = tricks[intRandom];

    setCurrentTrick(trick);

    console.log({ trick });
  }, []);

  const handleCloseTrick = () => {
    setShowPopup(false);
    setCurrentTrick({});
  };

  const handleClickRoom = (room) => {
    const tricksRoom = tricks.filter((el) => el.room == room);
    const randomInt = getRandomInt(0, tricksRoom.length - 1);
    setCurrentTrick(tricksRoom[randomInt]);
    setShowPopup(true);
  };

  return (
    <div className="relative w-fit ">
      <div className="container p-6 bg-yellow-400">
        <div className="px-[30px]">
          <div className="h-[10px] w-full bg-white" />
        </div>
        <div className="px-[40px]">
          <div className="bg-[#D9D9D9] grid grid-cols-6 roof w-full px-3 pt-3">
            {[...Array(6).keys()].map((i) => (
              <div key={i} />
            ))}
          </div>
        </div>
        <div className="company grid bg-[#D9D9D9] p-3 px-10 ">
          {salles.map(({ name, src }) => (
            <div
              key={name}
              onClick={() => {
                handleClickRoom(name);
              }}
              className={`
              relative
              tooltip
              cursor-pointer
              ${name == currentTrick?.room ? "border-primary border-[4px] active-room " : "border-white border-[3px]"}
               `}
            >
              <Image src={src} alt={`${name}.png`} />
              <span className="tooltiptext ">{name}</span>
            </div>
          ))}
          {/* <div className="col-span-3">
            <Image src={bureau} alt="bureau.png" />
          </div>
          <div className="col-span-3">
            <Image src={reunion} alt="openspace.png" />
          </div>
          <div className="col-span-6">
            <Image src={openspace} alt="openspace.png" />
          </div>
          <div className="col-span-3">
            <Image src={kitchen} alt="cuisine.png" />
          </div>
          <div className="col-span-3">
            <Image src={cafet} alt="openspace.png" />
          </div> */}
        </div>
      </div>
      <Popup handleClose={handleCloseTrick} show={showPopup && currentTrick?.text} className="sticky bottom-0 left-0">
        <div className="h-[100px] line-camp ">{currentTrick?.text}</div>
      </Popup>
    </div>
  );
}
