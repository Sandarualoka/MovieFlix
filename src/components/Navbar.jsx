import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
        <h1 className='text-red-600 cursor-pointer font-bold text-4xl'>MovieFlix</h1>
            <div>
                <button className='text-white pr-4'>Sign In</button>
                <button className='bg-red-600 px-6 py-2 rounded text-white'>Sign Up</button>
            </div>
    </div>
    
    
  )
}

export default Navbar