import React from 'react';
import './ItemFavorite.scss';

const ItemFavorite = () => {
    return (
        <div className="item-favorite">
            <div className="candidate-info">
                <div className="image-profile">
                    <div className="circle">
                        <svg width="64" height="62" viewBox="0 0 64 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M63.167 56.0234C59.1502 48.9737 52.8781 43.4807 45.3603 40.4287C49.0989 37.6248 51.8604 33.7157 53.2538 29.2551C54.6472 24.7945 54.6018 20.0086 53.124 15.5752C51.6462 11.1418 48.811 7.28584 45.0199 4.5534C41.2288 1.82095 36.6741 0.350586 32.0009 0.350586C27.3278 0.350586 22.7731 1.82095 18.982 4.5534C15.1909 7.28584 12.3557 11.1418 10.8779 15.5752C9.40014 20.0086 9.35472 24.7945 10.7481 29.2551C12.1415 33.7157 14.903 37.6248 18.6416 40.4287C11.1238 43.4807 4.85166 48.9737 0.83493 56.0234C0.586039 56.4236 0.420154 56.8698 0.347138 57.3354C0.274121 57.801 0.295463 58.2765 0.409895 58.7337C0.524327 59.1909 0.729512 59.6204 1.01325 59.9967C1.297 60.373 1.6535 60.6884 2.06157 60.9242C2.46965 61.1599 2.92096 61.3112 3.38868 61.3691C3.8564 61.427 4.33098 61.3902 4.7842 61.261C5.23743 61.1318 5.66005 60.9127 6.02694 60.6169C6.39383 60.3211 6.6975 59.9546 6.91989 59.5391C12.2285 50.3633 21.6035 44.8906 32.0009 44.8906C42.3984 44.8906 51.7734 50.3662 57.082 59.5391C57.564 60.3141 58.3284 60.8712 59.2138 61.0928C60.0991 61.3144 61.0359 61.1831 61.8261 60.7265C62.6164 60.2699 63.1981 59.524 63.4483 58.6463C63.6985 57.7687 63.5976 56.8281 63.167 56.0234ZM16.7666 22.625C16.7666 19.6119 17.6601 16.6665 19.334 14.1612C21.008 11.656 23.3873 9.70333 26.171 8.55027C28.9547 7.39722 32.0178 7.09553 34.973 7.68335C37.9282 8.27117 40.6427 9.7221 42.7733 11.8527C44.9038 13.9832 46.3548 16.6977 46.9426 19.6529C47.5304 22.6081 47.2287 25.6712 46.0757 28.4549C44.9226 31.2387 42.97 33.6179 40.4647 35.2919C37.9594 36.9659 35.014 37.8594 32.0009 37.8594C27.962 37.8547 24.0897 36.2482 21.2338 33.3922C18.3778 30.5362 16.7712 26.664 16.7666 22.625Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div className="info">
                    <span>Шевченко Олена</span>
                    <span>Кандідат <a href='#'>Back-end engineer</a></span>
                    <div className="place-salary">
                        <div className="place">
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 13.5C11.2583 13.5 10.5333 13.2801 9.91661 12.868C9.29993 12.456 8.81928 11.8703 8.53545 11.1851C8.25162 10.4998 8.17736 9.74584 8.32206 9.01841C8.46675 8.29098 8.8239 7.6228 9.34835 7.09835C9.8728 6.5739 10.541 6.21675 11.2684 6.07206C11.9958 5.92736 12.7498 6.00162 13.4351 6.28545C14.1203 6.56928 14.706 7.04993 15.118 7.66661C15.5301 8.2833 15.75 9.00832 15.75 9.75C15.7488 10.7442 15.3533 11.6973 14.6503 12.4003C13.9473 13.1033 12.9942 13.4988 12 13.5ZM12 7.5C11.555 7.5 11.12 7.63196 10.75 7.8792C10.38 8.12643 10.0916 8.47783 9.92127 8.88896C9.75098 9.3001 9.70642 9.7525 9.79323 10.189C9.88005 10.6254 10.0943 11.0263 10.409 11.341C10.7237 11.6557 11.1246 11.87 11.561 11.9568C11.9975 12.0436 12.4499 11.999 12.861 11.8287C13.2722 11.6584 13.6236 11.37 13.8708 11C14.118 10.63 14.25 10.195 14.25 9.75C14.2494 9.15345 14.0122 8.5815 13.5903 8.15967C13.1685 7.73784 12.5966 7.5006 12 7.5Z" fill="#3F7EE8"/>
                                    <path d="M12 22.5L5.67301 15.0382C5.58509 14.9262 5.49809 14.8135 5.41201 14.7C4.33179 13.276 3.74799 11.5373 3.75001 9.75C3.75001 7.56196 4.6192 5.46354 6.16637 3.91637C7.71355 2.36919 9.81197 1.5 12 1.5C14.188 1.5 16.2865 2.36919 17.8336 3.91637C19.3808 5.46354 20.25 7.56196 20.25 9.75C20.2517 11.5365 19.6682 13.2743 18.5888 14.6978L18.588 14.7C18.588 14.7 18.363 14.9955 18.3293 15.0353L12 22.5ZM6.60975 13.7963C6.60975 13.7963 6.7845 14.0272 6.82425 14.0767L12 20.181L17.1825 14.0685C17.2155 14.0272 17.391 13.7948 17.3918 13.794C18.2747 12.6309 18.7518 11.2103 18.75 9.75C18.75 7.95979 18.0388 6.2429 16.773 4.97703C15.5071 3.71116 13.7902 3 12 3C10.2098 3 8.4929 3.71116 7.22703 4.97703C5.96116 6.2429 5.25001 7.95979 5.25001 9.75C5.24815 11.2112 5.72584 12.6327 6.60975 13.7963Z" fill="#3F7EE8"/>
                                </svg>
                            </div>
                            <span>Польша</span>
                        </div>
                        <div className="salary">
                            <div>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 5H2M14 5C14.2652 5 14.5196 5.10536 14.7071 5.29289C14.8946 5.48043 15 5.73478 15 6V8.6M14 5L10 1M2 5C1.73478 5 1.48043 5.10536 1.29289 5.29289C1.10536 5.48043 1 5.73478 1 6V16C1 16.2652 1.10536 16.5196 1.29289 16.7071C1.48043 16.8946 1.73478 17 2 17H14C14.2652 17 14.5196 16.8946 14.7071 16.7071C14.8946 16.5196 15 16.2652 15 16V13.4M2 5L6 1L10 5M16 9H12C11.4696 9 10.9609 9.21071 10.5858 9.58579C10.2107 9.96086 10 10.4696 10 11C10 11.5304 10.2107 12.0391 10.5858 12.4142C10.9609 12.7893 11.4696 13 12 13H16C16.2652 13 16.5196 12.8946 16.7071 12.7071C16.8946 12.5196 17 12.2652 17 12V10C17 9.73478 16.8946 9.48043 16.7071 9.29289C16.5196 9.10536 16.2652 9 16 9Z" stroke="#3F7EE8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <span>$2,500 / міс</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="heart-button">
                <div className="wrapper-heart-buttton">
                    <div className="button-contact">
                        <div className="message-icon">
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.3283 11C10.3283 11.3108 10.4517 11.6089 10.6715 11.8286C10.8913 12.0484 11.1893 12.1719 11.5001 12.1719C11.8109 12.1719 12.109 12.0484 12.3288 11.8286C12.5485 11.6089 12.672 11.3108 12.672 11C12.672 10.6892 12.5485 10.3911 12.3288 10.1714C12.109 9.95159 11.8109 9.82812 11.5001 9.82812C11.1893 9.82812 10.8913 9.95159 10.6715 10.1714C10.4517 10.3911 10.3283 10.6892 10.3283 11ZM15.2111 11C15.2111 11.3108 15.3345 11.6089 15.5543 11.8286C15.7741 12.0484 16.0721 12.1719 16.3829 12.1719C16.6938 12.1719 16.9918 12.0484 17.2116 11.8286C17.4314 11.6089 17.5548 11.3108 17.5548 11C17.5548 10.6892 17.4314 10.3911 17.2116 10.1714C16.9918 9.95159 16.6938 9.82812 16.3829 9.82812C16.0721 9.82812 15.7741 9.95159 15.5543 10.1714C15.3345 10.3911 15.2111 10.6892 15.2111 11ZM5.44545 11C5.44545 11.3108 5.56892 11.6089 5.78868 11.8286C6.00845 12.0484 6.30653 12.1719 6.61733 12.1719C6.92813 12.1719 7.2262 12.0484 7.44597 11.8286C7.66574 11.6089 7.7892 11.3108 7.7892 11C7.7892 10.6892 7.66574 10.3911 7.44597 10.1714C7.2262 9.95159 6.92813 9.82812 6.61733 9.82812C6.30653 9.82812 6.00845 9.95159 5.78868 10.1714C5.56892 10.3911 5.44545 10.6892 5.44545 11ZM21.588 6.76172C21.0363 5.45068 20.2453 4.27393 19.237 3.26318C18.2357 2.25832 17.0471 1.45955 15.7384 0.912109C14.3956 0.348145 12.9699 0.0625 11.5001 0.0625H11.4513C9.97182 0.0698242 8.53871 0.362793 7.19106 0.938965C5.8936 1.49202 4.71613 2.2922 3.72426 3.29492C2.72572 4.30322 1.94203 5.4751 1.40004 6.78125C0.838517 8.13379 0.555314 9.57178 0.562639 11.0513C0.570923 12.7468 0.972042 14.4173 1.73451 15.9316V19.6426C1.73451 19.9404 1.85283 20.2261 2.06345 20.4367C2.27406 20.6473 2.55971 20.7656 2.85756 20.7656H6.57094C8.08533 21.5281 9.75582 21.9292 11.4513 21.9375H11.5026C12.965 21.9375 14.3834 21.6543 15.7189 21.1001C17.0209 20.5592 18.2051 19.7697 19.2052 18.7759C20.2135 17.7773 21.007 16.6104 21.5612 15.3091C22.1373 13.9614 22.4303 12.5283 22.4376 11.0488C22.445 9.56201 22.1569 8.11914 21.588 6.76172ZM17.8991 17.4551C16.1876 19.1494 13.9171 20.082 11.5001 20.082H11.4586C9.98647 20.0747 8.52406 19.7085 7.23256 19.02L7.02748 18.9102H3.58998V15.4727L3.48012 15.2676C2.79164 13.9761 2.42543 12.5137 2.41811 11.0415C2.40834 8.60742 3.33852 6.32227 5.04506 4.60107C6.74916 2.87988 9.02699 1.92773 11.4611 1.91797H11.5026C12.7233 1.91797 13.9074 2.15478 15.0231 2.62353C16.112 3.08008 17.0885 3.73682 17.9284 4.57666C18.7658 5.41406 19.4249 6.39307 19.8815 7.48193C20.3551 8.60986 20.5919 9.80615 20.5871 11.0415C20.5724 13.4731 19.6178 15.751 17.8991 17.4551Z" fill="white"/>
                            </svg>
                        </div>
                        <span className="contact-text">Зв'язатися</span>
                    </div>
                    <div className="icon-heart">
                        <svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.0312 0.0625C21.2061 0.0625 18.6987 1.17766 17 3.09437C15.3013 1.17766 12.7939 0.0625 9.96875 0.0625C7.50812 0.0654772 5.14913 1.04428 3.4092 2.7842C1.66928 4.52413 0.690477 6.88312 0.6875 9.34375C0.6875 19.5166 15.567 27.6447 16.1998 27.9864C16.4458 28.1188 16.7207 28.1882 17 28.1882C17.2793 28.1882 17.5542 28.1188 17.8002 27.9864C18.433 27.6447 33.3125 19.5166 33.3125 9.34375C33.3095 6.88312 32.3307 4.52413 30.5908 2.7842C28.8509 1.04428 26.4919 0.0654772 24.0312 0.0625ZM23.2592 20.0819C21.3007 21.7438 19.207 23.2396 17 24.5537C14.793 23.2396 12.6993 21.7438 10.7408 20.0819C7.69344 17.4677 4.0625 13.4809 4.0625 9.34375C4.0625 7.77731 4.68476 6.27504 5.7924 5.1674C6.90004 4.05976 8.40232 3.4375 9.96875 3.4375C12.4719 3.4375 14.5672 4.75937 15.4377 6.88844C15.5644 7.19881 15.7806 7.46441 16.0589 7.65137C16.3371 7.83833 16.6648 7.93818 17 7.93818C17.3352 7.93818 17.6629 7.83833 17.9411 7.65137C18.2194 7.46441 18.4356 7.19881 18.5623 6.88844C19.4328 4.75937 21.5281 3.4375 24.0312 3.4375C25.5977 3.4375 27.1 4.05976 28.2076 5.1674C29.3152 6.27504 29.9375 7.77731 29.9375 9.34375C29.9375 13.4809 26.3066 17.4677 23.2592 20.0819Z" fill="#BCBCBC"/>
                        </svg>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default ItemFavorite;