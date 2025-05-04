import React, { Suspense } from "react";
import "../Cataracts.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Girl } from "./model-3d/Girl";
import Lights from "./Lights/Lights";
import Staging from "./staging/Staging";
import Text from "./texts/Text"


export default function Symptoms() {
  return (
      <div className="content">
        <div className="diagram-section">
          <div className="canvas-wrapper">
            <Canvas camera={{ position: [0, 0, 1.5]}} shadows>
              <Suspense fallback={null}>
                <Lights />
                <Staging />
                <Text textContent={"¡Haz clic y presiona g!"} />
                <Girl position={[0, -0.9, 0]}/>
                
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.9, 0]} receiveShadow>
                  <planeGeometry args={[50, 50]} />
                  <shadowMaterial transparent opacity={0.3} />
                </mesh>

              </Suspense>
              <OrbitControls enableZoom={false}/>
            </Canvas>
          </div>
        </div>        
        <div className="info-section">
          <h2 className="mb-3" style={{ color: 'var(--color-2)' }}>Sintomas</h2>
          <p>
          Entre los síntomas más comunes que pueden indicar la presencia de cataratas se encuentran: 
          </p>
          <ul>
            <li>Visión borrosa o nublada.</li>
            <li>Sensibilidad a la luz o deslumbramiento.</li>
            <li>Dificultad para ver de noche.</li>
            <li>Colores desvanecidos o amarillentos.</li>
            <li>Necesidad frecuente de cambiar la graduación de lentes.</li>
          </ul>
        </div>
      </div>
  );
}