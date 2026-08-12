import Image from "next/image";

import Studio from "@/assets/images/studio.jpg";
import ArrowRight from "@/assets/icons/arrow_right.svg";
import PlayIcon from "@/assets/icons/play.svg";

export function Hero() {
  return (
    <main className="relative h-screen mb-7.5">
      <Image
        src={Studio}
        alt="Studio setup"
        loading="eager"
        className="hidden md:block h-full w-full"
      />
      <div
        className="bg-black/70 absolute top-0 w-full h-full flex flex-col
      justify-center items-center text-center"
      >
        <div className="tag mb-2">ai episode editor</div>
        <h1
          className="font-grotesk text-5xl md:text-7xl my-4 tracking-tight [word-spacing:5px]
        font-semibold text-white"
        >
          <span>Kill the</span>{" "}
          <span className="text-accent italic">dead air.</span>
        </h1>
        <p className="section-subtitle">
          Professional podcast editing for creators who value time.
          Automatically remove silences, suppress noise, and master audio in
          seconds.
        </p>
        <div className="w-[80%] flex flex-col md:flex-row md:items-center gap-4 md:gap-2 mt-4">
          <button className="flex-1 btn-lg btn-filled shadow-[0px_2px_20px_#f5a62299]">
            <span>Try for free</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="flex-1 btn-lg btn-text border border-white">
            <span>Watch demo</span>
            <PlayIcon className="h-4 w-4 stroke-white fill-white text-white" />
          </button>
        </div>
      </div>
    </main>
  );
}
