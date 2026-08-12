import { twMerge } from "tailwind-merge";

const pricingPlans = [
  {
    name: "Free",
    price: "Free",
    features: [
      "1 Episode / Month",
      "Basic Silence Removal",
      "Standard Export (MP3)",
      "Community Export",
    ],
    cta: "Start for free",
  },
  {
    name: "Creator",
    price: "₦1000",
    badge: "Popular",
    features: [
      "Unlimited Episodes",
      "Smart Silence Engine",
      "AI Noise Suppression",
      "Lossless WAV Export",
      "Priority Processing",
    ],
    cta: "Get Creator",
  },
  {
    name: "Studio",
    price: "₦5000",
    features: [
      "Team collaboration",
      "Multi-Track syncing",
      "API Access",
      "Custom Master Presets",
      "Personal concierge",
    ],
    cta: "Contact Sales",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-4 px-2 my-7.5">
      <div className="flex flex-col justify-center items-center">
        <div className="tag-orange">Pricing Plans</div>
        <h2 className="section-title">Invest in your production.</h2>
        <p className="section-subtitle">
          Simple, transparent pricing for creators at every stage of their
          journey.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12 p-2">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`w-[80%] mx-auto md:w-full relative rounded-xl p-8 transition-all ${
              plan.badge
                ? "border-2 border-transparent shadow-[1px_1px_15px_#f5a62226]"
                : "border border-black/15 shadow-xs shadow-black"
            } `}
          >
            {plan.badge && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div
                  className="bg-accent text-solarized-black px-6 py-2 rounded-full text-sm
                font-mono font-semibold"
                >
                  Most Popular
                </div>
              </div>
            )}
            <div className="pt-4">
              <h3 className="text-xs text-white/60 font-mono uppercase text-left mb-2 tracking-tighter">
                {plan.name}
              </h3>
              <p className="text-xl text-white/40 mb-6 tracking-tight leading-relaxed">
                <span className="font-grotesk text-4xl text-white font-bold">
                  {plan.price}
                </span>
                {plan.price.toLowerCase() !== "free" && <span>/mo</span>}
              </p>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-emerald-green shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <button
                  className={twMerge(
                    "btn-lg w-full font-mono",
                    plan.name.toLowerCase() === "creator"
                      ? "btn-filled font-bold"
                      : "btn-text border border-white",
                    "rounded-2xl tracking-tight",
                  )}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
