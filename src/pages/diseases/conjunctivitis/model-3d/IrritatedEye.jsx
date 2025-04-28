import React, { useRef, useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RepeatWrapping } from "three";

export function IrritatedEye(props) {
  const { nodes } = useGLTF("/models-3d/conjunctivitis/irritated-eye.glb");
  const groupRef = useRef();
  
  const baseColorMap = useTexture(
    "/textures/conjunctivitis/irritatedEyeBaseColor.jpg"
  );
  const aoMap = useTexture(
    "/textures/conjunctivitis/irritatedEyeAmbientOclussion.jpg"
  );
  const normalMap = useTexture(
    "/textures/conjunctivitis/irritatedEyeNormal.jpg"
  );
  const roughnessMap = useTexture(
    "/textures/conjunctivitis/irritatedEyeRoughness.jpg"
  );

  useMemo(() => {
    [baseColorMap, aoMap, normalMap, roughnessMap].forEach((tex) => {
      tex.wrapS = RepeatWrapping;
      tex.wrapT = RepeatWrapping;
    });
  }, [baseColorMap, aoMap, normalMap, roughnessMap]);

  useFrame(({ clock }) => {
    groupRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.2;
  });

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      scale={[100, 100, 100]}
      rotation={[Math.PI, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.IrritatedEye.geometry}
        onUpdate={(self) => {
          if (self.geometry.attributes.uv && !self.geometry.attributes.uv2) {
            self.geometry.setAttribute("uv2", self.geometry.attributes.uv);
          }
        }}
      >
        <meshStandardMaterial
          map={baseColorMap}
          aoMap={aoMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models-3d/conjunctivitis/irritated-eye.glb");
