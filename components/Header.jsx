import Link from 'next/link'
export default function Header() {
  return (
    <header className="w-full bg-black/40 backdrop-blur p-3 sticky top-0 z-40">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/"><a className="text-2xl font-bold text-white">ANGLE</a></Link>
        <nav className="flex items-center gap-4">
          <Link href="/feed"><a className="text-sm text-gray-200">Feed</a></Link>
          <Link href="/explore"><a className="text-sm text-gray-200">Explore</a></Link>
          <Link href="/dashboard"><a className="text-sm text-gray-200">Dashboard</a></Link>
        </nav>
      </div>
    </header>
  )
}
