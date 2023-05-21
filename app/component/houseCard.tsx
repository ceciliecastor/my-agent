export default function houseCard() {
  return (
    <Link key={} href={`/${id}`}>
      <div
        className=" bg-white rounded-lg shadow dark:bg-white dark:border-gray-700"
        key={}
      >
        <img
          className="w-full rounded-t-lg"
          src={images[0].formats.thumbnail.url}
          alt={adress1}
        />
        <section className="p-[25]">
          <h4>{adress1}</h4>
          <div>
            <p>{postalcode}</p>
            <p>{city}</p>
          </div>
          <div>
            <h4>{type}</h4>
            <p>Ejerudgift {cost} kr.</p>
          </div>
          <div className="grid">
            <p>{energylabel}</p>
            <h4>{rooms} værelser</h4>
            <h4>{livingspace} m2</h4>
            <p>Kr. {price}</p>
          </div>
        </section>
      </div>
    </Link>
  );
}
