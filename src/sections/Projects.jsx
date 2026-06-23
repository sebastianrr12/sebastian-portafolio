import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const companyProjects = {
  medios: [
    {
      title: "Cocina Vital",
      description:
        "Medio digital de gastronomía con recetas prácticas, saludables y tradicionales. Contenido en múltiples formatos como artículos, videos e infografías para distintos públicos.",
      image: "/projects/cocina-vital.webp",
      /*tags: ["React", "TypeScript"],*/
      link: "https://www.cocinavital.mx/",
    },
    {
      title: "Donde ir",
      description:
        "Plataforma digital líder en entretenimiento y estilo de vida, especializada en recomendaciones, tendencias y eventos culturales, gastronómicos y turísticos en México.",
      image: "/projects/donde-ir.webp",
      /*tags: ["React", "NodeJS"],*/
      link: "https://www.dondeir.com/",
    },
    {
      title: "Futbol Total",
      description:
        "Marca editorial de fútbol en México con cobertura de noticias, análisis, entrevistas y contenido multimedia sobre el deporte más popular del país.",
      image: "/projects/futbol-total.webp",
      /*tags: ["React", "NodeJS"],*/
      link: "https://www.futboltotal.com.mx/",
    },
    {
      title: "Gourmet de Mexico",
      description:
        "Medio digital enfocado en gastronomía y estilo de vida foodie, con recomendaciones de restaurantes, tendencias culinarias y experiencias gastronómicas en México.",
      image: "/projects/gourmet-de-mexico.webp",
      /*tags: ["React", "NodeJS"],*/
      link: "https://www.futboltotal.com.mx/",
    },
    {
      title: "Grupo Medios",
      description:
        "Plataforma corporativa enfocada en la creación y difusión de contenidos multiplataforma, conectando audiencias mediante estrategias digitales y marcas especializadas.",
      image: "/projects/grupo-medios.webp",
      /*tags: ["Next.js", "MongoDB"],*/
      link: "https://grupomedios.com/",
    },
    {
      title: "Mujer de 10",
      description:
        "Medio digital enfocado en estilo de vida femenino, con contenido sobre moda, belleza, bienestar, finanzas y salud en formatos multimedia.",
      image: "/projects/mujer-de-10.webp",
      /*tags: ["React", "Tailwind"],*/
      link: "https://www.mujerde10.com/",
    },
    {
      title: "Open Revista",
      description:
        "Revista digital enfocada en estilo de vida, tendencias y contenido social, ofreciendo información y recomendaciones con una perspectiva editorial especializada.",
      image: "/projects/open-revista.webp",
      /*tags: ["Java", "Spring Boot"],*/
      link: "https://openrevista.com/",
    },
    {
      title: "Somos News",
      description:
        "Plataforma digital enfocada en finanzas personales y trámites, brindando información práctica para la vida diaria.",
      image: "/projects/somos-news.webp",
      /*tags: ["Angular", "MySQL"],*/
      link: "https://somosnews.com.mx/",
    },
    {
      title: "Soy Grupero",
      description:
        "Medio digital especializado en música regional mexicana y entretenimiento grupero, con cobertura de noticias, artistas, lanzamientos y espectáculos.",
      image: "/projects/soy-grupero.webp",
      /*tags: ["React Native", "Firebase"],*/
      link: "https://www.soygrupero.com.mx/",
    },
  ],

  torices: [
    {
      title: "Max Acero",
      description:
        "Empresa distribuidora de acero certificado para construcción, enfocada en venta por mayoreo y soluciones industriales a nivel nacional.",
      image: "/projects/maxacero.webp",
      /*tags: ["Java", "Spring"],*/
      link: "https://maxacero.mx/",
    },
    {
      title: "Aceros Torices",
      description:
        "Empresa del sector acerero con más de 12 años de experiencia, enfocada en proveer materiales de alta calidad para proyectos de construcción e infraestructura.",
      image: "/projects/aceros-torices.webp",
      /*tags: ["React", "NodeJS"],*/
      link: "https://acerostorices.com/",
    },
    {
      title: "Grupo Torices",
      description:
        "Grupo empresarial del sector industrial, construcción y comercial con más de 10 años de experiencia en la industria acerera en México, enfocado en excelencia y crecimiento.",
      image: "/projects/grupo-torices.webp",
      /*tags: ["Vue", "Laravel"],*/
      link: "https://grupotorices.com/",
    },
    {
      title: "Aceros Electroforjados",
      description:
        "Empresa líder en México en la venta y distribución de rejillas industriales de acero certificado para construcción y manufactura.",
      image: "/projects/aceros-electroforjados.webp",
      /*tags: ["Angular", "NestJS"],*/
      link: "https://aceroselectroforjados.com/",
    },
    {
      title: "Inoxidables Victoria",
      description:
        "Empresa especializada en la venta de acero inoxidable y aluminio certificado, ofreciendo soluciones metálicas de alto rendimiento para diversas industrias.",
      image: "/projects/inox-victoria.webp",
      /*tags: ["React Native", "Firebase"],*/
      link: "https://inoxidablesvictoria.com/",
    },
    {
      title: "Aceros Crea",
      description:
        "Empresa mexicana dedicada a la venta y distribución de acero para la industria de la construcción, enfocada en calidad, confianza y soluciones industriales.",
      image: "/projects/aceros-crea.webp",
      /*tags: ["Next.js", "PostgreSQL"],*/
      link: "https://aceroscrea.com/",
    },
  ],
};

export const Projects = () => {
  const [activeCompany, setActiveCompany] = useState("medios");

  const projects = companyProjects[activeCompany];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            MIS PROYECTO
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Sitios que he{" "}
            <span className="font-serif italic font-normal text-white">
              desarrollado.
            </span>
          </h2>

          <p className="text-muted-foreground">
            Selección de proyectos que he desarrollado para empresas de medios
            digitales y el sector industrial, aplicando tecnologías web y
            soluciones a medida.
          </p>
        </div>
        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveCompany("medios")}
            className={`px-6 py-3 rounded-full transition-all ${
              activeCompany === "medios"
                ? "bg-primary text-primary-foreground"
                : "glass text-muted-foreground"
            }`}
          >
            Grupo Medios
          </button>

          <button
            onClick={() => setActiveCompany("torices")}
            className={`px-6 py-3 rounded-full transition-all ${
              activeCompany === "torices"
                ? "bg-primary text-primary-foreground"
                : "glass text-muted-foreground"
            }`}
          >
            Grupo Torices
          </button>
        </div>

        {/* Grid */}
        <div key={activeCompany} className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar sitio de ${project.title}`}
                className="relative block overflow-hidden aspect-video"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Icono visible en mobile y con hover en desktop */}
                <div
                  className="absolute top-4 right-4 z-20 p-3 glass rounded-full 
    opacity-100 md:opacity-0 md:group-hover:opacity-100 
    hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <ArrowUpRight className="w-5 h-5 transition-transform md:group-hover:translate-x-1 md:group-hover:-translate-y-1" />
                </div>
              </a>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                {/* Tags (descomentado y mejorado) */}
                {project.tags && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
