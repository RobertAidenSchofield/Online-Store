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

