"use client";
import { useState, useContext, useEffect } from "react";
import { PerfilInversorContext } from "../app/contexts/perfilInversor";
import Icon from "@/components/main-section/icon";
import Link from "next/link";

import ConservativeProfile from "./misEstrategias/ConservativeProfile";
import ModerateProfile from "./misEstrategias/ModerateProfile";
import AggressiveProfile from "./misEstrategias/AggressiveProfile";

import { useRef } from "react";
// import { useUser } from "@clerk/nextjs";

function MisEtrategias() {

  // guardar perfil en base de datos
  // const user = useUser();
  // const id = user.user?.id;
  // const updateRiskProfile = async (id: string | undefined, income: any) => {
  //   const res = await fetch("/api/prismaDB", {
  //     method: "PUT",
  //     body: JSON.stringify({ id, income }),
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   const data = await res.json();
  //   console.log("Respuesta en ME");
  //   console.log(data);
  // };

  useEffect(() => {

    if (typeof window !== 'undefined' && window.localStorage) {
      const perfilLocalStorage = window.localStorage.getItem("perfil");
      setperfilLocalStorage(perfilLocalStorage);
    }

  }, [])

  const [perfilLocalStorage, setperfilLocalStorage] = useState<string | null>(null);

  const [Income, setIncome] = useState(0);

  const [ShowResult, setShowResult] = useState(false);

  // use context
  // // @ts-ignore
  // const { perfilInversor } = useContext(PerfilInversorContext); 

  const inputRef = useRef<HTMLInputElement | null>(null);

  // Mostrar el formulario solo si el perfil del inversor está completado
  if (!perfilLocalStorage) {
    return (

      <Link href={"/perfilInversor"}>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-anchor="[data-aos-id-blocks]"
          className="flex flex-wrap text-center mb-4 hover:bg-zinc-700 max-w-sm mx-auto"
        >
          <div className=" p-6 rounded-lg shadow-md items-center">
            <h1 className="text-2xl font-bold text-red-600 mb-2">
              ¡Aún no has completado tu perfil de inversor!
            </h1>
            <p className="text-gray-400 mb-5">
              Por favor, haz click aqui para completar tu perfil de inversor y calcular las mejores estrategias para ti.
            </p>
            {/* <Icon
                name="HandCoins"
                size={48}
                color={"#f5f5f5"}
                weight={"light"}
                title={"Perfil del Inversor"}
                description={
                  "Contesta las preguntas para definir tu perfil y ver las estrategias que mas se adaptan a ti."
                }
                link={"/perfilInversor"}
              ></Icon> */}
          </div>
        </div>
      </Link>
    );
  }

  //Muestra una vez el perfil ya esta realizado
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowResult(true);
          e.currentTarget.reset();
          if (inputRef.current) {
            inputRef.current.blur(); // Verificar si inputRef.current no es null antes de usarlo
          }
          // updateRiskProfile(id, Income);
        }}
      >
        <div className="max-w-sm mx-auto ">
          <div className="flex items-center"></div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-2">
              <h1 className="text-2xl font-bold mb-2 text-purple-600">
                {"-"} {perfilLocalStorage}
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
                  className="form-input w-full p-3 border border-gray-300 rounded-md  focus:border-purple-600"
                  placeholder="Monto a invertir (Mínimo $1000)"
                  required
                  ref={inputRef} // Asignar la referencia al input
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
        </div>
      </form>
      {ShowResult && (
        <>
          <div>
            <section>
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                  <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                    <h2 className="h2 mb-4">Posibles estrategias</h2>
                    <p className="text-xl text-gray-400" >
                      Aquí tienes unas sugerencias de cómo podrías distribuir tu inversión de {Income}$
                    </p>
                  </div>
                  {perfilLocalStorage === "Perfil Moderado" && (
                    <ModerateProfile income={Income} />
                  )}
                  {perfilLocalStorage === "Perfil Conservador" && (
                    <ConservativeProfile income={Income} />
                  )}
                  {perfilLocalStorage === "Perfil Arriesgado" && (
                    <AggressiveProfile income={Income} />
                  )}
                </div>
              </div>

            </section>
          </div>
        </>
      )}
    </>
  );
}

export default MisEtrategias;
