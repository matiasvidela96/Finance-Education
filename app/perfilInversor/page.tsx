"use client";
import questions from "./questions.json";
import "../css/style.css";
import { useState, useContext } from "react";
import Head from "next/head";
import BackButton from "@/components/ui/backButton";
import { AnswerProps } from "answer";
import Icon from "@/components/main-section/icon";
import { PerfilInversorContext } from "../contexts/perfilInversor";
import Link from "next/link";

import { useUser } from "@clerk/nextjs";

// export const metadata = {
//   title: "Educación Financiera",
//   description:
//     "Educacion Financiera para todos los usuarios que esten interesados en aprender mas sobre el mundo de las inversiones",
// };
export default function PerfilInversor() {
  const user = useUser();
  const id = user.user?.id;
  const updateRiskProfile = async (
    id: string | undefined,
    perfilInversor: any
  ) => {
    const res = await fetch("http://localhost:3000/api/hello", {
      method: "PUT",
      body: JSON.stringify({ id, perfilInversor }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log("Respuesta en PI");
    console.log(data);
  };
  // guardar perfil en contexto
  // @ts-ignore
  const { perfilInversor, setPerfilInversor } = useContext(
    PerfilInversorContext
  );
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
  const handleAnswerOption = ({ answer, value }: AnswerProps) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer, value }),
    ]);
    setSelectedOptions([...selectedOptions]);
    // console.log(selectedOptions[currentQuestion].value);
  };

  const handleSubmitButton = () => {
    let newScore = 0;

    for (let i = 0; i < questions.length; i++) {
      const userAnswer = selectedOptions[i];

      if (userAnswer) {
        const selectedAnswerOption = questions[i].answerOptions.find(
          (answer) => answer.answer === userAnswer.answerByUser
        );

        if (selectedAnswerOption) {
          newScore += selectedAnswerOption.value;
        }
      }
    }

    setScore(newScore);
    setShowScore(true);
  };
  function getRiskProfile(score: number) {
    if (score <= 10) {
      setPerfilInversor("Perfil Conservador");
    } else if (score > 10 && score <= 16) {
      setPerfilInversor("Perfil Moderado");
    } else {
      setPerfilInversor("Perfil Arriesgado");
    }
    updateRiskProfile(id, perfilInversor);
    return perfilInversor;
  }
  return (
    <>
      <BackButton />
      <Head>
        <title>Perfil del inversor</title>
        <meta name="description" content="Crea tu perfil de inversion" />
      </Head>

      {showScore ? (
        <>
          <Link href={"/misEstrategias"}>
            <div className="max-w-4xl mx-auto rounded-xl sm:px-6 flex flex-col px-5  hover:bg-zinc-900 justify-center items-center mb-8">
              <h1 className="text-3xl font-bold text-purple-600 mb-2">
                Felicitaciones haz realizado tu perfil de inversor!
              </h1>
              <p className="text-gray-400 mb-5">
                Ahora puedes revisar tus estrategias personalizadas en base a tu
                perfil de riesgo y el monto de inversión
              </p>

              <div className=" p-6  rounded-lg shadow-md">
                <h1 className="text-3xl font-semibold text-center text-purple-600">
                  Tu Puntaje es: {score}
                </h1>
                <p className="text-3xl  font-semibold text-center  mb-10 text-purple-600">
                  {" "}
                  Tu Perfil de riesgo es: {getRiskProfile(score)}
                </p>
                {/* Mis estrategias*/}
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-anchor="[data-aos-id-blocks]"
                  className="hover:bg-zinc-950 "
                >
                  <Icon
                    name="Strategy"
                    size={48}
                    color={"#f5f5f5"}
                    weight={"light"}
                    title={"Mis estrategias"}
                    description={
                      "Revisa las estrategias personalizadas en base a tu perfil del inversor."
                    }
                    link={"/misEstrategias"}
                  ></Icon>
                </div>
              </div>
            </div>
          </Link>
        </>
      ) : (
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
            <div className="py-12 md:py-20">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 ">
                <h2 className="h2 mb-4">Perfil del Inversor</h2>
                <p className="text-xl text-gray-400">
                  Responde unas preguntas para definir tus estrategias
                </p>
              </div>
              {/* Preguntas */}
              <div>
                <div className="flex flex-col px-5 bg-[#1a1a1a] justify-center items-center mb-8">
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
                          onClick={(e) =>
                            handleAnswerOption({
                              answer: answer.answer,
                              value: answer.value,
                            })
                          }
                        >
                          <input
                            type="radio"
                            name={answer.answer}
                            value={answer.answer}
                            onChange={(e) =>
                              handleAnswerOption({
                                answer: answer.answer,
                                value: answer.value,
                              })
                            }
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
                  <div className="flex justify-between w-full mt-4 text-white m-5">
                    <button
                      onClick={handlePrevious}
                      className={`w-[49%] py-3 bg-purple-700 hover:bg-purple-600 rounded-lg ${currentQuestion === 0
                          ? "opacity-50 cursor-not-allowed  "
                          : ""
                        }`}
                    >
                      Anterior
                    </button>
                    <button
                      disabled={!selectedOptions[currentQuestion]}
                      onClick={
                        currentQuestion + 1 === questions.length
                          ? handleSubmitButton
                          : handleNext
                      }
                      className={`w-[49%] py-3 rounded-lg disabled:opacity-50 ${currentQuestion + 1 === questions.length
                          ? "bg-red-600 hover:bg-red-700 text-white"
                          : "bg-purple-700 hover:bg-purple-600 text-white"
                        }`}
                    >
                      {currentQuestion + 1 === questions.length
                        ? "Enviar"
                        : "Siguiente"}
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
