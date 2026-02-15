import { useState } from "react";
function SignUpPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match 😤");
            return;
        }

        console.log(form);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-135deg via-#0f172a to-#020617">
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/20">
                <h2 className="text-3xl font-bold text-white text-center mb-6">
                    Create Account ✨
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-9/10 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-9/10 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="w-9/10 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white"
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                        className="w-9/10 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white"
                    />

                    <button
                        type="submit"
                        className="w-full bg-white text-purple-600 py-2 rounded-lg font-semibold hover:bg-purple-100 transition"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-white/70 mt-6 text-sm">
                    Already have an account?{" "}
                    <a className="underline cursor-pointer hover:text-white" href="/login">
                        Log in
                    </a>
                </p>
            </div>
        </div>
    );
}

export default SignUpPage;