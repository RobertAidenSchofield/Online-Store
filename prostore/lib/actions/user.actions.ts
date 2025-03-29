'use server';

import { signInSchema, signUpSchema } from '../validators';
import { hashSync } from 'bcrypt-ts-edge';
import { prisma } from '@/db/prisma';
import { signIn, signOut } from '@/auth';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { formatErrors } from '@/lib/utils';

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
    return { success: true, message: 'Signed in successfully' };
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
}
// sign up user
export async function signUpUser(prevState: unknown, formData: FormData) {
  try {
    const user = signUpSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    });
    const hashedPassword = hashSync(user.password, 10);
    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
      },
    });
    await signIn('credentials', {
      email: user.email,
      password: user.password,
    });
    return { success: true, message: 'Signed up successfully' };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: formatErrors(error) };
  }
}

