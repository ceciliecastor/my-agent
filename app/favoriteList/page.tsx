import GetAllHomes from "@/lib/GetAllHomes";
import Link from "next/link";

export default async function homePage() {
  const homesData: Promise<Homes[]> = GetAllHomes();
  const homes = await homesData;

  const content = (
    <article>
      <section>
        <h1>Boliger til salg</h1>
      </section>
      <section>
        <h3>Søg efter dit drømmehus</h3>
        {/* søge funktion */}
      </section>
      <section className="grid grid-cols-2 gap-[25px] max-w-[1108px]">
        {homes.slice(0, 4).map((home) => (
          <Link key={home.id} href={`/${home.id}`}>
            <div
              className=" bg-white rounded-lg shadow dark:bg-white dark:border-gray-700"
              key={home.id}
            >
              <img
                className="w-full rounded-t-lg"
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
  );
  return content;
}
