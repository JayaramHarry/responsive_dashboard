

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import './BarChartWidget.css';

const BarChartWidget = () => {
  const [chartData, setChartData] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    average: 0,
    max: 0,
    min: 0,
    range: 0,
    median: 0,
    stdDev: 0,
    count: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example endpoint for weather data (replace with actual free API endpoint)
        const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
        const data = response.data.hourly.temperature_2m.slice(0, 10); // Use the first 10 data points

        // Convert data to format for BarChart
        const barData = data.map((temp, index) => ({
          name: `Hour ${index + 1}`,
          value: temp
        }));
        setChartData(barData);

        // Calculate statistics
        const values = barData.map(item => item.value);
        const total = values.reduce((sum, value) => sum + value, 0);
        const count = values.length;
        const average = total / count;
        const max = Math.max(...values);
        const min = Math.min(...values);
        const range = max - min;
        const sortedValues = [...values].sort((a, b) => a - b);
        const median = count % 2 === 0
          ? (sortedValues[count / 2 - 1] + sortedValues[count / 2]) / 2
          : sortedValues[Math.floor(count / 2)];
        const variance = values.reduce((sum, value) => sum + Math.pow(value - average, 2), 0) / count;
        const stdDev = Math.sqrt(variance);

        setStats({
          total,
          average,
          max,
          min,
          range,
          median,
          stdDev,
          count
        });
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bar-chart-widget">
      <div className="bar-chart-container">
        <BarChart className='bar-chart' width={880} height={415} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
      <div className="bar-chart-stats">
        <h3>Statistics</h3>
        <p><strong>Total:</strong> {stats.total}</p>
        <p><strong>Average:</strong> {stats.average.toFixed(2)}</p>
        <p><strong>Maximum:</strong> {stats.max}</p>
        <p><strong>Minimum:</strong> {stats.min}</p>
        <p><strong>Range:</strong> {stats.range}</p>
        <p><strong>Median:</strong> {stats.median}</p>
        <p><strong>Standard Deviation:</strong> {stats.stdDev.toFixed(2)}</p>
        <p><strong>Count:</strong> {stats.count}</p>
      </div>
    </div>
  );
};

export default BarChartWidget;
