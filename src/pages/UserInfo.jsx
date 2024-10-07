import React, { useState, useEffect } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


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
          <h1 className='text-2xl sm:text-3xl font-bold text-black'>FITTRACKER</h1>
        </div>
      </header>
      <div className='flex flex-col sm:flex-row h-screen'>
        {/* Left side */}
        <div className='w-full sm:w-1/2 bg-gray-100 flex flex-col justify-center items-center p-10'>
          <h1 className='text-4xl font-bold mb-5 '>FITTRACKER</h1>
          <p className='text-lg text-center mb-10 font-semibold'>{text}</p>
          <img src='/img/FTWeb.svg' alt='FitrackerIcon' className='w-32 h-32' />
        </div>

        {/* Right side */}
        <div className='w-full sm:w-1/2 bg-white flex flex-col justify-center items-center p-10'>
          <h2 className='text-3xl font-semibold mb-8'>Complete the form below to get started</h2>
          <form className='w-full max-w-md space-y-6'>
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-medium">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"


                className="border border-gray-300 rounded-lg p-2"

              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="age" className="mb-2 font-medium">Edad</label>
              <input
                type="number"
                id="age"
                name="age"


                className="border border-gray-300 rounded-lg p-2"

              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="weight" className="mb-2 font-medium">Peso (kg)</label>
              <input
                type="number"
                id="weight"
                name="weight"


                className="border border-gray-300 rounded-lg p-2"

              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="height" className="mb-2 font-medium">Altura (cm)</label>
              <input
                type="number"
                id="height"
                name="height"


                className="border border-gray-300 rounded-lg p-2"

              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="bodyFatPercent" className="mb-2 font-medium">Porcentaje de grasa corporal (%)</label>
              <input
                type="number"
                id="bodyFatPercent"
                name="bodyFatPercent"


                className="border border-gray-300 rounded-lg p-2"

              />
            </div>

            <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default UserInfo