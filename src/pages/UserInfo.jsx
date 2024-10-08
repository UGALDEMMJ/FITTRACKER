import React, { useState, useEffect } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import LogOutButton from '../components/LogOutButton';
import Footer from '../components/Footer';


const UserInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    bodyFatPercent: '',
    gender: '',
    muscleMassPercent: '',
  });


  const [text] = useTypewriter({
    words: [
      'Welcome to FITTRACKER!',
      'Your ultimate companion for monitoring and enhancing your health.',
      'With FITTRACKER, effortlessly track your health metrics and achieve your fitness goals.',
      'Get started by entering your information below!'
    ],
    loop: false, // Número de repeticiones (0 = no se repite)
    delaySpeed: 2000, // Tiempo de espera entre repeticiones
    typeSpeed: 100, // Velocidad de escritura
  });




  return (
    <>
      <header className='w-full bg-yellow-500 p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <h1 className='text-2xl sm:text-3xl font-bold text-black mb-4'>FITTRACKER</h1>
          <LogOutButton />
        </div>
      </header>
      <div className='flex flex-col h-fit sm:h-screen sm:flex-row mt-4'>
        {/* Left side */}
        <div className='w-full h-full sm:w-1/2 bg-gray-100 flex flex-col justify-center items-center p-10'>
          <h1 className='text-4xl font-bold mb-5 '>FITTRACKER</h1>
          <p className='text-lg text-center mb-10 font-semibold leading-relaxed'>{text}</p>
          <img src='/img/FTWeb.svg' alt='FitrackerIcon' className='w-32 h-32 rounded-xl' />
        </div>

        {/* Right side */}
        <div className='w-full sm:w-1/2 bg-white flex flex-col justify-center items-center p-10'>
          <form className='w-full max-w-md space-y-6 mt-15'>
            <h2 className='text-2xl fo  nt-semibold mb-4 text-center'>Complete the form below to get started</h2>
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"


                className="border border-gray-300 rounded-lg p-2"

              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="age" className="mb-2 font-medium">Age</label>
              <input
                type="number"
                id="age"
                name="age"


                className="border border-gray-300 rounded-lg p-2"

              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="weight" className="mb-2 font-medium">Weight (lb)</label>
              <input
                type="number"
                id="weight"
                name="weight"


                className="border border-gray-300 rounded-lg p-2"

              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="height" className="mb-2 font-medium">Height (ft)</label>
              <input
                type="number"
                id="height"
                name="height"


                className="border border-gray-300 rounded-lg p-2"

              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="gender" className="mb-2 font-medium">Gender</label>
              <input
                type='text'
                id="gender"
                name='gender'


                className="border border-gray-300 rounded-lg p-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="bodyFatPercent" className="mb-2 font-medium">Corporal Fat Percentage(%)</label>
              <input
                type="number"
                id="bodyFatPercent"
                name="bodyFatPercent"


                className="border border-gray-300 rounded-lg p-2"

              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="bodyFatPercent" className="mb-2 font-medium">Muscle Mass(%)</label>
              <input
                type="number"
                id="bodyFatPercent"
                name="bodyFatPercent"


                className="border border-gray-300 rounded-lg p-2"

              />
            </div>


            <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default UserInfo