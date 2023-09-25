"use client";

import { useState, useEffect } from "react";
import Icon from "@/components/main-section/icon";
import BackButton from "@/components/ui/backButton";
import Cards from "@/components/Cards";
import { NewsProps } from "news";
import "../css/LoadingPage.css"; // Asegúrate de que el nombre del archivo CSS sea correcto y esté en la misma ubicación que este componente
import defaultImage from "../../public/images/newsDefault.png";

export default function Noticias() {
  const [newsData, setNewsData] = useState<NewsProps[]>([]);
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
        console.log("data feed", data.feed);
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
                {newsData.slice(-50).map((news, index) => (
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
                      image={news.banner_image !== null ? news.banner_image : "https://plus.unsplash.com/premium_photo-1664197368374-605ce8ec8f54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}
                      tags={news.topics}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="h2 mb-10">Noticias</h2>
                <div className="loader-container">
                  <div className="loader"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
