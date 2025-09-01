"use client";
import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("0");

  const handleClick = (value: string) => {
    if (input === "0") {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const handleClear = () => setInput("0");
  const handleBackspace = () => setInput(input.length > 1 ? input.slice(0, -1) : "0");

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/download.jpeg')" }} // taruh gambar di folder public
    >
      <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-2xl shadow-2xl w-[300px]">
        {/* Display */}
        <div className="text-right text-white text-4xl font-mono mb-6 truncate">
          {input}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          <button onClick={handleClear} className="bg-red-500/70 hover:bg-red-500 text-white p-3 rounded-xl font-bold">C</button>
          <button onClick={handleBackspace} className="bg-gray-500/70 hover:bg-gray-500 text-white p-3 rounded-xl font-bold">⌫</button>
          <button onClick={() => handleClick("%")} className="bg-orange-400/80 hover:bg-orange-400 text-white p-3 rounded-xl font-bold">%</button>
          <button onClick={() => handleClick("/")} className="bg-orange-400/80 hover:bg-orange-400 text-white p-3 rounded-xl font-bold">÷</button>

          <button onClick={() => handleClick("7")} className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-xl">7</button>
          <button onClick={() => handleClick("8")} className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-xl">8</button>
          <button onClick={() => handleClick("9")} className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-xl">9</button>
          <button onClick={() => handleClick("*")} className="bg-orange-400/80 hover:bg-orange-400 text-white p-3 rounded-xl font-bold">×</button>

          <button onClick={() => handleClick("4")} className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-xl">4</button>
          <button onClick={() => handleClick("5")} className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-xl">5</button>
          <button onClick={() => handleClick("6")} className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-xl">6</button>
          <button onClick={() => handleClick("-")} className="bg-orange-400/80 hover:bg-orange-400 text-white p-3 rounded-xl font-bold">−</button>

          <button onClick={() => handleClick("1")} className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-xl">1</button>
          <button onClick={() => handleClick("2")} className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-xl">2</button>
          <button onClick={() => handleClick("3")} className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-xl">3</button>
          <button onClick={() => handleClick("+")} className="bg-orange-400/80 hover:bg-orange-400 text-white p-3 rounded-xl font-bold">+</button>

          <button onClick={() => handleClick("0")} className="col-span-2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-xl">0</button>
          <button onClick={() => handleClick(".")} className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-xl">.</button>
          <button onClick={handleCalculate} className="bg-green-500/80 hover:bg-green-500 text-white p-3 rounded-xl font-bold">=</button>
        </div>
      </div>
    </div>
  );
}
