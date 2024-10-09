import React from 'react';
import './PersonalData.scss';

const PersonalData = () => {
    return (
        <div className="personal-data">
            <div className="personal-data-circle">
                <svg width="87" height="81" viewBox="0 0 87 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M86.0319 73.2304C80.5372 64.0658 71.9572 56.9249 61.6732 52.9573C66.7873 49.3122 70.565 44.2304 72.4711 38.4316C74.3772 32.6328 74.315 26.4111 72.2935 20.6477C70.272 14.8844 66.3935 9.87155 61.2075 6.31937C56.0215 2.76718 49.7908 0.855713 43.3981 0.855713C37.0055 0.855713 30.7748 2.76718 25.5888 6.31937C20.4028 9.87155 16.5243 14.8844 14.5028 20.6477C12.4812 26.4111 12.4191 32.6328 14.3252 38.4316C16.2313 44.2304 20.009 49.3122 25.1231 52.9573C14.8391 56.9249 6.25912 64.0658 0.764411 73.2304C0.423939 73.7507 0.197016 74.3307 0.0971325 74.936C-0.00275108 75.5412 0.0264435 76.1594 0.182981 76.7538C0.339519 77.3481 0.620204 77.9064 1.00835 78.3956C1.3965 78.8848 1.88418 79.2949 2.4424 79.6014C3.00063 79.9079 3.618 80.1046 4.25782 80.1798C4.89765 80.255 5.54685 80.2072 6.16684 80.0392C6.78684 79.8712 7.36496 79.5865 7.86685 79.202C8.36874 78.8174 8.78414 78.3409 9.08837 77.8007C16.3503 65.8722 29.1749 58.7578 43.3981 58.7578C57.6214 58.7578 70.446 65.876 77.7079 77.8007C78.3672 78.8082 79.413 79.5326 80.6241 79.8206C81.8352 80.1087 83.1167 79.9379 84.1977 79.3444C85.2787 78.7509 86.0744 77.7811 86.4167 76.6402C86.759 75.4992 86.621 74.2764 86.0319 73.2304ZM22.5582 29.8124C22.5582 25.8955 23.7804 22.0664 26.0704 18.8096C28.3603 15.5527 31.615 13.0143 35.423 11.5153C39.231 10.0163 43.4213 9.62414 47.4638 10.3883C51.5064 11.1525 55.2197 13.0387 58.1342 15.8084C61.0487 18.5782 63.0335 22.107 63.8377 25.9487C64.6418 29.7905 64.2291 33.7725 62.6517 37.3914C61.0744 41.0102 58.4033 44.1033 54.9762 46.2794C51.5491 48.4556 47.5199 49.6171 43.3981 49.6171C37.873 49.6111 32.576 47.5226 28.6691 43.8098C24.7622 40.097 22.5646 35.0631 22.5582 29.8124Z" fill="white"/>
                </svg>
            </div>
            <div className="personal-data-text">
                <h3 className="personal-name">Шевченко Олена</h3>
                <a href="#" className="personal-position">Full-stack engineer</a>
                <div className="personal-place">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 14.0625C11.7274 14.0625 10.9722 13.8334 10.3298 13.4042C9.68743 12.975 9.18675 12.3649 8.8911 11.6511C8.59544 10.9373 8.51809 10.1519 8.66881 9.39418C8.81953 8.63644 9.19157 7.94042 9.73787 7.39412C10.2842 6.84782 10.9802 6.47578 11.7379 6.32506C12.4957 6.17434 13.2811 6.25169 13.9949 6.54735C14.7086 6.843 15.3187 7.34368 15.7479 7.98606C16.1772 8.62844 16.4063 9.38367 16.4063 10.1563C16.405 11.1919 15.9931 12.1847 15.2608 12.917C14.5285 13.6493 13.5356 14.0613 12.5 14.0625ZM12.5 7.8125C12.0365 7.8125 11.5833 7.94996 11.1979 8.2075C10.8125 8.46503 10.5121 8.83107 10.3347 9.25934C10.1573 9.6876 10.1109 10.1589 10.2013 10.6135C10.2917 11.0681 10.5149 11.4858 10.8427 11.8135C11.1705 12.1413 11.5881 12.3645 12.0428 12.455C12.4974 12.5454 12.9687 12.499 13.3969 12.3216C13.8252 12.1442 14.1912 11.8438 14.4488 11.4584C14.7063 11.0729 14.8438 10.6198 14.8438 10.1563C14.8431 9.53484 14.596 8.93906 14.1566 8.49966C13.7172 8.06025 13.1214 7.81312 12.5 7.8125Z" fill="#3F7EE8"/>
                        <path d="M12.5 23.4375L5.90938 15.6648C5.8178 15.5481 5.72717 15.4307 5.63751 15.3125C4.51228 13.8292 3.90416 12.018 3.90626 10.1562C3.90626 7.87705 4.81167 5.69119 6.42331 4.07955C8.03495 2.46791 10.2208 1.5625 12.5 1.5625C14.7792 1.5625 16.9651 2.46791 18.5767 4.07955C20.1883 5.69119 21.0938 7.87705 21.0938 10.1562C21.0956 12.0171 20.4877 13.8274 19.3633 15.3102L19.3625 15.3125C19.3625 15.3125 19.1281 15.6203 19.093 15.6617L12.5 23.4375ZM6.88516 14.3711C6.88516 14.3711 7.06719 14.6117 7.1086 14.6633L12.5 21.0219L17.8984 14.6547C17.9328 14.6117 18.1156 14.3695 18.1164 14.3688C19.0361 13.1571 19.5331 11.6774 19.5313 10.1562C19.5313 8.29145 18.7905 6.50302 17.4718 5.18441C16.1532 3.86579 14.3648 3.125 12.5 3.125C10.6352 3.125 8.84678 3.86579 7.52816 5.18441C6.20955 6.50302 5.46876 8.29145 5.46876 10.1562C5.46683 11.6784 5.96442 13.1591 6.88516 14.3711Z" fill="#3F7EE8"/>
                    </svg>
                    <span>Польша</span>
                </div>
            </div>
        </div>
    );
};

export default PersonalData;