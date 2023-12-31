import { Link } from 'react-router-dom';
import './header.css';
import { FormattedMessage } from "react-intl";
import { useState, useEffect } from 'react';
import SideNav from '../SideNav'

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false)


    const sideHandler = () => {
        setIsOpen(!isOpen)
    }
   
  return (
    <header id="Header">
    <div className="container">
        <div className="row justify-content-between align-items-center">
            <div className="col-lg-2 col-6">
                <Link to='/'>
                <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_180_1890)">
                        <path d="M42.02 17.18H8V22.85H42.02V17.18Z" fill="#C9D644"/>
                        <path d="M27.8497 3H22.1797V37.02H27.8497V3Z" fill="#CED600"/>
                        <path d="M27.8497 3H22.1797V37.02H27.8497V3Z" fill="#CED600"/>
                        <path d="M35.0311 5.98505L10.9756 30.0406L14.9848 34.0498L39.0404 9.9943L35.0311 5.98505Z" fill="#0C0B10"/>
                        <path d="M27.8497 3H22.1797V37.02H27.8497V3Z" fill="#C9D644"/>
                        <path d="M14.9927 5.99013L10.9834 9.99939L35.0389 34.0549L39.0482 30.0457L14.9927 5.99013Z" fill="#0C0B10"/>
                        <path d="M68.5798 26.34L66.8298 22.29H58.6698L56.9198 26.34H54.0098L61.2598 9.47998H64.1898L71.4798 26.34H68.5798ZM59.8398 19.59L65.6598 19.57L62.7498 12.83L59.8398 19.59Z" fill="black"/>
                        <path d="M83.7198 15.13C84.5098 15.69 85.1398 16.46 85.6098 17.44C86.0698 18.42 86.3098 19.51 86.3098 20.72C86.3098 21.77 86.0798 22.76 85.6098 23.67C85.1398 24.58 84.5098 25.31 83.7098 25.85C82.9098 26.39 82.0198 26.66 81.0598 26.66C79.8198 26.66 78.7998 26.32 77.9998 25.63C77.1998 24.94 76.6798 23.87 76.4398 22.43H76.0798L76.2898 30.56H73.5898V14.41H76.2898L76.0798 18.31H76.4998C76.7798 17 77.3198 16.01 78.1098 15.32C78.8998 14.63 79.8799 14.29 81.0499 14.29C82.0399 14.28 82.9298 14.56 83.7198 15.13ZM81.9398 23.53C82.4698 23.24 82.8898 22.83 83.1898 22.32C83.4899 21.81 83.6398 21.23 83.6398 20.58C83.6398 19.55 83.3098 18.71 82.6498 18.06C81.9898 17.41 81.1498 17.08 80.1199 17.08C79.4699 17.08 78.8798 17.23 78.3498 17.52C77.8198 17.81 77.3898 18.22 77.0698 18.72C76.7498 19.23 76.5998 19.78 76.5998 20.39C76.5998 21.01 76.7498 21.59 77.0598 22.15C77.3698 22.71 77.7898 23.15 78.3298 23.48C78.8698 23.81 79.4598 23.98 80.1098 23.98C80.7998 23.98 81.4099 23.83 81.9398 23.53Z" fill="black"/>
                        <path d="M98.5394 15.13C99.3294 15.69 99.9594 16.46 100.429 17.44C100.889 18.42 101.129 19.51 101.129 20.72C101.129 21.77 100.899 22.76 100.429 23.67C99.9694 24.58 99.3294 25.31 98.5294 25.85C97.7294 26.39 96.8394 26.66 95.8694 26.66C94.6294 26.66 93.6094 26.32 92.8094 25.63C92.0094 24.94 91.4894 23.87 91.2494 22.43H90.8894L91.0994 30.56H88.3994V14.41H91.0994L90.8894 18.31H91.3094C91.5894 17 92.1294 16.01 92.9194 15.32C93.7094 14.63 94.6894 14.29 95.8594 14.29C96.8494 14.28 97.7394 14.56 98.5394 15.13ZM96.7594 23.53C97.2894 23.24 97.7094 22.83 98.0094 22.32C98.3094 21.81 98.4594 21.23 98.4594 20.58C98.4594 19.55 98.1294 18.71 97.4694 18.06C96.8094 17.41 95.9694 17.08 94.9394 17.08C94.2894 17.08 93.6994 17.23 93.1694 17.52C92.6394 17.81 92.2094 18.22 91.8994 18.72C91.5794 19.23 91.4294 19.78 91.4294 20.39C91.4294 21.01 91.5794 21.59 91.8894 22.15C92.1994 22.71 92.6194 23.15 93.1694 23.48C93.7094 23.81 94.2994 23.98 94.9494 23.98C95.6194 23.98 96.2194 23.83 96.7594 23.53Z" fill="black"/>
                        <path d="M107.41 22.69C107.54 23.13 107.84 23.4 108.31 23.52C108.78 23.64 109.7 23.7 111.06 23.7V26.33C108.98 26.33 107.5 26.16 106.61 25.82C105.72 25.48 105.17 24.92 104.93 24.12C104.7 23.33 104.58 22 104.58 20.15V17.09H102.26V14.39H104.58V10.3H107.21V14.39H111.02V17.09H107.21V20.15C107.22 21.41 107.29 22.26 107.41 22.69Z" fill="black"/>
                        <path d="M116.779 23.29C117.389 23.79 118.159 24.04 119.089 24.04C120.579 24.04 121.759 23.46 122.629 22.31L124.419 23.53C123.869 24.57 123.129 25.35 122.189 25.87C121.249 26.39 120.219 26.65 119.089 26.65C117.979 26.65 116.949 26.37 116.009 25.82C115.069 25.27 114.319 24.51 113.769 23.57C113.209 22.62 112.939 21.59 112.939 20.46C112.939 19.33 113.219 18.3 113.769 17.36C114.329 16.42 115.069 15.67 116.009 15.12C116.949 14.56 117.979 14.29 119.089 14.29C120.269 14.29 121.309 14.58 122.209 15.18C123.109 15.77 123.799 16.6 124.269 17.66C124.749 18.72 124.959 19.93 124.919 21.29H115.629C115.779 22.12 116.159 22.79 116.779 23.29ZM116.859 17.6C116.249 18.1 115.839 18.73 115.649 19.51H122.389C122.219 18.68 121.829 18.03 121.219 17.56C120.609 17.09 119.899 16.85 119.079 16.85C118.209 16.85 117.469 17.1 116.859 17.6Z" fill="black"/>
                        <path d="M132.55 26.65C131.44 26.65 130.43 26.37 129.53 25.82C128.62 25.27 127.91 24.51 127.4 23.57C126.89 22.62 126.63 21.59 126.63 20.46C126.63 19.33 126.89 18.3 127.4 17.35C127.91 16.4 128.62 15.65 129.53 15.11C130.44 14.56 131.44 14.29 132.55 14.29C133.93 14.29 135.11 14.58 136.09 15.15C137.07 15.73 137.84 16.56 138.39 17.64L136.3 19.07C135.77 18.28 135.23 17.74 134.69 17.44C134.15 17.14 133.51 16.99 132.76 16.99C131.75 16.99 130.92 17.31 130.28 17.96C129.64 18.61 129.32 19.44 129.32 20.47C129.32 21.55 129.64 22.4 130.27 23.03C130.9 23.66 131.73 23.97 132.76 23.97C134.15 23.97 135.27 23.35 136.11 22.12L138.24 23.55C137.13 25.61 135.23 26.65 132.55 26.65Z" fill="black"/>
                        <path d="M151.3 15.65C152.14 16.69 152.55 18.37 152.55 20.69V26.34H149.92V20.69C149.92 19.36 149.67 18.37 149.16 17.74C148.65 17.11 147.86 16.79 146.78 16.79C145.67 16.79 144.79 17.17 144.15 17.92C143.5 18.67 143.18 19.75 143.18 21.15V26.33H140.48V14.41H140.46V9.47998H143.16V14.41H143.18L142.59 18.31H142.99C143.16 17.19 143.44 16.32 143.83 15.71C144.22 15.1 144.72 14.68 145.32 14.45C145.92 14.22 146.66 14.1 147.54 14.1C149.21 14.09 150.47 14.61 151.3 15.65Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_180_1890">
                        <rect width="144.55" height="34.02" fill="white" transform="translate(8 3)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </Link>
            </div>
            <div className="col-lg-10 d-flex align-items-center justify-content-end col-2">
                <nav className='main-nav'>
                        <a href="#Header">
                            <FormattedMessage id='Homepage' defaultMessage='Homepage'/>
                        </a>
                        <a href="#About">
                            <FormattedMessage id='About us' defaultMessage='About us'/>
                        </a>
                        <a href="#Services">
                            <FormattedMessage id='Services' defaultMessage='Services'/>
                        </a>
                        <a href="#Contact">
                            <FormattedMessage id='Contact us' defaultMessage='Contact us'/>
                        </a>
                        <svg style={{cursor: 'pointer'}} onClick={sideHandler} id="hamburger-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 14H24.5M3.5 7H24.5M3.5 21H24.5" stroke="#1C1B1B" strokeWidth="2"/>
                    </svg>
                    </nav>
                   
                    <SideNav type={isOpen}/>
            </div>
        </div>
    </div>
</header>
  )
}
export default Navbar