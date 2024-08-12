import React, { useState } from 'react';
import styled from 'styled-components';

const DashboardWrapper = styled.div`
    background-color: #ffffff;
    padding: 25px;
    border-radius: 12px;
    max-width: 500px;
    margin: 30px auto;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

const DashboardTitle = styled.h2`
    color: #006eb9;
    margin-bottom: 25px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
`;

const DashboardItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    label {
        margin-bottom: 8px;
        color: #333;
        font-weight: 600;
        font-size: 14px;
    }
    input[type='text'], input[type='number'] {
        padding: 10px;
        border-radius: 6px;
        border: 1px solid #ccc;
        font-size: 16px;
        transition: border 0.3s ease;
        &:focus {
            border: 1px solid #006eb9;
            outline: none;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }
    }
`;

const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    color: #333;
    font-weight: 600;
    font-size: 14px;
    input {
        margin-right: 10px;
        transform: scale(1.2);
        cursor: pointer;
    }
`;

const UpdateButton = styled.button`
    padding: 12px 20px;
    background-color: #006eb9;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
    transition: background-color 0.3s ease, transform 0.2s ease;
    &:hover {
        background-color: #0056b3;
        transform: translateY(-2px);
    }
    &:active {
        background-color: #004085;
        transform: translateY(0);
    }
`;

const Dashboard = ({ onUpdateBanner }) => {
    const [description, setDescription] = useState('');
    const [timer, setTimer] = useState(30);
    const [link, setLink] = useState('');
    const [isVisible, setIsVisible] = useState(true);

    const handleUpdate = () => {
        onUpdateBanner({ description, timer, link, isVisible });
    };

    return (
        <DashboardWrapper>
            <DashboardTitle>Banner Control</DashboardTitle>
            <DashboardItem>
                <label>Banner Text:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter banner description"
                />
            </DashboardItem>
            <DashboardItem>
                <label>Timer (seconds):</label>
                <input
                    type="number"
                    value={timer}
                    onChange={(e) => setTimer(e.target.value)}
                    min="1"
                    max="120"
                />
            </DashboardItem>
            <DashboardItem>
                <label>Link URL:</label>
                <input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="Enter link URL"
                />
            </DashboardItem>
            <DashboardItem>
                <CheckboxLabel>
                    <input
                        type="checkbox"
                        checked={isVisible}
                        onChange={(e) => setIsVisible(e.target.checked)}
                    />
                    Show Banner
                </CheckboxLabel>
            </DashboardItem>
            <UpdateButton onClick={handleUpdate}>Update Banner</UpdateButton>
        </DashboardWrapper>
    );
};

export default Dashboard;
