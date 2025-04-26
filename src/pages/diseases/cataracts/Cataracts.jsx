import React, { Suspense } from "react";
import "./Cataracts.css";
import  Definition  from "./definition/definition"

export default function Cataracts() {
  return (
    <div className="container">
      <div className="header">
        <img src="/images/eye-cataracts.webp" alt="eye" className="main-image" />
        <div className="title-overlay">CATARATA OCULAR</div>
      </div>
      <Definition />
    </div>
  );
}