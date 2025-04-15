import React from 'react';

const MainContent: React.FC = () => {
  return (
    <div className="main-content">
      <div className="header">
        <div className="title">
          <span className="icon">⚡</span>
          <h1>Charging Station</h1>
        </div>
        <div className="actions">
          <button className="btn">Edit Variables</button>
          <button className="btn">Share</button>
        </div>
      </div>
      
      <div className="dashboard-content">
        <div className="section">
          <h2>Best Scenario Results</h2>
          <div className="result-card">
            <p>The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.</p>
          </div>
          <div className="result-card">
            <p>The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.</p>
          </div>
        </div>
        
        <div className="dashboard-grid">
          <div className="dashboard-column">
            <div className="dashboard-chart">
              <h3>Graphs</h3>
              <div className="chart-placeholder">
                Chart will be displayed here
              </div>
            </div>
          </div>
          <div className="dashboard-column">
            <h3>Key Performance Indicators</h3>
            <div className="kpi-grid">
              <div className="kpi-card">
                <h4>Infrastructure Units</h4>
                <p>€421.07</p>
              </div>
              <div className="kpi-card">
                <h4>Charging Growth</h4>
                <p>33.07</p>
              </div>
              <div className="kpi-card">
                <h4>Localization change</h4>
                <p>21.9%</p>
              </div>
              <div className="kpi-card">
                <h4>Fleet growth</h4>
                <p>7.03%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent; 