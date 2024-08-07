import ReactDOM from 'react-dom/client';

import { App } from './App';

import './index.css';
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <>
    <Analytics />
    <App />
  </>,
  // </React.StrictMode>,
);
