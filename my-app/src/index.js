import { createRoot } from 'react-dom/client';
import './index.css';
import Scriptorium from './Scriptorium/Scriptorium';
import { BrowserRouter } from 'react-router-dom';
// import GlobalProvider from './GlobalContext';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    {/* <GlobalProvider> */}
    <Scriptorium />
    {/* </GlobalProvider> */}
    </BrowserRouter>
);