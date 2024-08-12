import React from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.div`
    background-color: #006eb9;
    padding: 25px;
    border-radius: 40px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    max-width: 600px;
    margin: 30px auto;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }
`;

const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const BannerDescription = styled.p`
    font-size: 32px;
    color: #ffffff;
    margin: 0;
    line-height: 1.4;
`;

const BannerLink = styled.a`
    color: #006eb9;
    font-size: 24px;
    text-decoration: none;
    background-color: #ffffff;
    padding: 8px 16px;
    border-radius: 20px;
    transition: background-color 0.3s ease, transform 0.2s ease;
    &:hover {
        text-decoration: underline;
        background-color: #e0e0e0;
        transform: scale(1.05);
    }
`;

const BannerTimer = styled.div`
    font-size: 16px;
    color: #f6f8fa;
    margin-top: 10px;
    span {
        font-weight: bold;
    }
`;

const Banner = ({ description, timer, link, isVisible }) => {
    if (!isVisible) return null;

    // Ensure the link is a complete URL
    const validLink = link.startsWith('http://') || link.startsWith('https://') ? link : `https://${link}`;

    return (
        <BannerWrapper>
            <BannerContent>
                <BannerDescription>{description}</BannerDescription>
                <BannerLink href={validLink} target="_blank" rel="noopener noreferrer">
                    Learn More
                </BannerLink>
                <BannerTimer>
                    Disappearing in <span>{timer}</span> seconds
                </BannerTimer>
            </BannerContent>
        </BannerWrapper>
    );
};

export default Banner;
