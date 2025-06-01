import React, { Suspense } from "react";
import "../Cataracts.css";
import "../../Desease.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Girl } from "./model-3d/Girl";
import Lights from "./Lights/Lights";
import Staging from "./staging/Staging";
import Text from "./texts/Text"
import { LuRotate3D } from "react-icons/lu";


export default function Symptoms() {
  return (
      <div className="content">
        <div className="diagram-section">
          <div className="desease-canvas-wrapper position-relative">
            <div className="position-absolute bottom-0 end-0 p-2 desease-canvas-icon"> 
              <LuRotate3D title="Modelo 3D" />
            </div>
            <Canvas camera={{ position: [0, 0, 1.5]}} shadows>
              <Suspense fallback={null}>
                <Lights />
                <Staging />
                <Text textContent={"¡Haz clic y presiona g!"} />
                <Girl position={[0, -1, 0]}/>

              </Suspense>
              <OrbitControls enableZoom={false}/>
            </Canvas>
          </div>
        </div>        
        <div className="info-section">
          <h2 className="mb-3" style={{ color: 'var(--color-2)' }}>Sintomas</h2>
          <p>
          Entre los síntomas más comunes que pueden indicar la presencia de cataratas se encuentran: 
          </p>
            <h4>Visión borrosa o nublada.</h4>
            <p>La persona puede sentir que está viendo a través de una ventana empañada o un velo. </p>
            <h4>Sensibilidad a la luz o deslumbramiento.</h4>
            <p>Las luces brillantes pueden causar incomodidad o parecer demasiado intensas.</p>
            <h4>Colores desvanecidos o amarillentos.</h4>
            <p>os colores pueden parecer menos intensos o apagados, y algunas personas notan que todo adquiere un tono amarillento o marrón.</p>
            <h4>Necesidad frecuente de cambiar la graduación de lentes.</h4>
            <p>Cambios constantes en la prescripción de gafas o lentes de contacto pueden ser una señal de que las cataratas están progresando.</p>
        </div>
      </div>
  );
}