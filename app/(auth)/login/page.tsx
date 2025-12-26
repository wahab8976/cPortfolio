'use client'
import React from 'react';
import { useActionState } from 'react';
import { loginAction } from '@/app/actions/login';

const LoginPage = () => {
    // 1. Initialize the action state
    // 'state' will hold the return value from your loginAction { error: '...' }
    // 'formAction' is what we pass to the form
    // 'isPending' is true while the server is processing
    const [state, formAction, isPending] = useActionState(loginAction, null);

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-black p-4">
            <div className="w-full max-w-lg bg-[#111111] border border-gray-800 p-8 rounded-3xl shadow-2xl shadow-purple-500/5 flex flex-col">

                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-white tracking-tight">Welcome Back</h2>
                    <p className="text-sm text-gray-500 mt-2">Please enter your details to sign in.</p>
                </div>

                {/* 2. Attach the formAction */}
                <form action={formAction} className="flex flex-col space-y-5">

                    {/* 3. Display error message from the server */}
                    {state?.error && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-xl text-center">
                            {state.error}
                        </div>
                    )}

                    {/* Email Field */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                        <input
                            name="email" // 4. Critical: Name must match formData.get('email')
                            type="email"
                            required
                            placeholder="name@company.com"
                            className="w-full bg-[#1a1a1a] border border-gray-800 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all placeholder:text-gray-600"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Password</label>
                        <input
                            name="password" // 4. Critical: Name must match formData.get('password')
                            type="password"
                            required
                            placeholder="••••••••"
                            className="w-full bg-[#1a1a1a] border border-gray-800 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all placeholder:text-gray-600"
                        />
                    </div>

                    <div className="flex items-center justify-between px-1">
                        <label className="flex items-center text-sm text-gray-400 cursor-pointer group">
                            <input type="checkbox" className="mr-2 accent-purple-600 w-4 h-4" />
                            <span className="group-hover:text-gray-300 transition-colors">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-purple-500 hover:text-purple-400 font-medium transition-colors">
                            Forgot password?
                        </a>
                    </div>

                    {/* 5. Update button to handle loading state */}
                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:opacity-50 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/20 transition-all active:scale-[0.98] hover:shadow-purple-500/40"
                    >
                        {isPending ? "Verifying..." : "Sign In"}
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-4">
                        Don't have an account?{" "}
                        <a href="#" className="text-purple-500 hover:underline font-medium">
                            Sign up
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;