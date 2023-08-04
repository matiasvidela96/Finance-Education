'use client'
import React from "react";
import "../../../css/style.css";
import YoutubeEmbed from "@/components/academy/video";
import Videos from "../../videos.json"
import BackButton from "@/components/ui/backButton";

export default function PlazoFijo(this: any) {

    return (
        <>
            <section>
                <BackButton />
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="py-12">
                        {/* Section header */}
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                            <h2 className="h2 mb-4">Plazo Fijo</h2>
                            <p className="text-xl text-gray-400">Todo lo que debes saber</p>
                        </div>
                        {/* Items */}
                        <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
                            {/* Mapear los distintos videos */}
                            {Videos.blockchain.map((video, index) => (
                                <div
                                    className="flex-col items-center hover:bg-zinc-800 hover:bg-opacity-25 rounded"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    data-aos-anchor="[data-aos-id-blocks]"
                                    key={index}
                                >
                                    <YoutubeEmbed embedId={video.url} title={video.title} description={video.description} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


        </>
    );


}




