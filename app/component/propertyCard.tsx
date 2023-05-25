import GetAllHomes from "@/lib/GetAllHomes";
import Link from "next/link";
import Image from "next/image";

export default async function PropertyCard() {
  const homesData: Promise<Homes[]> = GetAllHomes();
  const homes = await homesData;

  const content = (
    <article className="grid content-center justify-center">
      <article className="grid place-content-center">
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
                  <h2>{home.adress1}</h2>
                  <div className="flex">
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
