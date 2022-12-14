import Image from "next/image";
import Link from "next/link";
import megaphone from "/public/mascote/megaphone.png";
import { Bebas_Neue } from "@next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const Popup = ({ position, className, show, handleClose, children }) => {
  return (
    <div className={` popup ${!show && "inactive"} container flex justify-center w-full h-auto ${className}`}>
      <div className="popup-container relative bg-white rounded-none md:rounded-lg w-full p-5">
        <div className="text-right top-0 right-0 absolute cursor-pointer">
          <button
            onClick={() => handleClose()}
            className="text-[32px] z-10 inline-block p-2 text-right transition-all ease-in-out duration-300 bg-white text-black/50 hover:text-black/80"
          >
            &#x2715;
          </button>
        </div>
        <div className="container w-full  flex flex-col justify-center">
          <div className="flex relative items-center gap-x-2 -mt-5 h-[80px]">
            <Image
              src={megaphone}
              style={{
                height: "100%",
                width: "auto",
              }}
              alt="megaphone.svg"
            />
            <h3 className={`text-2xl ${bebas.className}`}>Le saviez-vous ?</h3>
          </div>
          {children}
          <div className="text-right">
            <Link className="underline text-secondary-light" href={"#"}>
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
