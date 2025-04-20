import React, { Suspense } from "react";
import "./definition.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Eye } from "./model-3d/Eye";

export default function definition() {
  return (
    <div className="container">
      <div className="header">
        <img src="/images/eye-color.jpg" alt="eye" className="main-image" />
        <div className="title-overlay">CATARATA OCULAR</div>
      </div>

      <div className="content">
        <div className="info-section">
          <div className="section-title">¿Qué es?</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <div className="diagram-section">
          <div className="canvas-wrapper">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[0, 0, 5]} />
              <Suspense fallback={null}>
                <Eye />
              </Suspense>
              <OrbitControls />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}