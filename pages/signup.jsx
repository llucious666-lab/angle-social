
"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

// Make sure to set these in your .env.local:
// NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    const check = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        if (data?.user) router.push("/feed");
      } catch (e) {}
    };
    check();
  }, [router]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setInfo("");
    if (!email || !password || !username) {
      setError("Please fill all fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    try {
      const { data, error: signError } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { username } }
      });
      if (signError) throw signError;
      if (data?.user && !data?.session) {
        setInfo("Check your email to confirm your account. You will be redirected after confirmation.");
      }
      if (data?.session) {
        router.push("/feed");
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to sign up");
    } finally {
      setLoading(false);
    }
  };

  const handleOAuth = async (provider) => {
    setError("");
    setLoading(true);
    try {
      const { data, error: oErr } = await supabase.auth.signInWithOAuth({ provider });
      if (oErr) throw oErr;
    } catch (err) {
      console.error(err);
      setError(err.message || `Failed to sign in with ${provider}`);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-purple-800 via-indigo-900 to-black items-center justify-center p-12">
        <div className="max-w-md text-center">
          <h1 className="text-6xl font-extrabold text-white tracking-tight mb-4">ANGLE</h1>
          <p className="text-gray-300 mb-6 text-lg">Capture your angle. Share your perspective with the world — in a fresh new shape.</p>
          <div className="mt-6 bg-white/5 p-4 rounded-xl shadow-lg">
            <p className="text-sm text-gray-200">Already have an account?</p>
            <button onClick={() => router.push('/login')} className="mt-3 w-full px-4 py-2 bg-transparent border border-white/20 rounded text-white hover:opacity-90">Log in</button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8 bg-black">
        <div className="w-full max-w-md bg-white/5 backdrop-blur rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-2">Create your account</h2>
          <p className="text-sm text-gray-300 mb-6">Sign up to ANGLE SOCIAL MEDIA — join the community.</p>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="text-xs text-gray-300">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full mt-1 px-3 py-2 rounded-lg bg-black/30 border border-transparent focus:border-blue-400 outline-none text-white" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-xs text-gray-300">Username</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required className="w-full mt-1 px-3 py-2 rounded-lg bg-black/30 border border-transparent focus:border-blue-400 outline-none text-white" placeholder="your handle" />
            </div>
            <div>
              <label className="text-xs text-gray-300">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full mt-1 px-3 py-2 rounded-lg bg-black/30 border border-transparent focus:border-blue-400 outline-none text-white" placeholder="Choose a strong password" />
            </div>
            {error && <div className="text-sm text-red-400">{error}</div>}
            {info && <div className="text-sm text-green-400">{info}</div>}
            <button type="submit" disabled={loading} className="w-full mt-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:opacity-95">{loading ? 'Creating account...' : 'Sign up'}</button>
          </form>
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-white/10" />
              <div className="text-xs text-gray-400">or continue with</div>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="mt-4 flex gap-3">
              <button onClick={() => handleOAuth('google')} className="flex-1 px-3 py-2 rounded-lg bg-white text-black font-medium">Sign in with Google</button>
              <button onClick={() => handleOAuth('apple')} className="flex-1 px-3 py-2 rounded-lg bg-white text-black font-medium">Sign in with Apple</button>
            </div>
            <p className="text-xs text-gray-400 mt-4">By signing up you agree to our <a className="underline">Terms</a> and <a className="underline">Privacy Policy</a>.</p>
          </div>
          <div className="mt-6 text-center text-gray-400">
            <p>Already a member? <button onClick={() => router.push('/login')} className="underline">Log in</button></p>
          </div>
        </div>
      </div>
    </div>
  );
}
