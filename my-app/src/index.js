import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Scriptorium from './Scriptorium/Scriptorium';

const root = createRoot(document.getElementById('root'));
root.render(
    <Scriptorium />
);