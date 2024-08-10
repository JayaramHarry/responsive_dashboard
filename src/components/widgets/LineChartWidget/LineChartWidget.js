import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './LineChartWidget.css';

const LineChartWidget = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const lineData = data.slice(0, 10).map(post => ({
        name: `Post ${post.id}`,
        value: post.id % 100
      }));
      setChartData(lineData);
    }
  }, [data]);

  return (
    <div className="chart-container">
      <LineChart className='line-chart' width={500} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default LineChartWidget;
