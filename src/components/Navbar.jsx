import React from 'react'
import { Link } from 'react-scroll'
import logo from '../images/Logo.png'

const Navbar = () => {
    return (
        <nav className='w-full h-[12vh] bg-[#161616] text-white fixed z-10 overflow-hidden flex justify-between items-center p-[15px]'>
            <Link to="header" spy={true} smooth={true} offset={50} duration={1000}><img src={logo} alt="Logo" className='w-[70px] h-[60px] cursor-pointer' /></Link>
            <ul className='flex justify-between items-center w-[40%] h-full text-lg font-["Poppins"]'>
                <li className='cursor-pointer'><Link to="first" spy={true} smooth={true} offset={50} duration={2000}>Who are we?</Link></li>
                <li className='cursor-pointer'><Link to="products" spy={true} smooth={true} offset={50} duration={2000}>Products</Link></li>
                <li className='cursor-pointer'><Link to="branches" spy={true} smooth={true} offset={50} duration={2000}>branches</Link></li>
                <li className='cursor-pointer'><Link to="#" spy={true} smooth={true} offset={50} duration={2000}><button className='bg-[#f87107] rounded-[50px] px-[20px] py-[15px]'>Franchising</button></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar