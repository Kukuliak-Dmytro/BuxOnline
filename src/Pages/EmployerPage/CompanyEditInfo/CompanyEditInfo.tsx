import React from 'react';
import './CompanyEditInfo.scss';
import InputField from '../../../Components/Input/InputField/InputField';
import InputArea from '../../../Components/Input/InputArea/InputArea';
import useFormState  from '../../../Hooks/useFormState';

import companyLogo from '../../.././assets/CompanyEditInfo.svg'
const CompanyEditInfo = () => {
    const [userInfo, handleChange] = useFormState({
        company_name: '',
        email: '',
        phone: '',
        city: '',
        description: '<p>Опишіть компанію</p>'
    });
    const handleArea = (value, id) => {
        handleChange({ target: { value, id } });
    }
    return (
        <div className='edit-inner-wrapper'>
            <div className='title'>
                <svg width="38" height="44" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M25.5518 43.5026L37.965 25.5359L16.6803 23.6515L19.8692 30.7872C16.8089 30.4764 13.9588 29.4921 11.6981 28.0233C8.76451 26.1171 6.96241 23.5047 6.70179 20.5899C6.71304 17.3186 7.40806 14.64 8.52729 12.4743C11.3232 14.1802 14.5193 15.4731 17.6414 16.2561C21.7655 17.2905 26.0653 17.51 29.2729 16.3239C30.9129 15.7176 32.3881 14.6951 33.304 13.1027C34.2279 11.4963 34.4342 9.56833 34.0085 7.45363L33.9899 7.3613L33.9624 7.27145C33.0194 4.18393 30.3132 2.25814 27.295 1.34259C24.2419 0.416443 20.56 0.405186 17.0187 1.38177C13.6101 2.32177 10.2386 4.20346 7.64604 7.19443C5.09911 5.01522 3.71139 2.61677 3.71139 0.251953L0.0078125 0.288726C0.0078125 4.32052 2.3914 7.73128 5.47989 10.3066C3.91981 13.1441 2.99807 16.6071 2.99807 20.707V20.7849L3.00429 20.8623C3.36008 25.2985 6.05926 28.8734 9.69346 31.2348C13.0159 33.3936 17.2382 34.6316 21.6118 34.6864L25.5518 43.5026ZM10.7049 9.3644C12.7006 7.2065 15.2693 5.78548 17.9486 5.04658C20.8974 4.23341 23.8786 4.27528 26.2123 4.9832C28.5347 5.68768 29.93 6.94078 30.4 8.35273C30.6596 9.7277 30.4549 10.6132 30.1181 11.1987C29.7655 11.8119 29.1161 12.3591 28.046 12.7548C25.8335 13.5729 22.3711 13.5258 18.5545 12.5686C15.8324 11.8859 13.0862 10.7784 10.7049 9.3644Z" fill="#3F7EE8" />
                </svg>
                <h1>Редагувати профіль</h1>
            </div>
            <form action="">
                <div className="input-company-logo">
                    <div className="label-wrapper">
                        <h2>Логотип компанії</h2>
                        <p>Оберіть зображення, яке не перевищує <br />за розміром 256х256</p>
                        <input
                        id='input-logo'
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onload = (event) => {
                                        const imgElement = document.querySelector(".company-logo") as HTMLImageElement;
                                        imgElement.src = event.target?.result as string;
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }}
                        />
                    <label htmlFor="input-logo">Виберіть логотип</label>

                    </div>
                    <div className="logo-wrapper">
                    <img src={companyLogo} alt="your company logo"  className='company-logo' />
                    </div>
                    
                </div>
                <div className="input-misc">
                    <InputField label='Назва компанії' placeholder='Наприклад: приватна особа, МСРК' type='text' id='company_name' initialValue='' onChange={handleChange}></InputField>
                    <InputField label='Електронна пошта' placeholder='Наприклад: mcpk@mcpk.de ' type='text' id='email' initialValue=''  onChange={handleChange}></InputField>
                    <InputField label='Номер телефону' placeholder='Наприклад: +38090 000 00 11' type='text' id='phone' initialValue=''  onChange={handleChange}></InputField>
                    <InputField label='Місто' placeholder='Наприклад: Київ' type='text' id='city' initialValue=''  onChange={handleChange}></InputField>
                </div>
                <div className="input-rich">
                    <InputArea initialValue={userInfo.description} setValue={handleArea} id='description'></InputArea>
                </div>
                


            </form>



        </div>
    );
};

export default CompanyEditInfo;