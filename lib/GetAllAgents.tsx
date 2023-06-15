export default async function GetAllAgents() {
  const res = await fetch("https://dinmaegler.onrender.com/agents");

  //check if there's a good response
  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}
