import Link from "next/link";
function main() {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="w-full h-auto  bg-gradient-to-r p-8 flex flex-col items-center justify-center items-centerbg-gradient-to-r  from-purple-800 to-purple-950 ">
        <h1 className="text-white text-3xl font-normal leading-normal tracking-widest uppercase font-item">
          Are you ready to invest?
        </h1>
        <p className="text-white text-xs mt-3">
          Estamos ante la mas impresionante web para aprender sobre inversion
        </p>

        <Link
          href="/startPage"
          className="btn-sm text-white bg-zinc-950 hover:bg-purple-700  px-6 py-2 ml-3 mt-28"
        >
          GET START
        </Link>
      </div>
    </section>
  );
}

export default main;
