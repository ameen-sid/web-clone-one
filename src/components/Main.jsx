import React from 'react'
import ProductSection from './ProductSection'
import data from './Products.json'
import '../images/Background.png'
import '../images/Main-First-Background.jpeg'

const Main = () => {
    return (
        <main id="first" className='w-full h-[475vh] py-[20vh] relative overflow-hidden flex flex-col gap-[5vh] bg-[url("/src/images/Background.png")]'>
            <section className='w-[90%] h-[90vh] relative overflow-hidden mx-auto bg-cover bg-[url("/src/images/Main-First-Background.jpeg")]'>
                <div className='w-[50%] opacity-[.90] absolute top-[65px] right-0 font-["Poppins"] bg-white px-[60px] py-[35px]'>
                    <h3 className='text-[38px] font-bold'>Who are we?</h3>
                    <p className='text-lg'>Cookware Mussels is the first stop of street flavors we established with the name Seyyarhane. We produce the mussels that we receive live from the relevant ministry approved farms in our manufacturing site in accordance with the Turkish Food Codex and as “ daily ” and refer them to our branches.</p>
                    <p className='text-lg'>In addition to the traditional flavor, we bring a new breath to the street kitchen with our different recipes, always warm, fresh and special baked pot mussels for you at any time.</p>
                </div>
            </section>

            <ProductSection title={data[0].title} data={data[0].data} />

            <section className='w-full h-[76vh] my-[10vh] bg-cover bg-[url("/src/images/Full-Background.jpeg")]'></section>

            <ProductSection title={data[1].title} data={data[1].data} />
        </main>
    )
}

export default Main