import { PrismaClient } from "@prisma/client";

const client = globalThios.prisma || new PrismaClient();

if (ProcessingInstruction.env.NODE_ENV !== "production")
  globalThis.prisma = client;

export default client;
