export function Landing() {
  return (
    <main className="flex flex-col items-center h-screen p-6 mt-">
      <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start w-full xl:w-auto h-full mt-10 xl:mt-32 mb-28 px-4 xl:px-0">
        <div className="flex flex-col items-start xl:w-2/3">
          <h2 className="text-6xl xl:text-8xl font-bold uppercase text-left xl:text-left mt-12">
            Rūpestis, kuris gydo
          </h2>
          <p className="my-6 text-lg xl:text-2xl font-medium text-left xl:text-left">
            Greita ir profesionali pagalba Jūsų augintiniui – bet kada, kai jos
            prireikia
          </p>
          <div className="flex flex-col xl:flex-col xl:gap-4 mt-4 xl:mt-22 mb-12">
            <div className="flex-1 p-2">
              <h3 className="text-lg font-bold">+370 600 00000</h3>
              <p className="font-medium ml-0.5">vet.paštas@gmail.com</p>
            </div>
            <div className="flex-1 p-2">
              <h3 className="text-lg font-bold">
                Dirbame kasdien 8:00 – 18:00
              </h3>
            </div>
            <div className="flex-1 p-2 mb-5">
              <h3 className="text-lg font-bold">
                Vilnius, 01128 Vilniaus m. sav.
              </h3>
              <a
                href="#zemelapis"
                className="font-medium flex items-center gap-2"
              >
                Rodyti žemėlapyje
                <img src="/map.png" alt="Žemėlapio ikona" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-lg flex flex-col md:flex-col gap-6">
          <div className="flex-1 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
            <div
              className="relative h-[300px] md:h-[300px] bg-cover bg-center"
              style={{ backgroundImage: "url('/goat.jpg')" }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-white">Mūsų paslaugos</h3>
                <p className="text-white">
                  Teikiame profesionalias veterinarijos paslaugas: skiepai,
                  chirurgija, profilaktinė priežiūra, dantų valymas ir daugiau.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
            <div
              className="relative h-[300px] md:h-[300px] bg-cover bg-center"
              style={{ backgroundImage: "url('/doge.jpg')" }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-white">Skubi pagalba</h3>
                <p className="text-white">
                  Jei jūsų augintiniui prireikė neatidėliotinos pagalbos,
                  skambinkite mums nedelsiant. Esame pasiruošę padėti bet kuriuo
                  metu.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
            <div
              className="relative h-[300px] md:h-[300px] bg-cover bg-center"
              style={{ backgroundImage: "url('/vet.jpg')" }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-white">
                  Kodėl rinktis mus?
                </h3>
                <p className="text-white">
                  Profesionalumas, draugiškas požiūris į augintinius ir moderni
                  įranga – visa tai rasite mūsų klinikoje.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
