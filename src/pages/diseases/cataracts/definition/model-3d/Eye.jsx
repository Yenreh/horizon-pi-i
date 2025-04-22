import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Eye(props) {
  const { nodes, materials } = useGLTF('/models-3d/cataracts/eye-cataracts1.glb')
  const groupRef = useRef()

  useFrame(({ clock }) => {
    groupRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.2
  })

  return (
    <group ref={groupRef} {...props} dispose={null} scale={[5.5, 5.5, 5.5]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EyePupil.geometry}
        material={materials.EyePupil}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EyeContour.geometry}
        material={materials.EyeContour}
      />
      <mesh
        geometry={nodes.EyeShape.geometry}
        material={materials.EyeShape}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/cataracts/eye-cataracts1.glb')