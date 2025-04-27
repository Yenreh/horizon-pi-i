import React, { useRef } from 'react'
import { SpotLight, SoftShadows, useHelper } from '@react-three/drei'
import { DirectionalLightHelper, SpotLightHelper } from 'three';

export default function Lights() {
    const directionalLightRef = useRef();


  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight 
        ref={directionalLightRef}
        position={[5, 5, 5]}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={0.001}
        shadow-camera-near={0.5}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
 
      />
      
    </>
  )
}