import React, { Suspense } from "react";
import "./Cataracts.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Eye } from "./model-3d/Eye";
import Lights from "./Lights/Lights";
import  DefinitionOtro  from "./definitionOtro"

export default function definition() {
  return (
    <div className="container">
      <div className="header">
        <img src="/images/eye-cataracts.webp" alt="eye" className="main-image" />
        <div className="title-overlay">CATARATA OCULAR</div>
      </div>

      <DefinitionOtro />
    </div>
  );
}