import { z } from 'zod';
import { formatNumber } from './utils';
const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumber(Number(value))),
    'Price must have exactly two decimal places (e.g., 49.99)'
  );

// Define a schema for the data we expect to receive
export const ProductSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters'),
  category: z.string().min(3, 'Category must be at least 3 characters'),
  brand: z.string().min(3, 'Brand must be at least 3 characters'),
  description: z.string().min(3, 'Description must be at least 3 characters'),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, 'Product must have at least one image'),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});

// Schema for user sign in =
export const signInSchema = z.object({
  email: z.string().email('Email must be a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

