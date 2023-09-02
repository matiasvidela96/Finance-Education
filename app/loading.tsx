import React from "react";
import "./css/LoadingPage.css"; // Asegúrate de que el nombre del archivo CSS sea correcto y esté en la misma ubicación que este componente

function LoadingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="tl:text-5xl font-bold text-4xl mb-4 text-purple-600">
            Loading...
          </h2>
          <div className="flex justify-center items-center loader-container">
            <div className="loader "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;