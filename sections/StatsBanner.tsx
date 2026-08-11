export function StatsBanner() {
  return (
    <div className="py-8 px-2 bg-wood-brown flex flex-col md:flex-row md:justify-around items-center my-7.5 gap-15 md:gap-0">
      <div className="flex flex-col">
        <div className="font-grotesk flex text-2xl font-bold items-baseline justify-center">
          <h4 className="text-6xl">26</h4>
          <span className="text-white/40 tracking-tighter">min</span>
        </div>
        <span
          className="font-mono text-[12px] uppercase tracking-wide
        [word-spacing:2px]"
        >
          avg. episode length
        </span>
      </div>

      <div className="flex flex-col">
        <div className="font-grotesk flex text-2xl font-bold items-baseline justify-center">
          <h4 className="text-6xl">190</h4>
          <span className="text-white/40 tracking-tighter">+</span>
        </div>
        <span
          className="font-mono text-[12px] uppercase tracking-wide
        [word-spacing:2px]"
        >
          awkward gaps removed
        </span>
      </div>

      <div className="flex flex-col">
        <div className="font-grotesk flex text-2xl font-bold items-baseline justify-center">
          <h4 className="text-6xl">3</h4>
          <span className="text-white/40 tracking-tighter">min</span>
        </div>
        <span
          className="font-mono text-[12px] uppercase tracking-wide
        [word-spacing:2px]"
        >
          time saved per episode
        </span>
      </div>
    </div>
  );
}
