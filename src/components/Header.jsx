import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className='w-full fixed top-0 left-0 z-10'>
        <div className='flex justify-between items-center bg-blue-500 w-full'>
            {/* <h1 className='text-white text-2xl'>My App</h1> */}
            <NavBar />
        </div>
    </header>
  )
}

export default Header