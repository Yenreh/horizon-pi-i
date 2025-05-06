import { Html } from "@react-three/drei";
import "./Text.css";

const Text = ({ textContent }) => {
  return (
    <Html
      center
      position={[0, 2.6, -3]}
      transform
      distanceFactor={5}
      wrapperClass="title"
    >
      <h4> {textContent} </h4>
    </Html>
  );
};

export default Text;