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
    if (typeof window !== "undefined" && window.localStorage) {
      const perfilLocalStorage = window.localStorage.getItem("perfil");
      setperfilLocalStorage(perfilLocalStorage);
    }
  }, []);

  const [perfilLocalStorage, setperfilLocalStorage] = useState<string | null>(
    null
  );

  const [Income, setIncome] = useState(0);

  const [ShowResult, setShowResult] = useState(false);

  // use context
  // // @ts-ignore
  // const { perfilInversor } = useContext(PerfilInversorContext);

  const inputRef = useRef<HTMLInputElement | null>(null);

  // Mostrar el formulario solo si el perfil del inversor está completado
  if (!perfilLocalStorage) {
    return (
      <div className="flex flex-auto items-center justify-center ">
        <div className="">
          <a href={"/perfilInversor"}>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
              className=" text-center items-center hover:bg-purple-700 rounded-xl border border-purple-700"
            >
              <div className="p-16 rounded-lg shadow-md items-center text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-5 text-center">
                  ¡Aún no has completado tu perfil de inversor!
                </h1>
                <p className="text-gray-400  text-center">
                  Por favor, haz click aquí para completar tu perfil de inversor
                  y calcular las mejores estrategias para ti.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }

  //Muestra una vez el perfil ya esta realizado
  return (
    <>
      <div className=" items-center justify-center flex-auto py-10">
        <div>
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
            // className="items-center justify-center flex-auto "
          >
            <div className="max-w-sm mx-auto">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-2">
                  <h1 className="text-3xl font-bold mb-2 text-purple-600">
                    {"-"} {perfilLocalStorage}
                  </h1>
                  <div className="py-5">
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
        </div>
      </div>

      {ShowResult && (
        <>
          <div>
            <section>
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="">
                  <div className="max-w-3xl mx-auto text-center pb-6 md:pb-10">
                    <h2 className="h2 mb-4">Posibles estrategias</h2>
                    <p className="text-xl text-gray-400">
                      Aquí tienes unas sugerencias de cómo podrías distribuir tu
                      inversión de{" "}
                      <a className="text-white-800 font-bold">{Income}$</a>
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
