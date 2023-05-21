import GetHomeDetails from "@/lib/getHomeDetails";
import { AiOutlineHeart } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { IoImageOutline, IoLayersOutline } from "react-icons/io5";
import Image from "next/image";
import SearchInput from "@/app/component/searchInput";

type Params = {
  params: {
    propertyID: string;
  };
};

export default async function PropertyDetails({
  params: { propertyID },
}: Params) {
  const propertyDetails: Promise<Homes> = GetHomeDetails(propertyID);

  const data = await propertyDetails;

  return (
    <article key={data.id} className="w-full mb-[64px] grid justify-center">
      <Image
        src={data.images[0].url}
        width={1920}
        height={500}
        alt={data.adress1}
      />
      <section className="w-[1110px] place-self-center">
        <section className="flex justify-between border-b-2 border-[#D3DEE8] pb-[16px] pt-[32px] mb-[34px]">
          <div>
            <h4>{data.adress1}</h4>
            <h4>{data.postalcode}</h4>
          </div>
          <div className="flex text-3xl">
            <IoImageOutline />
            <IoLayersOutline />
            <SlLocationPin />
            <AiOutlineHeart />
          </div>
          <h3 className="">Kr. {data.price}</h3>
        </section>
        <section className="grid grid-cols-3 gap-[16px] mb-[34px]">
          <div className="grid grid-cols-2">
            <p>Sagsnummer:</p>
            <p>??</p>
            <p>Boligareal:</p>
            <p>{data.livingspace}</p>
            <p>Grundareal:</p>
            <p>{data.lotsize}</p>
            <p>Rum/værelser:</p>
            <p>{data.rooms}</p>
            <p>Antal plan:</p>
            <p>??</p>
          </div>
          <div className="grid grid-cols-2">
            <p>Kælder:</p>
            <p>{data.basementsize}</p>
            <p>Byggeår:</p>
            <p>{data.built}</p>
            <p>Ombygget:</p>
            <p>{data.remodel}</p>
            <p>Energimærke:</p>
            <p>{data.energylabel}</p>
          </div>
          <div className="grid grid-cols-2">
            <p>Udbetaling:</p>
            <p>kr. {data.payment}</p>
            <p>Brutto ex ejerudgift:</p>
            <p>kr. {data.gross}</p>
            <p>Netto ex ejerudgift:</p>
            <p>kr. {data.netto}</p>
            <p>Ejerudgift:</p>
            <p>kr. {data.cost}</p>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-[32px]">
          <section>
            <h3 className="mb-[8px]">Beskrivelse</h3>
            <p>{data.description}</p>
          </section>
          <section>
            <h3 className="mb-[8px]">Ansvarlig mægler</h3>
            <div className="border-2 p-[42px] grid grid-cols-2 gap-[10px]">
              <Image
                src={data.agent.image.formats.thumbnail.url}
                width={280}
                height={280}
                alt={data.agent.name}
              />
              <div>
                <h3>{data.agent.name}</h3>
                <p>{data.agent.title}</p>
                <p>{data.agent.phone}</p>
                <p>{data.agent.email}</p>
              </div>
            </div>
          </section>
          <SearchInput />
        </section>
      </section>
    </article>
  );
}
