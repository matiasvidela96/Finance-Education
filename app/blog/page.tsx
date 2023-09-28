import React from "react";
import "../css/Working.css"; // Asegúrate de que el nombre del archivo CSS sea correcto y esté en la misma ubicación que este componente
import BackButton from "@/components/ui/backButton";
import BlogEntry from "@/components/blog/blogEntry";

function blogPage() {
  return (
    <>
      {/* // <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
    // </div> */}

      <BackButton />

      <BlogEntry
        title="Como comenzar a invertir"
        imageSrc="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
      />
    </>
  );
}

export default blogPage;
