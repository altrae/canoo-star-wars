import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles.css';
import App from './app';

const root = createRoot(document.getElementById('canoo-star-wars'));

root.render(<App />);
