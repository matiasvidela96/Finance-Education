export const metadata = {
  title: "Mis Estrategias - Finance Education",
  description: "Mis Estrategias - Finance Education",
};

import MisEtrategias from "@/components/MisEtrategias";
import BackButton from "@/components/ui/backButton";

export default function misEstrategias() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <BackButton />
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Bienvenido a Mis Estrategias</h1>
            <h3 className="mt-1">
              "Lugar donde podras encontrar la mejor estrategia en funcion de tu
              presupuesto y de tu perfil de riesgo"
            </h3>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto ">
            <div className="flex items-center my-6"></div>
            <MisEtrategias />
          </div>
        </div>
      </div>
    </section>
  );
}
