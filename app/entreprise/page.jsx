import Image from "next/image"
import bureau from "/public/salles/Bureau.png"
import cafet from '/public/salles/Cantine.png'
import openspace from '/public/salles/Hotel.png'
import kitchen from '/public/salles/Shop.png'
import reunion from '/public/salles/Ecole.png'
// import  from '/public/salles/Cantine.png';
export default function Page({ }) {
  return (
    <div className="container p-6 bg-yellow-400">
      <div className="px-[30px]">
        <div className="h-[10px] w-full bg-white"/>
      </div>
      <div className="px-[40px]">
        <div className="bg-[#D9D9D9] grid grid-cols-6 roof w-full px-3 pt-3">
          {
            [...Array(6).keys()].map(i=><div key={i}/>)
          }
        </div>
      </div>
      <div className="company grid grid-cols-6 grid-rows-3 bg-[#D9D9D9] p-3 px-10 ">
        <div className="col-span-3">
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
        </div>
      </div>
    </div>
  )
 }