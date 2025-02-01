

import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/utils/db";
import { nanoid } from "nanoid";


import { authOptions } from '@/app/options';

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

//https://github.com/nextauthjs/next-auth/issues/8766