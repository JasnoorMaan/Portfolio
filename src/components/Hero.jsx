import SplineScene from "./SplineScene";
const Hero = () => {
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
            <h1 className="hero-headingg font-[Font1] flex flex-nowrap align-middle justify-start font-semibold lg:text-9xl text-6xl clip-path1 ">
              I BUILD <br />
              COOL THINGS
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
// ref={target}

export default Hero;
