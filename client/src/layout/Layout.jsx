import React from 'react'
import Header from '../components/Header/Navbar'
import Footer from '../components/Footer/Footer'
import HomePage from '../pages/HomePage'
import { IntlProvider } from "react-intl";
import az from "../languages/az.json";
import en from "../languages/en.json";
import ru from "../languages/ru.json";
import { useState, useEffect } from 'react';
import axios from 'axios'
import Login from '../pages/Admin/Login';


const messages = {
  az: az,
  en: en,
  ru: ru
};

const Layout = (props) => {
  const [locale, setLocale] = useState("en");
  const [data, setData] = useState()


  function handleLocaleChange(e) {
    setLocale(e);
  }
  useEffect(() => {
    const getMessages = async () => {
        await axios.get('http://localhost:5000/api/settings/all')
        .then(res =>{
            setData(res.data[0])
        })
        .catch(err => console.log(err))
    }
    getMessages()
}, [])

  if(!data) {
    return ''
}

 


  return (
    <div className="layout">

<IntlProvider locale={locale} messages={messages[locale]}>
      <Header/>
          {
            window.location.pathname === '/login' ? <Login /> : window.location.pathname === '/' ? <HomePage data={data} /> : 'Not Found 404'
          }
        <Footer data={data.footerText} value={locale} onChange={handleLocaleChange}/>
    </IntlProvider>
        
    </div>
  )
}

export default Layout