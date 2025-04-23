import { useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MathUtils } from 'three';

function CameraSetup() {
  const { camera } = useThree();

  useEffect(() => {
    // Establecer la posición y rotación inicial de la cámara
    camera.position.set(-1, 0, 1); // Ejemplo de posición inicial con más zoom
    camera.lookAt(0, 0, 0); // Asegurarse de que la cámara mire al centro
  }, [camera]);

  useFrame(() => {
    // Animación para inclinar la cámara hacia la izquierda (opcional, puedes ajustar los valores)
    camera.rotation.z = MathUtils.lerp(camera.rotation.z, 0.3, 0.05); // Ajusta el valor y la velocidad
  });

  return null; // Este componente no renderiza nada visual
}

  export default CameraSetup;