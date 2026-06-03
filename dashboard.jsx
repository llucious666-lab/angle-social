import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white flex">
      <aside className="w-64 bg-zinc-950 p-6 hidden md:block border-r border-zinc-800">
        <h1 className="text-4xl font-bold mb-10">ANGLE</h1>

        <nav className="space-y-5 text-lg">
          <Link href="/feed" className="block hover:text-zinc-400">Feed</Link>
          <Link href="/explore" className="block hover:text-zinc-400">Explore</Link>
          <Link href="/angles" className="block hover:text-zinc-400">Angles</Link>
          <Link href="/login" className="block hover:text-zinc-400">Login</Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <h2 className="text-5xl font-bold mb-4">Dashboard</h2>
        <p className="text-zinc-400 mb-8">
          Welcome to your ANGLE creator dashboard.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-6 rounded-3xl">
            <h3 className="text-xl font-semibold mb-2">Views</h3>
            <p className="text-4xl font-bold">24K</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-3xl">
            <h3 className="text-xl font-semibold mb-2">Followers</h3>
            <p className="text-4xl font-bold">8.2K</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-3xl">
            <h3 className="text-xl font-semibold mb-2">Uploads</h3>
            <p className="text-4xl font-bold">17</p>
          </div>
        </div>
      </main>
    </div>
  )
}