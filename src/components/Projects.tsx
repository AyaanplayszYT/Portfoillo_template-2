import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "TaskFlow Pro",
    category: "SaaS Product",
    description: "A project management tool that doesn't make you want to rage quit. Built with React & Node.js",
    color: "from-blue-600 via-blue-500 to-cyan-500",
  },
  {
    title: "Midnight Brew",
    category: "E-Commerce",
    description: "Coffee subscription service with a sleek checkout. Because developers need caffeine.",
    color: "from-amber-600 via-orange-500 to-red-500",
  },
  {
    title: "StreamVibe",
    category: "Media Platform",
    description: "Video streaming app with custom player. Like Netflix but with way less budget.",
    color: "from-purple-600 via-pink-500 to-rose-500",
  },
  {
    title: "FitTrack",
    category: "Mobile App",
    description: "Fitness tracker that actually tracks things. Revolutionary concept, I know.",
    color: "from-green-600 via-emerald-500 to-teal-500",
  },
  {
    title: "DevConnect",
    category: "Social Network",
    description: "LinkedIn for developers who hate LinkedIn. Built with Next.js & Tailwind.",
    color: "from-indigo-600 via-violet-500 to-purple-500",
  },
  {
    title: "BudgetWise",
    category: "FinTech",
    description: "Personal finance app that won't judge your spending habits (unlike your bank).",
    color: "from-slate-600 via-gray-500 to-zinc-500",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Selected Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Projects I've actually shipped (not just "coming soon" pages)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
