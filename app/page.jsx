"use client";
import { useState } from "react";
import HiveGrid from "@/components/HiveGrid";
import elements from "@/lib/hiveGridElements";
import Logo from "@/assets/logos/lemontri_color.png";
import Image from "next/image";

export default function Page({}) {
  const [hidden, setHidden] = useState(true);
  return (
    <div
      className={`min-h-screen min-w-screen`}
      style={{ background: "conic-gradient(from 90deg at -1.85% 60.79%, #56ab2f 0deg, #a8e063 360deg)" }}
      onClick={() => {
        console.log("clicked");
        setHidden(false);
      }}
    >
      <div className="grid grid-cols-2">
        <div>
          <Image src={Logo} alt="lemon tri logo"></Image>
        </div>
        <div className="relative">
          <iframe width={"100%"} height={"100%"} src="https://app.vectary.com/p/43Tx1kDxTjCicWZDXZorDY"></iframe>
        </div>
      </div>
      <HiveGrid hidden={hidden} elements={elements} />
    </div>
  );
}

/* <div className="w-screen h-screen overflow-hidden grid grid-cols-1 md:grid-cols-[300px_1fr]">
        <Loader show={showLoader} />
        <div>
          <FileInput onChange={onLoad} />
        </div>
        <div className="max-md:pointer-events-none">
          <iframe
            onLoad={() => setTimeout(() => setShowLoader(false), 2000)}
            src="https://app.vectary.com/p/43Tx1kDxTjCicWZDXZorDY"
            frameBorder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div> */
