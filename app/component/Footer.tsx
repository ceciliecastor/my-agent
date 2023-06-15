import Link from "next/link";
import Logo from "../component/navbar/Logo";
import Icon from "../component/Icon";

import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdPin } from "react-icons/io";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  const content = (
    <footer className="w-full">
      <article className="bg-[#E5E5E5] py-[80px] w-full">
        <section className="max-w-[1110px] mx-auto">
          <Link href="/">
            <Logo />
          </Link>
          <p className="max-w-[65ch] mt-[30px] mb-[65px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </p>
          <section className="grid grid-cols-2 gap-[125px]">
            <div className="bg-white p-[50px] grid grid-cols-4 gap-y-[30px]">
              <Icon icon={BsFillTelephoneFill} />
              <div className="col-span-3">
                <p className="text-xs text-[#7B7B7B] mb-[8px]">Ring til os</p>
                <h5>+45 7070 4000</h5>
              </div>
              <Icon icon={FaTelegramPlane} />
              <div className="col-span-3">
                <p className="text-xs text-[#7B7B7B] mb-[8px]">Send en email</p>
                <h5>4000@dinmaegler.com</h5>
              </div>
              <Icon icon={IoMdPin} />
              <div className="col-span-3">
                <p className="text-xs text-[#7B7B7B] mb-[8px]">Butik</p>
                <h5>Stændertorvet 78, 4000 Roskilde</h5>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div>
                <h5>Quick Links</h5>
                <Link href="/properties">Boliger til salg</Link>
                <Link href="/medarbejdere">Mæglere</Link>
                <Link href="/favoriteList">Mine favoritter</Link>
                <Link href="/contact">Kontakt os</Link>
              </div>
              <div>
                <p className="text-xs text-[#7B7B7B] mb-[8px]">Medlem af</p>
                <p className="text-4xl text-[#7B7B7B] mb-[8px] font-bold">
                  DMS
                </p>
                <p className="text-base text-[#7B7B7B] mb-[8px]">
                  Dansk Mægler Sammenslutning
                </p>
              </div>
            </div>
          </section>
        </section>
      </article>
    </footer>
  );
  return content;
}
