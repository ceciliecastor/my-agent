"use client";

import ContactForm from "../component/contactForm";
import { IoIosPaperPlane } from "react-icons/io";

export default function page() {
  return (
    <article>
      <section className="mt-[120px] mb-[65px] max-w-[1110px] mx-auto">
        <h2>Vi sidder klar til at besvare dine spørgsmål</h2>
        <p>
          Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang
          med at sælge sin bolig. Vores medarbejdere sider klar alle ugens dage
          til at svare på dine spørgsmål.
        </p>
      </section>
      <section className="max-w-[1110px] mx-auto grid grid-cols-1 lg:grid-cols-3 lg:gap-[24px]">
        <section className="col-span-2">
          <ContactForm />
        </section>
        <section className="border-2 bg-white p-[40px]">
          <div className="border-b-2 mb-[24px] grid justify-center">
            <div className="mb-[16px] bg-[#162A41] text-white rounded-full w-[50px] h-[50px] grid justify-center text-3xl">
              <IoIosPaperPlane className="self-center " />
            </div>
            <p className="mb-[16px] text-center">Ring til os</p>
            <p className="mb-[16px] text-center">+45 7070 4000</p>
          </div>
          <div className="border-b-2 mb-[24px] grid justify-center">
            <div className="bg-[#162A41] text-white rounded-full w-[50px] h-[50px] grid justify-center text-3xl mb-[16px]">
              <IoIosPaperPlane className="self-center " />
            </div>
            <p className="mb-[16px] text-center">Send en email</p>
            <p className="mb-[16px] text-center">4000@dinmaegler.dk</p>
          </div>
          <div className="grid justify-center">
            <div className="bg-[#162A41] text-white rounded-full w-[50px] h-[50px] grid justify-center text-3xl mb-[16px]">
              <IoIosPaperPlane className="self-center " />
            </div>{" "}
            <p className="mb-[16px] text-center">Besøg butikken</p>
            <p className="mb-[16px] text-center">Stændertorvet 78</p>
            <p className="mb-[16px] text-center">4000 Roskilde</p>
          </div>
        </section>
      </section>
    </article>
  );
}
