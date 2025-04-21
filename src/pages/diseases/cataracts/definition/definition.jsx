import React, { Suspense } from "react";
import "./definition.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Eye } from "./model-3d/Eye";
import Lights from "./Lights/Lights";

export default function definition() {
  return (
    <div className="container">
      <div className="header">
        <img src="/images/eye-cataracts.jpg" alt="eye" className="main-image" />
        <div className="title-overlay">CATARATA OCULAR</div>
      </div>

      <div className="content">
        <div className="info-section">
          <div className="section-title">¿Qué son?</div>
          <p>
          Las cataratas oculares son una condición visual común que ocurre cuando el cristalino 
          del ojo (una estructura transparente que ayuda a enfocar la luz) se vuelve opaco o nublado. 
          Esta opacidad dificulta el paso de la luz y provoca una visión borrosa, descolorida o con destellos. 
          </p>
          <p>
          Las cataratas suelen desarrollarse de forma gradual con la edad, 
          aunque también pueden aparecer por causas genéticas, traumatismos, 
          enfermedades o el uso prolongado de ciertos medicamentos. 
          </p>
          <p>
          Las cataratas afectan la visión y, por ende, la calidad de vida de la persona que padece esta condición. 
          Sus principales efectos son:
          </p>
          <ul>
            <li>Disminución de la agudeza visual</li>
            <li>Aumento de la sensibilidad a la luz</li>
            <li>Fatiga visual y dolores de cabeza</li>
          </ul>
          <p>
          Estos efectos impactan significativamente la vida cotidiana, ya que dificultan la realización de diversas 
          actividades y aumentan el riesgo de caídas o errores debido a la pérdida de agudeza visual y 
          de la percepción de los colores.
          </p>
        </div>

        <div className="diagram-section">
          <div className="canvas-wrapper">
            <Canvas camera={{ position: [0, 1, 3]}} shadows>
              <Suspense fallback={null}>
                <Lights />
                <Eye position={[0, 0, 0]} />

                <mesh receiveShadow position={[0, -1, 0]}>
                  <planeGeometry args={[10, 10]} />
                  <shadowMaterial transparent opacity={0.3} />
                </mesh>


              </Suspense>
              <OrbitControls />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}