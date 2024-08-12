import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ onUpdateBanner }) => {
    const [description, setDescription] = useState('');
    const [timer, setTimer] = useState(30);
    const [link, setLink] = useState('');
    const [isVisible, setIsVisible] = useState(true);

    const handleUpdate = () => {
        onUpdateBanner({ description, timer, link, isVisible });
    };

    return (
        <div className="dashboard">
            <h2>Banner Control Dashboard</h2>
            <div className="dashboard-item">
                <label>Banner Text:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter banner description"
                />
            </div>
            <div className="dashboard-item">
                <label>Timer (seconds):</label>
                <input
                    type="number"
                    value={timer}
                    onChange={(e) => setTimer(e.target.value)}
                    min="1"
                    max="120"
                />
            </div>
            <div className="dashboard-item">
                <label>Link URL:</label>
                <input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="Enter link URL"
                />
            </div>
            <div className="dashboard-item">
                <label>
                    <input
                        type="checkbox"
                        checked={isVisible}
                        onChange={(e) => setIsVisible(e.target.checked)}
                    />
                    Show Banner
                </label>
            </div>
            <button onClick={handleUpdate}>Update Banner</button>
        </div>
    );
};

export default Dashboard;
