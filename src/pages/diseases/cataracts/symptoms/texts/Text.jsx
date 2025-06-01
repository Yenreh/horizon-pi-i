import { Html } from "@react-three/drei";
import "./Text.css";

const Text = ({ textContent, scaleX, posY, posZ }) => {
  return (
    <Html
      center
      position={[-0.5, posY, posZ]}
      transform
      distanceFactor={5}
      wrapperClass="title"
      scale={[scaleX, 1, 1]}
    >
      <h4> {textContent} </h4>
    </Html>
  );
};

export default Text;