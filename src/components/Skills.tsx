import { Card, CardContent } from "@/components/ui/card";
import { Palette, Pencil, Code2, Layers } from "lucide-react";

const skills = [
  {
    icon: Palette,
    title: "UI DESIGN",
    description: "Making pixels behave. Obsessed with spacing, contrast, and those tiny details nobody notices (but everyone feels).",
  },
  {
    icon: Code2,
    title: "DEVELOPMENT",
    description: "React, TypeScript, Tailwind. I turn coffee into code and designs into reality.",
  },
  {
    icon: Layers,
    title: "PROTOTYPING",
    description: "From sketches to interactive prototypes. Figma is my second home at this point.",
  },
  {
    icon: Pencil,
    title: "PROBLEM SOLVING",
    description: "Finding elegant solutions to complex problems. Also good at googling errors.",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Do</h2>
            <p className="text-muted-foreground text-lg">
              My stack and superpowers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.title}
                className="border-border bg-card hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_0_40px_rgba(var(--glow-primary),0.15)]"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-[#ec4899] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <skill.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold tracking-wide">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
