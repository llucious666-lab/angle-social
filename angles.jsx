
export default function Angles() {
  const videos = [1,2,3,4,5,6]

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-5xl font-bold">Angles</h1>

            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center animate-pulse shadow-lg shadow-purple-500/40">
              ✓
            </div>
          </div>

          <p className="text-zinc-400 mt-2">
            Watch trending creator angles from around the world.
          </p>
        </div>

        <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-2xl font-semibold">
          Create Angle
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video}
            className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:scale-[1.02] transition"
          >
            <img
              src={`https://picsum.photos/600/90${video}`}
              className="w-full h-[500px] object-cover"
            />

            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold">
                    Trending Angle #{video}
                  </h2>

                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-xs animate-pulse">
                    ✓
                  </div>
                </div>

                <span className="text-xs bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full">
                  Premium
                </span>
              </div>

              <p className="text-zinc-400 text-sm">
                Discover creative perspectives and cinematic short videos.
              </p>

              <div className="flex gap-5 mt-5 text-sm text-zinc-300">
                <span>❤️ 12.4K</span>
                <span>💬 842</span>
                <span>↗ Share</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
        <h2 className="text-3xl font-bold mb-8">Creator Subscription</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Starter', price: '$2.99' },
            { name: 'Pro', price: '$7.99' },
            { name: 'Elite', price: '$19.99' },
          ].map((plan) => (
            <div
              key={plan.name}
              className="bg-black border border-zinc-700 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold">{plan.name}</h3>

              <p className="text-5xl font-black mt-4">{plan.price}</p>

              <ul className="mt-6 space-y-3 text-zinc-400">
                <li>✓ Verification perks</li>
                <li>✓ Creator analytics</li>
                <li>✓ Premium badge</li>
              </ul>

              <button className="mt-8 w-full bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-2xl font-semibold">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
        <h2 className="text-3xl font-bold mb-6">Admin Verification Panel</h2>

        <div className="space-y-4">
          {['NEWTON', 'LUCIOUS_', 'Creative Mind'].map((user) => (
            <div
              key={user}
              className="flex items-center justify-between bg-black border border-zinc-700 rounded-2xl p-5"
            >
              <div>
                <h3 className="font-semibold text-lg">{user}</h3>
                <p className="text-zinc-400 text-sm">
                  Verification request pending
                </p>
              </div>

              <div className="flex gap-3">
                <button className="px-5 py-2 rounded-xl bg-green-600">
                  Approve
                </button>

                <button className="px-5 py-2 rounded-xl bg-red-600">
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
