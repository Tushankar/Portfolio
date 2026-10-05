import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

// Distance the camera settles at after the intro zoom
export const HERO_CAMERA_Z = 20;

const HeroCamera = ({ isMobile, children }) => {
  const group = useRef();

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, HERO_CAMERA_Z], 0.25, delta);

    if (!isMobile) {
      easing.dampE(group.current.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);
    }
  });

  return <group ref={group}>{children}</group>;
};

export default HeroCamera;