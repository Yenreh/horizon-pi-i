import { Html } from '@react-three/drei';
import './TitlePrevention.css'

const TextHtml = () => {

  return (
    <Html
      center
      position={[-1.4, 1.7, 0]}
      transform
      distanceFactor={5}
      wrapperClass="title"
      scale={[1, 1, 1]}
    >
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <h1
          className="info-button-prevention"
        >
          <i class="bi bi-volume-up-fill"></i>
          Presiona e para escuchar
        </h1>
      </div>
    </Html>
  );
};

export default TextHtml;