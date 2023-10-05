import React from "react";
import { blogProps } from "blog";
import YoutubeEmbed from "../academy/video";

function BlogEntry({ title, imageSrc }: blogProps) {
  return (
    <div className="max-w-4xl mx-auto sm:px-6 mb-8">
      <h2 className="text-3xl font-bold text-purple-600 mb-2 text-center">
        {title}
      </h2>
      <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg mb-6">
        <img className="w-full" src={imageSrc} alt={title} />
      </div>
      <div className="py-4 px-6">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Antes de comenzar a invertir, es crucial que definas tus metas
          financieras
        </h1>
        <p className="mb-4 text-justify">
          Pregúntate a ti mismo: ¿Por qué quiero empezar a invertir? No es lo
          mismo invertir con un objetivo de comprarte una casa dentro de cinco
          años, que invertir para la jubilación, o para financiar la educación
          de tus hijos. O si simplemente quieres que la inflación no se coma tus
          ahorros. Cada objetivo lleva unos plazos distintos, y por tanto unos
          productos financieros diferentes.
        </p>
        <div className="mb-8">
          <YoutubeEmbed
            embedId={"WihZB7IwtPY"}
            title={"Por donde empezar"}
            description={"Lo que debes saber para arrancar con tus inversiones"}
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-center">
          Establecer objetivos claros
        </h1>
        <p className="mb-4 text-justify">
          Te ayudará a determinar el horizonte temporal de tus inversiones y la
          cantidad de riesgo que estás dispuesto a asumir.
        </p>
        <p className="mb-4 text-justify">
          Porque sí: cada persona tiene un nivel diferente de tolerancia al
          riesgo. Algunos están dispuestos a asumir mayores riesgos para obtener
          mayores ganancias, mientras que otros prefieren una inversión más
          conservadora. Por eso es importante que te preguntes cosas como: ¿Voy
          a estar cómodo si se producen caídas abruptas en el mercado? ¿Prefiero
          algo que me deje dormir tranquilo por las noches aunque implique menor
          rentabilidad?
        </p>
        <div className="mb-8">
          <YoutubeEmbed
            embedId={"33k7LaDlEA0"}
            title={"Establecer objetivos"}
            description={"A donde quieres llegar o que quieres lograr"}
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-center">
          Evaluar tu capacidad para manejar la volatilidad del mercado
        </h1>
        <p className="mb-4 text-justify">
          Busca inversiones que se ajusten a tu perfil de riesgo. Para ello,
          será necesario analizar cuál es nuestro perfil inversor, que podrá ser
          conservador, moderado, o arriesgado.
        </p>
        <p className="mb-4 text-justify">
          Si no sabes cuál es el tuyo,{" "}
          <a href="/perfilInversor">aquí puedes calcularlo.</a>
        </p>
        <div className="mb-8">
          <YoutubeEmbed
            embedId={"Y9_YqwsJb8Q"}
            title={"Volatibilidad"}
            description={"Como manejarte en un mercado cambiante"}
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-center">
          Fondo de emergencia
        </h1>
        <p className="mb-4 text-justify">
          La finalidad de contar con un colchón de seguridad consiste en
          garantizar resguardo y solidez económica, de modo que cuando te
          enfrentes a una contingencia, puedas disfrutar de la calma de saber
          que estás capacitado para afrontarla sin agobios.
        </p>
        <div className="mb-8">
          <YoutubeEmbed
            embedId={"CnTY-lNfXg8"}
            title={"Como crear tu propio fondo de emergencia"}
            description={"Prepararte para cualquier contingencia"}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogEntry;
