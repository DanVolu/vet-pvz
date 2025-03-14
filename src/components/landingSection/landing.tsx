import { Cards } from "./cards/cards";

export function Landing() {
  return (
    <main className="flex flex-col items-center p-6">
      <div className="flex flex-col items-center w-full mt-30 lg:mt-38 px-4 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-teal-950">
            Devynios uodegos
          </h2>
          <p className="my-6 text-lg lg:text-2xl font-medium opacity-85">
            Greita ir profesionali pagalba Jūsų augintiniui – bet kada, kai jos
            prireikia
          </p>
        </div>

        <Cards />
      </div>
    </main>
  );
}
