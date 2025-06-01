import {Environment, Sky } from '@react-three/drei'
import { Clouds, Cloud } from '@react-three/drei'
import Title from '../texts/Title'
import TextHtml from '../texts/TextHtml';

const SceneCloudy = () => {
  return (
    <group>
      <TextHtml scaleX={-1} posX={1} posY={1.3} posZ={0.9} />
      <Title title={"Sin tratamiento"} posY={0.5} posZ={1.5} />
      <Environment preset="park" background />
      <Cloud position={[0, 2, 0]} opacity={0.5} />
    </group>
  )
}

export default SceneCloudy;