import {Environment, Sky } from '@react-three/drei'
import Title from '../texts/Title'
import TextHtml from '../texts/TextHtml';

const NotCloudy = () => {
    return ( 
    <>
        <TextHtml scaleX={-1} posX={1} posY={1.8} posZ={1} />
        <Title title={"Con tratamiento"} posY={1} posZ={1.8} />
        <Environment preset='park' background/>
    </>
    )
}

export default NotCloudy;