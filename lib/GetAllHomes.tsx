export default async function GetAllHomes() {
  const res = await fetch("https://dinmaegler.onrender.com/homes");

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}
