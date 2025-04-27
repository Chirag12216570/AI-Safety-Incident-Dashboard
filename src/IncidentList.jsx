import React from 'react';

function IncidentList({ incidents, onViewDetails }) {
  return (
    <div className="incident-list">
      <h2>Reported Incidents</h2>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>{incident.title}</strong> <br />
            Severity: {incident.severity} <br />
            Reported At: {new Date(incident.reported_at).toLocaleString()}
            <br />
            <button className="view-details" onClick={() => onViewDetails(incident)}>
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IncidentList;
