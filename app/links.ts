import prisma from '@/lib/db';
import type {Prisma} from '@prisma/client';

export default async function getNavLinks() {
  return await prisma.category.findMany({
    orderBy: [
      {
        rank: 'asc',
      }
    ],
    include: {
      links: {
        orderBy: {
          rank: 'asc',
        },
        where: {
          public: true,
          status: 1,
        },
      },
    },
  });
}

export type CategoryWithLinks = Prisma.PromiseReturnType<typeof getNavLinks>
