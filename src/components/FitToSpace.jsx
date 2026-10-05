import { useLayoutEffect, useRef, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { MathUtils, Vector3 } from 'three';

import { HERO_CAMERA_Z } from './HeroCamera.jsx';

// Never shrink below this share of the preferred scale; past that point the
// children are allowed to run under the content above them instead.
const MIN_SCALE_RATIO = 0.5;

// Corners of every mesh's bounding box, in the group's own unscaled space.
// Meshes marked with `userData.skipFit` are left out.
const meshCorners = (group) => {
  group.updateWorldMatrix(true, true);
  const worldToGroup = group.matrixWorld.clone().invert();
  const corners = [];

  group.traverse((object) => {
    if (!object.isMesh || object.userData.skipFit) return;

    object.geometry.computeBoundingBox();
    const { min, max } = object.geometry.boundingBox;
    const meshToGroup = worldToGroup.clone().multiply(object.matrixWorld);

    for (const x of [min.x, max.x])
      for (const y of [min.y, max.y])
        for (const z of [min.z, max.z]) corners.push(new Vector3(x, y, z).applyMatrix4(meshToGroup));
  });

  return corners;
};

// Largest scale (up to `scale`) and nearest y position (to `position`) that keep
// every corner inside `space`, as seen from the hero camera at rest.
const fit = (corners, space, scale, position, fov) => {
  const tan = Math.tan(MathUtils.degToRad(fov / 2));

  // The y positions that keep all corners inside the space at scale s. Each
  // corner gives one bound per edge; its depth decides how much of the world
  // the camera sees at that distance.
  const yRange = (s) => {
    let min = -Infinity;
    let max = Infinity;

    for (const corner of corners) {
      const visibleHeight = 2 * tan * (HERO_CAMERA_Z - position[2] - s * corner.z);
      min = Math.max(min, (0.5 - space.bottom) * visibleHeight - s * corner.y);
      max = Math.min(max, (0.5 - space.top) * visibleHeight - s * corner.y);
    }

    return { min, max };
  };

  const fits = (s) => {
    const { min, max } = yRange(s);
    return min <= max;
  };

  let fittedScale = scale;
  if (!fits(scale)) {
    let low = scale * MIN_SCALE_RATIO;
    let high = scale;
    for (let i = 0; i < 20; i++) {
      const mid = (low + high) / 2;
      if (fits(mid)) low = mid;
      else high = mid;
    }
    fittedScale = low;
  }

  // When even the smallest scale doesn't fit, clamp() settles on `min`, which
  // keeps the bottom edge in place.
  const { min, max } = yRange(fittedScale);
  return {
    scale: fittedScale,
    position: [position[0], MathUtils.clamp(position[1], min, max), position[2]],
  };
};

// Shrinks and moves its children, only as much as needed, so they appear on
// screen inside `space` ({ top, bottom } as fractions of the canvas height).
const FitToSpace = ({ space, scale, position, children }) => {
  const group = useRef();
  const [corners, setCorners] = useState(null);
  const fov = useThree((state) => state.camera.fov);

  useLayoutEffect(() => {
    const measured = meshCorners(group.current);
    if (measured.length) setCorners(measured);
  }, []);

  const fitted = space && corners ? fit(corners, space, scale, position, fov) : { scale, position };

  return (
    <group ref={group} scale={fitted.scale} position={fitted.position}>
      {children}
    </group>
  );
};

export default FitToSpace;
