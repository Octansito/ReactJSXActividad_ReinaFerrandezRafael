import Contenedor from "./components/Contenedor";
import PetList from "./components/PetList";

function App() {
  return (
    <Contenedor>
      <header className="w-full mb-4">
        <h1 className="font-poppins font-semibold text-[36px] text-center text-[#0C3C34] mt-6 mb-2">
          Nuestros animales en adopción 🐾
        </h1>
      </header>
      <main className="mt-8">
        <PetList />
      </main>
    </Contenedor>
  );
}

export default App;
