"use client";
import questions from "./questions.json";
import "../css/style.css";
import { useState } from "react";
import Head from "next/head";
import BackButton from "@/components/ui/backButton";
import { AnswerProps } from "answer";

export default function PerfilInversor() {
  // estado de pregunta actual
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // mantener respuesta seleccionada
  const [selectedOptions, setSelectedOptions] = useState<AnswerProps[]>([]);
  // calcular y mostrar puntaje
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // manejo de siguiente y anterior
  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);
  };
  // setear opcion seleccionada
  const handleAnswerOption = ({ answer }: AnswerProps) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
    console.log(selectedOptions);
  };

  // calcular puntaje segun las respuestas
  const handleSubmitButton = () => {
    let newScore = 0;
    // for (let i = 0; i < questions.length; i++) {
    //   questions[i].answerOptions.map(
    //     (answer) =>
    //       answer.isCorrect &&
    //       answer.answer === selectedOptions[i]?.answerByUser &&
    //       (newScore += 1)
    //   );
    // }
    setScore(newScore);
    setShowScore(true);
  };

  return (
    <>
      <BackButton />
      <Head>
        <title>Perfil del inversor</title>
        <meta name="description" content="Crea tu perfil de inversion" />
      </Head>

      {showScore ? (
        <h1 className="text-3xl font-semibold text-center text-white">
          You scored {score} out of {questions.length}
        </h1>
      ) : (
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="h2 mb-4">Perfil del Inversor</h2>
                <p className="text-xl text-gray-400">
                  Responde unas preguntas para definir tus estrategias
                </p>
              </div>
              {/* Preguntas */}
              <div>
                <div className="flex flex-col px-5 bg-[#1A1A1A] justify-center items-center">
                  <div className="flex flex-col items-start w-full">
                    <h4 className="mt-10 text-xl text-white/60">
                      Question {currentQuestion + 1} of {questions.length}
                    </h4>
                    <div className="mt-4 text-2xl text-white">
                      {questions[currentQuestion].question}
                    </div>
                  </div>
                  {/* mapeo las respuestas */}
                  <div className="flex flex-col w-full">
                    {questions[currentQuestion].answerOptions.map(
                      (answer, index) => (
                        <div
                          key={index}
                          className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer hover:bg-zinc-800 border-white/10 rounded-xl"
                          onClick={(e) => handleAnswerOption({ answer: answer.answer })}
                        >
                          <input
                            type="radio"
                            name={answer.answer}
                            value={answer.answer}
                            onChange={(e) => handleAnswerOption({ answer: answer.answer })}
                            checked={
                              answer.answer ===
                              selectedOptions[currentQuestion]?.answerByUser
                            }
                            className="w-6 h-6 bg-black"
                          />
                          <p className="ml-6 text-white">{answer.answer}</p>
                        </div>
                      )
                    )}
                  </div>
                  {/* botones de navegacion */}
                  <div className="flex justify-between w-full mt-4 text-white">
                    <button
                      onClick={handlePrevious}
                      className="w-[49%] py-3 bg-purple-700 hover:bg-purple-600 rounded-lg"
                    >
                      Previous
                    </button>
                    <button
                      onClick={
                        currentQuestion + 1 === questions.length
                          ? handleSubmitButton
                          : handleNext
                      }
                      className="w-[49%] py-3 bg-purple-700 hover:bg-purple-600 rounded-lg"
                    >
                      {currentQuestion + 1 === questions.length
                        ? "Submit"
                        : "Next"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
