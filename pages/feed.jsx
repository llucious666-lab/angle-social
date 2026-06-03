export default function Feed() {
  const posts = [1,2,3,4]

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold mb-8">Feed</h1>

      <div className="space-y-6 max-w-2xl mx-auto">
        {posts.map((post) => (
          <div key={post} className="bg-zinc-900 rounded-3xl overflow-hidden">
            <img
              src={`https://picsum.photos/800/40${post}`}
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">ANGLE Post #{post}</h2>
              <p className="text-zinc-400">
                Capture moments from a different perspective.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}