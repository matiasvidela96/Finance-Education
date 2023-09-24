"use client";

import MisEtrategias from "@/components/MisEtrategias";
import BackButton from "@/components/ui/backButton";

export default function misEstrategias() {
  return (
    <>
      <BackButton />
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-16 pb-12 md:pt-20 md:pb-10">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
              <h1 className="h1">Bienvenido a Mis Estrategias</h1>
              <h3 className="mt-1">
                "Lugar donde podras encontrar la mejor estrategia en funcion de
                tu presupuesto y de tu perfil de riesgo"
              </h3>
            </div>

            {/* Form */}
            {/* <div className="max-w-sm mx-auto ">
              <div className="flex items-center"></div> */}
            <MisEtrategias />
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
