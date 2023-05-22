import GetAllHomes from "@/lib/GetAllHomes";
import Link from "next/link";
import Image from "next/image";

export default async function homePage() {
  const homesData: Promise<Homes[]> = GetAllHomes();
  const homes = await homesData;

  const content = (
    <article className="grid content-center justify-center">
      <article className="grid place-content-center">
        <h2 className="text-black">Søg efter din drømme bolig</h2>
        <section>
          <h4>Søg blandt 158 boliger til salg i 74 butikker</h4>
          <p>Hvad skal din næste bolig indeholde?</p>
          <input type="text" />
        </section>
      </article>
      <article className="max-w-[1108px]">
        <section>
          <div>
            <h3>Vi har fulgt danskerne hjem i snart 4 årtier</h3>
            <h4>De synes vi siger noget om os!</h4>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has normal distribution.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </section>
      </article>
      <article className="pt-[118px]">
        <section className="text-center max-w-[700px] mx-auto mb-[62px]">
          <h3>Udvalgte boliger</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available but
            the this in majority have suffered alteration in some
          </p>
        </section>
        <section className="grid grid-cols-2 gap-[25px] max-w-[1108px]">
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
      </article>
    </article>
  );
  return content;
}
