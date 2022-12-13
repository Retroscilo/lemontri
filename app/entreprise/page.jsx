"use client"
import Image from "next/image"
import bureau from "/public/salles/Bureau.png"
import cafet from '/public/salles/Cantine.png'
import openspace from '/public/salles/Hotel.png'
import kitchen from '/public/salles/Shop.png'
import reunion from '/public/salles/Ecole.png'
import Popup from "@/components/popup"
import { useState, useEffect } from "react"
// import  from '/public/salles/Cantine.png';
export default function Page({ }) {
  const [currentRoom, setCurrentRoom] = useState("")
  const [showPopup, setShowPopup] = useState(true)
  const salles = [
    {
      name: "bureau",
      src: bureau,
      size: 3
    },
    {
      name: "reunion",
      src: reunion,
      size: 3
    },
    {
      name: "openspace",
      src: openspace,
      size: 6
    },
    {
      name: "cuisine",
      src: kitchen,
      size: 3
    },
    {
      name: "cafetaria",
      src: cafet,
      size: 3
    },
  ]

  const astuces = [
    {
      room: "bureau",
      astuce:
        "25% des documents sont jetés 5 minutes après leur impréssion ! Pour limiter le gaspillage, pensez à limiter le nombre d’imprimantes et à bien les paramétrer pour qu'elles impriment en recto-verso par défaut. Installer des bac à brouillons pour récupérer les impréssions et pensez à utiliser du papier recyclé !",
    },
    {
      room: "cuisine",
      astuce:
        "cuisine ipsum dolor sit amet consectetur adipisicing elit. At veniam fugit labore! Doloribus, reiciendis! Aut consequatur iusto in aperiam error sapiente, sit, cupiditate odio nemo incidunt illum eos recusandae consequuntur?",
    },
    {
      room: "cafetaria",
      astuce: "osjogijipgs pofjsjd!",
    },
    {
      room: "openspace",
      astuce:
        "openspace 25% des documents sont jetés 5 minutes après leur impréssion ! Pour limiter le gaspillage, pensez à limiter le nombre d’imprimantes et à bien les paramétrer pour qu'elles impriment en recto-verso par défaut. Installer des bac à brouillons pour récupérer les impréssions et pensez à utiliser du papier recyclé !",
    },
    {
      room: "reunion",
      astuce:
        "reu Lorem ipsum dolor sit amet consectetur adipisicing elit. At veniam fugit labore! Doloribus, reiciendis! Aut consequatur iusto in aperiam error sapiente, sit, cupiditate odio nemo incidunt illum eos recusandae consequuntur?",
    },
    {
      room: "cafetaria",
      astuce: "cafet osjogijipgs pofjsjd!",
    },
  ]

  useEffect(() => {
    const intRandom = Math.floor(Math.random() * astuces.length)
    const room =
      intRandom <= astuces.length
        ? astuces[intRandom]?.room
        : astuces[intRandom - 1]?.room 

    setCurrentRoom(room)
    console.log({ room })
  }, [])

  const handleCloseTrick = () => {
    console.log("fermer")
    setShowPopup(false)
    console.log({showPopup})
  }

  return (
    <div className="relative w-full">
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
        <div className="company grid  bg-[#D9D9D9] p-3 px-10 ">
          {salles.map(({ name, src }) => (
            <div
              key={name}
              className={`${
                name == currentRoom
                  ? "border-primary border-[4px] active-room "
                  : "border-white border-[3px]"
              }`}
            >
              <Image src={src} alt={`${name}.png`} />
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
      <Popup
        handleClose={handleCloseTrick}
        show={showPopup}
        className="sticky bottom-0 left-0"
      />
    </div>
  )
 }