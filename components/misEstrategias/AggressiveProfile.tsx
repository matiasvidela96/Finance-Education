import React from "react";
import Icon from "@/components/main-section/icon";
import * as logo from "@phosphor-icons/react";
interface ProfileProps {
  income: number;
}

interface StrategyItem {
  instrument: string;
  allocation: number;
  icon: keyof typeof logo;
  link: string;
}

function AggressiveProfile({ income }: ProfileProps) {
  const strategyOne: StrategyItem[] = [
    {
      instrument: "Cedears",
      allocation: 0.4,
      icon: "Table",
      link: "/academy/bolsa/cedears",
    },
    {
      instrument: "Liquidez concentrada defi",
      allocation: 0.2,
      icon: "Coins",
      link: "/academy/crypto/liquidezConcentrada",
    },
    {
      instrument: "Bonos",
      allocation: 0.3,
      icon: "ChartBar",
      link: "/academy/bolsa/bonos",
    },
    {
      instrument: "Futuros",
      allocation: 0.1,
      icon: "ChartBar",
      link: "/academy/bolsa/futuros",
    },
  ];
  const strategyTwo: StrategyItem[] = [
    {
      instrument: "Cedears",
      allocation: 0.3,
      icon: "Table",
      link: "/academy/bolsa/cedears",
    },
    {
      instrument: "Staking defi",
      allocation: 0.2,
      icon: "Coins",
      link: "/academy/crypto/stakingDefi",
    },
    {
      instrument: "Obligaciones negociables",
      allocation: 0.3,
      icon: "Coins",
      link: "/academy/bolsa/oN",
    },
    {
      instrument: "Fondo común de inversión",
      allocation: 0.2,
      icon: "ChartBar",
      link: "/academy/bolsa/FCI",
    },
  ];

  return (
    <>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-600">Estrategia 1</h2>
      </div>
      <div
        className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 items-start md:max-w-2xl lg:max-w-none text-center mb-5"
        data-aos-id-blocks
      >
        {strategyOne.map((item, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor="[data-aos-id-blocks]"
            key={index}
          >
            <Icon
              name={item.icon}
              size={48}
              color={"#f5f5f5"}
              weight={"light"}
              title={item.instrument}
              description={
                Math.round(item.allocation * income).toString() + "$"
              }
              link={item.link}
              descriptionColor={"text-green-500"}
            ></Icon>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 text-purple-600">
          Estrategia 2
        </h2>
      </div>
      <div
        className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none text-center"
        data-aos-id-blocks
      >
        {strategyTwo.map((item, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor="[data-aos-id-blocks]"
            key={index}
          >
            <Icon
              name={item.icon}
              size={48}
              color={"#f5f5f5"}
              weight={"light"}
              title={item.instrument}
              description={
                Math.round(item.allocation * income).toString() + "$"
              }
              link={item.link}
              descriptionColor={"text-green-500"}
            ></Icon>
          </div>
        ))}
      </div>
    </>
  );
}
export default AggressiveProfile;
