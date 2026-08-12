export function Testimonial() {
  return (
    <section id="testimonials" className="py-16 px-6">
      <div className="max-w-6xl mx-auto flex gap-8">
        {/* Main testimonial block with avatar below */}
        <div className="flex-1 flex flex-col items-center">
          <div className="bg-gray-100 rounded-lg p-8 mb-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              This is a powerful testimonial that speaks to the impact and value of our service. 
              It captures the essence of what makes our product stand out in the market.
            </p>
          </div>
          <div className="w-20 h-20 bg-gray-300 rounded-full" />
        </div>

        {/* Two cards on the right */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-400 rounded-lg mb-4" />
            <p className="text-center text-gray-600">Person Name & Details</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-400 rounded-lg mb-4" />
            <p className="text-center text-gray-600">Person Name & Details</p>
          </div>
        </div>
      </div>
    </section>
  );
}
