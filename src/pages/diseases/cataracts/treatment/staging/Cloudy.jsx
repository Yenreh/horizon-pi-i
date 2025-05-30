import {Environment, Sky } from '@react-three/drei'
import { Clouds, Cloud } from '@react-three/drei'

const SceneCloudy = () => {
    return ( 
    <>
        <Environment preset='park' background/>
        <Cloud position={[0, 2, 0]}  opacity={0.5} />
    </>
    )
}

export default SceneCloudy;