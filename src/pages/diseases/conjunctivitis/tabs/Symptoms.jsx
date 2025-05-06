import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Row, Col } from "react-bootstrap";
import Lights from "../Lights/Lights.jsx";
import { FaceEye } from "../model-3d/FaceEye.jsx";
import SymptomsControls from "../controls/SymptomsControls.jsx";
import Text from "../texts/Text"
import Staging from "../staging/Staging.jsx";

export default function Symptoms() {
  return (
    <section className="desease-content py-4 px-md-3">
      <Row className="align-items-center gy-4">
        <Col md={6}>
          <div className="desease-canvas-wrapper">
            <Canvas camera={{ position: [0, 0.5, 2.5], fov: 20 }} shadows>
              <Suspense fallback={null}>
                <Lights />
                <Staging />
                <Text textContent={"3D"} />
                <FaceEye position={[0, 0, 0]} />
                <mesh
                  receiveShadow
                  rotation={[-Math.PI / 2, 0, 0]}
                  position={[0, -1, 0]}
                >
                  <planeGeometry args={[10, 10]} />
                  <shadowMaterial opacity={0.7} />
                </mesh>
              </Suspense>
              <SymptomsControls />
            </Canvas>
          </div>
        </Col>
        <Col md={6}>
          <div className="desease-text-definition p-4">
            <h2 className="mb-3" style={{ color: "var(--color-2)" }}>
              Sintomas
            </h2>
            <p>
              Estos son los síntomas más comunes cuando alguien tiene
              conjuntivitis
            </p>
            <ul>
              <li>Ojo rojo</li>
              <li>Picazón en el ojo</li>
              <li>Lagrimeo constante</li>
              <li>Pus o lagañas</li>
              <li>Sensación de tener algo en el ojo</li>
            </ul>
          </div>
        </Col>
      </Row>
    </section>
  );
}
