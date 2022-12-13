import Image from "next/image"
import bureau from "/public/salles/Bureau.png"
import cafet from '/public/salles/Cantine.png'
import openspace from '/public/salles/Hotel.png'
import kitchen from '/public/salles/Shop.png'
import reunion from '/public/salles/Ecole.png'
import Popup from "@/components/popup"
// import  from '/public/salles/Cantine.png';
export default function Page({ }) {
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
      name: "cafet",
      src: cafet,
      size: 3
    },
  ]
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
            <div key={name}>
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
      <Popup className="sticky bottom-0 left-0" />
    </div>
  )
 }