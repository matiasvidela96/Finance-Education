"use client";

import { useState, useEffect } from "react";
import Icon from "@/components/main-section/icon";
import BackButton from "@/components/ui/backButton";
import Cards from "@/components/Cards";

export default function Noticias() {
  const [newsData, setNewsData] = useState([]);
  const [showNews, setshowNews] = useState(false);

  // Llamada a api para obtener noticias
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/noticias", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
        setNewsData(data.feed);
        setshowNews(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section>
        <BackButton />
        {showNews ? (
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="h2 mb-4">Noticias</h2>
                <p className="text-xl text-gray-400">
                  Enterate de las ultimas novedades del mundo financiero
                </p>
              </div>
              {/* Items */}
              <div
                className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
                data-aos-id-blocks
              >
                {/* Mapeo las noticias */}
                {newsData.slice(-10).map((news, index) => (
                  <div
                    className="relative flex flex-col items-center hover:bg-zinc-800 hover:bg-opacity-25 rounded"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-anchor="[data-aos-id-blocks]"
                    key={index}
                  >
                    <Cards
                      title={news.title}
                      description={news.summary}
                      link={news.url}
                      target="_blank"
                    />
                    {/* <Icon
                      title={news.title}
                      description={news.summary}
                      link={news.url}
                      target="_blank"
                    ></Icon> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="h2 mb-4">Noticias</h2>
                <p className="text-xl text-gray-400">Cargando noticias...</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
