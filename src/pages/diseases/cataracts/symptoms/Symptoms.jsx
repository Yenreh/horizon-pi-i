import React, { Suspense } from "react";
import "../Cataracts.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Girl } from "./model-3d/Girl";
import Lights from "./Lights/Lights";

export default function Symptoms() {
  return (
      <div className="content">
        <div className="diagram-section">
          <div className="canvas-wrapper">
            <Canvas camera={{ position: [0, 0, 1.5]}} shadows>
              <Suspense fallback={null}>
                <Lights />
                <Girl position={[0, -0.8, 0]}/>
                
              </Suspense>
              <OrbitControls enableZoom={false}/>
            </Canvas>
          </div>
        </div>        
        <div className="info-section">
          <h2 className="mb-3" style={{ color: 'var(--color-2)' }}>Sintomas</h2>
          <p>
          Las cataratas oculares son una condición visual común que ocurre cuando el cristalino 
          del ojo se vuelve opaco o nublado. 
          Dificultando el paso de la luz y provocando una visión borrosa, descolorida o con destellos. 
          </p>
          <p>
          Las cataratas suelen desarrollarse de forma gradual con la edad, por causas genéticas, traumatismos, 
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
      </div>
  );
}