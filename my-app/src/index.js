import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Scriptorium from './Scriptorium/Scriptorium';
import GlobalProvider from './GlobalContext';
import { BrowserRouter} from "react-router-dom";

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <GlobalProvider>
    <Scriptorium />
    </GlobalProvider>
    </BrowserRouter>
);