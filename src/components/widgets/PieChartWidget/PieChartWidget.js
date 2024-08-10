import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import './PieChartWidget.css';

const PieChartWidget = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const pieData = data.slice(0, 10).map(comment => ({
        name: comment.name,
        value: comment.id % 10 + 1
      }));
      setChartData(pieData);
    }
  }, [data]);

  const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF5733', '#C70039', '#900C3F', '#581845'];

  return (
    <div className="chart-widget">
      <div className="pie-chart-stats">
        <h2>Statistics</h2>
        {chartData.map((entry, index) => (
          <p key={index} style={{ color: colors[index % colors.length] }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
      <div className="pie-chart-container">
        <PieChart className='pie-chart' width={600} height={440}>
          <Pie 
            data={chartData} 
            dataKey="value" 
            nameKey="name" 
            cx="50%" 
            cy="50%" 
            outerRadius={120} 
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          {/* Remove the Legend if it's not needed */}
        </PieChart>
      </div>
    </div>
  );
};

export default PieChartWidget;
