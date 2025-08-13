import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const NavBar = ({ startAnimation }) => {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // initial position
    gsap.set(navRef.current, { y: "-100%" });

    // Only drop down when startAnimation is true
    if (startAnimation) {
      gsap.to(navRef.current, {
        y: 0,
        duration: 2.5,
        ease: "Power4.easeOut",
        delay: 0.2,
      });
    }
  }, [startAnimation]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`nav-wrapper fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/5 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div
          ref={navRef}
          className="nav-links flex justify-between items-center py-4 px-12"
        >
          <a href="#home" className="text-2xl font-semibold">
            Jasnoor.Maan
          </a>
          <a href="#contactt">Let's collab✌️</a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
