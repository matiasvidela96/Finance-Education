"use client";

import Link from "next/link";

export default function Calculadora() {
  return (
    <>
      <div>hello from calculadora</div>
      <div>
        <button
          className="bg-sky-500 text-white p-2 rounded-md"
          onClick={async () => {
            const res = await fetch("../api/send", {
              method: "POST",
            });
            const data = await res.json();

            console.log(data);
          }}
        >
          Send Email
        </button>
      </div>
    </>
  );
}
