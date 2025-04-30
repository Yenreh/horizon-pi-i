/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three';

export default function DefinitionModelLights() {
    const directionalLightRef = useRef();
    useHelper(directionalLightRef, DirectionalLightHelper);

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight 
        ref={directionalLightRef}
        position={[0, 5, 0]} 
        intensity={1}
        castShadow={true}
        shadow-mapSize-width={4096} 
        shadow-mapSize-height={4096}
        shadow-bias={0.001}
        shadow-camera-near={0.5}
        shadow-camera-far={100}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />
    </>
  )
}