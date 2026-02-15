import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-135deg via-#0f172a to-#020617">
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-white/80 mb-1">Email</label>
            <input
              type="email"
              required
              className="w-3/4 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-white/80 mb-1">Password</label>
            <input
              type="password"
              required
              className="w-3/4 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full  bg-white text-purple-600 py-2 rounded-lg font-semibold hover:bg-purple-100 transition"
          >
            Log in
          </button>
        </form>

        <p className="text-center text-white/70 mt-6 text-sm">
          Don’t have an account?{" "}
          <span className="underline cursor-pointer hover:text-white" onClick={()=>navigate("/register")}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default LogInPage