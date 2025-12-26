'use server'
import connectDB from "@/lib/connectDB";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export const loginAction = async (prevState: any, formData: FormData) => {
    const email = formData.get('email') as string;
    const plainPass = formData.get('password') as string;

    await connectDB();

    const user = await User.findOne({ email });

    if (!user) {
        return { error: 'Invalid Credentials' };
    }

    if (user.role !== 'Admin') {
        return { error: 'Access Denied' };
    }

    const isMatch = await bcrypt.compare(plainPass, user.password);

    if (!isMatch) {
        return { error: 'Invalid Credentials' };
    }

    redirect("/admin/dashboard");
}