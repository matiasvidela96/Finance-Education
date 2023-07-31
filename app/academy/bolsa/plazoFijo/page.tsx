'use client'
import React from "react";
import "../../../css/style.css";
import YoutubeEmbed from "@/components/academy/video";

export default function PlazoFijo(this: any) {

    return (
        <>
            <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="py-12">
                        {/* Section header */}
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                            <h2 className="h2 mb-4">Nivel avanzado</h2>
                            <p className="text-xl text-gray-400">Saca el mayor provecho a tus inversiones</p>
                        </div>
                        {/* Items */}
                        <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
                            <div className="App">
                                <h1>Youtube Embed</h1>
                                <YoutubeEmbed embedId="rokGy0huYEA" title={"prueba"} description={"descripcion"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );


}





