import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import './styles/index.css';

import App from "./components/App/App";
import { store } from "./store/store";

const root = document.getElementById('root');
if (root) createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

);
