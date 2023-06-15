import Image from "next/image";
import GetAgentsDetails from "@/lib/GetAgentsDetails";

type Params = {
  params: {
    medarbejderID: string;
  };
};

export default async function AgentsDetails({
  params: { medarbejderID },
}: Params) {
  const agentDetails: Promise<Agent> = GetAgentsDetails(medarbejderID);

  const data = await agentDetails;

  return (
    <article key={data.id} className="w-full mb-[64px] grid justify-center">
      <Image src={data.image.url} width={280} height={280} alt={data.name} />
    </article>
  );
}
