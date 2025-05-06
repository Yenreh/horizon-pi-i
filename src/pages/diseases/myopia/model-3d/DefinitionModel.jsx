/* eslint-disable react/no-unknown-property */
import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function DefinitionModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/myopia/model-1.glb')
  const groupRef = useRef()

  // Variable para controlar la rotación manual
  let rotationSpeed = 0

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        rotationSpeed = -0.02 // Rotar hacia la izquierda
      } else if (event.key === 'ArrowRight') {
        rotationSpeed = 0.02 // Rotar hacia la derecha
      }
    }

    const handleKeyUp = (event) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        rotationSpeed = 0 // Detener la rotación al soltar la tecla
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  useFrame(({ clock }) => {
    // Rotación automática
    groupRef.current.rotation.y += Math.sin(clock.getElapsedTime()) * 0.001
    // Rotación manual
    groupRef.current.rotation.y += rotationSpeed
  })

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.EyeArtery.geometry}
        material={materials.EyeArteryMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeCornea.geometry}
        material={materials.EyeCorneaMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeSupportTop.geometry}
        material={materials.EyeSupportTopMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeSupportBot.geometry}
        material={materials.EyeSupportBotMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeSupportLeft.geometry}
        material={materials.EyeSupportLeftMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeJoinOut.geometry}
        material={materials.EyeScleraMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeJoinInside.geometry}
        material={materials.EyeJoinInsideMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeIris.geometry}
        material={materials.EyeIrisMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeLent.geometry}
        material={materials.EyeLentMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeRetina1.geometry}
        material={materials.EyeRetinaMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeRetina2.geometry}
        material={materials.EyeRetinaMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeRetina3.geometry}
        material={materials.EyeRetinaMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeRetina4.geometry}
        material={materials.EyeRetinaMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeRetina5.geometry}
        material={materials.EyeRetinaMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeRetina6.geometry}
        material={materials.EyeRetinaMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeRetina7.geometry}
        material={materials.EyeRetinaMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeRetina8.geometry}
        material={materials.EyeRetinaMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeSclera1.geometry}
        material={materials.EyeScleraMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeSclera2.geometry}
        material={materials.EyeScleraMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeSclera3.geometry}
        material={materials.EyeScleraMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeSclera4.geometry}
        material={materials.EyeScleraMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeSclera5.geometry}
        material={materials.EyeScleraMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeSclera6.geometry}
        material={materials.EyeScleraMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeSuspensoryLigament1.geometry}
        material={materials.EyeSuspensoryLigamentMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeSuspensoryLigamen2.geometry}
        material={materials.EyeSuspensoryLigamentMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.EyeArtery2.geometry}
        material={materials.EyeArtery2Material}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/myopia/eye-myopia.glb')