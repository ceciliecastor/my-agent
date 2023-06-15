import Link from "next/link";
import Image from "next/image";

import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

interface AgentCardProps {
  name: string;
  title: string;
  image: string;
  id: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ name, title, image, id }) => {
  const content = (
    <article className="grid content-center justify-center w-full">
      <article className="pt-[118px] mb-[180px]">
        <section className="grid grid-cols-3 gap-[25px] max-w-[1110px] mx-auto">
          <div
            key={id}
            className="
              text-center 
              border-2
              rounded-md
              grid"
          >
            <Link href={`/medarbejdere/${id}`}>
              <Image
                src={image}
                width={350}
                height={300}
                className="rounded-t"
                alt={name}
              />
            </Link>
            <h3 className="mt-[25px]">{name}</h3>
            <p className="mb-[25px]">{title}</p>
            <div className="flex gap-3 place-self-center mb-[25px]">
              <Link href="https://linkedin.com" passHref={true}>
                <MdEmail size={24} />
              </Link>
              <Link href="linkedin.com">
                <FaLinkedinIn size={24} />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </article>
  );
  return content;
};
export default AgentCard;
