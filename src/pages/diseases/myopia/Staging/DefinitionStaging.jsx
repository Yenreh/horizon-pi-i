import { Sky } from "@react-three/drei";
import { Color } from "three";

const DefinitionStaging = () => {
  return (
    <>
      <Sky
      sunPosition={[0.5, 0, -2]}
      inclination={0.5} 
      azimuth={180} 
      mieCoefficient={0.05} 
      mieDirectionalG={0.05} 
      rayleigh={3} 
      turbidity={10} 
    />
    </>
  );
};

export default DefinitionStaging;
