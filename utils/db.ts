// import { PrismaClient } from '@prisma/client';

// const prismaClientSingleton = () => {
//   return new PrismaClient();
// };

// type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClientSingleton | undefined;
// };

// const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// export default prisma;

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
const globalForPrisma = global as unknown as { prisma: PrismaClient };
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });
export default prisma;
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
