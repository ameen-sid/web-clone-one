import React from 'react'
import Branches from './Branches'
import data from './Branches.json'
import footerImage from '../images/Footer-Image.png'

const Footer = () => {
    return (
        <footer id="branches" className='w-full h-[175vh] flex text-[#333333] flex-col gap-[20vh] bg-[url("/src/images/Background.png")]'>
            <section className='w-[80%] mx-auto flex flex-col items-center font-bold gap-[5vh]'>
                <h3 className='font-["Poppins"] text-[38px]'>Visit us</h3>
                <div className='flex gap-[1vw]'>
                    
                    {data.map((e) => {
                        return (
                            <Branches 
                                image={e.image}
                                title1={e.title1}
                                title2={e.title2}
                                address={e.address}
                                city={e.city}
                                pincode={e.pincode}
                                email={e.email}
                                instgram={e.instagram}
                                phone={e.phone}
                            />
                        )
                    })}

                </div>
            </section>

            <section className='flex flex-col justify-center items-center gap-[15vh]'>
                <h3 className='font-["Poppins"] text-[38px] font-bold'>Instagram</h3>
                <img src={footerImage} alt="" className='w-[8vw] cursor-pointer' />
            </section>
        </footer>
    )
}

export default Footer