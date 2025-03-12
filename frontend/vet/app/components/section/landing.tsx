export function Landing() {
  return (
    <main className="flex flex-col items-center h-screen p-6">
      <div className="flex flex-col justify-center md:items-center w-full md:w-auto h-full mt-32 mb-28 px-4 md:px-0">
        <h2 className="text-5xl md:text-8xl font-bold uppercase text-left md:text-center md:mt-0">
          Rūpestis, kuris gydo
        </h2>
        <p className="mt-4 text-lg md:text-2xl font-medium text-left md:text-center">
          Greita ir profesionali pagalba Jūsų augintiniui – bet kada, kai jos
          prireikia
        </p>
      </div>
      {/* img */}
      <div className="w-full flex flex-col md:flex-row gap-4 ml-5">
        <div className="flex-1 p-2">
          <h3 className="text-xl font-bold">+370 600 00000</h3>
          <p className="font-medium ml-0.5">vet.paštas@gmail.com</p>
        </div>
        <div className="flex-1 p-2">
          <h3 className="text-lg font-bold">Dirbame kasdien 9:00 – 18:00</h3>
        </div>
        <div className="flex-1 p-2 mb-5">
          <h3 className="text-lg font-bold">Vilnius, 01128 Vilniaus m. sav.</h3>
          <p className="font-medium flex items-center gap-2">
            Rodyti žemėlapyje
            <img src="/map.png" alt="Žemėlapio ikona" className="h-5 w-5" />
          </p>
        </div>
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
