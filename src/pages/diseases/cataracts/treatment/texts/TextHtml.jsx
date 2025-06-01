import { Center, Html, Text, Text3D } from "@react-three/drei";

const TextHtml = ({scaleX, posX, posY, posZ}) => {
  return (
    <Html
      //occlude
      center
      position={[posX, posY, posZ]}
      transform
      distanceFactor={5}
      wrapperClass="title"
      scale={[scaleX, 1, 1]}
    >
    <button
      style={{
        padding: '4px 8px',
        fontSize: '10px',
        background: 'transparent',
        border: '1px solid #ccc',
        borderRadius: '8px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
      onClick={() => alert('¡Info importante!')}
    >
      <i className="bi bi-info-circle-fill"></i>
      Info
    </button>
    </Html>
  );
};

export default TextHtml;