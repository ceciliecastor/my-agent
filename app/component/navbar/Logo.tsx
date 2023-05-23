"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="Din Mægler Logo"
      className="hidden md:block cursor-pointer"
      height={49}
      width={296}
      src="/img/din-maegler-logo.jpg"
    />
  );
};

export default Logo;
