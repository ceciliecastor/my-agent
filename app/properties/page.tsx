import GetAllHomes from "@/lib/GetAllHomes";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";

export default async function homePage() {
  const homesData: Promise<Homes[]> = GetAllHomes();
  const homes = await homesData;

  const content = (
    <article className="grid content-center justify-center">
      <section>
        <h1>Boliger til salg</h1>
      </section>
      <article className="pt-[118px]">
        <section className="text-center max-w-[700px] mx-auto mb-[62px]">
          <h4>Søg efter dit drømmehus</h4>
          <input type="text" />
          {/* price slider */}
        </section>
        <section className="grid grid-cols-2 gap-[25px] max-w-[1108px]">
          {homes.map((home) => (
            <div
              className=" bg-white rounded-lg shadow dark:bg-white dark:border-gray-700 grid"
              key={home.id}
            >
              <div className="justify-end">
                <AiOutlineHeart />
              </div>
              <Link key={home.id} href={`/properties/${home.id}`}>
                <img
                  className="w-full rounded-t-lg"
                  src={home.images[0].formats.thumbnail.url}
                  alt={home.adress1}
                />
              </Link>

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
          ))}
        </section>
      </article>
    </article>
  );
  return content;
}
