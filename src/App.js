import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
    const [bannerSettings, setBannerSettings] = useState({
        description: 'Welcome to our website!',
        timer: 30,
        link: '#',
        isVisible: true
    });
    const [remainingTime, setRemainingTime] = useState(bannerSettings.timer);

    useEffect(() => {
        if (bannerSettings.isVisible && remainingTime > 0) {
            const timerInterval = setInterval(() => {
                setRemainingTime(prevTime => prevTime - 1);
            }, 1000);

            return () => clearInterval(timerInterval);
        } else if (remainingTime === 0) {
            setBannerSettings(prevSettings => ({
                ...prevSettings,
                isVisible: false
            }));
        }
    }, [bannerSettings.isVisible, remainingTime]);

    const handleUpdateBanner = (updatedSettings) => {
        setBannerSettings(updatedSettings);
        setRemainingTime(updatedSettings.timer);
    };

    return (
        <div className="App">
            <Banner
                description={bannerSettings.description}
                timer={remainingTime}
                link={bannerSettings.link}
                isVisible={bannerSettings.isVisible}
            />
            <Dashboard onUpdateBanner={handleUpdateBanner} />
        </div>
    );
}

export default App;
