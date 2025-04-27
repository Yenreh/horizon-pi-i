import React, { useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function EyeCrossSection(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/retina-detachment/optimized-cross-eye-section.glb')
  const { actions } = useAnimations(animations, group)


  // Referencia para almacenar el tiempo de inicio de la animación
  const animationStartTime = useRef(null);

  // Duración deseada de la animación inicial en segundos
  const initialAnimationDuration = 8;
  // Velocidad de rotación
  const rotationSpeed = 0.05;

  useFrame((state, delta) => {
    // Inicializa el tiempo de inicio en el primer frame donde useFrame se ejecuta
    if (group.current && animationStartTime.current === null) {
      animationStartTime.current = state.clock.getElapsedTime();
    }

    // Si el tiempo de inicio ya fue establecido y el objeto existe
    if (group.current && animationStartTime.current !== null) {
      const currentTime = state.clock.getElapsedTime();
      const elapsedTime = currentTime - animationStartTime.current;

      // Solo aplica la rotación si no se ha excedido la duración
      if (elapsedTime < initialAnimationDuration) {
        group.current.rotation.y += delta * rotationSpeed;
      } else {
      }
    }
  });


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="RetinaLattice" position={[-0.571, -0.01, 0.126]} scale={0.336} />
        <mesh
          name="Artery"
          castShadow
          geometry={nodes.Artery.geometry}
          material={materials.ArteryMaterial}
        />
        <mesh
          name="Choroid01"
          castShadow
          geometry={nodes.Choroid01.geometry}
          material={materials.ChoroidMaterial}
        />
        <mesh
          name="Choroid04"
          castShadow
          geometry={nodes.Choroid04.geometry}
          material={materials.ChoroidMaterial}
        />
        <mesh
          name="Cornea"
          castShadow
          geometry={nodes.Cornea.geometry}
          material={materials.CorneaMaterial}
        />
        <mesh
          name="ExtraocularMuscle01"
          castShadow
          geometry={nodes.ExtraocularMuscle01.geometry}
          material={materials.ExtraocularMuscleMaterial01}
        />
        <mesh
          name="ExtraocularMuscle02"
          castShadow
          geometry={nodes.ExtraocularMuscle02.geometry}
          material={materials.ExtraocularMuscleMaterial02}
        />
        <mesh
          name="ExtraocularMuscle03"
          castShadow
          geometry={nodes.ExtraocularMuscle03.geometry}
          material={materials.ExtraocularMuscleMaterial03}
        />
        <mesh
          name="Iris"
          castShadow
          geometry={nodes.Iris.geometry}
          material={materials.IrisMaterial}
        />
        <mesh
          name="Lens"
          castShadow
          geometry={nodes.Lens.geometry}
          material={materials.LensMaterial}
        />
        <mesh
          name="Muscle01"
          castShadow
          geometry={nodes.Muscle01.geometry}
          material={materials.MuscleMaterial}
        />
        <mesh
          name="Muscle201"
          castShadow
          geometry={nodes.Muscle201.geometry}
          material={materials.MuscleMaterial2}
        />
        <mesh
          name="Muscle202"
          castShadow
          geometry={nodes.Muscle202.geometry}
          material={materials.MuscleMaterial2}
        />
        <mesh
          name="OpticNerve"
          castShadow
          geometry={nodes.OpticNerve.geometry}
          material={materials.OpticNerveMaterial}
        />
        <mesh
          name="OpticNerveCovering"
          castShadow

          geometry={nodes.OpticNerveCovering.geometry}
          material={materials.ScleraMaterial}
        />
        <mesh
          name="Retina"
          castShadow
          geometry={nodes.Retina.geometry}
          material={materials.RetinaMaterial}
        />
        <mesh
          name="Sclera01"
          castShadow
          geometry={nodes.Sclera01.geometry}
          material={materials.ScleraMaterial}
        />
        <mesh
          name="Sclera04"
          castShadow
          geometry={nodes.Sclera04.geometry}
          material={materials.ScleraMaterial}
        />
        <mesh
          name="Sclera05"
          castShadow
          geometry={nodes.Sclera05.geometry}
          material={materials.ScleraMaterial}
        />
        <mesh
          name="Sclera06"
          castShadow
          geometry={nodes.Sclera06.geometry}
          material={materials.ScleraMaterial}
        />
        <mesh
          name="Sclera07"
          castShadow
          geometry={nodes.Sclera07.geometry}
          material={materials.ScleraMaterial}
        />
        <mesh
          name="Sclera08"
          castShadow
          geometry={nodes.Sclera08.geometry}
          material={materials.ScleraMaterial}
        />
        <mesh
          name="SuspensoryLigaments01"
          castShadow
          geometry={nodes.SuspensoryLigaments01.geometry}
          material={materials.SuspensoryLigamentsMaterial}
        />
        <mesh
          name="SuspensoryLigaments02"
          castShadow
          geometry={nodes.SuspensoryLigaments02.geometry}
          material={materials.SuspensoryLigamentsMaterial}
        />
        <mesh
          name="Vein"
          castShadow
          geometry={nodes.Vein.geometry}
          material={materials.VeinMaterial}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/retina-detachment/optimized-cross-eye-section.glb')