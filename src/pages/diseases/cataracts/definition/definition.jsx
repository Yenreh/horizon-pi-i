import React, { Suspense } from "react";
import "./definition.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Eye } from "./model-3d/Eye";
import Lights from "./Lights/Lights";

export default function definition() {
  return (
      <div className="content">
        <div className="info-section">
          <div className="section-title">¿Qué son?</div>
          <p>
          Las cataratas oculares son una condición visual común que ocurre cuando el cristalino 
          del ojo se vuelve opaco o nublado. 
          Esta opacidad dificulta el paso de la luz y provoca una visión borrosa, descolorida o con destellos. 
          </p>
          <p>
          Las cataratas suelen desarrollarse de forma gradual con la edad, 
          aunque también pueden aparecer por causas genéticas, traumatismos, 
          enfermedades o el uso prolongado de ciertos medicamentos. 
          </p>
          <p>
          Sus principales efectos son:
          </p>
          <ul>
            <li>Disminución de la agudeza visual</li>
            <li>Aumento de la sensibilidad a la luz</li>
            <li>Fatiga visual y dolores de cabeza</li>
          </ul>
        </div>

        <div className="diagram-section">
          <div className="canvas-wrapper">
            <Canvas camera={{ position: [0, 1, 3]}} shadows>
              <Suspense fallback={null}>
                <Lights />
                <Eye position={[0, 0, 0]} />

                <mesh receiveShadow position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                  <planeGeometry args={[15, 15]} />
                  <shadowMaterial transparent opacity={0.3} />
                </mesh>

              </Suspense>
              <OrbitControls />
            </Canvas>
          </div>
        </div>
      </div>
  );
}