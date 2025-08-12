import { useEffect, useRef } from "react";
import gsap from "gsap";

const NavBar = () => {
  const navRef = useRef(null);
  useEffect(() => {
    const navi = gsap.fromTo(
      navRef.current,
      {
        y: "-100%",
      },
      {
        y: 0,
        delay: 3,
        ease: "Power4.easeOut",
      }
    );
  }, []);
  return (
    <>
      <nav className="nav-wrapper fixed top-0 left-0 w-full z-50">
        <div
          ref={navRef}
          className="nav-links flex justify-between items-center py-10 px-12"
        >
          <a href="#home" className="text-2xl font-semibold">
            Jasnoor.Maan
          </a>
          <a href="#contactt">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
