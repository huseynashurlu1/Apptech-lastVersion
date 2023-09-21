import axios from 'axios'
import React, { useState, useEffect } from 'react'

const SiteContent = () => {
    const [data, setData] = useState([])

    useEffect(() => {
            const getContent = async () => {
                await axios.get('http://167.172.105.171:5000/api/settings/all')
                .then(res => {
                    setData(res.data[0])
                })
                .catch(err => console.log(err))
            }
            
            getContent()
    }, [])

    const updateSettings = async () => {
        console.log(data);
        try {
            await axios.put('http://167.172.105.171:5000/api/settings/:id', data);
        } catch (error) {
            console.error('Səhv baş verdi:', error);
        }
    };

  return (
    <div className='admin-content'>
        {
            data && 
            <div>
                <h3>Sayt kontenti</h3>
        <div className="col-lg-5">
            <label htmlFor="title">Title</label>
            <input onChange={(e) => setData({ ...data, title: e.target.value })} value={data.title} type="text" className='form-control'/>
        </div>
        <div className="col-lg-5">
            <label htmlFor="banner">Banner Text</label>
            <input onChange={(e) => setData({ ...data, bannerText: e.target.value })} value={data.bannerText} type="text" className='form-control'/>
        </div>
        <div className="col-lg-5">
            <label htmlFor="about">About Text</label>
            <input onChange={(e) => setData({ ...data, aboutText: e.target.value })} value={data.aboutText} type="text" className='form-control'/>
        </div>
        <div className="col-lg-5">
            <label htmlFor="contact">Contact Text</label>
            <input onChange={(e) => setData({ ...data, contactText: e.target.value })} value={data.contactText} type="text" className='form-control'/>
        </div>
        <div className="col-lg-5">
            <label htmlFor="footer">Footer Text</label> 
            <input onChange={(e) => setData({ ...data, footerText: e.target.value })} value={data.footerText} type="text" className='form-control'/>
        </div>
        <button className='btn btn-warning mt-4 text-white' onClick={updateSettings}>Update</button>
            </div>
        }
    </div>
  )
}

export default SiteContent
