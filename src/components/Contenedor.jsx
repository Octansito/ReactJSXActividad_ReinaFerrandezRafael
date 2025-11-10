export default function Contenedor({ children }) {
  return (
    <div className="min-h-screen bg-[#E8F5E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </div>
  );
}
