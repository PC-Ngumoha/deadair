export function CallToAction() {
  return (
    <div className="flex items-center justify-center h-[60vh] py-4 px-2 my-7.5 bg-wood-brown -rotate-3">
      <div
        className="bg-wood-brown rounded-2xl shadow-lg p-8 w-[80%] h-[80%] text-center flex
      flex-col justify-center gap-4 border border-highlight-brown rotate-3"
      >
        <div className="flex flex-col gap-4 items-center text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 text-white font-grotesk tracking-tighter">
            Stop wasting hours on technicalities.
          </h2>
          <p className="section-subtitle">
            Join 5000+ podcasters who spend more time talking and less time
            cutting. Start your free trial today.
          </p>
        </div>
        <div className="w-[80%] lg:w-[60%] mx-auto flex flex-col md:flex-row justify-center gap-1 md:gap-3">
          <button className="btn-lg md:btn-xl btn-filled">
            Try Deadair for free
          </button>
          <button className="btn-lg md:btn-xl btn-text">
            Explore the Docs
          </button>
        </div>
      </div>
    </div>
  );
}
