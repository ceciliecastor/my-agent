import Image from "next/image";

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <section className="w-screen grid grid-rows-1">
      <Image
        src="/img/banner.jpg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt="Banner med billede af bygning"
        className="row-start-1 col-start-1"
      />
      <div className="bg-[#162A41] w-full h-full row-start-1 col-start-1 mix-blend-multiply"></div>
      <h1 className="z-10 text-center text-white text-6xl row-start-1 col-start-1 place-self-center">
        {text}
      </h1>
    </section>
  );
};

export default Heading;
