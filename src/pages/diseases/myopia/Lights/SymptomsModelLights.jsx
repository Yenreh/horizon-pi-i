/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';

export default function SymptomsModelLights() {
    const directionalLightRef = useRef();
  
    useFrame((state) => {
      const elapsedTime = state.clock.getElapsedTime();
      directionalLightRef.current.position.x = MathUtils.lerp(
        -1,
        1,
        Math.cos(elapsedTime) * 0.4 
      );
    });

  return (
    <>
      <ambientLight color={"#F5F5DC"} intensity={2} />
      <directionalLight
        ref={directionalLightRef}
        color={"white"}
        position={[0, 5, 5]}
        intensity={5}
        castShadow={true}
      />
    </>
  )
}