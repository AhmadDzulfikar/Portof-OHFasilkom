import React from 'react'

import satu from '../assets/portofolio/satu.png'
import dua from '../assets/portofolio/dua.png'
import tiga from '../assets/portofolio/tiga.png'
import empat from '../assets/portofolio/empat.png'
import lima from '../assets/portofolio/lima.png'
import enam from '../assets/portofolio/enam.png'
import perpuz from '../assets/portofolio/perpuz.png'
import wildan from '../assets/portofolio/wildan.png'


const Experience = () => {

    const techs = [
        {
            id: 1,
            src: satu,
            title: 'SATU',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: dua,
            title: 'DUA',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: tiga,
            title: 'TIGA',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: empat,
            title: 'EMPAT',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: lima,
            title: 'LIMA',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: enam,
            title: 'ENAM',
            style: 'shadow-black'
        },
        {
            id: 7,
            src: perpuz,
            title: 'PERPUZ',
            style: 'shadow-pink-500'
        },
        {
            id: 8,
            src: wildan,
            title: 'WILDAN',
            style: 'shadow-gray-400'
        },
    ]

    
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-300 to-white w-full h-screen'
    >
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black'>
        <div 
                    className="text-gradient font-secondary"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    data-aos-delay="0"
                >
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>
        </div>

        
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {techs.map(({id, src, title, style}) => (
                    <div key={id}
                    className={`shadow-md hover:scale-105 duration-500 
                    py-2 rounded-lg ${style}`}
                    >
                    <img src={src} alt='' className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience