'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import confetti from 'canvas-confetti';

const LoginPage = () => {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [passwordVisible, setPasswordVisible] = useState(false);

    useEffect(() => {
        // Trigger confetti when the page loads
        confetti({
            particleCount: 400,
            spread: 700,
            origin: { x: 0.5, y: 1 },
        });
    }, []);


    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const correctUsername = `${process.env.NEXT_PUBLIC_USERNAME}`;
        const correctPassword = `${process.env.NEXT_PUBLIC_PASSWORD}`;

        if (username === correctUsername && password === correctPassword) {
            // Store login state in localStorage
            localStorage.setItem("isLoggedIn", "true");
            router.push("/home"); // Redirect to the protected page
        } else {
            setError("Incorrect username or password.");
        }
    };

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-12">

            {/* Left Side (Form) */}
            <div className="md:col-span-6 flex items-center justify-center p-4">
                <form
                    onSubmit={handleLogin}
                    className="w-full max-w-lg p-8"
                >
                    <h2 className="text-2xl font-extrabold text-center ">Get Started 💕</h2>
                    <p className="text-center text-sm text-gray-500 mb-6">Our Whole Documented Story !! </p>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="w-full p-3 mb-4 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                    />
                    <div className="relative mb-4">
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full p-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                            {passwordVisible ? (
                                <EyeSlashIcon className="w-4 h-4 text-gray-500" />
                            ) : (
                                <EyeIcon className="w-4 h-4 text-gray-500" />
                            )}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-neutral-900 text-white p-3 rounded-lg hover:bg-neutral-800 tracking-wider"
                    >
                        Login
                    </button>
                    {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                </form>
            </div>

            {/* Right Side (Image) */}
            <div className="md:col-span-6 hidden md:block bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1525239845569-81bb7f894102?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
            </div>
        </div>
    );
};

export default LoginPage;
