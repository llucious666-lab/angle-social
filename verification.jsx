
export default function Verification() {
  const badges = [
    { title: "Verified Creator", icon: "✓" },
    { title: "Premium Creator", icon: "💎" },
    { title: "Trending Creator", icon: "⚡" },
  ]

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold mb-3">Verification Center</h1>
      <p className="text-zinc-400 mb-10">
        Apply for verification and unlock creator benefits.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {badges.map((badge) => (
          <div
            key={badge.title}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:scale-[1.02] transition"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-3xl shadow-lg shadow-purple-500/30 animate-pulse">
              {badge.icon}
            </div>

            <h2 className="text-2xl font-semibold mt-6">{badge.title}</h2>

            <p className="text-zinc-400 mt-3">
              Official ANGLE creator verification badge.
            </p>

            <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-2xl font-semibold">
              Apply
            </button>
          </div>
        ))}
      </div>

      <div className="mt-14 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
        <h2 className="text-3xl font-bold mb-6">Verification Application</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <input placeholder="Full Name" className="bg-black border border-zinc-700 rounded-2xl p-4" />
          <input placeholder="@username" className="bg-black border border-zinc-700 rounded-2xl p-4" />
          <input placeholder="Category" className="bg-black border border-zinc-700 rounded-2xl p-4" />
          <input placeholder="Followers Count" className="bg-black border border-zinc-700 rounded-2xl p-4" />
        </div>

        <textarea
          placeholder="Why do you want verification?"
          className="mt-6 w-full bg-black border border-zinc-700 rounded-2xl p-4 h-40"
        />

        <button className="mt-6 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold">
          Submit Application
        </button>
      </div>
    </div>
  )
}
