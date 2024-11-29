

export default async function Home() {
  const res = await fetch(`${process.env.BASE_URL}/api`);
  const res2 = await res.json()

  console.log(res2)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Hello?</h1>
      <h1>{res2.message}</h1>
    </div>
  );
}
