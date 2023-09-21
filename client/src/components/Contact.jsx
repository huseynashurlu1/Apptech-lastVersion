import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormattedMessage } from "react-intl";


const Contact = (props) => {
    const [msg, setMsg] = useState({
        fullname: '',
        email: '',
        subject: ''
    })

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const messageHandler = async () => {
        if (!msg.fullname || !msg.email || !msg.subject) {
            toast.error('Bütün boşluqları doldurun.', {
                position: "bottom-right",
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        if (!validateEmail(msg.email)) {
            toast.error('Düzgün e-mail yazın.', {
                position: "bottom-right",
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        try {
            await axios.post('http://localhost:5000/api/contact/add', msg)
            toast.success('Mesaj göndərildi', {
                position: "bottom-right",
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            console.log('Mesaj göndərilən zaman xəta baş verdi:' , error);
        }
    }
  return (
    <section id="Contact">
    <div className="container">
        <div className="row contact-row justify-content-between">
            <div className="col-lg-5">
                <div className="contact-left">
                    <h1>
                        <FormattedMessage id='Contact us' defaultMessage='Contact us'/>
                    </h1>
                    <p>{props.text}</p>
                    <ul>
                        <li>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.4995 4.66667V0.5M16.4995 0.5H12.3328M16.4995 0.5L11.4995 5.5M7.52204 9.55256C6.52072 8.55124 5.73007 7.41904 5.15007 6.21102C5.10018 6.10712 5.07523 6.05516 5.05607 5.98942C4.98797 5.75579 5.03689 5.46891 5.17856 5.27105C5.21843 5.21537 5.26606 5.16774 5.36132 5.07248C5.65266 4.78115 5.79833 4.63548 5.89356 4.48899C6.25273 3.93659 6.25273 3.22443 5.89356 2.67203C5.79833 2.52554 5.65266 2.37988 5.36132 2.08854L5.19893 1.92615C4.75606 1.48328 4.53462 1.26184 4.29681 1.14156C3.82384 0.902331 3.26529 0.902331 2.79232 1.14156C2.5545 1.26184 2.33307 1.48328 1.8902 1.92615L1.75883 2.05751C1.31748 2.49886 1.09681 2.71954 0.928266 3.01956C0.741249 3.35248 0.606781 3.86956 0.607917 4.25141C0.608941 4.59554 0.675694 4.83072 0.8092 5.30109C1.52668 7.82892 2.8804 10.2142 4.87039 12.2042C6.86037 14.1942 9.24567 15.5479 11.7735 16.2654C12.2439 16.3989 12.4791 16.4657 12.8232 16.4667C13.205 16.4678 13.7221 16.3333 14.055 16.1463C14.3551 15.9778 14.5757 15.7571 15.0171 15.3158L15.1484 15.1844C15.5913 14.7415 15.8128 14.5201 15.933 14.2823C16.1723 13.8093 16.1723 13.2508 15.933 12.7778C15.8128 12.54 15.5913 12.3185 15.1484 11.8757L14.9861 11.7133C14.6947 11.4219 14.549 11.2763 14.4026 11.181C13.8502 10.8219 13.138 10.8219 12.5856 11.181C12.4391 11.2763 12.2934 11.4219 12.0021 11.7133C11.9069 11.8085 11.8592 11.8562 11.8035 11.896C11.6057 12.0377 11.3188 12.0866 11.0852 12.0185C11.0194 11.9994 10.9675 11.9744 10.8636 11.9245C9.65555 11.3445 8.52335 10.5539 7.52204 9.55256Z" stroke="#1C1B1B" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <a href="tel:050 400 64 32">+994(50) 400 64 32</a>
                        </li>
                        <li>
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.666504 3.83301L7.4706 8.59588C8.02158 8.98156 8.29707 9.1744 8.59672 9.2491C8.86142 9.31508 9.13826 9.31508 9.40295 9.2491C9.70261 9.1744 9.97809 8.98156 10.5291 8.59588L17.3332 3.83301M4.6665 14.6663H13.3332C14.7333 14.6663 15.4334 14.6663 15.9681 14.3939C16.4386 14.1542 16.821 13.7717 17.0607 13.3013C17.3332 12.7665 17.3332 12.0665 17.3332 10.6663V5.33301C17.3332 3.93288 17.3332 3.23281 17.0607 2.69803C16.821 2.22763 16.4386 1.84517 15.9681 1.60549C15.4334 1.33301 14.7333 1.33301 13.3332 1.33301H4.6665C3.26637 1.33301 2.56631 1.33301 2.03153 1.60549C1.56112 1.84517 1.17867 2.22763 0.938988 2.69803C0.666504 3.23281 0.666504 3.93288 0.666504 5.33301V10.6663C0.666504 12.0665 0.666504 12.7665 0.938988 13.3013C1.17867 13.7717 1.56112 14.1542 2.03153 14.3939C2.56631 14.6663 3.26637 14.6663 4.6665 14.6663Z" stroke="#1C1B1B" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <a href="mailto:info@apptech.az">info@apptech.az</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="contact-right">
                    <h3>
                        <FormattedMessage id='Send to messages' defaultMessage='Send to messages'/>
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum vitae placerat amet sapien massa enim lobortis. Aliquet sagittis malesuada purus enim. Laoreet et, tortor lectus enim urna. </p>
                    <div>
                        <input onChange={(e) => setMsg({ ...msg, fullname: e.target.value })} type="text" placeholder="Your Fullname" />
                        <input onChange={(e) => setMsg({ ...msg, email: e.target.value })} type="email" placeholder="Email" />
                        <input onChange={(e) => setMsg({ ...msg, subject: e.target.value })} type="text" placeholder="Subject" />
                        <button onClick={messageHandler}>
                            <FormattedMessage id='Send' defaultMessage='Send'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ToastContainer />
</section>
  )
}

export default Contact