import React from "react";
import { useNavigate } from "react-router-dom";
import "./TimeBoxing.css";

const TimeBoxing = () => {
  const navigate = useNavigate();
  const hours = [
    "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM",
    "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"
  ];

  return (
    <div className="timebox-container">
      {/* Back Button */}
      <button onClick={() => navigate("/dashboard")} className="back-link">
        <span>‹</span> Volver al Dashboard
      </button>

      <div className="timebox-grid">
        
        {/* PANEL IZQUIERDO: Información y Prioridades */}
        <div className="space-y-6">
          
          <div className="apple-panel">
            <h1 className="panel-title">Daily Timeboxing</h1>
            <label className="sub-title" style={{ color: "#86868b", fontSize: "14px" }}>Fecha</label>
            <input type="date" className="apple-input" />
          </div>

          <div className="apple-panel">
            <h3 className="sub-title">Top 3 Prioridades</h3>
            {[1, 2, 3].map((i) => (
              <input
                key={i}
                type="text"
                placeholder={`Prioridad 0${i}`}
                className="apple-input"
              />
            ))}
          </div>

          <div className="apple-panel">
            <h3 className="sub-title">Brain Dump</h3>
            <textarea
              placeholder="Descarga todas tus ideas aquí..."
              className="apple-input apple-textarea"
            />
          </div>
        </div>

        {/* PANEL DERECHO: Horario (Timeline) */}
        <div className="apple-panel" style={{ padding: "0" }}>
          <div style={{ padding: "1.5rem", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
            <h3 className="sub-title" style={{ margin: 0 }}>Horario del Día</h3>
          </div>
          
          <div className="schedule-scroll">
            {hours.map((hour, idx) => (
              <div key={idx} className="time-row">
                <div className="time-label">{hour}</div>
                <input
                  type="text"
                  placeholder="Añadir evento..."
                  className="time-content"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TimeBoxing;