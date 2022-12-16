import Image from "next/image"

const CustomAvatar = (src) => {
  return (
    <div className="inline-block  w-[100px] h-[100px] relative rounded-full mr-[16px]">
      <Image src={src} alt={"avatar.png"}/>
    </div>
  )
}

export default CustomAvatar