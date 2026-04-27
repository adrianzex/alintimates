import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xxccppdodfqizzlanezz.supabase.co'
const supabaseKey = 'sb_publishable_2sHROEvTMcOqbymIAOyzIA_XduuQ9l-'

export const supabase = createClient(supabaseUrl, supabaseKey)