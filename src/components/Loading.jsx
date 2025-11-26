import { Html, useProgress } from "@react-three/drei";
import { useMemo } from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();

  // Memoize the progress text to avoid unnecessary re-renders
  const progressText = useMemo(() => {
    return progress !== 0 ? `${progress.toFixed(2)}%` : "Loading...";
  }, [progress]);

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progressText}
      </p>
    </Html>
  );
};

export default CanvasLoader;
