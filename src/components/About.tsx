export const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold">
              ABOUT <span className="text-gradient italic">ME</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-xl">
                I'm a designer who codes (or maybe a developer who designs? Still figuring that out).
              </p>
              
              <p>
                I spend my days crafting interfaces that don't make people want to throw their laptops out the window. 
                Started with Photoshop tutorials on YouTube, accidentally learned to code, and somehow ended up here.
              </p>

              <p>
                When I'm not pixel-pushing or debugging CSS, you'll find me overthinking button animations or 
                arguing about whether it's better to use 8px or 12px padding (it's always 12px, fight me).
              </p>

              <div className="flex flex-wrap gap-6 pt-6">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-foreground">3+</div>
                  <div className="text-sm">Years Building</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-foreground">50+</div>
                  <div className="text-sm">Projects Shipped</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-foreground">∞</div>
                  <div className="text-sm">Coffees Consumed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
