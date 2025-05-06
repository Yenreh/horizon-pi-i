import { OrbitControls } from "@react-three/drei";

export default function SymptomsControls() {
  return (
    <OrbitControls
      target={[0.1, 0, 0]}
      enableZoom={true}
      minDistance={1}
      maxDistance={2.8}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 2}
      minAzimuthAngle={-Math.PI / 5} 
      maxAzimuthAngle={Math.PI / 5} 
    />
  );
}
