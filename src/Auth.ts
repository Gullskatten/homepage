import { supabase } from './supabaseClient'

export async function signInWithFacebook() {
    return supabase.auth.signInWithOAuth({
      provider: 'facebook',
    })
  }

  export async function signout() {
    return supabase.auth.signOut()
  }