import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Loader = ({ onComplete, onShutterStart, splineLoaded }) => {
  const textRef = useRef(null);
  const shutterRef = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    gsap.set(textRef.current, {
      width: "3rem",
      overflow: "hidden",
      whiteSpace: "nowrap",
    });
    gsap.set(shutterRef.current, { height: "100vh" });

    // master timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setAnimationComplete(true);
      },
    });

    // timeline start
    tl
      // expansion
      .to(textRef.current, {
        width: "auto",
        duration: 1.5,
        ease: "power2.out",
      })
      // wait
      .to({}, { duration: 0.5 })
      // contract
      .to(textRef.current, {
        width: "3rem",
        duration: 1.5,
        ease: "power2.in",
      })
      // now starting hero animations
      .call(() => {
        if (onShutterStart) {
          onShutterStart();
        }
      })
      // opening shutter
      .to(shutterRef.current, {
        height: "0vh",
        duration: 1,
        ease: "power2.inOut",
      });

    return () => tl.kill();
  }, []);

  // happens only when both are complete
  useEffect(() => {
    if (animationComplete && splineLoaded) {
      onComplete();
    }
  }, [animationComplete, splineLoaded, onComplete]);

  return (
    <section
      ref={shutterRef}
      className="bg-black flex justify-center items-center fixed inset-0 z-50 text-white text-2xl font-Font2"
      style={{ overflow: "hidden" }}
    >
      <div ref={textRef} className="relative">
        <span>J</span>
        <span className="inline-block">asnoor</span>
        <span>.</span>
        <span>M</span>
        <span className="inline-block">aan</span>
      </div>

      {/* bottom bougie indicator */}
      <div className="absolute bottom-8 text-sm opacity-50">
        {!splineLoaded ? "Loading experience..." : "Ready"}
      </div>
    </section>
  );
};

export default Loader;
