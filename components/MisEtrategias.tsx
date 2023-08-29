"use client";
import { useState, useContext } from "react";
import { PerfilInversorContext } from "../app/contexts/perfilInversor";
import Icon from "@/components/main-section/icon";
import Link from "next/link";

function MisEtrategias() {
  const [Income, setIncome] = useState(0);
  const [ShowResult, setShowResult] = useState(false);
  // @ts-ignore
  const { perfilInversor } = useContext(PerfilInversorContext);

  // Mostrar el formulario solo si el perfil del inversor está completado
  if (!perfilInversor) {
    return (
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-anchor="[data-aos-id-blocks]"
      >
        <div className=" p-6 hover:bg-zinc-700 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-red-600 mb-2">
            ¡Aún no has completado tu perfil de inversor!
          </h1>
          <p className="text-gray-400 mb-5">
            Por favor, completa tu perfil de inversor para que podamos calcular
            las mejores estrategias para ti.
          </p>

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
      </div>
    );
  }

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
            <h1 className="text-2xl font-bold mb-2">
              Tu perfil es: {perfilInversor}
            </h1>
            <div className="mt-8">
              <label
                htmlFor="income"
                className="block text-lg font-semibold text-gray-100 mb-2"
              >
                Monto de Inversión:
              </label>
              <input
                onChange={(e) => {
                  setShowResult(false);
                  setIncome(Number(e.target.value));
                }}
                id="income"
                type="number"
                className="form-input w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                placeholder="Monto a invertir (Mínimo $1000)"
                required
              />
            </div>
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
        <div className="mt-5">
          <h1 className="text-xl font-bold text-gray-400 mb-2">
            Resultado de la inversión:
          </h1>
          <p className="text-lg text-gray-400">{Income}</p>
        </div>
      )}
    </>
  );
}

export default MisEtrategias;
