import { useEffect } from "react";
import Spline from "@splinetool/react-spline";

export default function SplineScene({ onLoad }) {
  const handleLoad = () => {
    console.log("Spline scene loaded successfully");
    if (onLoad) {
      onLoad();
    }
  };
  const handleError = (error) => {
    console.error("Spline loading error:", error);
    // Still calling onLoad to prevent infinite loading
    if (onLoad) {
      onLoad();
    }
  };

  // Fallback for development
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onLoad) {
        onLoad();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoad]);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none md:pointer-events-auto">
      <Spline
        scene="https://prod.spline.design/TZa5wdLyO1ZQioMX/scene.splinecode"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}
