import Link from "next/link";
import Image from "next/image";
import Heading from "../component/Heading";
import GetAllAgents from "@/lib/GetAllAgents";
import Logo from "../component/navbar/Logo";
import Icon from "../component/Icon";

import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdPin } from "react-icons/io";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default async function homePage() {
  const agentsData: Promise<Agent[]> = GetAllAgents();
  const agents = await agentsData;

  console.log(agents);

  const content = (
    <article className="grid content-center justify-center w-full">
      <Heading text="Medarbejdere i Roskilde" />
      <article className="pt-[118px] mb-[180px]">
        <section className="grid grid-cols-3 gap-[25px] max-w-[1110px] mx-auto">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="
              text-center 
              border-2
              rounded-md
              grid"
            >
              <Link href={`/medarbejdere/${agent.id}`}>
                <Image
                  src={agent.image.formats.thumbnail.url}
                  width={350}
                  height={300}
                  className="rounded-t"
                  alt={agent.name}
                />
              </Link>
              <h3 className="mt-[25px]">{agent.name}</h3>
              <p className="mb-[25px]">{agent.title}</p>
              <div className="flex gap-3 place-self-center mb-[25px]">
                <Link href="https://linkedin.com" passHref={true}>
                  <MdEmail size={24} />
                </Link>
                <Link href="linkedin.com">
                  <FaLinkedinIn size={24} />
                </Link>
              </div>
            </div>
          ))}
        </section>
      </article>
      <article className="bg-[#E5E5E5] pt-[80px]">
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
    </article>
  );
  return content;
}
