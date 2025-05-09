/* eslint-disable react/prop-types */
// FloatingDots.jsx
import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

// Helper function for random number in a range
const randomRange = (min, max) => Math.random() * (max - min) + min;

// --- Dot component remains the same, but we'll adjust style ---
// eslint-disable-next-line react/prop-types
function Dot({ initialPosition, speedFactor, amplitude, size, offset }) {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const elapsedTime = clock.getElapsedTime();
      const driftX = Math.sin(elapsedTime * speedFactor + offset.x) * amplitude;
      const driftY = Math.cos(elapsedTime * speedFactor * 0.8 + offset.y) * amplitude;

      // Update position relative to the *parent group's* position (which follows the camera)
      groupRef.current.position.x = initialPosition.x + driftX;
      groupRef.current.position.y = initialPosition.y + driftY;
      groupRef.current.position.z = initialPosition.z; // Z is constant relative to parent
    }
  });

  return (
    // eslint-disable-next-line react/no-unknown-property
    <group ref={groupRef} position={initialPosition}>
      <Html
        center
        transform
        occlude={false}
        wrapperClass="floater-dot"
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <div
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            // --- Adjusted Style: Darker and more opaque ---
            backgroundColor: 'rgba(20, 20, 40, 0.65)', // Darker, slightly bluish, more opaque
            // --- Adjusted Style: Slightly more blur for larger size ---
            filter: 'blur(2px)',
          }}
        />
      </Html>
    </group>
  );
}


// --- Component to manage multiple dots ---
export default function FloatingDots({
  // --- Adjusted Defaults ---
  count = 150, // More dots
  areaWidth = 8, // Area relative to camera view
  areaHeight = 6, // Area relative to camera view
  distance = 3, // Closer distance *in front of* the camera
  sizeRange = [8, 20], // Larger dots
  speedRange = [0.05, 0.2], // Slightly slower drift for larger dots might feel better
  amplitudeRange = [0.1, 0.3], // Reduced amplitude slightly
}) {
  const { camera } = useThree(); // Get the camera object
  const groupRef = useRef(); // Ref for the group that will follow the camera

  // useMemo to generate dot data only once
  const dotsData = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // Position relative to the camera-following group
      const x = randomRange(-areaWidth / 2, areaWidth / 2);
      const y = randomRange(-areaHeight / 2, areaHeight / 2);
      // Place them on a plane *directly in front* of the camera's current view
      const z = -distance;

      return {
        id: i,
        initialPosition: new THREE.Vector3(x, y, z), // Position relative to the parent group
        speedFactor: randomRange(speedRange[0], speedRange[1]),
        amplitude: randomRange(amplitudeRange[0], amplitudeRange[1]),
        size: Math.floor(randomRange(sizeRange[0], sizeRange[1])),
        offset: {
          x: randomRange(0, Math.PI * 2),
          y: randomRange(0, Math.PI * 2),
        }
      };
    });
  }, [count, areaWidth, areaHeight, distance, sizeRange, speedRange, amplitudeRange]);

  // --- This useFrame makes the parent group follow the camera ---
  useFrame(() => {
    if (groupRef.current) {
      // Match the group's world position and orientation to the camera's
      groupRef.current.position.copy(camera.position);
      groupRef.current.quaternion.copy(camera.quaternion);
      // Optional: If you want the dots plane to always face the camera *origin*
      // instead of inheriting camera rotation (might look slightly different with OrbitControls)
      // groupRef.current.lookAt(camera.position); // Use this instead of quaternion copy if preferred
    }
  });

  return (
    // This group's transform will be updated to match the camera
    <group ref={groupRef}>
      {/* Render each dot *inside* the camera-following group */}
      {dotsData.map(dot => (
        <Dot key={dot.id} {...dot} />
      ))}
    </group>
  );
}