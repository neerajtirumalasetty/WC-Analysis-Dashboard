export default function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="w-full px-6 py-1">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-base-200 p-10 md:p-16 shadow-2xl">
            <span className="badge badge-outline mb-4 font-bold">
              ICC Men’s T20 World Cup
            </span>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
              World Cup 2026 <span className="opacity-70">Analytics Dashboard</span>
            </h1>

            <div className="w-100%">
              <img src="img_1.webp" alt="cover" />
            </div>
            

            <p className="mt-6 max-w-2xl text-base font-semibold text-black md:text-lg opacity-70">
              <em>Explore squads, player performance, rankings, and form trends
              for the upcoming ICC Men’s T20 World Cup.</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
