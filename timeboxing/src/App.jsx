import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Timeboxing from './components/Timeboxing';

function App() {
  // Estado para guardar la info del usuario (nombre y correo)
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Si no hay usuario, muestra Login. Si ya hay, mándalo al dashboard */}
        <Route 
          path="/" 
          element={!user ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />} 
        />

        {/* Ruta del Dashboard: Pasamos los datos del usuario */}
        <Route 
          path="/dashboard" 
          element={user ? <Dashboard user={user} onLogout={handleLogout} /> : <Navigate to="/" />} 
        />

        {/* Ruta del Timeboxing */}
        <Route 
          path="/timeboxing" 
          element={user ? <Timeboxing /> : <Navigate to="/" />} 
        />

        {/* Manejo de errores 404 */}
        <Route path="*" element={<div className="p-10 text-center"><h1>404 - Not Found</h1></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;