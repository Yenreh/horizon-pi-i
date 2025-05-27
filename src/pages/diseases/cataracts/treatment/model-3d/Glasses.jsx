import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Glasses(props) {
  const { nodes, materials } = useGLTF('/models-3d/cataracts/glasses.glb')
  return (
    <group {...props} dispose={null} scale={[4, 4, 4]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Temples.geometry}
        material={materials.Bridge}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TempleTip.geometry}
        material={materials.Frame}
      />
      <mesh castShadow receiveShadow geometry={nodes.Lens.geometry} material={materials.Lens} />
      <mesh castShadow receiveShadow geometry={nodes.Frame.geometry} material={materials.Frame} />
      <mesh castShadow receiveShadow geometry={nodes.Bridge.geometry} material={materials.Bridge} />
    </group>
  )
}

useGLTF.preload('/models-3d/cataracts/glasses.glb')
