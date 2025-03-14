export function Cards() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {[
          {
            img: "pets.png",
            title: "Mūsų paslaugos",
            text: "Teikiame profesionalias veterinarijos paslaugas: skiepai, chirurgija, profilaktinė priežiūra, dantų valymas ir daugiau.",
            button: "Paslaugos",
          },
          {
            img: "black-cat.png",
            title: "Skubi pagalba",
            text: "Jei jūsų augintiniui prireikė neatidėliotinos pagalbos, skambinkite mums nedelsiant. Esame pasiruošę padėti bet kuriuo metu.",
            button: "Kontaktai",
          },
          {
            img: "syringe-outline.png",
            title: "Kodėl rinktis mus?",
            text: "Profesionalumas, draugiškas požiūris į augintinius ir moderni įranga – visa tai rasite mūsų klinikoje.",
            button: "Atsiliepimai",
          },
          {
            img: "search.png",
            title: "Kodėl rinktis mus?",
            text: "Profesionalumas, draugiškas požiūris į augintinius ir moderni įranga – visa tai rasite mūsų klinikoje.",
            button: "Kainoraštis",
          },
        ].map(({ img, title, text, button }) => (
          <div
            key={img}
            className="flex flex-col lg:flex-row items-center justify-center gap-6 rounded-lg overflow-hidden border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full lg:w-1/3 h-[9rem] lg:h-[9rem] flex items-center justify-center">
              <div className="absolute w-32 h-32 rounded-full bg-teal-950 opacity-90"></div>
              <img
                src={`${import.meta.env.BASE_URL}${img}`}
                alt={title}
                className="relative w-20 h-20 object-cover invert"
              />
            </div>
  
            <div className="p-6 flex flex-col items-center justify-center w-full lg:w-2/3">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 text-center">
                {title}
              </h3>
              <p className="text-md text-gray-700 mt-2 text-center">{text}</p>
  
              <button className="mt-6 px-6 py-2 bg-teal-950 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-800 transition duration-300">
                <a href="" className="text-center">{button}</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  