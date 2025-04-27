import React, { useState } from 'react';

function IncidentReportForm({ onAddIncident }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    severity: '',
    reported_at: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddIncident(formData);
    setFormData({ title: '', description: '', severity: '', reported_at: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <div>
        <label>Reported At:</label>
        <input
          type="datetime-local"
          name="reported_at"
          value={formData.reported_at}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default IncidentReportForm;
