"use client";

import Icon from "@/components/main-section/icon";
import BackButton from "@/components/ui/backButton";
import Zigzag from "@/components/zigzag";

export default function Academy() {
  return (
    <>
      <BackButton />
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
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
      <Zigzag />
    </>
  );
}
