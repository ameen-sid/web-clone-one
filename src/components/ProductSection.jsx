import React from 'react'
import ProductContainer from './ProductContainer'

const ProductSection = ({ title, data }) => {
    return (
        <section id="products" className='w-[80%] mx-auto flex flex-col items-center font-bold gap-[5vh]'>
            <h1 className='font-["Poppins"] text-[38px]'>{title}</h1>
            <ProductContainer data={data}/>
        </section>
    )
}

export default ProductSection