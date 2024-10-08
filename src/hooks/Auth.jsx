import { useContext, useState, useEffect, createContext } from 'react'
import { supabase } from '../backend/client'

const AuthContext = createContext({
    session: null,
    user: null,
    signOut: () => {},
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const setData = async () => {
            const { data: { session }, error } = await supabase.auth.getSession();
            if (error) {
                console.log(error);
            }
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);
        }

        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);
        })

        setData();

        return () => {
            listener?.subscription.unsubscribe();
        }
    }, [])

    const value = {
        session,
        user,
        signOut: () => supabase.auth.signOut(),
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}