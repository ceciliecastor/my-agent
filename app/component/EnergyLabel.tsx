type energyValue = "A" | "B" | "C" | "D";

interface EnergyLabelProps {
  value: energyValue;
}

const EnergyLabel: React.FC<EnergyLabelProps> = ({ value }) => {
  const colorMap: Record<energyValue, string> = {
    A: "bg-[#10AC84]",
    B: "bg-[#F2C94C]",
    C: "bg-[#F2994A]",
    D: "bg-[#EB5757]",
  };

  return (
    <div
      className={`
      text-white 
      w-[30px] 
      h-[30px] 
      leading-[30px] 
      text-center
      ${colorMap[value] || "bg-black"}
      `}
    >
      <h4>{value}</h4>
    </div>
  );
};

export default EnergyLabel;
