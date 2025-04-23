import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import "./RdDefinition.css";
import { EyeCrossSection } from "./models-3d/EyeCrossSection";
import CameraSetup from "./camera/CameraSetup";
import RetinaLight from "./lights/RetinaLight";

const RdDefinition = () => {
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
            La retina es un tejido neural multilaminar que recubre la parte
            posterior del ojo y actúa como una extensión del sistema nervioso
            central, encargada de convertir la luz en señales eléctricas que
            viajan al cerebro a través del nervio óptico. Está compuesta por 11
            tipos celulares organizados en capas nucleares y sinápticas. Las
            cuales permiten el procesamiento paralelo de la información visual.
            Su estructura anatómica incluye desde la membrana limitante interna
            hasta el epitelio pigmentario, lo que le permite desempeñar
            funciones tanto sensoriales como neurológicas.
          </p>
          <br></br>
          <p>
            Ahora bien, la retina al igual que cualquier parte del cuerpo puede
            estar expuesta a distintas enfermedades, tanto crónicas como agudas,
            una de estas últimas es el desprendimiento de retina. El
            desprendimiento de retina es una condición oftalmológica grave en la
            que la retina se separa de su base epitelial, específicamente del
            epitelio pigmentario retiniano que le proporciona soporte metabólico
            y estructural. Esta separación interrumpe la conexión entre los
            fotorreceptores y el suministro vascular subyacente, comprometiendo
            la función sensorial y la integridad neurológica del tejido, lo que
            puede llevar a una pérdida visual súbita si no se trata
            oportunamente. Dada su complejidad anatómica y su integración
            funcional con el sistema nervioso central, cualquier alteración
            estructural en la retina, como la tracción o acumulación de líquido
            subretiniano, puede desencadenar este tipo de lesión que pone en
            riesgo la visión.
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
              maxDistance={10} />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RdDefinition;
