import { createClient } from '@supabase/supabase-js';

// Acceder a las variables de entorno
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Crear el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);