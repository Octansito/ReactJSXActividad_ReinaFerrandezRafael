import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#0C3C34] flex items-center justify-between px-8 py-8">
      {/**Enlaces de Navegación */}
      <div className="flex gap-10">
        <a
          tabIndex={0}
          href="Contacto"
          className="text-white font-poppins font-semibold text-lg transition hover:scale-105 hover:underline underline-offset-4 focus:scale-105 focus:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0C3C34] rounded-lg"
        >
          Contacto
        </a>
        <a
          tabIndex={0}
          href="Contacto"
          className="text-white font-poppins font-semibold text-lg transition hover:scale-105 hover:underline underline-offset-4 focus:scale-105 focus:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0C3C34] rounded-lg"
        >
          Ayuda
        </a>
      </div>

      {/**Redes Sociales */}
      <div className="flex gap-3">
        <button
          className="p-2 rounded-lg transition hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0C3C34]"
          aria-label="Twitter"
        >
          <FaTwitter size={36} className="text-white" />
        </button>
        <button
          className="p-2 rounded-lg transition hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0C3C34]"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={36} className="text-white" />
        </button>
        <button
          className="p-2 rounded-lg transition hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0C3C34]"
          aria-label="Facebook"
        >
          <FaFacebook size={36} className="text-white" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
