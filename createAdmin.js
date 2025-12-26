import bcrypt from 'bcryptjs';
import connectDB from "./lib/connectDB"; // Ensure path is correct
import User from "./models/user.model";       // Don't forget to import the model!

export const createAdmins = async () => {
    try {
        await connectDB();

        // Data for your 2 admins
        const adminData = [
            { name: "Admin One", email: "admin1@example.com", password: "SecurePassword1!" },
            { name: "Admin Two", email: "admin2@example.com", password: "SecurePassword2!" }
        ];

        for (const admin of adminData) {
            const existingAdmin = await User.findOne({ email: admin.email });

            if (!existingAdmin) {
                const salt = await bcrypt.genSalt(12);
                const hashedPassword = await bcrypt.hash(admin.password, salt);

                await User.create({
                    name: admin.name,
                    email: admin.email,
                    password: hashedPassword,
                    role: "Admin",
                });
                console.log(`Admin ${admin.email} created.`);
            } else {
                console.log(`Admin ${admin.email} already exists.`);
            }
        }

        return { success: true, message: "Admin setup sequence complete." };
    } catch (error) {
        console.error("Error creating admins:", error);
        return { success: false, error: "Internal Server Error" };
    }
}