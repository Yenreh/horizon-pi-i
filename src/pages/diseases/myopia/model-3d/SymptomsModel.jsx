/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function SymptomsModel(props) {
    const { nodes, materials } = useGLTF('/models-3d/myopia/model-2.glb')
    const groupRef = useRef()

    useFrame(({ clock, camera }) => {
        const elapsedTime = clock.getElapsedTime()
        const zoomFactor = Math.sin(elapsedTime) * 0.5 + 0.5 

    
        camera.zoom = 1 + zoomFactor * 0.5 
        camera.updateProjectionMatrix()

        //Simulate a zoom effect by adjusting the camera's position
        const blurAmount = 1 - zoomFactor 
        materials.SnellenTableMaterial.roughness = blurAmount 
        materials.SnellenTableMaterial.metalness = blurAmount * 0.3 
        materials.SnellenTableMaterial.emissiveIntensity = blurAmount * 0.5
    
    })
    return (
        <group ref={groupRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.SnellenTable.geometry}
                material={materials.SnellenTableMaterial}
                castShadow
            />
        </group>
    )
}

export default SymptomsModel

useGLTF.preload('/model-2.glb')