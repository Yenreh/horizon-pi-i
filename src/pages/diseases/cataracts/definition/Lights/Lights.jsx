import React, { useRef } from 'react'
import { SpotLight, SoftShadows, useHelper } from '@react-three/drei'
import { DirectionalLightHelper, SpotLightHelper } from 'three';

export default function Lights() {
    const directionalLightRef = useRef();
    useHelper(directionalLightRef, DirectionalLightHelper);

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight 
        ref={directionalLightRef}
        position={[0, 5, 5]} 
        intensity={2}
        castShadow={true}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        
        shadow-bias={-0.001}
 
      />
      
    </>
  )
}