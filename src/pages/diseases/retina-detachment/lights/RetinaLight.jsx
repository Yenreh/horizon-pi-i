import React, { useRef, useEffect } from "react";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";
import { useThree } from "@react-three/fiber";

export default function RetinaLight() {
  const directionalLightRef = useRef();
  const { scene } = useThree();

  // Muestra un helper visual para la luz
  useHelper(directionalLightRef, DirectionalLightHelper, 1, "yellow");

  useEffect(() => {
    if (directionalLightRef.current) {
      // Apuntar la luz hacia el origen (0,0,0) para iluminar hacia arriba
      directionalLightRef.current.target.position.set(0, 0, 0);
      scene.add(directionalLightRef.current.target);
    }
  }, [scene]);

  return (
    <>
      {/* Luz ambiental global muy suave */}
      <ambientLight intensity={0.3}/>

      {/* Luz tipo cielo y tierra, muy útil para interiores */}
      <hemisphereLight
        skyColor={'#ffffff'} // luz desde arriba
        groundColor={'#dddddd'} // luz desde abajo
        intensity={0.7}
      />

      {/* Luz puntual desde el centro del ojo hacia afuera */}
      <pointLight
        position={[0, 0, 0]} // centro del globo ocular
        intensity={2}
        distance={10}
        decay={2}
        color={'#ffffff'}

      />
    </>
  );
}
