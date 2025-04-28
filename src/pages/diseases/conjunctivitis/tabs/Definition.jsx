import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Row, Col } from "react-bootstrap";
import { IrritatedEye } from '../model-3d/IrritatedEye.jsx';
import Lights  from "../Lights/Lights.jsx";

export default function Definition() {
  return (
    <section className="desease-content py-4 px-md-3">
      <Row className="align-items-center gy-4">
        <Col md={6}>
          <div className="desease-canvas-wrapper">
            <Canvas camera={{ position: [0, 0.5, 2.5] }} shadows>
              <Suspense fallback={null}>
                <Lights />
                <IrritatedEye position={[0, 0, 0]} />
                <mesh
                  receiveShadow
                  rotation={[-Math.PI / 2, 0, 0]}
                  position={[0, -0.6, 0]}
                >
                  <planeGeometry args={[10, 10]} />
                  <shadowMaterial transparent opacity={0.3} />
                </mesh>
              </Suspense>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </Col>
        <Col md={6}>
          <div className="desease-text-definition p-4">
            <h2 className="mb-3" style={{ color: "var(--color-2)" }}>
              ¿Qué es la conjuntivitis?
            </h2>
            <p>
              La conjuntivitis es una inflamación de la parte del ojo que
              recubre el globo ocular y el interior de los párpados. Hace que el
              ojo se vea rojo o amarillento, causando picazón, lagrimeo o
              secreción. Puede ser provocada por alergias o el contacto con
              sustancias irritantes.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
}
