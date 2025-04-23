/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three';

export default function Lights() {
    const directionalLightRef = useRef();
    useHelper(directionalLightRef, DirectionalLightHelper);

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight 
        ref={directionalLightRef}
        position={[0, 0, 5]}
        intensity={1}
        castShadow={false}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.001}
      />
    </>
  )
}