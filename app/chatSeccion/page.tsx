"use client";
import { useChat } from "ai/react";

function Chat() {
  //useChat, va y busca por defecto en /api/chat
  //si queremos cambiar de direccion ej { api: "/api/chatApi" }
  const { handleInputChange, handleSubmit, messages, isLoading, input } =
    useChat();
  return (
    <section className="flex justify-center items-center h-screen">
      <form className="max-w-xl w-full " onSubmit={handleSubmit}>
        <div className="text-white max-h-96 h-full overflow-y-auto">
          {messages.map((m) => (
            <div
              className={`flex flex-col mb-2 p-2 rounded-md ${
                m.role === "assistant"
                  ? "self-end bg-gray-800"
                  : "self-start bg-blue-700"
              }`}
              key={m.id}
            >
              <span
                className={`text-xs  ${
                  m.role === "assistant" ? "text-right" : "text-left"
                }`}
              >
                {m.role}
              </span>
              {m.content}
            </div>
          ))}
        </div>

        <div className="flex justify-between my-4">
          <label className="text-white block font-bold my-2">
            Say Somethig
          </label>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-md focus:outline-none disabled:opacity-50"
            disabled={isLoading || !input}
          >
            Send
          </button>
        </div>
        <textarea
          rows={3}
          value={input}
          placeholder="Type your message here..."
          className="text-black bg-slate-300 px- py-2 w-full rounded-md focus:outline-none"
          onChange={handleInputChange}
        ></textarea>
      </form>
    </section>
  );
}

export default Chat;
