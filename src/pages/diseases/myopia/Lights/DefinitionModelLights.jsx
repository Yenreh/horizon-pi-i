/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'

export default function DefinitionModelLights() {
    const directionalLightRef = useRef();

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight 
        ref={directionalLightRef}
        position={[0, 5, 0]} 
        intensity={2}
        castShadow={true}
      />
    </>
  )
}