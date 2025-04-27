import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import "./RetinaDetachment.css";
import { EyeCrossSection } from "./models-3d/EyeCrossSection";
import CameraSetup from "./camera/CameraSetup";
import RetinaLight from "./lights/RetinaLight";

const RetinaDetachment = () => {
  return (
    <div className="container">
      <div className="inferior-curve">
        <img
          src="/images/retina-detachment-presentation.jpg"
          alt="Imagen decorativa para incio de la explicacion"
          className="main-image"
        />
        <div className="title-overlay-inferior-left">
          {" "}
          DESPRENDIMIENTO DE RETINA
        </div>
      </div>

      <div className="content">
        <div className="info-section">
          <div className="section-title">¿Que es?</div>
          <p>
            Imagina que tu ojo es como una cámara. La retina sería como el
            "film" o la pantalla sensible a la luz que tienes al fondo. Es una
            capa delgada de tejido que recibe la luz que entra en tu ojo y la
            convierte en señales eléctricas. Estas señales viajan por el nervio
            óptico hasta tu cerebro, ¡y así es como vemos el mundo! La retina es
            fundamental para una visión clara.
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
            Al separarse, la retina deja de recibir los nutrientes y el oxígeno
            que necesita para funcionar correctamente. Como resultado, la parte
            de la retina que se ha desprendido deja de trabajar, lo que provoca
            problemas serios en la visión. Es una emergencia médica y requiere
            atención rápida para intentarevitar la pérdida de visión permanente.
          </p>
        </div>

        <div className="diagram-section">
          <div className="canvas-wrapper">
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
              <OrbitControls
                maxDistance={10}
                minDistance={1.5}
                maxPolarAngle={1.75}
                minPolarAngle={1}
                maxAzimuthAngle={1.75}
                minAzimuthAngle={-0.75}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetinaDetachment;
