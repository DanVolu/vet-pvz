export function Landing() {
  return (
    <main className="flex flex-col items-center h-screen p-6">
      <div className="h-3/4 flex flex-col justify-center items-start md:items-center text-left md:text-center w-full md:w-auto">
        <h2 className="text-5xl md:text-8xl font-bold uppercase">
          Rūpestis, kuris gydo
        </h2>
        <p className="mt-4 text-lg md:text-2xl font-medium">
          Greita ir profesionali pagalba Jūsų augintiniui – bet kada, kai jos prireikia
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="flex-1 p-6 border-2 border-black">
          <h3 className="text-xl font-bold">Pavad</h3>
          <p>kazka cia tikrai parasysim aktualaus ir t.t.</p>
        </div>
        <div className="flex-1 p-6 border-2 border-black">
          <h3 className="text-xl font-bold">Pavad</h3>
          <p>kazka cia tikrai parasysim aktualaus ir t.t.</p>
        </div>
        <div className="flex-1 p-6 border-2 border-black">
          <h3 className="text-xl font-bold">Pavad</h3>
          <p>kazka cia tikrai parasysim aktualaus ir t.t.</p>
        </div>
      </div>
    </main>
  );
}
