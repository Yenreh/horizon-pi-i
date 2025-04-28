import { lazy } from "react";
import Desease from "../Desease.jsx";
import "./Conjunctivitis.css";

const Definition = lazy(() => import("./tabs/Definition.jsx"));
const Symptoms = lazy(() => import("./tabs/Symptoms.jsx"));
const Treatment = lazy(() => import("./tabs/Treatment.jsx"));
const Prevention = lazy(() => import("./tabs/Prevention.jsx"));

export default function Conjunctivitis() {
  const desease = {
    name: "conjunctivitis",
    title: "CONJUNTIVITIS",
    banner_src: "/images/eye-conjunctivitis.webp",
  };

  const tabs = [
    { eventKey: "definition", title: "¿Qué es?" },
    { eventKey: "symptoms", title: "Síntomas" },
    { eventKey: "treatment", title: "Tratamiento" },
    { eventKey: "prevention", title: "Prevención y Autocuidado" },
  ];

  const Definitions = {
    definition: Definition,
    symptoms: Symptoms,
    treatment: Treatment,
    prevention: Prevention,
  };

  return <Desease desease={desease} tabs={tabs} Definitions={Definitions} />;
}
