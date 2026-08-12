import Image from "next/image";

import BlockQuote from "@/assets/icons/quote.svg";
import Jessica from "@/assets/images/jessica.jpg";
import Victor from "@/assets/images/victor.jpg";
import Emmanuel from "@/assets/images/emmanuel.jpg";

export function Testimonial() {
  return (
    <section id="testimonials" className="py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 justify-center items-center">
        {/* Main testimonial block with avatar below */}
        <div className="flex-1 flex flex-col items-center my-4 lg:my-0">
          <BlockQuote className="h-20 w-12 self-start ml-4 text-highlight-brown" />
          <div className="rounded-lg py-4 mb-2">
            <p className="text-white/75 font-grotesk text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight [word-spacing:3px]">
              &quot;This is a powerful testimonial that speaks to the impact and
              value of our service. It captures the essence of what makes our
              product stand out in the market.&quot;
            </p>
          </div>
          <div className="w-full p-4 flex justify-start items-center gap-10">
            <div className="w-20 h-20 bg-gray-400 rounded-full overflow-hidden">
              <Image
                src={Jessica}
                alt="Random person"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white font-grotesk">
                Jessica Chima
              </span>
              <span className="text-[10px] tracking-wide text-white/45 uppercase font-mono font-semibold">
                Host, Foodies Podcast
              </span>
            </div>
          </div>
          <div
            className="w-full flex justify-center md:justify-start gap-8 text-lg uppercase font-grotesk
          font-bold tracking wide text-white/50 mt-2"
          >
            <a href="#">spotify</a>
            <a href="#">Wondery</a>
            <a href="#">Acast</a>
          </div>
        </div>

        {/* Two cards on the right */}
        <div className="flex-1 flex gap-2 md:gap-8 lg:gap-12">
          {/* Card 1 */}
          <div className="w-45 md:w-60 flex flex-col items-center gap-4 translate-y-8">
            <div className="h-45 md:h-60 w-full bg-gray-400 rounded-lg mb-4 overflow-hidden">
              <Image
                src={Victor}
                alt="Random Person"
                height={500}
                width={500}
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="bg-wood-brown text-white/75 border border-white/10
            p-4 rounded-2xl text-sm"
            >
              <p className="my-4 leading-tight tracking-wide">
                &quot;This is just a random comment by some random user that
                nobody freaking remembers.&quot;
              </p>
              <span className="text-[10px] font-mono uppercase tracking-tight text-emerald-green">
                —— Ayo Balogun
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-45 md:w-60 flex flex-col-reverse items-center gap-4 -translate-y-8">
            <div className="h-45 md:h-60 w-full bg-gray-400 rounded-lg mb-4 overflow-hidden">
              <Image
                src={Emmanuel}
                alt="Random Person"
                height={500}
                width={500}
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="bg-wood-brown text-white/75 border border-white/10
            p-4 rounded-2xl text-sm"
            >
              <p className="my-4 leading-tight tracking-wide">
                &quot;This is just a random comment by some random user that
                nobody freaking remembers.&quot;
              </p>
              <span className="text-[10px] font-mono uppercase tracking-tight text-emerald-green">
                —— Isaac Christopher
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
