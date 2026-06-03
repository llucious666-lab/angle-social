export default function Explore() {
  const cards = [1,2,3,4,5,6]

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold mb-8">Explore</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card}
            className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={`https://picsum.photos/500/50${card}`}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold">Creative Angle</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}