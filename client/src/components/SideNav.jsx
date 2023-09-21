import { NavLink } from "react-router-dom"
import './Header/header.css'

const SideNav = (props) => {
  return (
    <>
           {
            props.type ? <div className="sidenav">
            <nav>
                    <a href="#">Home</a>
                    <a href="#About">About</a>
                    <a href="#Services">Services</a>
                    <a href="#Contact">Contact</a>
            </nav>
    </div> : null
           }
    </>
  )
}
export default SideNav