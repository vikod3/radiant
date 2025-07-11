const JourneySection = () => {
  const cards = [
    {
      title: "Finance Focused",
      description: "Our team bridges the gap between finance and tech, driving our commitment to results.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=360&h=253&fit=crop&crop=center"
    },
    {
      title: "AI Innovation", 
      description: "We built our leadership team to expertly combine deep finance knowledge with advanced AI.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=360&h=253&fit=crop&crop=center"
    },
    {
      title: "Client Empowerment",
      description: "Dedicated to helping firms achieve deal flow goals through efficient technology solutions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=360&h=253&fit=crop&crop=center"
    }
  ];

  return (
    <section className="w-full py-12 lg:py-16 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-16">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 lg:gap-26">
            <div className="flex-1 max-w-2xl">
              <div className="flex flex-col gap-4">
                <span className="text-hero-foreground text-base font-normal leading-relaxed">
                  Our Journey
                </span>
                <h2 className="text-hero-foreground text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">
                  Tailored AI systems, built for finance
                </h2>
              </div>
            </div>
            <div className="flex-1 max-w-lg">
              <p className="text-hero-muted text-base font-normal leading-relaxed">
                Delivering the Latest AI Advancements to Solve Your Specific Goals and Challenges, Ensuring Enhanced Efficiency and Insight Growth.
              </p>
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div key={index} className="group">
                <div className="p-4 pb-8 rounded-2xl border border-hero-secondary-border bg-hero-secondary-bg/5 backdrop-blur-sm hover:bg-hero-secondary-bg/10 transition-all duration-300">
                  {/* Card Image */}
                  <div className="relative w-full h-64 mb-6 overflow-hidden rounded-xl">
                    <img 
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Card Content */}
                  <div className="flex flex-col items-center text-center gap-2">
                    <h3 className="text-hero-foreground text-2xl font-normal leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-hero-muted opacity-70 text-base font-normal leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;