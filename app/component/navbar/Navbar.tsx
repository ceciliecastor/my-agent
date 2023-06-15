import Container from "../Container";
import Logo from "./Logo";
import { BsTelephoneFill, BsFillPersonFill } from "react-icons/bs";
import { IoIosPaperPlane } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  return (
    <section>
      {/* <section className="fixed w-full z-10"> */}
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
          <Link href="/login">
            <p className="flex">
              <BsFillPersonFill />
              Login
            </p>
          </Link>
        </section>
      </section>
      <section className=" bg-white">
        <section className="flex justify-between max-w-[1110px] py-[18px] mx-auto">
          <Link href="/">
            <Logo />
          </Link>
          <div className="text-black flex gap-8 h-full self-center">
            <Link href="/properties">Boliger til salg</Link>
            <Link href="/medarbejdere">Mæglere</Link>
            <Link href="/favoriteList">Mine favoritter</Link>
            <Link href="/contact">Kontakt os</Link>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Navbar;
