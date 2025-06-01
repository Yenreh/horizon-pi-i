import { Text } from "@react-three/drei";


const Title = () => {
  return (
    <Text
      position={[0, -1.8, 0]}
      color={"blue"}
      anchorX={"center"}
      anchorY={"middle"}
      fontSize={0.4}
      font="fonts/alice.ttf"
    >
      Ojo afectado
    </Text>
   
  );
};

export default Title;