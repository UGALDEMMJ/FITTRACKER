import React from 'react'
import LogOutButton from './LogOutButton'
const Header = () => {
    return (
        <header className='w-full bg-yellow-500 p-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <h1 className='text-2xl sm:text-3xl font-bold text-black mb-4'>FITTRACKER</h1>
                <LogOutButton />
            </div>
        </header>
    )
}

export default Header