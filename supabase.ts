import { createClient } from '@supabase/supabase-js'

// Pegue esses dados no seu painel do Supabase (aba API)
const supabaseUrl = 'https://xxccppdodfqizzlanezz.supabase.co'
const supabaseKey = 'sb_publishable_2sHROEvTMcOqbymIAOyzIA_XduuQ9l-' 

export const supabase = createClient(supabaseUrl, supabaseKey)