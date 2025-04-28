import React, { useRef, useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { ClampToEdgeWrapping } from "three";
import * as THREE from "three";

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
      tex.wrapS = ClampToEdgeWrapping;
      tex.wrapT = ClampToEdgeWrapping;
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
      scale={[75, 75, 75]}
      rotation={[0, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.IrritatedEye.geometry}
        ref={(mesh) => {
          if (
            mesh &&
            mesh.geometry &&
            mesh.geometry.attributes.uv &&
            !mesh.geometry.attributes.uv2
          ) {
            const uv = mesh.geometry.attributes.uv;
            mesh.geometry.setAttribute(
              "uv2",
              new THREE.BufferAttribute(uv.array, 2)
            );
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
