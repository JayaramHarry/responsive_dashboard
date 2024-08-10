import React, { useState } from 'react';
import './Notification.css'; // Add your CSS for styling

const Notification = () => {
  const [visible, setVisible] = useState(false);

  const showNotification = () => setVisible(true);
  const hideNotification = () => setVisible(false);

  return (
    <div className="notification">
      <button onClick={showNotification}>Show Notification</button>
      {visible && (
        <div className="notification-message">
          <p>This is a notification!</p>
          <button onClick={hideNotification}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Notification;
