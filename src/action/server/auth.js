"use server"
import bcrypt from "bcryptjs"
import { dbConnect, collections } from "@/lib/dbConnect"; // ✅ lowercase 'collections'

export const postUser = async (payload) => {
    const { email, fullName, password, confirmPassword } = payload;

    if (!email || !password || password !== confirmPassword) return null;

    // ✅ collections.USERS not Collection.USERS
    const isExist = await dbConnect(collections.USERS).findOne({ email });
    if (isExist) {
        return null;
    }

    const newUser = {
        provider: "credentials",
        fullName,
        email,
        password: await bcrypt.hash(password, 14),
        role: "user"
    };

    // ✅ collections.USERS not Collection.USERS
    const result = await dbConnect(collections.USERS).insertOne(newUser);

    if (result.acknowledged) {
        return {
            ...result,
            insertedId: result.insertedId.toString(),
        };
    }

    return null;
};