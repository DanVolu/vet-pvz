export function Landing() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50 p-6">
      <section className="flex flex-col items-center justify-center flex-1 w-full text-center px-4">
        <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold uppercase text-gray-900 mb-6 mt-50">
          Rūpestis, kuris gydo
        </h2>
        <p className="my-4 mb-10 text-lg lg:text-2xl font-medium text-gray-900 opacity-85">
          Greita ir profesionali pagalba Jūsų augintiniui – bet kada, kai jos
          prireikia
        </p>

        <div className="mt-12 mb-10 w-full max-w-lg">
          <div className="flex flex-col items-center gap-6 opacity-85">
            <div className="w-full text-center">
              <h3 className="text-md md:text-lg font-bold text-gray-900">
                Vilnius, 01128 Vilniaus m. sav.
              </h3>
              <a
                href="#zemelapis"
                className="font-medium flex items-center justify-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
              >
                Rodyti žemėlapyje
                <img
                  src={`${import.meta.env.BASE_URL}map.png`}
                  alt="Žemėlapio ikona"
                  className="h-5 w-5"
                />
              </a>
            </div>
            <div className="w-full text-center">
              <h3 className="text-md md:text-lg font-bold text-gray-900">
                Dirbame kasdien 8:00 – 18:00
              </h3>
            </div>
            <div className="w-full text-center">
              <h3 className="text-md md:text-lg font-bold text-gray-900">
                vet.pvz.lt@gmail.com
              </h3>
            </div>
            <div className="w-full text-center">
              <h3 className="text-md md:text-lg font-bold text-gray-900">
                +370 123 45678
              </h3>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full px-4 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
            <div
              className="relative h-[250px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}goat.jpg)`,
              }}
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

          <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
            <div
              className="relative h-[250px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}doge.jpg)`,
              }}
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

          <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
            <div
              className="relative h-[250px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}vet.jpg)`,
              }}
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
