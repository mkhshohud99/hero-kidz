"use client";

import { postUser } from "@/action/server/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const data = Object.fromEntries(formData.entries());

        const result = await postUser(data);
        if(result.acknowledged){
            alert("Registration Successful.Now Please Login")
            router.push("/login")
        }
    };

    const handleGoogleLogin = () => {
        console.log("Google Signup");
    };

    return (
        <div className="min-h-screen bg-base-200 flex justify-center items-center px-4 py-10">
            <div className="card bg-base-100 w-full max-w-md shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center text-primary">
                        Create Account
                    </h1>

                    <p className="text-center text-base-content/70">
                        Join us and start shopping today.
                    </p>

                    <form
                        onSubmit={handleRegister}
                        className="space-y-4 mt-4"
                    >
                        <div>
                            <label className="label">
                                <span className="label-text">
                                    Full Name
                                </span>
                            </label>

                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your full name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">
                                    Email Address
                                </span>
                            </label>

                            <input
                                type="email"
                                name="email"
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
                                    name="password"
                                    placeholder="Create password"
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

                        <div>
                            <label className="label">
                                <span className="label-text">
                                    Confirm Password
                                </span>
                            </label>

                            <div className="relative">
                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="confirmPassword"
                                    placeholder="Confirm password"
                                    className="input input-bordered w-full pr-12"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2"
                                >
                                    {showConfirmPassword ? (
                                        <FaEyeSlash />
                                    ) : (
                                        <FaEye />
                                    )}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            Create Account
                        </button>
                    </form>

                    <div className="divider">OR</div>

                    <button
                        onClick={handleGoogleLogin}
                        className="btn btn-outline w-full"
                    >
                        <FaGoogle />
                        Sign Up with Google
                    </button>

                    <p className="text-center mt-4">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-primary font-semibold"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}