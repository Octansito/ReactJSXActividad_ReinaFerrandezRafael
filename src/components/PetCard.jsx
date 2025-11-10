import favorito from "../assets/favorito.svg";
import favoritoRed from "../assets/favorito-red.svg";
import { useState } from "react";

function PetCard({ nombre, genero, edad, imagen }) {
  const [esFavorito, setEsFavorito] = useState(false);

  return (
    <article
      className="bg-white rounded-xl shadow-md max-w-[240px] w-full h-[226px] flex flex-col mx-auto p-0 transition border border-transparent hover:scale-105 hover:z-10 hover:border-[#0C3C34] focus-visible:scale-105 focus-visible:z-10 focus-visible:border-[#0C3C34]"
      tabIndex={0}
    >
      <img
        src={imagen}
        alt={`${nombre} — ${genero}`}
        className="w-full h-[120px] object-cover object-center rounded-t-xl bg-[#E8F5E9]"
        loading="lazy"
      />
      <h3 className="font-poppins font-bold text-[18px] text-[#333333] text-left leading-tight mt-2 mb-0 ml-2">
        {nombre}
      </h3>
      <p className="font-nunito font-normal text-[16px] text-[#666666] opacity-80 text-left mt-2 mb-0 ml-2">
        {genero} — {edad}
      </p>

      <div className="flex items-center justify-between mt-2 ml-2 mr-2">
        <button
          type="button"
          className="font-poppins font-semibold text-[16px] bg-[#FF9800] border border-black rounded-lg px-2 py-[2px] text-black shadow hover:bg-[#F57C00] transition leading-tight"
          aria-label={`Ver ficha de ${nombre}`}
          tabIndex={-1}
        >
          Ver ficha
        </button>

        <button
          type="button"
          aria-label={
            esFavorito ? "Quitar de favoritos" : "Marcar como favorito"
          }
          className="ml-2"
          onClick={() => setEsFavorito((fav) => !fav)}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            display: "flex",
          }}
        >
          <img
            src={esFavorito ? favoritoRed : favorito}
            alt=""
            className="w-6 h-6 cursor-pointer transition"
          />
        </button>
      </div>
    </article>
  );
}

export default PetCard;
