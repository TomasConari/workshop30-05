import React, { useState, useEffect } from 'react';
import { fetchGraph } from '../helper/fetch';

export const ChartComponent = ({ graphic }) => {
  const [price, setPrice] = useState([]);
  const [dates, setDates] = useState([]);

  const fetchData = async () => {
    return (
      <div className="chart-container">
      </div>
    );
  };
};
