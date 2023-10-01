import Link from "next/link";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Educación Financiera",
  description:
    "Educacion Financiera para todos los usuarios que esten interesados en aprender mas sobre el mundo de las inversiones",
};
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
function main() {
  return (
    <section className="flex justify-center items-center h-screen">
      <div
        className={`w-full h-auto  bg-gradient-to-r p-8 flex flex-col items-center justify-center items-centerbg-gradient-to-r  from-purple-800 to-purple-950 `}
      >
        <h1 className=" text-4xl leading-normal tracking-widest uppercase font-serif">
          Estas listo para invertir?
        </h1>
        <p className="text-gray-200 text-sm mt-3 font-serif">
          "Explorando un Universo de Conocimiento Financiero: Tu Destino
          Definitivo para Aprender sobre Inversiones de Manera Asombrosa"
        </p>

        <a
          href="/startPage"
          className="btn-sm text-white bg-zinc-950 hover:bg-purple-700  px-6 py-2 ml-3 mt-28 rounded-xl"
        >
          ADELANTE
        </a>
      </div>
    </section>
  );
}

export default main;
