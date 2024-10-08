import { supabase } from "../backend/client";

const LogOutButton = () => {
    const handleLogOut = async () => {
        try {
            await supabase.auth.signOut();
            window.location.href = '/login';
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogOut}>Log out</button>
    )
};

export default LogOutButton;