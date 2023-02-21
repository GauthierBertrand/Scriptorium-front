import { createRoot } from 'react-dom/client';
import './index.css';
import Scriptorium from './Scriptorium/Scriptorium';
import GlobalContext from './GlobalContext';

const root = createRoot(document.getElementById('root'));
root.render(
    <GlobalContext>
    <Scriptorium />
    </GlobalContext>
);