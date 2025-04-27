import React from 'react';
import './styles.css';

function IncidentList({ incidents, onViewDetails }) {
  return (
    <div className="incident-list">
      <div className="incident-cards-container">
        {incidents.map((incident) => (
          <div className={`incident-card ${incident.severity.toLowerCase()}`} key={incident.id}>
            <h3 className="incident-title">{incident.title}</h3>
            <p><strong>Severity:</strong> {incident.severity}</p>
            <p><strong>Reported At:</strong> {new Date(incident.reported_at).toLocaleString()}</p>
            <button className="view-details" onClick={() => onViewDetails(incident)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IncidentList;
