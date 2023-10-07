"use client";
// import { useRouter } from "next/navigation";

export default function BackButton() {
  // const router = useRouter();
  const handleBack = () => {
    window.history.back();
  };
  return (
    <>
      <div className="w-full shadow-md py-1 md:px-6">
        <div className="max-w-6xl mx-auto sm:px-6">
          <button
            type="button"
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-2 flex items-center rounded-xl"
            onClick={(e) => {
              handleBack();
              e.stopPropagation();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#f5f5f5"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
            <p className="ml-2">Atras</p>
          </button>
        </div>
      </div>
    </>
  );
}
