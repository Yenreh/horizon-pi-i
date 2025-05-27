import React, { Suspense } from "react";
import "../Cataracts.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Vegetable } from "./model-3d/Vegetable";


export default function Prevention() {
  return (
      <div className="content">
        <div className="diagram-section">
          <div className="canvas-wrapper">
            <Canvas camera={{ position: [0, 1, 2.5]}} shadows>
              <Suspense fallback={null}>
                <ambientLight intensity={2} />
                <Vegetable position={[0, 0, 0]}/>

              </Suspense>
              <OrbitControls enableZoom={false}/>
            </Canvas>
          </div>
        </div>        
        <div className="info-section">
          <h2 className="mb-3" style={{ color: 'var(--color-2)' }}>Prevención y Cuidados</h2>
          <section>
            <p>
              Aunque no siempre es posible prevenir completamente la aparición de cataratas, ciertos hábitos saludables pueden ayudar a retrasar su desarrollo y proteger la salud ocular a largo plazo.
            </p>

            <h4>Protección contra la radiación UV</h4>
            <p>
              Usar gafas de sol con protección 100% contra rayos UVA y UVB ayuda a reducir el daño acumulativo que la luz ultravioleta puede causar en el cristalino.
            </p>

            <h4>Alimentación rica en antioxidantes</h4>
            <p>
              Consumir frutas y verduras con alto contenido en vitaminas C y E, luteína y zeaxantina contribuye a mantener una buena salud ocular. Estos nutrientes ayudan a combatir el estrés oxidativo que puede afectar al cristalino.
            </p>


            <h4>Revisiones oftalmológicas periódicas</h4>
            <p>
              Realizar exámenes de la vista con regularidad permite detectar cualquier signo temprano de catarata y tomar decisiones oportunas sobre su manejo.
            </p>
          </section>



        </div>
      </div>
  );
}