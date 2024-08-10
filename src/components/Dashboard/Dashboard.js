import React, { useState, useEffect } from 'react';
import axios from 'axios';


import LineChartWidget from '../widgets/LineChartWidget/LineChartWidget';
import BarChartWidget from '../widgets/BarChartWidget/BarChartWidget';
import PieChartWidget from '../widgets/PieChartWidget/PieChartWidget';
import RecentActivityFeed from '../widgets/RecentActivityFeed/RecentActivityFeed';
import './Dashboard.css'; // Add your styles here

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, usersResponse, commentsResponse] = await Promise.all([
          axios.get('https://jsonplaceholder.typicode.com/posts'),
          axios.get('https://jsonplaceholder.typicode.com/users'),
          axios.get('https://jsonplaceholder.typicode.com/comments')
        ]);

        setPosts(postsResponse.data);
        setUsers(usersResponse.data);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <div className="widget-grid">
          <PieChartWidget data={comments} />
          <BarChartWidget data={users} />
          <LineChartWidget data={posts} />
          <RecentActivityFeed activities={posts.slice(0, 5).map(post => post.title)} />
      </div>
    </div>
  );
};

export default Dashboard;
