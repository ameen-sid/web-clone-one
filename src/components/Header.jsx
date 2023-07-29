import React from 'react'
import backgroundImage from '../images/Header-background.jpeg'

const Header = () => {
    return (
        <header id='header' className='w-full h-screen bg-[#161616] text-white relative overflow-hidden flex justify-between'>
            <div className='w-[50%] flex flex-col justify-center gap-5 px-[60px]'>
                <h1 className='font-["Poppins"] text-6xl font-bold'>Hot and fresh mussels in pots.</h1>
                <a href="#products"><button className='rounded-[50px] px-[30px] py-[15px] border-[3px] text-xl border-inherit bg-black w-[150px]'>Products</button></a>
            </div>
            <div className='w-[50%]'>
                <img src={backgroundImage} alt="Background Image" />
            </div>
        </header>
    )
}

export default Header