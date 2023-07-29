import React from 'react'

const Product = ({ image, title }) => {
    return (
        <div>
            <img src={image} alt="Product Image" />
            <h4 className='text-center py-4 font-["Poppins"] text-[20px]'>{title}</h4>
        </div>
    )
}

export default Product