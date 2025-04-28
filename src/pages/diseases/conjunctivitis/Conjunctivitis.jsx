import { lazy } from 'react';
import Desease from '../Desease.jsx';


const Definition = lazy(() => import('./tabs/Definition.jsx'));

export default function Conjunctivitis() {
  const desease = {
    name: 'conjunctivitis',
    title: 'CONJUNTIVITIS',
    banner_src: '/images/eye-conjunctivitis.webp',
  };

  const tabs = [
    { eventKey: 'definition', title: '¿Qué es?' },
  ];

  const Definitions = {
    definition: Definition,
  };

  return <Desease desease={desease} tabs={tabs} Definitions={Definitions} />;
}