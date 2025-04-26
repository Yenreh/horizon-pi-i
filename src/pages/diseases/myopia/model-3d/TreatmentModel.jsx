/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
    const { nodes, materials } = useGLTF('/models-3d/myopia/model-3.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.GooglesLents.geometry}
                material={materials.GooglesLentsMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.GooglesFrame.geometry}
                material={materials.GooglesFrameMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.GooglesFrameSupportEnd.geometry}
                material={materials.GooglesFrameSupportEndMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.GooglesFrameSupportMid.geometry}
                material={materials.GooglesFrameSupportMidMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.GooglesFrameJoins.geometry}
                material={materials.GooglesFrameJoinsMaterial}
            />
        </group>
    )
}

useGLTF.preload('/model-3.glb')