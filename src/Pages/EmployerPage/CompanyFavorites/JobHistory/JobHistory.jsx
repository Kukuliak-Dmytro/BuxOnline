import React from 'react';
import './JobHistory.scss';

import JobExperience from '../JobExperience/JobExperience';

const JobHistoryItem = () => {
    const jobs = [
        {
            position: 'Software Development Engineer',
            company: 'Akvelon',
            date: 'Sep 2020 - Jan 2022'
        },

        {
            position: 'Software Development Engineer',
            company: 'Akvelon',
            date: 'Sep 2020 - Jan 2022'
        },

        {
            position: 'Software Development Engineer',
            company: 'Akvelon',
            date: 'Sep 2020 - Jan 2022'
        }
    ];

    const flag = true;

    const jobsList = jobs.map((item) => {
        return (
            <div className="job-history-item">
                <div className="job-history-wrapper">
                    <div className="job-history-icon">
                        <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.625 4.875H8.25V3.75C8.25 2.85489 8.60558 1.99645 9.23851 1.36351C9.87145 0.730579 10.7299 0.375 11.625 0.375H18.375C19.2701 0.375 20.1286 0.730579 20.7615 1.36351C21.3944 1.99645 21.75 2.85489 21.75 3.75V4.875H27.375C27.9717 4.875 28.544 5.11205 28.966 5.53401C29.3879 5.95597 29.625 6.52826 29.625 7.125V25.125C29.625 25.7217 29.3879 26.294 28.966 26.716C28.544 27.1379 27.9717 27.375 27.375 27.375H2.625C2.02826 27.375 1.45597 27.1379 1.03401 26.716C0.612053 26.294 0.375 25.7217 0.375 25.125V7.125C0.375 6.52826 0.612053 5.95597 1.03401 5.53401C1.45597 5.11205 2.02826 4.875 2.625 4.875ZM19.5 3.75C19.5 3.45163 19.3815 3.16548 19.1705 2.9545C18.9595 2.74353 18.6734 2.625 18.375 2.625H11.625C11.3266 2.625 11.0405 2.74353 10.8295 2.9545C10.6185 3.16548 10.5 3.45163 10.5 3.75V4.875H19.5V3.75ZM2.625 7.125V12.9764C6.42219 15.0433 10.6767 16.1258 15 16.125C19.3231 16.1256 23.5775 15.0436 27.375 12.9778V7.125H2.625ZM2.625 25.125H27.375V15.5119C23.522 17.3965 19.2892 18.3758 15 18.375C10.7107 18.3751 6.478 17.3953 2.625 15.5105V25.125ZM18.375 12.75C18.375 12.4516 18.2565 12.1655 18.0455 11.9545C17.8345 11.7435 17.5484 11.625 17.25 11.625H12.75C12.4516 11.625 12.1655 11.7435 11.9545 11.9545C11.7435 12.1655 11.625 12.4516 11.625 12.75C11.625 13.0484 11.7435 13.3345 11.9545 13.5455C12.1655 13.7565 12.4516 13.875 12.75 13.875H17.25C17.5484 13.875 17.8345 13.7565 18.0455 13.5455C18.2565 13.3345 18.375 13.0484 18.375 12.75Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="job-history-text">
                        <span className="job-history-position">{ item.position }</span>
                        <span className="job-history-date">
                            <span>{ item.company }</span>
                            <span>{ item.date }</span>
                        </span>
                    </div>
                    <div className="job-history-button">
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.454807 0.939428C0.736098 0.658221 1.11756 0.500248 1.51531 0.500248C1.91305 0.500248 2.29451 0.658222 2.57581 0.939429L10.0008 8.36443L17.4258 0.939431C17.7087 0.666194 18.0876 0.515003 18.4809 0.518421C18.8742 0.521838 19.2504 0.679592 19.5285 0.957703C19.8066 1.23582 19.9644 1.61203 19.9678 2.00533C19.9712 2.39863 19.82 2.77753 19.5468 3.06043L11.0613 11.5459C10.78 11.8271 10.3986 11.9851 10.0008 11.9851C9.60306 11.9851 9.2216 11.8271 8.9403 11.5459L0.454806 3.06043C0.1736 2.77914 0.0156267 2.39767 0.0156267 1.99993C0.0156268 1.60218 0.1736 1.22072 0.454807 0.939428Z" fill="#3F7EE8"/>
                        </svg>
                    </div>
                </div>
                { flag ? <JobExperience/> : null }
            </div> 
        );
    });

    return (
        <div className="job-history">
            { jobsList }
        </div>
    );
};

export default JobHistoryItem;