import GetAllHomes from "@/lib/GetAllHomes";
import Link from "next/link";
import Image from "next/image";
import { IoMdPin } from "react-icons/io";

export default async function homePage() {
  const homesData: Promise<Homes[]> = GetAllHomes();
  const homes = await homesData;

  const content = (
    <article className="grid content-center justify-center">
      <section className="grid place-content-center mb-[120px]">
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
          <div></div>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-[40px] mt-[70px] mb-[120px] max-w-[1110px] mx-auto">
        <div className="grid grid-cols-8 gap-3">
          <div className="col-span-1">
            <IoMdPin />
          </div>
          <div className="col-span-7">
            <h3>Bestil et salgs tjek</h3>
            <p>
              Med et Din Mægler Salgstjek bliver du opdateret på værdien af din
              bolig.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-8 gap-3">
          <div className="col-span-1">
            <IoMdPin />
          </div>
          <div className="col-span-7">
            <h3>Bestil et salgs tjek</h3>
            <p>
              Med et Din Mægler Salgstjek bliver du opdateret på værdien af din
              bolig.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-8 gap-3">
          <div className="col-span-1">
            <IoMdPin />
          </div>
          <div className="col-span-7">
            <h3>Bestil et salgs tjek</h3>
            <p>
              Med et Din Mægler Salgstjek bliver du opdateret på værdien af din
              bolig.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8FB] pt-[120px] w-screen">
        <section className="text-center mb-[62px] max-w-[1110px] mx-auto">
          <h3>Udvalgte boliger</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available but
            the this in majority have suffered alteration in some
          </p>
        </section>
        <section className="grid grid-cols-2 gap-[25px] max-w-[1110px] mx-auto">
          {homes.slice(0, 4).map((home) => (
            <Link key={home.id} href={`/properties/${home.id}`}>
              <div
                className=" bg-white rounded-lg shadow dark:bg-white dark:border-gray-700"
                key={home.id}
              >
                <Image
                  width={540}
                  height={225}
                  src={home.images[0].formats.thumbnail.url}
                  alt={home.adress1}
                />
                <section className="p-[25]">
                  <h4>{home.adress1}</h4>
                  <div>
                    <p>{home.postalcode}</p>
                    <p>{home.city}</p>
                  </div>
                  <div>
                    <h4>{home.type}</h4>
                    <p>Ejerudgift {home.cost} kr.</p>
                  </div>
                  <div className="grid">
                    <p>{home.energylabel}</p>
                    <h4>{home.rooms} værelser</h4>
                    <h4>{home.livingspace} m2</h4>
                    <p>Kr. {home.price}</p>
                  </div>
                </section>
              </div>
            </Link>
          ))}
        </section>
      </section>
    </article>
  );
  return content;
}
