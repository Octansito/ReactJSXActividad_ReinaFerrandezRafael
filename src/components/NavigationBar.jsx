import Logo from "../assets/Logo5.png";
import menuIcon from "../assets/menu.png";
import searchIcon from "../assets/search.png";
import userIcon from "../assets/user.png";

function NavigationBar() {
  return (
    <nav className="w-full bg-[#0C3C34] flex items-center justify-between px-6 h-[90px]">
      {/**Menú Hamburguesa */}
      <button
        tabIndex={0}
        type="button"
        className="bg-transparent border-none p-0 m-0 outline-none transition-transform duration-200 hover:scale-110 focus:scale-110 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0C3C34] rounded-lg"
        aria-label="Desplegar menu"
      >
        <img src={menuIcon} alt="" className="h-10 w-10" />
      </button>

      {/**Logo y Nombre de la Protectora */}
      <div className="flex items-center gap-1">
        <img src={Logo} alt="Logo Pawpets" className="w-30 h-30" />
        {/**Span para crear una estructura decorativa  */}
        <span className="font-poppins font-bold text-[40px] text-white ml-1">
          PawPets
        </span>
      </div>

      {/** Botones de buscar y perfil */}
      <div className="flex gap-6">
        <button
          tabIndex={0}
          type="button"
          aria-label="Buscar"
          className="bg-transparent border-none p-0 m-0 outline-none transition-transform duration-200 hover:scale-110 focus:scale-110 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0C3C34] rounded-lg"
        >
          <img src={searchIcon} alt="" className="h-10 w-10" />
        </button>
        <button
          tabIndex={0}
          type="button"
          aria-label="Perfil"
          className="bg-transparent border-none p-0 m-0 outline-none transition-transform duration-200 hover:scale-110 focus:scale-110 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0C3C34] rounded-lg"
        >
          <img src={userIcon} alt="" className="w-10 h-10" />
        </button>
      </div>
    </nav>
  );
}

export default NavigationBar;
