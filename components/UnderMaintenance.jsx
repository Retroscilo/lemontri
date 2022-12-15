import Image from "next/image";
import Maintenance from "@/assets/images/Maintenance.png";
import { Bebas_Neue } from "@next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const UnderMaintenance = ({}) => {
  return (
    <div className="flex flex-col items-center justify-evenly h-screen">
      <Image height={400} src={Maintenance} alt="under maintenance"></Image>
      <h1 className={`text-center text-3xl ${bebas.className}`}>
        Le site n&apos;est disponible que pour mobile pour le moment, merci de revenir plus tard !
      </h1>
    </div>
  );
};

export default UnderMaintenance;
