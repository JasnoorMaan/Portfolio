import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import {
  SiLinkedin,
  SiX,
  SiGithub,
  SiPostman,
  SiMailboxdotorg,
} from "react-icons/si";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.div
        className="text-2xl lg:text-4xl about-wrapper mt-48 bg-black px-4 py-12 min-h-screen text-zinc-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="mx-auto grid max-w-6xl grid-flow-dense grid-cols-12 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <HeaderBlock variants={itemVariants} />
          <SocialBlock variants={itemVariants} />
          <Block
            className="col-span-6 lg:col-span-4 font-medium"
            variants={itemVariants}
          >
            PixelPerfect 2023 Hackathon Winner
          </Block>
          <Block
            className="col-span-6 lg:col-span-4 text-zinc-400 font-medium"
            variants={itemVariants}
          >
            Amazon MLSS 2024 Mentee
          </Block>
          <Block
            className="col-span-6 lg:col-span-4 font-medium"
            variants={itemVariants}
          >
            Summer of Bitcoin Design 2024 Mentee
          </Block>
          <Block
            className="col-span-10 lg:col-span-6 font-medium text-zinc-400"
            variants={itemVariants}
          >
            RC Racing and Bot Bolt Design TechNITi 2022 Winner
          </Block>
          <Block
            className="col-span-10 lg:col-span-6 font-medium text-zinc-400"
            variants={itemVariants}
          >
            ex frontend dev intern <span className="text-white">@Lamarr</span>
          </Block>
          <Block
            className="col-span-10 lg:col-span-4 font-medium text-zinc-400"
            variants={itemVariants}
          >
            ex Market Analyst Intern{" "}
            <span className="text-white">@Incisiv, New Jersey</span>
          </Block>
          <AboutBlock variants={itemVariants} />
        </motion.div>
      </motion.div>
    </>
  );
};

const Block = ({ className, children, variants, ...rest }) => {
  return (
    <motion.div
      className={twMerge(
        "block col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
const HeaderBlock = ({ variants }) => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6" variants={variants}>
      <img
        src="https://api.dicebear.com/9.x/lorelei/svg?seed=Chase"
        alt="avatar"
        className="mb-4 size-14 rounded-full"
      />
      <h1 className="mb-6 font-medium leading-tight">
        Hi, I'm Jasnoor.{" "}
        <span className="text-zinc-400">I build cool stuff.</span>
      </h1>
    </Block>
  );
};
const SocialBlock = ({ variants }) => {
  return (
    <motion.div variants={variants} className="contents">
      <Block className="col-span-6 bg-blue-800 md:col-span-3">
        <a
          href=""
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiLinkedin />
        </a>
      </Block>
      <Block className="col-span-6 bg-black md:col-span-3">
        <a
          href=""
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiX />
        </a>
      </Block>
      <Block className="col-span-6 bg-zinc-900 md:col-span-3">
        <a
          href=""
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiGithub />
        </a>
      </Block>
      <Block className="col-span-6 bg-neutral-800 md:col-span-3">
        <a
          href=""
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiMailboxdotorg />
        </a>
      </Block>
    </motion.div>
  );
};
const AboutBlock = ({ variants }) => {
  return (
    <Block
      className="col-span-6 bg-orange-500 md:col-span-3"
      variants={variants}
    >
      <SiPostman className="size-8" />
      <h2 className="pt-2 font-medium">Student Leader</h2>
    </Block>
  );
};
export default About;
