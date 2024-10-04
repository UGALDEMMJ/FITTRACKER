import { supabase } from '../backend/client'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import AuthButton from '../components/AuthButton'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()


    const handleSubmit = async (e) => {

        e.preventDefault();
        setErrorMessage('');

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            })
            if (error) {
                setErrorMessage(error.message)
            } else {
                console.log("Login existoso", data)
            }
        } catch (error) {
            setErrorMessage('Unexpected error occurred. Please try again.');
        }

    };

    const handleGithubSignUp = async () => {
        const { user, session, error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
        });

        if (error) {
            console.error('Error signing in with Google:', error);
        } else {
            console.log('User signed in with Google:', user);
        }
    };

    return (
        <>
            <div className='bg-white'>
                <div className='flex h-screen flex-col items-center justify-center bg-gray-100'>
                    <div className='w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg'>
                        <header className='rounded-t-lg bg-yellow-500 p-4'>
                            <h1 className='text-center text-3xl font-bold text-black '>FITTRACKER</h1>
                        </header>
                        <div className='mb-8 space-y-3'>
                            <p className='text-xl font-bold text-center my-10'>Login to start your weight tracking journey</p>
                        </div>
                        <div className="flex flex-rows items-center space-x-4">
                          
                            <AuthButton
                                onClick={handleGithubSignUp}
                                icon={FaGithub}
                                label="Sign up with Github"
                            />

                        </div>
                        {errorMessage && <p className='text-red-500 text-center mb-4'>{errorMessage}</p>}

                        <form className='w-full' onSubmit={handleSubmit}>
                            <div className='mb-10 space-y-3'>
                                <div className='space-y-1'>
                                    <div className='space-y-2'>
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email"></label>
                                        <input className="border rounded-md h-10 w-full  py-2 text-sm focus:outline-none focus:ring-2 disabled:opacity-50 px-4" id="email" placeholder="Email" name="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className='space-y-2'>
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email"></label>
                                        <input className="border rounded-md h-10 w-full  py-2 text-sm focus:outline-none focus:ring-2 disabled:opacity-50 px-4" id="password" placeholder="Password" name="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <button className="flex h-10 w-full items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90 focus:outline-none focus:ring-2 disabled:opacity-50" type="submit">Login</button>
                            </div>
                        </form>
                        <div className="text-center">
                            No account? <Link className='text-blue-500' to={'/signup'}>Create One</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login