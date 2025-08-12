import { motion } from "framer-motion";
import SplineScene from "./SplineScene";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: {
      clipPath: "inset(0 0 100% 0)",
      y: 100,
    },
    visible: {
      clipPath: "inset(0 0 0% 0)",
      y: 0,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="p-4 px-8 gap-y-16 flex flex-col flex-nowrap justify-end align-middle h-[100vh]">
        <SplineScene />
        <div className="flex flex-col flex-nowrap justify-end align-middle gap-y-12">
          <div className="font-semibold z-10 lg:gap-x-64 flex flex-col justify-center align-middle lg:px-4 text-sm lg:text-md">
            <p>SOFTWARE ENGINEER</p>
            <p>BASED IN INDIA</p>
          </div>
          <div className="hero-container">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hero-headingg font-[Font1] flex flex-col align-middle justify-start font-semibold lg:text-9xl text-6xl"
            >
              <motion.div variants={itemVariants} className="overflow-hidden">
                I BUILD
              </motion.div>
              <motion.div variants={itemVariants} className="overflow-hidden">
                COOL THINGS
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
// ref={target}

export default Hero;
