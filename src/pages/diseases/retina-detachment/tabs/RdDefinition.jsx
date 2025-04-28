import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { EyeCrossSection } from "../models-3d/EyeCrossSection";
import CameraSetup from "../camera/CameraSetup";
import RetinaLight from "../lights/RetinaLight";
import RdControls from "../controls/RdControls";
import { Col, Row } from "react-bootstrap";

export default function RdDefinition() {
  return (
    <section className="desease-content py-4 px-md-3">
      <Row className="align-items-center gy-4">
        <Col md={6}>
          <div className="desease-canvas-wrapper">
            <Canvas camera={{ position: [0, 1, 3] }} shadows>
              <CameraSetup />
              <Suspense fallback={null}>
                <EyeCrossSection position={[0, 0, 0]} />
                <RetinaLight />
                <mesh receiveShadow position={[0, -1, 0]}>
                  <planeGeometry args={[10, 10]} />
                  <shadowMaterial transparent opacity={0.3} />
                </mesh>
              </Suspense>
              <RdControls />
            </Canvas>
          </div>
        </Col>
        <Col md={6}>
          <div className="desease-text-definition p-4">
            <h2 className="mb-3" style={{ color: "var(--color-2)" }}>
              ¿Qué es?
            </h2>
            <p>
              Imagina que tu ojo es como una cámara. La retina sería como el
              "film" o la pantalla sensible a la luz que tienes al fondo. Es una
              capa delgada de tejido que recibe la luz que entra en tu ojo y la
              convierte en señales eléctricas. Estas señales viajan por el
              nervio óptico hasta tu cerebro, ¡y así es como vemos el mundo! La
              retina es fundamental para una visión clara.
            </p>
            <br></br>
            <p>
              Esta capa tan importante (la retina) está delicadamente apoyada en
              la parte trasera de tu ojo y como cualquier parte de tu cuerpo, es
              propensa a enfermedades. Una de ellas es el desprendimiento de
              retina
            </p>
            <br></br>
            <p>
              El desprendimiento de retina ocurre cuando esta capa sensible a la
              luz se separa o se "despega" de su posición normal. Piensa que
              pierde su "base" de apoyo.
            </p>
            <br></br>
            <p>
              Al separarse, la retina deja de recibir los nutrientes y el
              oxígeno que necesita para funcionar correctamente. Como resultado,
              la parte de la retina que se ha desprendido deja de trabajar, lo
              que provoca problemas serios en la visión. Es una emergencia
              médica y requiere atención rápida para intentarevitar la pérdida
              de visión permanente.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
}
