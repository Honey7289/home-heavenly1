import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseAuthProvider } from './context/FirebaseAuthContext';


// ✅ React Router v7 future flags
const routerFutureFlags = {
  v7_startTransition: true,
  v7_relativeSplatPath: true,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter future={routerFutureFlags}>
      <AuthProvider>
      <FirebaseAuthProvider>
        <App />
        </FirebaseAuthProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Optional: measure performance
reportWebVitals();
