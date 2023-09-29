import React from "react";
import BackButton from "@/components/ui/backButton";
import BrokerInfo from "@/components/comparador/comparadorComponent";
function comparadorPage() {
  return (
    // <div className="max-w-6xl mx-auto px-4 sm:px-6">
    //   <div className="py-12 md:py-20">
    //     <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
    //       <h2 className="tl:text-5xl font-bold text-4xl mb-10 text-purple-600 ">
    //         Working...
    //       </h2>
    //       <div className="flex justify-center items-center loader-container">
    //         <p></p>
    //         <div className="working"></div>
    //       </div>
    //       <h2 className="tl:text-5xl text-4xl mb-4 text-purple-600">
    //         ¡Estamos trabajando en esta sección, te haremos saber cuando esté
    //         lista!
    //       </h2>
    //       <BackButton />
    //     </div>
    //   </div>
    // </div>
    <>
      <BackButton />
      <BrokerInfo />
    </>
  );
}

export default comparadorPage;
