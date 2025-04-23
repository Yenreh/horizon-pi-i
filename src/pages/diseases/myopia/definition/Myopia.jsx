/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Eye } from "./model-3d/Eye";
import Lights from "./Lights/Lights";
import "./Myopia.css";

export default function Myopia() {
  return (
      <div className="desease-container">
        {/* Header con imagen y curva */}
        <section className="desease-header">
          <img src="/images/eye-myopia.webp" alt="MIOPÍA" className="desease-header-bg"/>
          <div className="desease-title-overlay">
            <span>MIOPÍA</span>
          </div>
        </section>

        {/* Navegación tipo pestaña */}
        <section className="desease-navigation-align-right">
          <div className="desease-nav-pill-left">¿Qué es?</div>
        </section>

        {/* Contenido principal: modelo 3D + texto */}
        <section className="desease-content">

            <div className="desease-canvas-wrapper">
              <Canvas camera={{ position: [0, 1, 3] }} shadows>
                <Suspense fallback={null}>
                  <Lights />
                  <Eye position={[0, 0, 0]} />
                  <mesh receiveShadow position={[0, 0, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <shadowMaterial transparent opacity={0.3} />
                  </mesh>
                </Suspense>
                <OrbitControls />
              </Canvas>
            </div>
          <div className="desease-text-definition">
            <p>
              La miopía es un error refractivo del ojo que provoca visión borrosa de
              los objetos lejanos, mientras que los cercanos se ven con claridad. Esto
              ocurre porque la luz se enfoca por delante de la retina, debido a un
              globo ocular alargado o a una córnea con curvatura excesiva.
            </p>
            <p>
              Suele detectarse en la infancia y estabilizarse en la adultez, aunque
              puede progresar. Se corrige con gafas cóncavas o lentes de contacto, y en
              algunos casos, mediante cirugía refractiva para reducir la dependencia de
              lentes.
            </p>
          </div>
        </section>
      </div>
  );
}