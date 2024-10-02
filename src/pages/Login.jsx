import React, { useState } from 'react'
import { supabase } from '../backend/client'
const Login = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result =await supabase.auth.signIn({ email })
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    name='email'
                    placeholder='youremail@correo.com'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button>Send</button>
            </form>
        </div>
    )
}

export default Login