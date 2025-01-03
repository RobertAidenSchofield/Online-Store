'use server';
import { prismaToJs } from '../utils';
import { LATEST_PRODS_LIMIT } from '../constants';
import { prisma } from '@/db/prisma';

// get latest prods
export async function getLatestProds() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODS_LIMIT,
    orderBy: {
      created_at: 'desc',
    },
  });
  return prismaToJs(data);
}

// get prod by slug
export async function getProdBySlug(slug: string) {
  const data = await prisma.product.findFirst({
    where: {
      slug: slug,
    },
  });
  return prismaToJs(data);
}

