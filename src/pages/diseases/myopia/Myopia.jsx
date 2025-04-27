import { lazy } from 'react';
import Desease from '../Desease.jsx';

const DefinitionTab = lazy(() => import('./tabs/DefinitionTab.jsx'));
const SymptomsTab = lazy(() => import('./tabs/SymptomsTab.jsx'));
const TreatmentTab = lazy(() => import('./tabs/TreatmentTab.jsx'));
const PreventionTab = lazy(() => import('./tabs/PreventionTab.jsx'));

export default function Myopia() {
  const desease = {
    name: 'myopia',
    title: 'MIOPÍA',
    banner_src: '/images/eye-myopia.webp',
  };

  const tabs = [
    { eventKey: 'definition', title: '¿Qué es?' },
    { eventKey: 'symptoms', title: 'Síntomas' },
    { eventKey: 'treatment', title: 'Tratamiento' },
    { eventKey: 'prevention', title: 'Prevención y Autocuidado', tabClassName: 'rounded-pill' },
  ];

  const Definitions = {
    definition: DefinitionTab,
    symptoms: SymptomsTab,
    treatment: TreatmentTab,
    prevention: PreventionTab,
  };

  return <Desease desease={desease} tabs={tabs} Definitions={Definitions} />;
}
