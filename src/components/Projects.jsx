import ProjectDetails from "../ProjectDetails";

const Projects = () => {
  return (
    <>
      <div className="top-0 sticky flex justify-center flex-wrap align-middle items-center p-4 min-h-[60vh] md:min-h-[100vh]">
        <h1 className="Heading items-center text-center">Featured Projects</h1>
      </div>
      <div className="holder relative">
        {ProjectDetails.map((project) => (
          <div
            className="slide relative min-h-[90vh] md:min-h-[100vh] p-2 md:p-4 flex flex-col justify-end items-center text-white m-2 md:m-4 rounded-2xl overflow-hidden"
            key={project.id}
          >
            <video
              src={project.videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />

            {/* Blur Gradient Overlay from bottom to top */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-2xl"></div>

            {/* Additional blur effect for bottom section */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 backdrop-blur-[2px] bg-gradient-to-t from-black/30 to-transparent rounded-b-2xl"></div>

            {/* Content */}
            <div className="relative z-10 text-center p-4 md:p-6 backdrop-blur-sm bg-black/20 rounded-xl border border-white/10 mx-4 mb-4 md:mb-8">
              <h1 className="Heading text-2xl md:text-4xl lg:text-5xl mb-3 md:mb-4">
                {project.title}
              </h1>
              <div className="tags gap-2 md:gap-4 flex flex-row flex-wrap justify-center mb-3 md:mb-4">
                {project.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="tag text-white bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border border-white/30"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <p className="textFont text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                {project.description}
              </p>
              <section className="flex justify-center flex-wrap flex-row gap-4 p-2 mt-4">
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-100 px-4 py-2 rounded-2xl text-black textFont text-sm md:text-base lg:text-lg transition-colors duration-300 cursor-pointer"
                  >
                    Visit Site
                  </a>
                )}
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-100 px-4 py-2 rounded-2xl text-black textFont text-sm md:text-base lg:text-lg transition-colors duration-300 cursor-pointer"
                  >
                    GitHub
                  </a>
                )}
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-100 px-4 py-2 rounded-2xl text-black textFont text-sm md:text-base lg:text-lg transition-colors duration-300 cursor-pointer"
                  >
                    Demo
                  </a>
                )}
              </section>
            </div>
          </div>
        ))}

        <section className="slide min-h-[90vh] md:min-h-[100vh] p-2 md:p-4 m-2 md:m-4 mb-2 md:mb-4">
          <div className="bg-black grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 min-h-full p-4 md:p-8">
            {/* TFGET Project */}
            <section className="relative flex flex-col gap-4 p-4 md:p-6 rounded-2xl overflow-hidden min-h-[40vh] md:min-h-auto">
              <img
                src="/MEConfMockup.webp"
                alt="TFGET"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-2xl"></div>

              <div className="absolute bottom-0 left-0 right-0 h-2/3 backdrop-blur-[1px] bg-gradient-to-t from-black/30 to-transparent rounded-b-2xl"></div>

              <div className="relative z-10 flex flex-col justify-end h-full">
                <h1 className="Heading text-lg md:text-xl lg:text-2xl text-white mb-2 md:mb-3">
                  1st International Conference of Thermo Fluids and Green Energy
                  Technology
                </h1>
                <div className="flex flex-wrap gap-2 mt-2 mb-3">
                  <span className="tag text-white bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                    ReactJS
                  </span>
                  <span className="tag text-white bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                    JavaScript
                  </span>
                  <span className="tag text-white bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                    ShadCN
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <a
                    href="https://me-conf.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-100 px-3 py-1.5 rounded-xl text-black textFont text-xs md:text-sm transition-colors duration-300"
                  >
                    Visit Site
                  </a>
                  <a
                    href="https://github.com/JasnoorMaan/me_conf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-100 px-3 py-1.5 rounded-xl text-black textFont text-xs md:text-sm transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </section>

            {/* Ecoyaan Project */}
            <section className="relative flex flex-col gap-4 p-4 md:p-6 rounded-2xl overflow-hidden min-h-[40vh] md:min-h-auto">
              <img
                src="/EcoyaanMockup.webp"
                alt="Ecoyaan"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-0 left-0 right-0 h-2/3 backdrop-blur-[1px] bg-gradient-to-t from-black/30 to-transparent rounded-b-2xl"></div>

              <div className="relative z-10 flex flex-col justify-end h-full">
                <h1 className="Heading text-lg md:text-xl lg:text-2xl text-white mb-2 md:mb-3">
                  Ecoyaan Startup Redesign
                </h1>
                <div className="flex flex-wrap gap-2 mt-2 mb-3">
                  <span className="tag text-white bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                    UI/UX
                  </span>
                  <span className="tag text-white bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                    ReactJS
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <a
                    href="https://eco-yaan.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-100 px-3 py-1.5 rounded-xl text-black textFont text-xs md:text-sm transition-colors duration-300"
                  >
                    View Site
                  </a>
                  <a
                    href="https://github.com/JasnoorMaan/EcoYaan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-100 px-3 py-1.5 rounded-xl text-black textFont text-xs md:text-sm transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </section>

            {/* Portfolio Project */}
            <section className="relative flex flex-col gap-4 p-4 md:p-6 rounded-2xl overflow-hidden min-h-[40vh] md:min-h-auto">
              <img
                src="/PortfolioMockup.webp"
                alt="Portfolio Website"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-0 left-0 right-0 h-2/3 backdrop-blur-[1px] bg-gradient-to-t from-black/30 to-transparent rounded-b-2xl"></div>

              <div className="relative z-10 flex flex-col justify-end h-full">
                <h1 className="Heading text-lg md:text-xl lg:text-2xl text-white mb-2 md:mb-3">
                  Portfolio Website
                </h1>
                <div className="flex flex-wrap gap-2 mt-2 mb-3">
                  <span className="tag text-white bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                    NextJS
                  </span>
                  <span className="tag text-white bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                    GSAP
                  </span>
                  <span className="tag text-white bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                    Tailwind
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <a
                    href="https://jasnoormaanportfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-100 px-3 py-1.5 rounded-xl text-black textFont text-xs md:text-sm transition-colors duration-300"
                  >
                    Visit Site
                  </a>
                  <a
                    href="https://github.com/JasnoorMaan/port"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-100 px-3 py-1.5 rounded-xl text-black textFont text-xs md:text-sm transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </section>

            {/* Robotic Arm Project */}
            <section className="relative flex flex-col gap-4 p-4 md:p-6 rounded-2xl overflow-hidden min-h-[40vh] md:min-h-auto">
              <img
                src="/RoboticArmMockup.webp"
                alt="Robotic Arm"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-0 left-0 right-0 h-2/3 backdrop-blur-[1px] bg-gradient-to-t from-black/30 to-transparent rounded-b-2xl"></div>

              <div className="relative z-10 flex flex-col justify-end h-full">
                <h1 className="Heading text-lg md:text-xl lg:text-2xl text-white mb-2 md:mb-3">
                  3 DOF Robotic Arm
                </h1>
                <div className="flex flex-wrap gap-2 mt-2 mb-3">
                  <span className="tag text-white bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                    ROS2
                  </span>
                  <span className="tag text-white bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                    RViz
                  </span>
                  <span className="tag text-white bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border border-white/30">
                    Gazebo
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <a
                    href="https://github.com/JasnoorMaan/majorProject"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-100 px-3 py-1.5 rounded-xl text-black textFont text-xs md:text-sm transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
