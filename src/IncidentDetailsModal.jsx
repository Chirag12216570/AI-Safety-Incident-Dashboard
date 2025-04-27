import React from 'react';
import './styles.css';

function IncidentDetailsModal({ incident, onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>{incident.title}</h2>
        <p><strong>Severity:</strong> {incident.severity}</p>
        <p><strong>Reported At:</strong> {new Date(incident.reported_at).toLocaleString()}</p>
        <p><strong>Description:</strong></p>
        <p>{incident.description}</p>
        <button className="close-modal" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default IncidentDetailsModal;
