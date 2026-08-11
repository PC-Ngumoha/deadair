import PlayIcon from "@/assets/icons/play.svg";
import Waveform from "@/components/Waveform";

export function ProductShowcase() {
  return (
    <section
      id="product"
      className=" flex flex-col items-center py-4 px-2 mb-7.5"
    >
      <div className=" flex flex-col items-center">
        <h2 className="font-grotesk text-2xl md:text-4xl my-2 tracking-tight font-semibold">
          Intelligent Splicing
        </h2>
        <p className="section-subtitle  ">
          Our AI analyzes the rhythmic patterns of your voice to cut awkward
          silences without making the conversation feel robotic.
        </p>
      </div>
      <div className="max-w-[80%] bg-wood-brown px-3 py-6 mb-2 shadow shadow-black rounded-2xl overflow-x-hidden">
        <div className="py-4 px-1 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <div className="h-4 w-4 bg-deep-orange rounded-full" />
            <span className="font-mono text-[7px] md:text-[10px]">
              raw_episode_04.wav
            </span>
          </div>
          <div className="tag">AI analysis active</div>
        </div>
        <hr />
        <Waveform />
        <div className="flex justify-between items-center gap-4">
          <button
            className="p-1.5 md:p-3 border border-white/60 rounded-full flex items-center
          justify-center"
          >
            <PlayIcon className="h-1.5 w-1.5 md:h-3 md:w-3 text-white/60" />
          </button>
          <div className="flex-1">
            <progress
              value={40}
              max={100}
              className="w-full h-1 bg-gray-500 [&::-webkit-progress-bar]:bg-gray-800 [&::-webkit-progress-value]:bg-emerald-green"
            ></progress>
          </div>
          <div className="font-mono text-xs md:text-sm">
            <span>04:12</span>
            &#47;
            <span>41:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}
