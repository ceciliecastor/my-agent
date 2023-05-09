import GetAllHomes from "@/lib/GetAllHomes";

export default async function homePage() {
  const homesData: Promise<Homes[]> = GetAllHomes();
  const homes = await homesData;

  const content = (
    <article>
      <section>
        <h2 className="text-white">Søg efter din drømme bolig</h2>
        <section>
          <h4>Søg blandt 158 boliger til salg i 74 butikker</h4>
          <p>Hvad skal din næste bolig indeholde?</p>
          <input type="text" />
        </section>
      </section>
    </article>
  );
}
