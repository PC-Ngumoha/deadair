import Image, { StaticImageData } from "next/image";
import { JSX } from "react/jsx-runtime";

import Editting1 from "@/assets/images/editting.jpg";
import Editting2 from "@/assets/images/editting2.jpg";
import Vibrations from "@/assets/images/vibrations.jpg";

import ArrowRight from "@/assets/icons/arrow_right.svg";
import MicWithWire from "@/assets/icons/mic_with_wire.svg";
import Wave from "@/assets/icons/wave.svg";
import Stack from "@/assets/icons/stack.svg";

type FeatureType = {
  src: string | StaticImageData;
  alt: string;
  title: string;
  description: string;
  icon: JSX.ElementType;
};

const features: FeatureType[] = [
  {
    src: Editting1,
    alt: "Surgical Silence Removal",
    icon: Wave,
    title: "Surgical Silence Removal",
    description:
      "Our neural engine distinguishes between intentional dramatic pauses and accidental dead air.",
  },

  {
    src: Vibrations,
    alt: "Adaptive Noise Floor",
    icon: MicWithWire,
    title: "Adaptive Noise Floor",
    description:
      "Clean up background hums and erratic noises without stripping the natural texture of your recording.",
  },

  {
    src: Editting2,
    alt: "Multi-Track Alignment",
    icon: Stack,
    title: "Multi-Track Alignment",
    description:
      "Automatically sync disparate guest audio files into a single, perfectly timed professional track.",
  },
];

export function Features() {
  return (
    <section id="features my-7.5">
      <div className="flex h-fit p-3">
        <div className="flex-3 flex flex-col justify-baseline gap-2">
          <div className="tag w-fit">capabilities</div>
          <h2 className="text-5xl font-grotesk font-bold">
            Built for the modern studio workflow.
          </h2>
        </div>
        <div className="flex-2 flex justify-end items-end">
          <a
            href="#"
            className="flex items-center gap-1 text-sm text-emerald-green"
          >
            <span>Explore all features</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 p-3 md:grid-cols-2">
        {/* Card */}
        {features.map((feature) => (
          <article
            key={feature.title}
            className="relative min-h-88 overflow-hidden rounded-[15px] bg-zinc-900"
          >
            <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden rounded-l-[15px]">
              <Image
                src={feature.src}
                alt={feature.alt}
                width={4000}
                height={4000}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="relative ml-[38%] flex min-h-88 flex-col justify-between rounded-[15px] bg-zinc-900 p-6 shadow-[-12px_0_24px_rgba(0,0,0,0.2)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-herb-green text-emerald-green">
                <feature.icon className="h-5 w-5 -rotate-45" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-grotesk font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
