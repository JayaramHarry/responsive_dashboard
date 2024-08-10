import React from 'react';
import './RecentActivityFeed.css';

const RecentActivityFeed = ({ activities }) => {
  return (
    <div className="recent-activity-feed">
      <h3>Recent Activity</h3>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivityFeed;
