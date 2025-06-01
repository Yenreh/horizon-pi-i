import { useSpring, a } from '@react-spring/three'
import React, { useState, useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { Cloud } from '@react-three/drei'
import Text from "../texts/Text"

export function Girl(props) {
  const { nodes, materials } = useGLTF('/models-3d/cataracts/girl.glb')

  const [showGlasses, setShowGlasses] = useState(false)
  const [glassesAnimationTime, setGlassesAnimationTime] = useState(0)

  const spring = useSpring({
    scale: showGlasses ? 1 : 0.001,
    opacity: showGlasses ? 1 : 0,
    config: { tension: 120, friction: 14 },
  })

  const glassesGroupRef = useRef()
  const groupRef = useRef()

  const [showClouds, setShowClouds] = useState(false)
  const targetCameraPos = useRef(null)
  const { camera } = useThree()
  const initialCameraPos = useRef(camera.position.clone())

  useEffect(() => {
    const handleKeyDown = (e) => {
      // if (e.key === 'g' && showGlasses) {
      //   setGlassesAnimationTime(2.5)
      // }

      if (e.key === 's' || e.key === 'S') {
        targetCameraPos.current = new THREE.Vector3(0, 0.2, -0.3)
        setShowClouds(true)
      }

      if (e.key === 'n' || e.key === 'N') {
        targetCameraPos.current = initialCameraPos.current.clone()
        setShowClouds(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showGlasses])

  useFrame((state, delta) => {
    if (groupRef.current) {
        const t = state.clock.elapsedTime
        groupRef.current.rotation.y = Math.sin(t * 1.5) * 0.2
    }

    if (glassesGroupRef.current && glassesAnimationTime > 0) {
      const t = state.clock.elapsedTime
      glassesGroupRef.current.rotation.y = Math.sin(t * 10) * 0.1
      setGlassesAnimationTime((prev) => Math.max(prev - delta, 0))
    } else if (glassesGroupRef.current) {
      glassesGroupRef.current.rotation.y *= 0.9
    }

    if (targetCameraPos.current) {
      camera.position.lerp(targetCameraPos.current, 0.09)
      camera.lookAt(0, 0, 0) // Ajusta a donde mirar
    }
  })

  return (
    <group ref={groupRef} {...props} dispose={null} onClick={() => { if (!showGlasses) {setShowGlasses(true)}}}>
      <mesh
        castShadow
        geometry={nodes.Hairband.geometry}
        material={materials.Hairband}
      />
      <mesh castShadow geometry={nodes.Body.geometry} material={materials.Body} />
      
      <a.group ref={glassesGroupRef} scale={spring.scale} visible={showGlasses}>
        <mesh
            castShadow
            geometry={nodes.Glasses.geometry}
            material={materials.Glasses}
        />

        <mesh
            castShadow
            geometry={nodes.GlassesFrame.geometry}
            material={materials.GlassesFrame}
        />
      </a.group>
      
      <mesh castShadow geometry={nodes.Bow.geometry} material={materials.Bow} />
      {/* <mesh receiveShadow geometry={nodes.Base.geometry} material={materials.Base} /> */}
      <mesh
        castShadow
        geometry={nodes.Eyebrows.geometry}
        material={materials.Eyelashes}
      />
      <mesh
        castShadow
        geometry={nodes.Eyelashes.geometry}
        material={materials.Eyelashes}
      />
      
      <mesh castShadow geometry={nodes.Hair.geometry} material={materials.Hair} />

      {showClouds && (
        <>
        <Cloud
          position={[0, -2, 4]}
          opacity={0.7}
          segments={50}
          bounds={[5, 5, 2]}
        />
        </>
        

      )}
    </group>

    
  )
}

useGLTF.preload('/models-3d/cataracts/girl.glb')

