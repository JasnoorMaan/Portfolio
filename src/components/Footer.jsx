const Footer = () => {
  return (
    <div className="bg-black text-white leading-loose gap-24 pb-0 mb-0">
      <div className="flex flex-nowrap flex-col pb-12 px-2">
        <p className="text-zinc-400 text-sm">Contact</p>
        <h1 className="text-zinc-400 text-xl">jasnoormwork@gmail.com</h1>
      </div>

      <div className="lg:text-9xl font-semibold flex flex-wrap justify-between align-middle px-2 text-5xl pb-4">
        <h1>Jasnoor.Maan</h1>
        <h1>©{new Date().getFullYear()}</h1>
      </div>
    </div>
  );
};

export default Footer;
