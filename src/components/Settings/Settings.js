import React, { useState } from 'react';
import "./Settings.css";

const Settings = () => {
  const [settings, setSettings] = useState({});

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Preference:
        </label>
        <input type="text" name="preference" value={settings.preference || ''} onChange={handleChange} />
        <button className='setting-button' type="submit">Save</button>
      </form>
    </div>
  );
};

export default Settings;
