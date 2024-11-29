export default async function Home() {
  // Realizar la llamada a la API directamente en el componente
  const res = await fetch(
    `${process.env.NODE_ENV === "development" ? "http://localhost:3000/api" : `${process.env.BASE_URL}/api}`
    { method: "GET", cache: "no-store" } // Usar cache: "no-store" para evitar resultados obsoletos
  );

  const data = res.ok ? await res.json() : { message: "Failed to fetch" };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Hello?</h1>
      <h1>{data.message}</h1>
    </div>
  );
}
