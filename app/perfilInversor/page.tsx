import questions from "./questions.json";
import "../css/style.css";

export const metadata = {
  title: 'Perfil del inversor',
  description: 'Crea tu perfil de inversion',
}

export default function PerfilInversor() {
  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Perfil del Inversor</h2>
              <p className="text-xl text-gray-400">Responde unas preguntas para definir tus estrategias</p>
            </div>

            <div className="flex flex-col w-screen px-5 h-screen bg-[#1A1A1A] justify-center items-center">
              <div className="flex flex-col items-start w-full">
                <h4 className="mt-10 text-xl text-white/60">Question 1 of 5</h4>
                <div className="mt-4 text-2xl text-white">
                  What type of framework is Next.js?
                </div>
              </div>
              <div className="flex flex-col w-full">
                {questions[0].answerOptions.map((answer, index) => (
                  <div
                    key={index}
                    className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl">
                    <input type="radio" className="w-6 h-6 bg-black" />
                    <p className="ml-6 text-white">{answer.answer}</p>
                  </div>
                ))}
              </div>

            </div>




          </div>
        </div>
      </section>
    </>
  )
}
