import {Environment, Sky, useTexture } from '@react-three/drei'
import { Clouds, Cloud } from '@react-three/drei'
import React, { useMemo } from 'react'

const Staging = () => {
    const PATH = useMemo(() => "/textures/cataracts/oak-wood-bare_", [] )
    const floorTexture = useTexture({
        map: `${PATH}albedo.png`,
        normalMap: `${PATH}normal-dx.png`,
        roughnessMap: `${PATH}roughness.png`,
        aoMap: `${PATH}ao.png`,
        metalnessMap: `${PATH}metallic.png`, 
        displacementMap: `${PATH}height.png`,

    })

    return ( 
    <>
        <Environment preset='park' background/>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.59, 0]} receiveShadow>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial {...floorTexture} />
            
        </mesh>
    </>
    
    
    )

}

export default Staging;