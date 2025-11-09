/**
 * Componente reutilizable que representa la tarjeta individual de un animal dentro del catálogo.
 * Se usa en las secciones de perros, gatos y adoptados.
 */

function PetCard({ nombre, genero, edad, imagen }) {
  return (
    <article className="bg-white rounded-xl shadow p-4 w-full h-full flex flex-col items-center">
      <img
        src={imagen}
        alt={`${nombre} - ${genero}`}
        className="w-full h-[220px] object-cover rounded-lg mb-3"
      />
      <h3 className="mt-2 font-bold text-center">{nombre}</h3>
      <p className="text-sm text-gray-600 mb-3 text-center">
        {genero} — {edad}
      </p>
      <div className="flex justify-between items-center w-full mt-auto">
        <button
          className="rounded-lg px-3 py-1 text-sm font-semibold border border-gray-300 hover:bg-gray-100"
          aria-label={`Ver ficha de ${nombre}`}
        >
          Ver ficha
        </button>
        <img
          src="/assets/favorito.svg"
          alt="Favorito"
          className="w-5 h-5 cursor-pointer"
        />
      </div>
    </article>
  );
}
export default PetCard;
