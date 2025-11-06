export const Experience = () => {
  const experiences = [
    {
      period: "2024 - Now",
      title: "SENIOR DESIGNER & DEVELOPER",
      company: "Freelance",
      description: "Building digital products for startups and agencies. Wearing all the hats (designer, developer, therapist).",
    },
    {
      period: "2022 - 2024",
      title: "PRODUCT DESIGNER",
      company: "TechFlow Inc",
      description: "Led design for a B2B SaaS platform. Increased user retention by 40% through better UX. Also fixed everyone's CSS.",
    },
    {
      period: "2021 - 2022",
      title: "UI DEVELOPER",
      company: "Digital Studio",
      description: "Built responsive websites and web apps. Learned that 'it looks fine on my machine' is not a valid QA strategy.",
    },
  ];

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="text-gradient italic">History</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Where I've been breaking things and fixing them
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors group"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <h3 className="text-2xl font-bold tracking-wide">
                    <span className="text-primary font-serif italic">{exp.title.split(' ')[0]} </span>
                    {exp.title.split(' ').slice(1).join(' ')}
                  </h3>
                  <p className="text-lg font-medium">{exp.company}</p>
                  <p className="text-muted-foreground leading-relaxed pt-2">
                    {exp.description}
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
