import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import './styles/index.css';

import App from "./components/App/App";

const root = document.getElementById('root');
if (root) createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
