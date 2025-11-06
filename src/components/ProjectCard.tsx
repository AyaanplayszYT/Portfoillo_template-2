import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { useState, useRef } from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  color: string;
  index: number;
}

export const ProjectCard = ({ title, category, description, color, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1)";
    setIsHovered(false);
  };

  return (
    <Card
      ref={cardRef}
      className="border-border bg-card overflow-hidden group cursor-pointer relative"
      style={{
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient background */}
      <div className={`h-56 bg-gradient-to-br ${color} relative overflow-hidden`}>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Hover glow effect */}
        <div 
          className={`absolute inset-0 bg-white/5 backdrop-blur-[2px] transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* External link icon */}
        <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <ExternalLink className="w-5 h-5 text-white" />
        </div>

        {/* Project number */}
        <div className="absolute bottom-4 left-4">
          <span className="text-white/40 text-sm font-mono">0{index + 1}</span>
        </div>
      </div>

      <CardContent className="p-6 space-y-3 relative" style={{ transform: "translateZ(40px)" }}>
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold text-primary tracking-widest uppercase">
            {category}
          </p>
          <div className="w-8 h-0.5 bg-primary/30" />
        </div>
        
        <h3 className="text-2xl font-bold leading-tight">{title}</h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {/* Tech stack pills */}
        <div className="flex gap-2 pt-2">
          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">React</span>
          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">TypeScript</span>
        </div>
      </CardContent>

      {/* Shine effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.03) 50%, transparent 70%)',
          transform: 'translateX(-100%)',
          animation: isHovered ? 'shine 1.5s ease-in-out' : 'none',
        }}
      />
      
      <style>{`
        @keyframes shine {
          to {
            transform: translateX(100%);
          }
        }
      `}</style>
    </Card>
  );
};
