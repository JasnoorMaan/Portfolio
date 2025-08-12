import { twMerge } from "tailwind-merge";
import {
  SiLinkedin,
  SiX,
  SiGithub,
  SiPostman,
  SiMailboxdotorg,
} from "react-icons/si";

const About = () => {
  return (
    <>
      <div className="text-2xl lg:text-4xl about-wrapper mt-48 bg-black px-4 py-12 min-h-screen text-zinc-50">
        <div className="mx-auto grid max-w-6xl grid-flow-dense grid-cols-12 gap-4">
          <HeaderBlock />
          <SocialBlock />
          <Block className="col-span-6 lg:col-span-4 font-medium">
            PixelPerfect 2023 Hackathon Winner
          </Block>
          <Block className="col-span-6 lg:col-span-4 text-zinc-400 font-medium">
            Amazon MLSS 2024 Mentee
          </Block>
          <Block className="col-span-6 lg:col-span-4 font-medium">
            Summer of Bitcoin Design 2024 Mentee
          </Block>
          <Block className="col-span-10 lg:col-span-6 font-medium text-zinc-400">
            RC Racing and Bot Bolt Design TechNITi 2022 Winner
          </Block>
          <Block className="col-span-10 lg:col-span-6 font-medium text-zinc-400">
            ex frontend dev intern <span className="text-white">@Lamarr</span>
          </Block>
          <Block className="col-span-10 lg:col-span-4 font-medium text-zinc-400">
            ex Market Analyst Intern{" "}
            <span className="text-white">@Incisiv, New Jersey</span>
          </Block>
          <AboutBlock />
        </div>
      </div>
    </>
  );
};

const Block = ({ className, children, ...rest }) => {
  return (
    <div
      className={twMerge(
        "block col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
const HeaderBlock = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
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
const SocialBlock = () => {
  return (
    <>
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
    </>
  );
};
const AboutBlock = () => {
  return (
    <Block className="col-span-6 bg-orange-500 md:col-span-3">
      <SiPostman className="size-8" />
      <h2 className="pt-2 font-medium">Student Leader</h2>
    </Block>
  );
};
export default About;
