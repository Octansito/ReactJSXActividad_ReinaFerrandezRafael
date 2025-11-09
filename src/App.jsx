import Contenedor from "./components/Contenedor";
import PetList from "./components/PetList";

function App() {
  return (
    <Contenedor>
      <header className="flex items-center justify-between">
        <h1 className="text-4xl font-extrabold text-purple-700 text-center mt-6 mb-2 font-poppins">
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
