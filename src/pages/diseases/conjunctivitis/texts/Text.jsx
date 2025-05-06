import { Html } from "@react-three/drei";
import "./Text.css";

const Text = ({ textContent }) => {
  return (
    <Html
      center
      position={[0.1, 0.4, 0]}
      transform
      distanceFactor={1.5}
      wrapperClass="title"
    >
      <h3> {textContent} </h3>
    </Html>
  );
};

export default Text;