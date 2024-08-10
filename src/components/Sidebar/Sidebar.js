// // src/components/Sidebar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Sidebar.css'; // Add your styles here

// const Sidebar = () => {
//   return (
//     <aside className="sidebar">
//       <nav>
//         <ul>
//           <li><Link to="/">Overview</Link></li>
//           <li><Link to="/analytics">Analytics</Link></li>
//           <li><Link to="/settings">Settings</Link></li>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ menuVisible }) => {
  return (
    <aside className={`sidebar ${menuVisible ? 'visible' : 'hidden'}`}>
      <nav>
        <ul>
          <li><Link to="/">Overview</Link></li>
          <li><Link to="/analytics">Analytics</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
