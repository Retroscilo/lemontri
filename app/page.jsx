"use client";
import Image from "next/image";
import logo from "/public/logos/lemontri_color.png";
import Text from "public/adoptons.png";
import FileInput from "@/components/FileInput";
import Loader from "@/components/Loader";
import { useState } from "react";
import requestLabel from "@/lib/requestLabel";

export default function Page({}) {
  const [showLoader, setShowLoader] = useState(true);

  async function onLoad(e) {
    console.log(e.target.files);
    const labelName = await requestLabel(e.target.files[0]);
    alert(labelName.labelName);
  }

  return (
    <div className="w-screen h-screen overflow-hidden grid grid-cols-1 md:grid-cols-[300px_1fr]">
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
    </div>
  );
}
