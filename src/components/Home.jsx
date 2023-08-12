import React from 'react'
import HeroImage from '../assets/HeroImage.png'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-white via-white to-gray-500'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h5 className='text-4xl sm:text-7xl font-bold'>
                    Ahmad Dzulfikar As Shavy
                </h5>
                <p className='text-4xl sm:text-3xl'>
                    - Software Engginer
                </p>
                <p className='text-gray-500 py-4 max-w-md'>
                    I'm software engginer from Jakarta, and i'm
                    very passionate and dedicated to my work.
                </p>

                <div>
                    <button>
                        Portfolio
                        <span>
                            <MdOutlineKeyboardDoubleArrowRight />
                        </span>
                    </button>
                </div>
            </div>

            <div>
            <img src={HeroImage} alt='pp' 
            className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>

        </div>
    </div>
  )
}

export default Home