import React from 'react'
import HeroImage from '../assets/HeroImage.png'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-white via-white to-gray-500'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>

            <div 
                className="text-gradient font-secondary"
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                data-aos-delay="0"
            >
                <h5 className='text-4xl sm:text-7xl font-bold'>
                    Ahmad Dzulfikar As Shavy
                </h5>
                <p className='text-4xl sm:text-1xl pt-4 max-w-md'>
                    - Software Engginer
                </p>
                <p className='text-gray-500 py-4 max-w-md'>
                    I'm software engginer from Jakarta,I'm a software engineer from Jakarta, I have 3 years experience, 
                    I like to use PHP framework laravel and MySQL and i'm very passionate and dedicated to my work.
                </p>
                </div>

                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-600 to-cyan-800 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardDoubleArrowRight size={20}
                            className="ml-1"/>
                        </span>
                    </button>
                </div>
            </div>

            <div>
            <div 
                className="text-gradient font-secondary"
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                data-aos-delay="0"
            >
            <img src={HeroImage} alt='pp' 
            className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
            </div>

        </div>
    </div>
  )
}

export default Home