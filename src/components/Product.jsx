import React from 'react'
import '../images/Product-One.jpeg'
import '../images/Product-Two.jpeg'
import '../images/Product-Three.jpeg'
import '../images/Product_Four.jpeg'
import '../images/Product-Five.jpeg'
import '../images/Product-Six.jpeg'
import '../images/Other-Product-One.jpeg'
import '../images/Other-Product-Two.jpeg'
import '../images/Other-Product-Three.jpeg'
import '../images/Other-Product-Four.jpeg'
import '../images/Other-Product-Five.jpeg'

const Product = ({ image, title }) => {
    return (
        <div>
            <img src={image} alt="Product Image" />
            <h4 className='text-center py-4 font-["Poppins"] text-[20px]'>{title}</h4>
        </div>
    )
}

export default Product