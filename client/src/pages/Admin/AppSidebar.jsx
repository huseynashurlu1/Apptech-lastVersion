import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Link, useNavigate } from 'react-router-dom';
import { GoDot } from 'react-icons/go'
import { PiDotDuotone } from 'react-icons/pi'
import { BiLogOutCircle } from 'react-icons/bi'

const AppSidebar = () => {
    const navigate = useNavigate()

    const logoutHandler = () => {
        localStorage.removeItem('token');
        navigate('/')
        window.location.reload()
    }
  return (
    <div className='appSidebar'>
        <div className="container">
        <Link className='main-page-link' to='/admin'><PiDotDuotone /> Ana Səhifə</Link>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header><PiDotDuotone /> Göndərilənlər</Accordion.Header>
                <Accordion.Body>
                <Link to='/admin/messages'><GoDot /> Bütün mesajlar</Link>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Accordion>
            <Accordion.Item eventKey="1">
                <Accordion.Header><PiDotDuotone /> Kontent</Accordion.Header>
                <Accordion.Body>
                <Link to='/admin/settings'><GoDot /> Bütün kontent</Link>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <button onClick={logoutHandler}><BiLogOutCircle /> Çıxış</button>
        </div>
    </div>
  )
}

export default AppSidebar