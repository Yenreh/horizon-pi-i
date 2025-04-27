/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
    const { nodes, materials } = useGLTF('/models-3d/myopia/model-4.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.LentsFrame.geometry}
                material={materials.LentsFrameMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Accesory.geometry}
                material={materials.AccesoryMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Labels.geometry}
                material={materials.LabelsMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Body.geometry}
                material={materials.BodyMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Lents.geometry}
                material={materials.LentsMaterial}
            />
        </group>
    )
}

useGLTF.preload('/model-4.glb')

