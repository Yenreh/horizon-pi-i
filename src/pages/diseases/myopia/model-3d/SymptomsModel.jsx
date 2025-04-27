/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
    const { nodes, materials } = useGLTF('/models-3d/myopia/model-2.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.SnellenTable.geometry}
                material={materials.SnellenTableMaterial}
            />
        </group>
    )
}

useGLTF.preload('/model-2.glb')