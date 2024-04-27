import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    {/* // <div className='flex w-3/4  mx-auto'> */}
      <div className='w-3/5 mt-16 mx-auto'>
        <span className='block text-4xl'>Hi !</span>
        <span className='block text-4xl'>Welcome to Samyak's Workflow </span>
        <span className='block text-2xl'>Please choose options from below </span>
        <div className='flex justify-around mt-16'>
        <Link className=' w-2/5 bg-sky-50  p-10 text-center rounded-lg hover:scale-125 transition duration-300' to='work-flow-builder'> Build WorkFlow</Link>
        <Link className=' w-2/5 bg-orange-200 p-10 text-center rounded-lg hover:scale-125 transition duration-300' to='work-flow-execution'>Execute WorkFlow</Link>
        </div>
        
      </div>
      {/* <div className=''>
        
      </div> */}
     {/* </div> */}
    </>
  )
}

export default Home