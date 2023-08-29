"use client";
import { useState, useContext } from "react";
import { PerfilInversorContext } from "../app/contexts/perfilInversor";
import Icon from "@/components/main-section/icon";

function MisEtrategias() {
  const [Income, setIncome] = useState(0);
  const [ShowResult, setShowResult] = useState(false);
  // @ts-ignore
  const { perfilInversor } = useContext(PerfilInversorContext);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowResult(true);
          e.currentTarget.reset();
        }}
      >
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-2">
            {perfilInversor ? (
              <h1 className="text-2xl font-bold mb-2">
                Tu perfil es: {perfilInversor}
              </h1>
            ) : (
              <>
                {/* Perfil del inversor */}

                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-anchor="[data-aos-id-blocks]"
                >
                  <h1 className="text-xl">
                    No has realizado tu perfil del inversor (Es necesario para
                    poder calcular tus estrategias){" "}
                  </h1>
                  <Icon
                    name="HandCoins"
                    size={48}
                    color={"#f5f5f5"}
                    weight={"light"}
                    title={"Perfil del Inversor"}
                    description={
                      "Contesta las preguntas para definir tu perfil y ver las estrategias que mas se adaptan a ti."
                    }
                    link={"/perfilInversor"}
                  ></Icon>
                </div>
              </>
            )}

            <h2 className="text-2xl font-bold mt-3 mb-2">
              Dinero de Inversion:
            </h2>
            <input
              onChange={(e) => {
                setShowResult(false);
                setIncome(Number(e.target.value));
                console.log(Number(e.target.value));
              }}
              id="income"
              type="number"
              className="form-input w-full text-gray-300"
              placeholder="Dinero a invertir (Mayor a $1000)"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-2">
            <button
              disabled={Income < 1000}
              className="btn text-white bg-purple-600 hover:bg-purple-700 w-full h-11 disabled:opacity-50"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
      {ShowResult && (
        <div>
          <h1>Esto es el resultado</h1>
          <p>{Income}</p>
        </div>
      )}
    </>
  );
}

export default MisEtrategias;
