import React from "react";
import "./CompanyMessage.scss";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";

import { Link } from "react-router-dom";
/**
 * 
 *
 
 * @returns {JSX.Element} The JSX element representing the profile data.
 */
function CompanyMessage() {
  return (
    <>
      <Header />
      <Nav />
      <main className="cabinet-message-wrapper">
        <section className="cabinet-message-box">
          <span>
            <span>
              <svg
                width="38"
                height="44"
                viewBox="0 0 38 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.5518 43.5026L37.965 25.5359L16.6803 23.6515L19.8692 30.7872C16.8089 30.4764 13.9588 29.4921 11.6981 28.0233C8.76451 26.1171 6.96241 23.5047 6.70179 20.5899C6.71304 17.3186 7.40806 14.64 8.52729 12.4743C11.3232 14.1802 14.5193 15.4731 17.6414 16.2561C21.7655 17.2905 26.0653 17.51 29.2729 16.3239C30.9129 15.7176 32.3881 14.6951 33.304 13.1027C34.2279 11.4963 34.4342 9.56833 34.0085 7.45363L33.9899 7.3613L33.9624 7.27145C33.0194 4.18393 30.3132 2.25814 27.295 1.34259C24.2419 0.416443 20.56 0.405186 17.0187 1.38177C13.6101 2.32177 10.2386 4.20346 7.64604 7.19443C5.09911 5.01522 3.71139 2.61677 3.71139 0.251953L0.0078125 0.288726C0.0078125 4.32052 2.3914 7.73128 5.47989 10.3066C3.91981 13.1441 2.99807 16.6071 2.99807 20.707V20.7849L3.00429 20.8623C3.36008 25.2985 6.05926 28.8734 9.69346 31.2348C13.0159 33.3936 17.2382 34.6316 21.6118 34.6864L25.5518 43.5026ZM10.7049 9.3644C12.7006 7.2065 15.2693 5.78548 17.9486 5.04658C20.8974 4.23341 23.8786 4.27528 26.2123 4.9832C28.5347 5.68768 29.93 6.94078 30.4 8.35273C30.6596 9.7277 30.4549 10.6132 30.1181 11.1987C29.7655 11.8119 29.1161 12.3591 28.046 12.7548C25.8335 13.5729 22.3711 13.5258 18.5545 12.5686C15.8324 11.8859 13.0862 10.7784 10.7049 9.3644Z"
                  fill="#3F7EE8"
                />
              </svg>
            </span>
            <h1>Повідомлення</h1>
          </span>
          <span>
            <div className="company-message">
              <div>
                <ul>
                  <Link>
                    <li>
                      <div className="row">
                        <svg
                          width="100"
                          height="100"
                          viewBox="0 0 130 130"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="65" cy="65" r="65" fill="#9E9E9E" />
                          <path
                            d="M105.516 96.2307C100.294 87.0661 92.1404 79.9252 82.3672 75.9575C87.2273 72.3124 90.8174 67.2306 92.6288 61.4318C94.4402 55.633 94.3811 49.4113 92.46 43.648C90.5389 37.8846 86.8531 32.8718 81.9247 29.3196C76.9963 25.7674 71.0752 23.856 65.0001 23.856C58.9249 23.856 53.0038 25.7674 48.0754 29.3196C43.147 32.8718 39.4612 37.8846 37.5401 43.648C35.619 49.4113 35.56 55.633 37.3714 61.4318C39.1828 67.2306 42.7728 72.3124 47.6329 75.9575C37.8597 79.9252 29.706 87.0661 24.4842 96.2307C24.1607 96.7509 23.945 97.3309 23.8501 97.9362C23.7552 98.5415 23.7829 99.1597 23.9317 99.754C24.0805 100.348 24.3472 100.907 24.7161 101.396C25.0849 101.885 25.5484 102.295 26.0789 102.602C26.6094 102.908 27.1961 103.105 27.8041 103.18C28.4121 103.255 29.0291 103.207 29.6183 103.039C30.2075 102.871 30.7569 102.587 31.2338 102.202C31.7108 101.818 32.1056 101.341 32.3947 100.801C39.2959 88.8725 51.4834 81.758 65.0001 81.758C78.5168 81.758 90.7043 88.8763 97.6054 100.801C98.232 101.808 99.2258 102.533 100.377 102.821C101.528 103.109 102.745 102.938 103.773 102.345C104.8 101.751 105.556 100.781 105.882 99.6404C106.207 98.4994 106.076 97.2767 105.516 96.2307ZM45.1954 52.8127C45.1954 48.8957 46.3569 45.0667 48.5331 41.8098C50.7092 38.5529 53.8023 36.0145 57.4211 34.5155C61.04 33.0166 65.022 32.6244 68.8638 33.3885C72.7055 34.1527 76.2343 36.0389 79.0041 38.8087C81.7738 41.5784 83.66 45.1073 84.4242 48.949C85.1884 52.7907 84.7962 56.7728 83.2972 60.3916C81.7982 64.0104 79.2598 67.1035 76.003 69.2797C72.7461 71.4559 68.9171 72.6174 65.0001 72.6174C59.7494 72.6113 54.7155 70.5228 51.0027 66.81C47.2899 63.0973 45.2014 58.0634 45.1954 52.8127Z"
                            fill="white"
                          />
                        </svg>
                        <div className="column-1">
                          {" "}
                          <h3>Шевченко Олена</h3>
                          <p className="p-message">Повідомлення</p>
                        </div>
                      </div>
                      <div className="column-2">
                        <p className="p-date">Вчора</p>
                        <p className="p-new-message">5</p>
                      </div>
                    </li>
                  </Link>
                  <hr />
                  <Link>
                    <li>
                      <div className="row">
                        <svg
                          width="100"
                          height="100"
                          viewBox="0 0 130 130"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="65" cy="65" r="65" fill="#9E9E9E" />
                          <path
                            d="M105.516 96.2307C100.294 87.0661 92.1404 79.9252 82.3672 75.9575C87.2273 72.3124 90.8174 67.2306 92.6288 61.4318C94.4402 55.633 94.3811 49.4113 92.46 43.648C90.5389 37.8846 86.8531 32.8718 81.9247 29.3196C76.9963 25.7674 71.0752 23.856 65.0001 23.856C58.9249 23.856 53.0038 25.7674 48.0754 29.3196C43.147 32.8718 39.4612 37.8846 37.5401 43.648C35.619 49.4113 35.56 55.633 37.3714 61.4318C39.1828 67.2306 42.7728 72.3124 47.6329 75.9575C37.8597 79.9252 29.706 87.0661 24.4842 96.2307C24.1607 96.7509 23.945 97.3309 23.8501 97.9362C23.7552 98.5415 23.7829 99.1597 23.9317 99.754C24.0805 100.348 24.3472 100.907 24.7161 101.396C25.0849 101.885 25.5484 102.295 26.0789 102.602C26.6094 102.908 27.1961 103.105 27.8041 103.18C28.4121 103.255 29.0291 103.207 29.6183 103.039C30.2075 102.871 30.7569 102.587 31.2338 102.202C31.7108 101.818 32.1056 101.341 32.3947 100.801C39.2959 88.8725 51.4834 81.758 65.0001 81.758C78.5168 81.758 90.7043 88.8763 97.6054 100.801C98.232 101.808 99.2258 102.533 100.377 102.821C101.528 103.109 102.745 102.938 103.773 102.345C104.8 101.751 105.556 100.781 105.882 99.6404C106.207 98.4994 106.076 97.2767 105.516 96.2307ZM45.1954 52.8127C45.1954 48.8957 46.3569 45.0667 48.5331 41.8098C50.7092 38.5529 53.8023 36.0145 57.4211 34.5155C61.04 33.0166 65.022 32.6244 68.8638 33.3885C72.7055 34.1527 76.2343 36.0389 79.0041 38.8087C81.7738 41.5784 83.66 45.1073 84.4242 48.949C85.1884 52.7907 84.7962 56.7728 83.2972 60.3916C81.7982 64.0104 79.2598 67.1035 76.003 69.2797C72.7461 71.4559 68.9171 72.6174 65.0001 72.6174C59.7494 72.6113 54.7155 70.5228 51.0027 66.81C47.2899 63.0973 45.2014 58.0634 45.1954 52.8127Z"
                            fill="white"
                          />
                        </svg>
                        <div className="column-1">
                          {" "}
                          <h3>Пономарчук Георгій</h3>
                          <p className="p-message">Повідомлення</p>
                        </div>
                      </div>
                      <div className="column-2">
                        <p className="p-date">Вчора</p>
                        {/* <p className="p-new-message"></p> */}
                      </div>
                    </li>
                  </Link>
                  <hr />
                </ul>
              </div>
            </div>
          </span>
        </section>
      </main>
    </>
  );
}

export default CompanyMessage;
