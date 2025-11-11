import Contenedor from "./components/Contenedor";
import FilterSection from "./components/FilterSection";
import PetList from "./components/PetList";

function App() {
  return (
    <Contenedor>
      <header className="w-full mb-4">
        <h1 className="font-poppins font-semibold text-[36px] text-center text-[#0C3C34] mt-6 mb-2">
          Nuestros animales en adopción 🐾
        </h1>
      </header>

      {/*Filtros + Catálogo*/}
      <main className="mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/**Filtros */}
          <section className="w-full max-w-[260px] min-w-[200px] bg-white border-2 border-[#0C3C34] rounded-xl shadow-md p-6 h-fit mx-auto lg:mx-0 sticky top-8">
            <FilterSection />
          </section>

          {/* CATÁLOGO */}
          <section className="flex-1 overflow-y-auto max-h-[75vh] pb-6 pr-6 pl-6 ">
            <PetList />
          </section>
        </div>
      </main>
    </Contenedor>
  );
}

export default App;
