import { OrbitControls } from "@react-three/drei";

export default function RdControls() {
  return (
    <OrbitControls
      maxDistance={10}
      minDistance={1.5}
      maxPolarAngle={1.75}
      minPolarAngle={1}
      maxAzimuthAngle={1.75}
      minAzimuthAngle={-0.75}
    />
  );
}
