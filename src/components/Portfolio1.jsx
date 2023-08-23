import React from 'react'
import wildan from '../assets/portofolio/wildan.png'
import klorofil from '../assets/portofolio/klorofil.png'
import inventory_web from '../assets/portofolio/inventory_web.png'
import kalkulator from '../assets/portofolio/kalkulator.png'
import perpuz from '../assets/portofolio/perpuz.png'
// import enam from '../assets/portofolio/enam.png'




const Portfolio1 = () => {
    const portofolios = [
        {
            id: 1,
            src: wildan
        },
        {
            id: 2,
            src: klorofil
        },
        {
            id: 3,
            src: inventory_web
        },
        {
            id: 4,
            src: kalkulator
        },
        {
            id: 5,
            src: perpuz
        },
    ]
  return (
    <div name='portfolio' className="bg-gradient-to-b from-white to-gray-300 w-full text-gray-700 md:h-screen"
    >
    
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div 
                    className="text-gradient font-secondary"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    data-aos-delay="0"
                >
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-700'>Portfolio</p>
                <p className='py-5'>Check out this amazing project here!!!!</p>
            </div>
        </div>


        <div 
                    className="text-gradient font-secondary"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    data-aos-delay="0"
                >
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 
            px-12 sm:px-0'>
                {portofolios.map(({id, src}) => (
                    <div key={id} className='shadow-md shadow-gray-600 
                    rounded-lg'>                        
                        <img 
                        src={src} 
                        alt='' 
                        className='rounded-md duration-200 hover:scale-105'
                        />
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4
                            duration-200 hover:scale-105'>
                                Demo
                            </button>

                            <button className='w-1/2 px-6 py-3 m-4 
                            duration-200 hover:scale-105'>
                                Code
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    </div>
)
}

export default Portfolio1