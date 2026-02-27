import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Importamos el CSS que acabamos de crear

const Dashboard = ({ user, onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="apple-nav">
        <div className="window-controls">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
          <span style={{ marginLeft: '12px', fontWeight: '600' }}>
            Solé Hadad App
          </span>
        </div>
        <button onClick={onLogout} className="logout-btn">
          Cerrar Sesión
        </button>
      </nav>

      {/* Main */}
      <main className="dashboard-main">
        <header className="welcome-header">
          <h1>Hola, {user.name}</h1>
          <p>{user.email}</p>
        </header>

        <div className="cards-grid">
          {/* Tarjeta de Timeboxing */}
          <button className="apple-card" onClick={() => navigate('/timeboxing')}>
            <div className="icon-box">📅</div>
            <h3>Timeboxing</h3>
            <p>Planifica tu día con la técnica de bloques de tiempo de forma visual.</p>
          </button>

          {/* Tarjeta Vacía / Próximamente */}
          <div className="apple-card" style={{ background: 'rgba(0,0,0,0.02)', border: '2px dashed #d2d2d7', boxShadow: 'none', cursor: 'default' }}>
            <h3 style={{ color: '#d2d2d7', marginTop: '40px' }}>Próximamente...</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;