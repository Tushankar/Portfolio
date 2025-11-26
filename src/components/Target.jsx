import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Target = (props) => {
  const targetRef = useRef();
  const [scene, setScene] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const data = await useGLTF.preload(
          "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
        );
        setScene(data.scene);
      } catch (err) {
        console.warn(
          "Failed to load Target model from Supabase, using fallback:",
          err
        );
        setError(err);
      }
    };
    loadModel();
  }, []);

  useGSAP(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  });

  if (error || !scene) {
    // Render a fallback 3D object instead
    return (
      <mesh
        {...props}
        ref={targetRef}
        rotation={[0, Math.PI / 5, 0]}
        scale={1.5}
      >
        <coneGeometry args={[0.5, 1.5, 8]} />
        <meshStandardMaterial color="#ff6b00" />
      </mesh>
    );
  }

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
