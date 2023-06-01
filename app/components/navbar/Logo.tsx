"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import logoImage from "@/public/images/logo.png";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      alt="logo"
      className="hidden md:block cursor-pointer w-auto"
      height={100}
      width={100}
      src={logoImage}
    />
  );
};

export default Logo;
