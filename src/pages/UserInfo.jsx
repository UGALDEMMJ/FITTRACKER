import React, { useState, useEffect } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { supabase } from '../backend/client';

const getUserEmail = async () => {
  
  const {data, error} = await supabase.auth.getUser();
  if (error) {
    console.log('Error:', error.message);
    return null;
  }
  const emailUser = data.user.email;
  return emailUser;
}

const UserInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    bodyFatPercent: '',
    gender: '',
    muscleMass: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, age, weight, height, bodyFatPercent, gender, muscleMass } = formData;

    try {

      const { data: dataUser, error: errorUser } = await supabase
        .from('users')
        .insert([
          {
            name: name,
            email: await getUserEmail(),
            web: '',
            age: parseInt(age),
            gender: gender,
          }
        ])
        .select()

      if (errorUser) {
        console.log(errorUser.message);
      } else {
        console.log("Data inserted successfully");
      }

      const userId = dataUser[0].id;

      const { data, error } = await supabase
        .from('user-weights')
        .insert([
          {
            id_user: userId,
            weight: parseFloat(weight),
            height: parseFloat(height),
            body_fat_ptg: parseFloat(bodyFatPercent),
            muscle_mass: parseFloat(muscleMass),
          }
        ])
        .select()

      if (error) {
        console.log(error.message);
      } else {
        console.log("Data inserted successfully");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(formData);
  }

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
      
      <div className='flex flex-col h-fit tabBig:h-screen tabBig:flex-row mt-4 '>
        {/* Left side */}
        <div className='w-full h-full lg:w-1/2 bg-gray-100 
        flex flex-col justify-center items-center p-10 '>
          <h1 className='text-4xl font-bold mb-5 '>FITTRACKER<span className='text-yellow-500'>.</span></h1>
          <p className='text-lg text-center mb-10 font-semibold leading-relaxed'>{text}</p>
          <img src='/img/FTWeb.svg' alt='FitrackerIcon' className='w-32 h-32 rounded-xl' />
        </div>

        {/* Right side */}
        <div className='w-full lg:w-1/2 bg-white flex flex-col justify-center items-center p-8'>
          <form onSubmit={handleSubmit} className='w-full max-w-md space-y-2 mt-15'>
            <h2 className='text-2xl fo  nt-semibold mb-6 text-center'>Complete the form below to get started</h2>
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                className="border border-gray-300 rounded-lg p-2"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="age" className="mb-2 font-medium">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                className="border border-gray-300 rounded-lg p-2"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="weight" className="mb-2 font-medium">Weight (lb)</label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                className="border border-gray-300 rounded-lg p-2"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="height" className="mb-2 font-medium">Height (ft)</label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                className="border border-gray-300 rounded-lg p-2"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="gender" className="mb-2 font-medium">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2"
                required>

                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="prefer not to say">Prefer not to say</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="bodyFatPercent" className="mb-2 font-medium">Body Fat Percent(%)</label>
              <input
                type="number"
                id="bodyFatPercent"
                name="bodyFatPercent"
                value={formData.bodyFatPercent}
                className="border border-gray-300 rounded-lg p-2"
                onChange={handleChange}
                required

              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="bodyFatPercent" className="mb-2 font-medium">Muscle Mass(%)</label>
              <input
                type="number"
                id="muscleMass"
                name="muscleMass"
                value={formData.muscleMass}
                className="border border-gray-300 rounded-lg p-2"
                onChange={handleChange}
                required

              />
            </div>


            <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default UserInfo