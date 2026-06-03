export default function Login() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="bg-zinc-900 p-8 rounded-3xl w-full max-w-md shadow-2xl border border-zinc-800">
        <h1 className="text-5xl font-bold mb-2">ANGLE</h1>
        <p className="text-zinc-400 mb-8">Welcome back to your creator space.</p>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-4 rounded-xl bg-zinc-800 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-4 rounded-xl bg-zinc-800 outline-none"
        />

        <button className="w-full bg-white text-black p-4 rounded-xl font-semibold hover:opacity-90 transition">
          Login
        </button>
      </div>
    </div>
  )
}