"use client";
import { format } from "path";
import React from "react";
import { useState, useContext } from "react";
import { PerfilInversorContext } from "../app/contexts/perfilInversor";

function MisEtrategias() {
  const [Income, setIncome] = useState(0);
  const [ShowResult, setShowResult] = useState(false);
  const { perfilInversor } = useContext(PerfilInversorContext);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowResult(true);
          e.currentTarget.reset();
        }}
      >
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-2">
            {perfilInversor ? (
              <h1 className="text-2xl font-bold mb-2">Tu perfil es: {perfilInversor}</h1>
            ) : (<></>)
            }

            <h2 className="text-2xl font-bold mb-2">Dinero de Inversion:</h2>
            <input
              onChange={(e) => {
                setShowResult(false);
                setIncome(Number(e.target.value))
                console.log(Number(e.target.value));
              }}
              id="income"
              type="number"
              className="form-input w-full text-gray-300"
              placeholder="Dinero a invertir (Mayor a $1000)"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-2">
            <button
              disabled={Income < 1000}
              className="btn text-white bg-purple-600 hover:bg-purple-700 w-full h-11 disabled:opacity-50"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
      {ShowResult && (
        <div>
          <h1>Esto es el resultado</h1>
          <p>{Income}</p>
        </div>
      )}
    </>
  );
}

export default MisEtrategias;
