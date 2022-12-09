import Lottie from "lottie-react";
import loaderAnimation from "@/assets/lottie/loaderAnimation.json";
import { useEffect, useRef } from "react";

const Loader = ({ show }) => {
  const loader = useRef(null);
  useEffect(() => {
    !show && loader.current.classList.add("fadeOut");
    setTimeout(() => {
      !show && loader.current.remove();
    }, 700);
  }, [show]);
  return (
    <div ref={loader} className="h-screen w-screen fixed flex items-center justify-center bg-white opacity-100">
      <Lottie animationData={loaderAnimation} />
    </div>
  );
};

export default Loader;
