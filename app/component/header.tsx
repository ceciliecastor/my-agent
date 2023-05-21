import { BsTelephoneFill, BsFillPersonFill } from "react-icons/bs";
import { IoIosPaperPlane } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="">
      <section className="bg-[#162A41] w-full text-white py-[18px]">
        <section className="max-w-[1110px] flex justify-between mx-auto">
          <div className="flex gap-8">
            <p className="flex">
              <IoIosPaperPlane />
              4000@dinmaegler.com
            </p>
            <p className="flex">
              <BsTelephoneFill />
              +45 7070 4000
            </p>
          </div>
          <Link href="">
            <p className="flex">
              <BsFillPersonFill />
              Login
            </p>
          </Link>
        </section>
      </section>
      <section className="flex justify-between max-w-[1110px] py-[18px] mx-auto">
        <Image
          src="/img/din-maegler-logo.jpg"
          width={296}
          height={49}
          alt="Din mægler logo"
        />
        <div className="text-black flex gap-8 h-full self-center">
          <Link href="/bolig">Boliger til salg</Link>
          <Link href="/bolig">Mæglere</Link>
          <Link href="/bolig">Mine favoritter</Link>
          <Link href="/bolig">Kontakt os</Link>
        </div>
      </section>
    </header>
  );
}
