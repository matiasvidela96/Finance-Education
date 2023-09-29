import lista from "./lista.json";
import Link from "next/link";

const BrokerInfo = () => {
  const { brokers, wallets, banks } = lista;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4 text-center">
        Información de Brokers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {brokers.map((broker, index) => (
          <Link href={broker.link || ""} key={index} target="_blanck">
            <div
              key={index}
              className="bg-zinc-800 rounded-lg p-4 shadow-md hover:bg-purple-700"
            >
              <img
                src={broker.image}
                alt={broker.name}
                className="w-32 h-32 object-cover mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold">{broker.name}</h2>
              <p className="text-gray-500">{broker.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <h1 className="text-3xl font-semibold text-center mt-8 mb-4">
        Información de Billeteras Virtuales
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {wallets.map((wallet, index) => (
          <Link href={wallet.link || ""} key={index} target="_blanck">
            <div
              key={index}
              className="bg-zinc-800 rounded-lg p-4 shadow-md hover:bg-purple-700"
            >
              <img
                src={wallet.image}
                alt={wallet.name}
                className="w-32 h-32 object-cover mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold">{wallet.name}</h2>
              <p className="text-gray-500">{wallet.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <h1 className="text-3xl font-semibold mt-8 mb-4 text-center">
        Información de Bancos Digitales
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {banks.map((bank, index) => (
          <Link href={bank.link || ""} key={index} target="_blanck">
            <div
              key={index}
              className="bg-zinc-800 rounded-lg p-4 shadow-md hover:bg-purple-700"
            >
              <img
                src={bank.image}
                alt={bank.name}
                className="w-32 h-32 object-cover mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold">{bank.name}</h2>
              <p className="text-gray-500">{bank.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrokerInfo;
