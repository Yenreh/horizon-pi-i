import { Text } from "@react-three/drei";


const TextVegetable = () => {
  return (
    <Text
      position={[0, 1.2, 0]}
      color={"blue"}
      anchorX={"center"}
      anchorY={"middle"}
      fontSize={0.2}
      font="fonts/alice.ttf"
    >
      Consume verduras y cuida tu salud ocular
    </Text>
   
  );
};

export default TextVegetable;