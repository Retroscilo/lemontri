import Image from "next/image";
import clsx from "clsx";

const SpeakingLemon = ({ image, children, left, position }) => {
  return (
    <div className=" min-h-[400px] flex flex-col justify-center">
      <div className="bg-white rounded p-4 mx-4">{children}</div>
      <div className={clsx("grid", { "grid-cols-[30%_70%]": !left, "grid-cols-[70%_30%]": left })}>
        <Image
          className={clsx(`relative`, {
            "col-start-2 justify-self-end": !left,
            "col-start-1": left,
          })}
          height={200}
          style={position}
          src={image}
          alt="speaking lemon"
        />
      </div>
    </div>
  );
};

export default SpeakingLemon;
