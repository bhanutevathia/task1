import React from 'react';
import './Banner.css';

const Banner = ({ description, timer, link, isVisible }) => {
    if (!isVisible) return null;

    // Ensure the link is a complete URL
    const validLink = link.startsWith('http://') || link.startsWith('https://') ? link : `https://${link}`;

    return (
        <div className="banner">
            <div className="banner-content">
                <p className="banner-description">{description}</p>
                <a href={validLink} target="_blank" rel="noopener noreferrer" className="banner-link">
                    Learn More
                </a>
                <div className="banner-timer">
                    Disappearing in <span>{timer}</span> seconds
                </div>
            </div>
        </div>
    );
};

export default Banner;
