import React from 'react'
import '../images/Branch-One.jpeg'
import '../images/Branch-Two.jpeg'

const Branches = (props) => {
    return (
        <section className='w-[48%]'>
            <img src={props.image} alt="" />

            <div className='py-4 font-["Poppins"] text-xl'>
                <h5>{props.title1}</h5>
                <h5>{props.title2}</h5>
            </div>

            <div className='font-["Poppins"] text-[18px]'>
                <span>Address:</span>
                <span className='font-normal'> {props.address}</span>
                <br />
                <span className='font-normal'>{props.city}</span>
                <br />
                <span className='font-normal'>{props.pincode}</span>
                <br />
                <span>Email:</span>
                <span className='font-normal'> {props.email}</span>
                <br />
                <span>Instagram:</span>
                <span className='font-normal'> {props.instagram}</span>
                <br />
                <span>Phone:</span>
                <span className='font-normal'> {props.phone}</span>
            </div>
        </section>
    )
}

export default Branches