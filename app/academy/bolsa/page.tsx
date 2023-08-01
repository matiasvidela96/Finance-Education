"use client";

import Icon from "@/components/main-section/icon";
import BackButton from "@/components/ui/backButton";

export default function Bolsa() {
    return (
        <>
            <BackButton />
            <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="py-12">
                        {/* Section header */}
                        {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                            <h2 className="h2 mb-4">Finanzas</h2>
                            <p className="text-xl text-gray-400">Instrumentos financieros</p>
                        </div> */}

                        {/* Items */}
                        {/* <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks> */}

                        {/* Bolsa */}
                        {/* <div className="relative flex flex-col items-center hover:bg-zinc-800 hover:bg-opacity-25 rounded" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
                                <Icon
                                    name="Money"
                                    size={48}
                                    color={"#f5f5f5"}
                                    weight={"light"}
                                    title={"Como invertir"}
                                    description={"Familiarizate con los distintos instrumentos de inversion"}
                                    link={"/perfilInversor"}
                                ></Icon>
                            </div> */}

                        {/* Cripto*/}
                        {/* <div className="relative flex flex-col items-center hover:bg-zinc-800 hover:bg-opacity-25 rounded" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
                                <Icon
                                    name="CurrencyBtc"
                                    size={48}
                                    color={"#f5f5f5"}
                                    weight={"light"}
                                    title={"Criptoactivos"}
                                    description={"Descubre las distintas criptomonedas y proyectos blockchain"}
                                    link={"/misEstrategias"}
                                ></Icon>
                            </div> */}

                        {/* </div> */}
                    </div>
                </div>
            </section>

            {/* nivel basico */}
            <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="py-12 md:py-20">
                        {/* Section header */}
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                            <h2 className="h2 mb-4">Nivel basico</h2>
                            <p className="text-xl text-gray-400">
                                Realiza tu primera inversion
                            </p>
                        </div>

                        {/* Items */}
                        <div
                            className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
                            data-aos-id-blocks
                        >
                            {/* Plazo fijo */}
                            <div
                                className="relative flex flex-col items-center hover:bg-zinc-800 hover:bg-opacity-25 rounded"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-anchor="[data-aos-id-blocks]"
                            >
                                <Icon
                                    name="Bank"
                                    size={48}
                                    color={"#f5f5f5"}
                                    weight={"light"}
                                    title={"Plazo fijo"}
                                    description={"Donde y cuando utilizarlo"}
                                    link={"/academy/bolsa/plazoFijo"}
                                ></Icon>
                            </div>

                            {/* Dolar MEP*/}
                            <div
                                className="relative flex flex-col items-center hover:bg-zinc-800 hover:bg-opacity-25 rounded"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-anchor="[data-aos-id-blocks]"
                            >
                                <Icon
                                    name="CurrencyCircleDollar"
                                    size={48}
                                    color={"#f5f5f5"}
                                    weight={"light"}
                                    title={"Dolar MEP"}
                                    description={"Como comprar, ventajas y desventajas"}
                                    link={"/misEstrategias"}
                                ></Icon>
                            </div>

                            {/* FCI*/}
                            <div
                                className="relative flex flex-col items-center hover:bg-zinc-800 hover:bg-opacity-25 rounded"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-anchor="[data-aos-id-blocks]"
                            >
                                <Icon
                                    name="ChartDonut"
                                    size={48}
                                    color={"#f5f5f5"}
                                    weight={"light"}
                                    title={"Fondo comun de inversion"}
                                    description={"Que es y donde encontrarlo"}
                                    link={"/misEstrategias"}
                                ></Icon>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* nivel intermedio */}
            <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="py-12 md:py-20">
                        {/* Section header */}
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                            <h2 className="h2 mb-4">Nivel intermedio</h2>
                            <p className="text-xl text-gray-400">
                                Obten una mejor rentabilidad/riesgo
                            </p>
                        </div>

                        {/* Items */}
                        <div
                            className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
                            data-aos-id-blocks
                        >
                            {/* Cedears */}
                            <div
                                className="relative flex flex-col items-center hover:bg-zinc-800 hover:bg-opacity-25 rounded"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-anchor="[data-aos-id-blocks]"
                            >
                                <Icon
                                    name="ChartLineUp"
                                    size={48}
                                    color={"#f5f5f5"}
                                    weight={"light"}
                                    title={"Cedears"}
                                    description={
                                        "Como comprar acciones de empresas, en pesos en un click"
                                    }
                                    link={"/perfilInversor"}
                                ></Icon>
                            </div>

                            {/* Obligaciones negociables*/}
                            <div
                                className="relative flex flex-col items-center hover:bg-zinc-800 hover:bg-opacity-25 rounded"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-anchor="[data-aos-id-blocks]"
                            >
                                <Icon
                                    name="CurrencyDollar"
                                    size={48}
                                    color={"#f5f5f5"}
                                    weight={"light"}
                                    title={"Obligaciones negociables"}
                                    description={
                                        "Que son y como obtener rentabilidad en  dolares utilizando pesos"
                                    }
                                    link={"/misEstrategias"}
                                ></Icon>
                            </div>

                            {/* Cauciones*/}
                            <div
                                className="relative flex flex-col items-center hover:bg-zinc-800 hover:bg-opacity-25 rounded"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-anchor="[data-aos-id-blocks]"
                            >
                                <Icon
                                    name="Coins"
                                    size={48}
                                    color={"#f5f5f5"}
                                    weight={"light"}
                                    title={"Cauciones"}
                                    description={
                                        "Como un plazo fijo en pesos pero menor a 30 dias"
                                    }
                                    link={"/misEstrategias"}
                                ></Icon>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* nivel avanzado */}
            <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="py-12 md:py-20">
                        {/* Section header */}
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                            <h2 className="h2 mb-4">Nivel avanzado</h2>
                            <p className="text-xl text-gray-400">
                                Saca el mayor provecho a tus inversiones
                            </p>
                        </div>

                        {/* Items */}
                        <div
                            className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
                            data-aos-id-blocks
                        >
                            {/* Futuros */}
                            <div
                                className="relative flex flex-col items-center hover:bg-zinc-800 hover:bg-opacity-25 rounded"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-anchor="[data-aos-id-blocks]"
                            >
                                <Icon
                                    name="ChartLine"
                                    size={48}
                                    color={"#f5f5f5"}
                                    weight={"light"}
                                    title={"Futuros"}
                                    description={
                                        "Apuesta al precio de una accion y obten grandes rentabilidades"
                                    }
                                    link={"/perfilInversor"}
                                ></Icon>
                            </div>

                            {/* Bonos*/}
                            <div
                                className="relative flex flex-col items-center hover:bg-zinc-800 hover:bg-opacity-25 rounded"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-anchor="[data-aos-id-blocks]"
                            >
                                <Icon
                                    name="Cardholder"
                                    size={48}
                                    color={"#f5f5f5"}
                                    weight={"light"}
                                    title={"Bonos"}
                                    description={
                                        "Presta tu dinero y obten rentabilidades trimestrales"
                                    }
                                    link={"/misEstrategias"}
                                ></Icon>
                            </div>

                            {/* Acciones en broker extranjeros*/}
                            <div
                                className="relative flex flex-col items-center hover:bg-zinc-800 hover:bg-opacity-25 rounded"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-anchor="[data-aos-id-blocks]"
                            >
                                <Icon
                                    name="ChartBar"
                                    size={48}
                                    color={"#f5f5f5"}
                                    weight={"light"}
                                    title={"Acciones en broker extranjeros"}
                                    description={"Compra acciones en dolares en el exterior"}
                                    link={"/misEstrategias"}
                                ></Icon>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
