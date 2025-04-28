import "./Cataracts.css";

import { lazy } from 'react';
import Desease from '../Desease.jsx';

const DefinitionTab = lazy(() => import('./definition/definition.jsx'));
const SymptomsTab = lazy(() => import('./symptoms/Symptoms.jsx'));
const TreatmentTab = lazy(() => import('./treatment/Treatment.jsx'));
const PreventionTab = lazy(() => import('./prevention/Prevention.jsx'));

export default function Cataracts() {
  const desease = {
      name: 'cataracts',
      title: 'CATARATA OCULAR',
      banner_src: '/images/eye-cataracts.webp',
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
}