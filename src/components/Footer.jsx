import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-yellow-500 text-black py-4 flex flex-wrap justify-center items-center'>
            <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center px-4'>
                <div className='text-sm text-center sm:text-left mb-4 sm:mb-0'>
                    <p>© 2024 FITTRACKER. Todos los derechos reservados.</p>
                </div>
               
            </div>
        </footer>
    );
}

export default Footer