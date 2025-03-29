import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// prisma object to js object conversion
export function prismaToJs<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}
// format numbers w decimals
export function formatNumber(num: number): string {
  const [int, decimal] = num.toString().split('.');
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`;
}

// format errors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function formatErrors(error: any) {
  if (error.name === 'ZodError') {
    //Handle ZodError
    return Object.keys(error.error)
      .map((field) => error.error[field].message)
      .join('. ');
  } else if (
    error.name === 'PrismaClientKnownRequestError' &&
    error.code === 'P2002'
  ) {
    //Handle PrismaClientKnownRequestError
    return error.meta?.target
      ? error.meta.target[0].charAt(0).toUpperCase() +
          error.meta.target[0].slice(1)
      : 'Field';
  } else {
    return typeof error.message === 'string'
      ? error.message
      : JSON.stringify(error.message);
  }
}

