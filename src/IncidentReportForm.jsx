import React, { useState } from 'react';
import './styles.css';

function IncidentReportForm({ onAddIncident }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    severity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDateTime = new Date().toISOString();
    onAddIncident({ ...formData, reported_at: currentDateTime });
    setFormData({ title: '', description: '', severity: '' });
  };

  return (
    <div className="form-wrapper">
    <form onSubmit={handleSubmit} className="incident-form">
      <h2 className="section-heading">Report New Incident</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Severity:</label>
        <select
          name="severity"
          value={formData.severity}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="btn-wrapper">
      <button type="submit" className="submit-button">Submit</button>
      </div>
    </form>
    </div>
  );
}

export default IncidentReportForm;
