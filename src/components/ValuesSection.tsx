import { Lightbulb, Users, Globe, Award, Zap, Shield } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovative Approach",
      description: "We embrace creativity and cutting-edge technology to solve complex challenges and drive meaningful change."
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our diverse team of experts brings years of experience and a shared passion for excellence in every project."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "With clients and partners worldwide, we deliver solutions that meet diverse needs across industries and regions."
    },
    {
      icon: Award,
      title: "Commitment to Quality",
      description: "We prioritize delivering top-notch solutions with a relentless focus on quality, reliability, and customer satisfaction."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Our streamlined processes and advanced automation deliver results faster than traditional approaches."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with enterprise-grade security and reliability standards to protect your business data and operations."
    }
  ];

  return (
    <section className="w-full py-12 lg:py-16 px-4 bg-hero">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-16">
          {/* Header */}
          <div className="flex flex-col items-center gap-6 text-center">
            <span className="text-hero-foreground text-base font-normal leading-relaxed">
              Our Values
            </span>
            <h2 className="text-hero-foreground text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight max-w-4xl">
              See How Smart AI Automation Transforms Businesses
            </h2>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {values.map((value, index) => (
              <div key={index} className="p-10 rounded-xl border border-hero-secondary-border bg-gradient-to-br from-hero-secondary-bg to-transparent backdrop-blur-sm">
                <div className="flex flex-col gap-6">
                  {/* Icon Container */}
                  <div className="flex flex-col gap-6">
                    <div className="p-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white to-[#131315] w-fit">
                      <value.icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-hero-foreground text-2xl font-normal leading-tight">
                      {value.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-hero-muted text-base font-normal leading-relaxed opacity-70">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;