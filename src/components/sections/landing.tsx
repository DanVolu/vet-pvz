export function Landing() {
  return (
    <main className="flex flex-col items-center h-screen bg-gray-50 p-6">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full lg:w-auto h-full mt-10 lg:mt-32 mb-28 px-4 lg:px-0">
        <div className="flex flex-col items-start md:w-3/4 lg:w-2/3">
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold uppercase text-gray-900 text-left lg:text-left mt-12 whitespace-break-spaces">
            Rūpestis, kuris gydo
          </h2>
          <p className="my-6 text-lg lg:text-2xl font-medium text-gray-900 opacity-85 whitespace-break-spaces">
            Greita ir profesionali pagalba Jūsų augintiniui – bet kada, kai jos
            prireikia
          </p>
          <div className="lg:flex flex-col md:flex-col xl:flex-col lg:gap-4 mt-4  opacity-85">
            <div className="flex-1 p-2">
              <h3 className="text-md md:text-lg font-bold text-gray-900 whitespace-nowrap">
                Vilnius, 01128 Vilniaus m. sav.
              </h3>
              <a
                href="#zemelapis"
                className="font-medium flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
              >
                Rodyti žemėlapyje
                <img
                  src={`${import.meta.env.BASE_URL}map.png`}
                  alt="Žemėlapio ikona"
                  className="h-5 w-5"
                />
              </a>
            </div>
            <div className="flex-1 p-2">
              <h3 className="text-md md:text-lg font-bold text-gray-900">
                Dirbame kasdien 8:00 – 18:00
              </h3>
            </div>
            <div className="flex-1 p-2">
              <h3 className="text-md md:text-lg font-bold text-gray-900">
                vet.pvz.lt@gmail.com
              </h3>
            </div>{" "}
            <div className="flex-1 p-2">
              <h3 className="text-md md:text-lg font-bold text-gray-900">
                +370 123 45678
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 w-full md:w-lg flex flex-col md:flex-col gap-6">
          <div className="flex-1 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
            <div
              className="relative h-[300px] md:h-[300px] bg-cover bg-center"
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

          <div className="flex-1 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
            <div
              className="relative h-[300px] md:h-[300px] bg-cover bg-center"
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

          <div className="flex-1 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
            <div
              className="relative h-[300px] md:h-[300px] bg-cover bg-center"
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
