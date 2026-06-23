import { Code2, Globe, Component, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description:
      "Creación y mantenimiento de sitios y plataformas web utilizando PHP, JavaScript y tecnologías modernas.",
  },
  {
    icon: Globe,
    title: "WordPress",
    description:
      "Desarrollo de soluciones personalizadas, themes y plugins enfocados en rendimiento y escalabilidad.",
  },
  {
    icon: Component,
    title: "React & .NET",
    description:
      "Actualmente fortaleciendo mis habilidades en React y .NET para desarrollar aplicaciones web modernas y escalables.",
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description:
      "Experiencia colaborando con equipos ágiles mediante SCRUM, Jira, Git y herramientas de documentación.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Sobre mí
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Transformando ideas en soluciones,
              <span className="font-serif italic font-normal text-white">
                {" "}
                una línea de código a la vez.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Soy Ingeniero en Sistemas Computacionales y desarrollador web
                con experiencia en la creación, mantenimiento y optimización de
                sitios y plataformas digitales. He trabajado con tecnologías
                como PHP, JavaScript, WordPress y Java, participando en
                proyectos tanto de desarrollo web como de sistemas
                empresariales.
              </p>

              <p>
                Mi experiencia abarca el desarrollo Front-End y Back-End, la
                creación de soluciones personalizadas para WordPress y la
                implementación de nuevas funcionalidades enfocadas en mejorar la
                experiencia de los usuarios. Disfruto resolver problemas y
                transformar requerimientos en soluciones funcionales y
                eficientes.
              </p>

              <p>
                Actualmente estoy ampliando mis conocimientos en React y .NET
                para fortalecer mi perfil como desarrollador Full Stack y
                desarrollar aplicaciones modernas, escalables y de alto
                rendimiento.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Mi objetivo es crear soluciones digitales que combinen
                funcionalidad, rendimiento y una excelente experiencia para los
                usuarios."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
