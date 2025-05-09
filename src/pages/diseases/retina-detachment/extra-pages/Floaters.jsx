/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import GoldenGateHills from "../staging/GoldenGateHills"; // HDRI environment
import FloatingDots from "../effects/FloatingDots";
import Ground from "../staging/Ground"; // Importa el nuevo componente de suelo
import { Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import "./Floaters.css";
import { useEffect, Suspense } from "react"; // Añadido Suspense
import { PlayerControls } from "../controls/PlayerControls";

export default function Floaters() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('canvas-fullscreen-active');
    return () => {
      document.body.classList.remove('canvas-fullscreen-active');
    };
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="photopsia-container">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 1.7, 10], fov: 75 }} // y=1.7 es una buena altura de ojos
        shadows // Habilita las sombras para toda la escena
      >
        {/* Luces: El HDRI también ilumina, pero luces explícitas dan más control */}
        <ambientLight intensity={0.3} /> {/* Reduce un poco si el HDRI es muy brillante */}
        <directionalLight
          position={[10, 15, 10]} // Ajusta la posición para la dirección de la sombra
          intensity={1}
          castShadow // Esta luz debe proyectar sombras
          shadow-mapSize-width={2048} // Aumenta la calidad de la sombra
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
        />
        
        <Suspense fallback={null}> {/* Suspense para el HDRI y texturas del suelo */}
          <GoldenGateHills /> {/* Asegúrate que este usa <Environment background ... /> */}
          <Ground /> {/* Añadimos nuestro suelo aquí */}
        </Suspense>
        
        <FloatingDots />
        
        <PlayerControls 
            // Considera pasar props a PlayerControls si necesita saber sobre el suelo
            // o si necesitas restringir su altura mínima (para no atravesar el suelo)
            // minHeight={0.1} // Ejemplo conceptual, la implementación depende de PlayerControls
        />

        {/* Botón de Regreso */}
        <Html
          as="div"
          wrapperClass="html-button-container"
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            zIndex: 100, 
            pointerEvents: 'none',
          }}
        >
          <button
            onClick={handleGoBack}
            className="back-button-drei"
            style={{ pointerEvents: 'auto' }}
          >
            ← Volver
          </button>
        </Html>

        {/* Leyenda */}
        <Html
          as="div"
          wrapperClass="html-legend-container"
           style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 100,
            pointerEvents: 'none',
            textAlign: 'center',
          }}
        >
          <div
             className="info-legend-drei"
             style={{ pointerEvents: 'auto' }}
          >
            Explora la simulación interactiva. Puedes volver a la sección de Síntomas.
          </div>
        </Html>

      </Canvas>
    </div>
  );
}