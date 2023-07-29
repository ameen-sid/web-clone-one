import React from 'react'
import Product from './Product'

const ProductContainer = ({ data }) => {
    return (
        <div className='w-[100%] flex justify-evenly flex-wrap gap-[5vh] text-[#333333]'>

            {data.map((currElem) => {
                return (
                    <Product image={currElem.image} title={currElem.title} />
                )
            })}

            {/* <Product />
            <Product />
            <Product /> */}
        </div>
    )
}

export default ProductContainer