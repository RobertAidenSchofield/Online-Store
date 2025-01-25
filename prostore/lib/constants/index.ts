export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'ProStore';
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'Modern store, built with Next.js, ShadCN and Prisma';
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
export const LATEST_PRODS_LIMIT = Number(process.env.LATEST_PRODS_LIMIT) || 4;

export const signInDefaultValues = {
  email: '',
  password: '',
};

