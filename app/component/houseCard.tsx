import Link from "next/link";
import Image from "next/image";
import EnergyLabel from "./EnergyLabel";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface HouseCardProps {
  image: string;
  id: string;
  adress: string;
  postalcode: number;
  city: string;
  type: string;
  cost: number;
  energylabel: "A" | "B" | "C" | "D";
  rooms: string;
  livingspace: number;
  price: number;
}

const HouseCard: React.FC<HouseCardProps> = ({
  image,
  id,
  adress,
  postalcode,
  city,
  type,
  cost,
  energylabel,
  rooms,
  livingspace,
  price,
}) => {
  return (
    <div className="grid grid-cols-1 bg-white rounded-lg shadow dark:bg-white dark:border-gray-700">
      <div className="col-start-1 row-start-1">
        <Image
          src={image}
          width={540}
          height={225}
          className="rounded-t"
          alt={adress}
        />
      </div>
      <div className="col-start-1 row-start-1 z-10 p-[25px]">
        {/* <FaHeart /> */}
        <FaRegHeart />
      </div>
      <Link key={id} href={`/${id}`}>
        <section className="p-[25px]">
          <h2>{adress}</h2>
          <div className="flex gap-3">
            <p>{postalcode}</p>
            <p>{city}</p>
          </div>
          <div className="flex gap-3">
            <h4>{type}</h4>
            <p>Ejerudgift {cost} kr.</p>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2 flex align-text-bottom gap-3">
              <EnergyLabel value={energylabel} />
              <h4 className="text-black">{rooms} værelser</h4>
              <h4>{livingspace} m2</h4>
            </div>
            <p className="">Kr. {price}</p>
          </div>
        </section>
      </Link>
    </div>
  );
};
export default HouseCard;
