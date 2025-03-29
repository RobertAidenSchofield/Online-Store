import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { APP_NAME } from '@/lib/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import CredentialsSignupForm from './credentials-signup-form';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Sign up for your account',
};
const signUpPage = async (props: {
  searchParams: Promise<{ callbackUrl: string }>;
}) => {
  const { callbackUrl } = await props.searchParams;
  const session = await auth();
  if (session) {
    redirect(callbackUrl || '/');
  }
  return (
    <div className='w-full max-w-md mx-auto'>
      <Card>
        <CardHeader className='space-y-4'>
          <Link href='/' className='flex-center'>
            <Image
              src='/images/logo.svg'
              width={100}
              height={100}
              alt={`${APP_NAME} logo`}
              priority={true}
            />
          </Link>
          <CardTitle className='text-center'>Sign Up</CardTitle>
          <CardDescription className='text-center'>
            Enter your info below to create an account
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <CredentialsSignupForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default signUpPage;

