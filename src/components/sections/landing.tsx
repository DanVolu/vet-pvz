export function Landing() {
  return (
    <main className="flex flex-col items-center h-screen p-6">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full lg:w-auto h-full mt-10 lg:mt-32 mb-28 px-4 lg:px-0">
        <div className="flex flex-col items-start md:w-3/4 lg:w-2/3">
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold uppercase text-left lg:text-left mt-12 pr-5">
            Rūpestis, kuris gydo
          </h2>
          <p className="my-6 text-lg lg:text-2xl font-medium text-left lg:text-left opacity-85 pr-5">
            Greita ir profesionali pagalba Jūsų augintiniui – bet kada, kai jos prireikia
          </p>
          <div className="lg:flex flex-col md:flex-col xl:flex-col lg:gap-4 mt-4 opacity-85">
            <div className="flex-1">
              <h3 className="text-lg font-bold whitespace-nowrap">
                Vilnius, 01128 Vilniaus m. sav.
              </h3>
              <a href="#zemelapis" className="font-medium flex items-center gap-2">
                Rodyti žemėlapyje
                <img src={`${import.meta.env.BASE_URL}map.png`} alt="Žemėlapio ikona" className="h-5 w-5" />
              </a>
            </div>
            <div className="flex-1 pt-2">
              <h3 className="text-lg font-bold">Dirbame kasdien 8:00 – 18:00</h3>
            </div>
            <div className="flex-1 pt-2">
              <h3 className="text-lg font-bold">vet.paštas@gmail.com</h3>
            </div>
            <div className="flex-1 pt-2">
              <h3 className="text-lg font-bold">+370 123 45678</h3>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 w-full md:w-lg flex flex-col md:flex-col gap-4 max-w-md">
          {[
            { img: "goat.jpg", title: "Mūsų paslaugos", text: "Teikiame profesionalias veterinarijos paslaugas: skiepai, chirurgija, profilaktinė priežiūra, dantų valymas ir daugiau." },
            { img: "doge.jpg", title: "Skubi pagalba", text: "Jei jūsų augintiniui prireikė neatidėliotinos pagalbos, skambinkite mums nedelsiant. Esame pasiruošę padėti bet kuriuo metu." },
            { img: "vet.jpg", title: "Kodėl rinktis mus?", text: "Profesionalumas, draugiškas požiūris į augintinius ir moderni įranga – visa tai rasite mūsų klinikoje." },
          ].map(({ img, title, text }) => (
            <div key={img} className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
              <div
                className="relative h-[250px] md:h-[250px] bg-cover bg-center"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${img})` }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 p-4">
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="text-white text-md">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
