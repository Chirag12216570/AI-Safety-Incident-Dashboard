import React, { useState } from 'react';
import './styles.css';
import IncidentReportForm from './IncidentReportForm';
import IncidentList from './IncidentList';
import IncidentDetailsModal from './IncidentDetailsModal';

function IncidentReportPage() {
  const [incidents, setIncidents] = useState([
    {
      id: 1,
      title: "Biased Recommendation Algorithm",
      description: "Algorithm consistently favored certain demographics...",
      severity: "Medium",
      reported_at: "2025-03-15T10:00:00Z",
    },
    {
      id: 2,
      title: "LLM Hallucination in Critical Info",
      description: "LLM provided incorrect safety procedure information...",
      severity: "High",
      reported_at: "2025-04-01T14:30:00Z",
    },
    {
      id: 3,
      title: "Minor Data Leak via Chatbot",
      description: "Chatbot inadvertently exposed non-sensitive user metadata...",
      severity: "Low",
      reported_at: "2025-03-20T09:15:00Z",
    },
  ]);

  const [filterSeverity, setFilterSeverity] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');
  const [selectedIncident, setSelectedIncident] = useState(null);

  const addIncident = (newIncident) => {
    setIncidents([
      ...incidents,
      { id: incidents.length + 1, ...newIncident },
    ]);
  };

  const handleViewDetails = (incident) => {
    setSelectedIncident(incident);
  };

  const closeModal = () => {
    setSelectedIncident(null);
  };

  const filteredIncidents = incidents
    .filter(incident => !filterSeverity || incident.severity === filterSeverity)
    .sort((a, b) => {
      if (sortOrder === 'newest') {
        return new Date(b.reported_at) - new Date(a.reported_at);
      } else {
        return new Date(a.reported_at) - new Date(b.reported_at);
      }
    });

  return (
    <>
      <div className="main-heading">
        <h1>Incident Reporting Dashboard</h1>
      </div>
      <IncidentReportForm onAddIncident={addIncident} />

      <div className="incident-panel">
        <div className="reported-incidents-header">
          <h2 className="section-heading">Reported Incidents</h2>
          <div className="filters">
            <select value={filterSeverity} onChange={(e) => setFilterSeverity(e.target.value)}>
              <option value="">All Severities</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
        <IncidentList incidents={filteredIncidents} onViewDetails={handleViewDetails} />
      </div>

      {selectedIncident && (
        <IncidentDetailsModal incident={selectedIncident} onClose={closeModal} />
      )}
    </>
  );
}

export default IncidentReportPage;
