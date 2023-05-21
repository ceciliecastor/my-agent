export default async function GetHomeDetails(propertyID: string) {
  const res = await fetch(
    `https://dinmaegler.onrender.com/homes/${propertyID}`
  );

  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}
