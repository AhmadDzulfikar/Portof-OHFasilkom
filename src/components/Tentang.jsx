import React from 'react'

const Tentang = () => {
    return (
        <div name="about" 
        className='w-full h-screen bg-gradient-to-b
        from-gray-200 to-white  text-gray-700'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div 
                    className="text-gradient font-secondary"
                    data-aos="zoom-out"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    data-aos-delay="0"
                >
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-gray-700'>About Me</h2>
                </div>
                </div>

                <div 
                    className="text-gradient font-secondary"
                    data-aos="zoom-out"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    data-aos-delay="0"
                >
                <p className='text-xl mt-20'>
                I come from a vocational high school majoring in Software Engineering and now a student at the University of Indonesia majoring in Computer Science. I had an internship for six months at PT. Solusi Intek Indonesia in the Web developer division, I am also competent in the Professional Certification Institute and received a competent certificate from BNSP.
                I've been learning the PHP programming language with the Laravel framework for about 1 year and now I'm learning to use ReactJs and python.
                </p>

                <br />

                <p className='text-xl'>
                I come from a vocational high school majoring in Software Engineering and now a student at the University of Indonesia majoring in Computer Science. I had an internship for six months at PT. Solusi Intek Indonesia in the Web developer division, I am also competent in the Professional Certification Institute and received a competent certificate from BNSP.
                I've been learning the PHP programming language with the Laravel framework for about 1 year and now I'm learning to use ReactJs and python.
                </p>
                </div>
            </div>
        </div>
    )
}

export default Tentang