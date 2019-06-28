import React, {useState} from 'react'
import { Link } from "gatsby"
import style from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import logo from "../images/logo.svg"
const Navbar = () => {
const [isOpen, setNav] = useState(false)
const toggleNav = ()=> {
    setNav(isOpen => !isOpen)
}
  return (
    <nav className={style.navbar}>
        <div className={style.navCenter}>
            <div className={style.navHeader}>
                <img src={logo} alt="logo" />
                <button type="button" className={style.logoBtn} onClick={toggleNav}>
                    <FaAlignRight className={style.logoIcon} /> 
                </button>
            </div>
            <ul className={isOpen?`${style.navLinks} ${style.showNav}`:`${style.navLinks}`}>
            {links.map((item,index)=>{
                return(<li key={index}><Link to={item.path}>{item.text}</Link> </li>)
            })}
            </ul>
            <div className={style.navSocialLinks}>
            {socialIcons.map((item,index)=>{
                return <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" >{item.icon}</a>
            })}
            </div>
        </div>
    </nav>
  )
}

export default Navbar
