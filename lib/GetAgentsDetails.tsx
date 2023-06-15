export default async function GetAgentsDetails(medarbejderID: string) {
  const res = await fetch(
    `https://dinmaegler.onrender.com/agents/${medarbejderID}`
  );

  if (!res.ok)
    throw new Error(
      `Failed to fetch data. Status code: ${res.status}, ${res.statusText}`
    );
  return res.json();
}
