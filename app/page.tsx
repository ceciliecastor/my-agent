"use client";

import GetAllHomes from "@/lib/GetAllHomes";
import Link from "next/link";
import Image from "next/image";
import { IoMdPin } from "react-icons/io";
import Icon from "./component/Icon";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiHouse } from "react-icons/gi";
import Button from "./component/Button";
import CustomInput from "./component/CustomInputFormik";
import { Formik, Form } from "formik";
import React, { useState } from "react";
import HouseCard from "./component/houseCard";

export default async function homePage() {
  const [message, setMessage] = useState("");

  const onSubmit = (values, actions) => {
    setTimeout(() => {
      actions.resetForm();
      setMessage("Email submitted successfully.");
    }, 1000);
  };

  const homesData: Promise<Homes[]> = GetAllHomes();
  const homes = await homesData;

  const content = (
    <article className="grid content-center justify-center">
      <section className="grid mb-[120px]">
        <Image
          src="/img/frontpage-hero.jpg"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="Banner med billede af bygning"
          className="row-start-1 col-start-1"
        />
        <div className="bg-[#555555] w-full h-full row-start-1 col-start-1 mix-blend-multiply"></div>
        <div className="place-self-center row-start-1 col-start-1 z-10  w-2/4">
          <h2 className="text-white text-center mb-[40px]">
            Søg efter din drømme bolig
          </h2>
          <section className="bg-white place-self-center p-[34px]">
            <h4>Søg blandt 158 boliger til salg i 74 butikker</h4>
            <p>Hvad skal din næste bolig indeholde?</p>
            <input type="text" />
          </section>
        </div>
      </section>
      <section className="pb-[70px] border-b-2 max-w-[1110px] mx-auto grid grid-cols-2 gap-[94px]">
        <div className="grid grid-cols-9 grid-rows-9">
          <Image
            src="/img/frontpage-family.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Banner med billede af bygning"
            className="row-start-1 col-start-1 col-span-8 row-end-[8]"
          />
          <div className="w-full h-full row-start-2 col-start-2 row-end-[9] col-span-8 border-[12px] border-[#162A41] mt-"></div>
        </div>
        <div>
          <h3>Vi har fulgt danskerne hjem i snart 4 årtier</h3>
          <h4>De synes vi siger noget om os!</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has normal distribution.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="grid grid-cols-6 mt-[42px]">
            <Icon icon={FaHandHoldingHeart} bgColor textColor shape big />
            <div className="flex flex-col justify-between col-span-2">
              <h3>4829</h3>
              <p>boliger solgt</p>
            </div>
            <Icon icon={GiHouse} bgColor textColor shape big />
            <div className="flex flex-col justify-between col-span-2">
              <h3>158</h3>
              <p>boliger til salg</p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-[20px] mt-[70px] mb-[120px] max-w-[1110px] mx-auto">
        <div className="grid grid-cols-5 gap-1">
          <Icon icon={FaHandHoldingHeart} bgColor textColor shape />
          <div className="col-span-4">
            <h3>Bestil et salgs tjek</h3>
            <p>
              Med et Din Mægler Salgstjek bliver du opdateret på værdien af din
              bolig.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-1">
          <Icon icon={IoMdPin} bgColor textColor shape />
          <div className="col-span-4">
            <h3>74 butikker</h3>
            <p>
              Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som
              er fordelt rundt om i Danmark.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-1">
          <Icon icon={GiHouse} bgColor textColor shape />
          <div className="col-span-4">
            <h3>Tilmeld køberkartotek</h3>
            <p>
              Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden
              en ny bolig bliver annonceret.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8FB] pt-[120px] w-screen pb-[120px]">
        <section className="text-center mb-[62px] max-w-[1110px] mx-auto">
          <h3>Udvalgte boliger</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available but
            the this in majority have suffered alteration in some
          </p>
        </section>
        <section className="grid grid-cols-2 gap-[25px] max-w-[1110px] mx-auto">
          {homes.slice(0, 4).map((home) => (
            <HouseCard
              image={home.images[0].formats.thumbnail.url}
              id={home.id}
              adress={home.adress1}
              postalcode={home.postalcode}
              city={home.city}
              type={home.type}
              cost={home.cost}
              energylabel={home.energylabel}
              rooms={home.rooms}
              livingspace={home.livingspace}
              price={home.price}
            />
          ))}
          <div className="max-w-[180px] justify-center col-span-2 place-self-center mt-[40px]">
            <Link href="/properties">
              <Button label="Se alle boliger" />
            </Link>
          </div>
        </section>
      </section>
      <section className="w-screen grid grid-rows-1 mb-[120px]">
        <Image
          src="/img/banner-2.jpg"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="Banner med billede af bygning"
          className="row-start-1 col-start-1"
        />
        <div className="bg-[#455463] w-full h-full row-start-1 col-start-1 mix-blend-multiply"></div>
        <div className="z-10 grid grid-cols-1 lg:grid-cols-2 gap-[30px] max-w-[1110px] row-start-1 col-start-1 place-self-center">
          <h4 className="text-white">
            Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet
          </h4>
          <Formik initialValues={{ signUp: "" }} onSubmit={onSubmit}>
            <Form>
              <CustomInput
                name="signUp"
                type="email"
                placeholder={`Indtast din email adresse`}
                border
              />
            </Form>
          </Formik>
        </div>
      </section>
      <section className="max-w-[1110px] grid grid-cols-3 mx-auto">
        <div className="col-span-3 text-center mb-[60px]">
          <h2 className="px-[10%]">Mød vores engagerede medarbejdere</h2>
          <p className="px-[15%]">
            Din Mægler er garant for altid veluddannet assistance i dit
            boligsalg. Kontakt en af vores medarbejdere.
          </p>
        </div>
      </section>
    </article>
  );
  return content;
}
