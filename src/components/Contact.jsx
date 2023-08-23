import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-white to-gray-400 p-4 text-gray-700'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-700'>Contact</p>
                <p className='py-6'>Submit the form to get touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/6d507e88-ee83-416a-ac8e-d8cd02fac392' method='POST' className='flex flex-col w-full md:w-1/2 text-gray-800'>
                    <input type='text' 
                    name='name' 
                    placeholder='Enter your name' 
                    className='p-2 bg-transparent border-2 rounded-md 
                    text-black focus:outline-none border-gray-700' 
                    />

                    <input type='text' 
                    name='email' 
                    placeholder='Enter your email' 
                    className='my-4 p-2 bg-transparent border-2 rounded-md 
                    text-black focus:outline-none border-gray-700' 
                    />
                    <textarea 
                    name='message' 
                    placeholder='Enter your message'
                    rows="10" className='p-2 bg-transparent border-2 rounded-md text-gray-700 border-gray-700 focus:outline-none'></textarea>

                    <button className='text-white bg-gradient-to-b 
                    from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center
                    rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact