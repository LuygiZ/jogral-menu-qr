export default function Header({ title }) {
  return (
    <header className="bg-black text-white py-6 px-4 text-center shadow-md">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="text-sm text-gray-300 mt-1">
        Explore o nosso menu e descubra o seu sabor favorito
      </p>
    </header>
  );
}
