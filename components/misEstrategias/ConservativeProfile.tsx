import React from "react";
interface ProfileProps {
  income: number;
}

function ConservativeProfile({ income }: ProfileProps) {
  const portfolioAllocation = [
    { instrument: "Activo 1", allocation: 0.4 },
    { instrument: "Activo 2", allocation: 0.3 },
    { instrument: "Activo 3", allocation: 0.2 },
    { instrument: "Activo 4", allocation: 0.1 },
  ];

  return (
    <div className="mt-5">
      <h1 className="text-xl font-bold text-gray-400 mb-2">
        Portafolio para Perfil Conservador:
      </h1>
      <p className="text-gray-400 mb-2">
        Aquí tienes una sugerencia de cómo podrías distribuir tu inversión:
      </p>
      <ul className="list-disc pl-6 text-gray-400">
        {portfolioAllocation.map((item, index) => (
          <li key={index}>
            {item.instrument}: {" $"}
            {Math.round(item.allocation * income)}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ConservativeProfile;
