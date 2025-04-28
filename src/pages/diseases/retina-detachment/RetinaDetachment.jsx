import { lazy } from "react";
import "./RetinaDetachment.css";
import Desease from "../Desease";

const DefinitionTab = lazy(() => import('./tabs/RdDefinition'))
const SymptomsTab = lazy(() => import('./tabs/RdSymptoms'))
const TreatmentTab = lazy(() => import('./tabs/RdTreatment'))
const PreventionTab = lazy(() => import('./tabs/RdPrevention'))

export default function RetinaDetachment() {
  const desease = {
    name: 'retina-detachment',
    title: 'DESPRENDIMIENTO DE RETINA',
    banner_src: '/images/retina-detachment.webp',
  };

  const tabs = [
    { eventKey: 'definition', title: '¿Qué es?' },
    { eventKey: 'symptoms', title: 'Síntomas' },
    { eventKey: 'treatment', title: 'Tratamiento' },
    { eventKey: 'prevention', title: 'Prevención y Autocuidado' },
  ];

  const Definitions = {
    definition: DefinitionTab,
    symptoms: SymptomsTab,
    treatment: TreatmentTab,
    prevention: PreventionTab,
  };

  return <Desease desease={desease} tabs={tabs} Definitions={Definitions} />;
};