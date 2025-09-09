"use client";

import { useState } from "react";

export default function SearchForm() {
  const [origen, setOrigen] = useState("Lima");
  const [destino, setDestino] = useState("San Borja");
  const [tipo, setTipo] = useState("Hogar");

  return (
    <div className="mt-8 bg-white shadow-xl rounded-full flex items-center gap-6 px-6 py-4 w-full max-w-3xl">
      {/* Origen */}
      <div className="flex flex-col flex-1">
        <label className="text-xs text-gray-500">Origen</label>
        <select
          value={origen}
          onChange={(e) => setOrigen(e.target.value)}
          className="bg-transparent font-medium focus:outline-none"
        >
          <option>Lima</option>
          <option>Callao</option>
        </select>
      </div>

      {/* Destino */}
      <div className="flex flex-col flex-1">
        <label className="text-xs text-gray-500">Destino</label>
        <select
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
          className="bg-transparent font-medium focus:outline-none"
        >
          <option>San Borja</option>
          <option>Miraflores</option>
        </select>
      </div>

      {/* Tipo */}
      <div className="flex flex-col flex-1">
        <label className="text-xs text-gray-500">Tipo de mudanza</label>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="bg-transparent font-medium focus:outline-none"
        >
          <option>Hogar</option>
          <option>Oficina</option>
        </select>
      </div>

      {/* Botón */}
      <button className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full transition">
        🔍
      </button>
    </div>
  );
}
