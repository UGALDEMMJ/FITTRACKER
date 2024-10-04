import React from 'react'
import { supabase } from '../backend/client'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthButton from '../components/AuthButton';
import { FaGithub } from 'react-icons/fa';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);



    const handleGithubSignUp = async () => {
        setLoading(true);
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
        });

        if (error) {
            setErrorMessage(error.message);
        }
        setLoading(false);
    };


    const handleEmailSignUp = async () => {
        e.preventDefault();
        setErrorMessage('');

        const {error} = await supabase.auth.signUp({
            email,
        });

        if (error) {
            setErrorMessage(error.message);
        }else{
            console.log("Se ha enviado un enlace magico a:", email);
        }
    }

    return (
        <>
            <div className='bg-white'>
                <div className='flex h-screen flex-col items-center justify-center bg-gray-100'>
                    <div className='w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg'>
                        <header className='rounded-t-lg bg-yellow-500 p-4'>
                            <h1 className='text-center text-3xl font-bold text-black '>FITTRACKER</h1>
                        </header>
                        <div className='mb-8 space-y-3'>
                            <p className='text-xl font-bold text-center my-10'>Enter your email to get the magic link to create an account</p>
                        </div>
                        <div className="flex flex-rows items-center space-x-4">
                          
                            <AuthButton
                                onClick={handleGithubSignUp}
                                icon={FaGithub}
                                label="Sign up with Github"
                            />

                        </div>
                        {errorMessage && <p className='text-red-500 text-center mb-4'>{errorMessage}</p>}

                        <form className='w-full' onSubmit={handleEmailSignUp}>
                            <div className='mb-10 space-y-3'>
                                <div className='space-y-1'>
                                    <div className='space-y-2'>
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email"></label>
                                        <input className="border rounded-md h-10 w-full  py-2 text-sm focus:outline-none focus:ring-2 disabled:opacity-50 px-4" id="email" placeholder="Email" name="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                  
                                </div>
                                <button className="flex h-10 w-full items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90 focus:outline-none focus:ring-2 disabled:opacity-50" type="submit">Send Email</button>
                            </div>
                        </form>
                        <div className="text-center">
                            Had an account already? <Link className='text-blue-500' to={'/signup'}>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup