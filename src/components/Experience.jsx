import React from 'react'

import html from '../assets/portofolio/html.png'
import css from '../assets/portofolio/css.png'
import javascript from '../assets/portofolio/javascript.png'
import python from '../assets/portofolio/python.png'
import laravel from '../assets/portofolio/laravel.png'
import myadmin from '../assets/portofolio/myadmin.png'
import github from '../assets/portofolio/github.png'
// import wildan from '../assets/portofolio/wildan.png'


const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: python,
            title: 'PYTHON',
            style: 'shadow-blue-400'
        },
        {
            id: 5,
            src: laravel,
            title: 'LARAVEL',
            style: 'shadow-red-400'
        },
        {
            id: 6,
            src: myadmin,
            title: 'MyAdmin',
            style: 'shadow-orange-300'
        },
        {
            id: 7,
            src: github,
            title: 'GITHUB',
            style: 'shadow-black'
        },
        // {
        //     id: 8,
        //     src: wildan,
        //     title: 'WILDAN',
        //     style: 'shadow-gray-400'
        // },
    ]

    
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-300 to-white w-full h-screen'
    >
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-700'>
        <div 
                    className="text-gradient font-secondary"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    data-aos-delay="0"
                >
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-700 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
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
    </div>
  )
}

export default Experience