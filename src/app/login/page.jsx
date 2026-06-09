"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login");
    };

    const handleGoogleLogin = () => {
        console.log("Google Login");
    };

    return (
        <div className="min-h-screen bg-base-200 flex justify-center items-center px-4">
            <div className="card bg-base-100 w-full max-w-md shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center text-primary">
                        Welcome Back
                    </h1>

                    <p className="text-center text-base-content/70">
                        Sign in to continue shopping.
                    </p>

                    <form onSubmit={handleLogin} className="space-y-4 mt-4">
                        <div>
                            <label className="label">
                                <span className="label-text">
                                    Email Address
                                </span>
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full pr-12"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2"
                                >
                                    {showPassword ? (
                                        <FaEyeSlash />
                                    ) : (
                                        <FaEye />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-between text-sm">
                            <label className="flex gap-2 items-center">
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-primary checkbox-sm"
                                />
                                Remember me
                            </label>

                            <Link
                                href="/forgot-password"
                                className="text-primary"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="divider">OR</div>

                    <button
                        onClick={handleGoogleLogin}
                        className="btn btn-outline w-full"
                    >
                        <FaGoogle />
                        Continue with Google
                    </button>

                    <p className="text-center mt-4">Don&apos;t have an account?{" "}
                        <Link
                            href="/register"
                            className="text-primary font-semibold"
                        >
                            Create Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}