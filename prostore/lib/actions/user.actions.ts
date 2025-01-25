'use server';

import { signInSchema } from '../validators';
import { signIn, signOut } from '@/auth';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

//sign in user with creds
export async function signInUserWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const user = signInSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    await signIn('credentials', user);
    return { success: true, message: 'User signed in successfully' };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: 'Invalid email or password' };
  }
}
//sign out user
export async function signOutUser() {
  await signOut();
  return { success: true, message: 'User signed out successfully' };
}

// Other routes...

