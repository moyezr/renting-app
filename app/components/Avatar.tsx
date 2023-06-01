'use client'
import Image from "next/image"

const Avatar: React.FC<{ src?: string | null | undefined}> = ({src}) => {
  return (
    <Image
        className="rounded-full w-auto"
        height={30}
        width={30}
        alt="Avatar"
        src={src || "/images/placeholder.jpg"}
    />
  )
}

export default Avatar