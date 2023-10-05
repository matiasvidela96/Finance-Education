import Icon from "@/components/main-section/icon";
import BackButton from "@/components/ui/backButton";
import Zigzag from "@/components/zigzag";
import FeatImage01 from "@/public/images/6.png";
import FeatImage02 from "@/public/images/2.png";
import FeatImage03 from "@/public/images/4.png";

export default function Academy() {
  return (
    <>
      <BackButton />
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
          <div className="">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-6 md:pb-10">
              <h2 className="h2 mb-4">Academy</h2>
              <p className="text-xl text-gray-400">
                Aprende sobre el mundo de la inversion
              </p>
            </div>

            {/* Items */}
            <div
              className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
              data-aos-id-blocks
            >
              {/* Bolsa */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <Icon
                  name="Money"
                  size={48}
                  color={"#f5f5f5"}
                  weight={"light"}
                  title={"Instrumentos de la bolsa"}
                  description={
                    "Familiarizate con los distintos instrumentos de inversion"
                  }
                  link={"/academy/bolsa"}
                ></Icon>
              </div>

              {/* Cripto*/}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <Icon
                  name="CurrencyBtc"
                  size={48}
                  color={"#f5f5f5"}
                  weight={"light"}
                  title={"Criptoactivos"}
                  description={
                    "Descubre las distintas criptomonedas y proyectos blockchain"
                  }
                  link={"/academy/crypto"}
                ></Icon>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Zigzag
        text1=" Momento de empezar"
        title1="Empieza desde cero"
        description1="Si estás buscando construir una base sólida en el mundo de
                    las finanzas. Aprende desde los conceptos fundamentales"
        points1_1="Domina la creación y seguimiento de portafolios efectivos"
        points1_2="Aprende a establecer metas financieras realistas y alcanzables"
        points1_3="Explora estrategias para construir un fondo de emergencia sólido"
        imageSrc1={FeatImage01}
        ///////
        text2=" Amplia tu portafolio de inversiones"
        title2="Acciones, S&P500, NASDAQ y mas indicadores."
        description2="Aprende conocimientos esenciales para entender cómo funcionan los mercados financieros. Descubre cómo analizar indicadores clave, tomar decisiones informadas y explorar nuevas oportunidades."
        points2_1="Aprende a analizar y comparar el rendimiento de diferentes acciones"
        points2_2="Comprende la importancia del índice S&P500 como referencia del mercado"
        points2_3="Explora cómo funcionan los indicadores técnicos en el análisis financiero"
        imageSrc2={FeatImage02}
        ///////
        text3="Adéntrate al universo de las criptomonedas"
        title3="Cryptos, NFT & Smart Contracts"
        description3="Descubre cómo funcionan estas innovadoras tecnologías y cómo están cambiando la forma en que interactuamos con los activos digitales, la propiedad intelectual. Desde Bitcoin hasta DeFi y mas allá..."
        points3_1="Explora las oportunidades de inversión en criptomonedas"
        points3_2="Comprende el impacto de los NFT en la industria del arte digital"
        points3_3="EDescubre cómo funcionan los SmartContracts de las Blockchain"
        imageSrc3={FeatImage03}
      />
    </>
  );
}
