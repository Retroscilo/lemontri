import Image from "next/image"

const CustomAvatar = (src) => {
  return (
    <div className="inline-block bg-orange-500 w-[100px] h-[100px] relative rounded-full">
      <Image src={src} alt={"avatar.png"}/>
    </div>
  )
}

export default CustomAvatar