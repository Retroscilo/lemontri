import Image from "next/image";
import ImageSrc from "@/assets/images/notFound.png";
import { Bebas_Neue } from "@next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const notFound = () => (
  <div className="flex justify-evenly flex-col h-screen px-10">
    <h1 className={"text-center text-3xl " + bebas.className}>La page est en cours de zestation</h1>
    <Image src={ImageSrc} alt="not found illustration"></Image>
  </div>
);

export default notFound;
