import Layout from '../components/Layout'
import Link from 'next/link'
export default function Home() {
  return (
    <Layout>
      <div className="text-center py-32">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">ANGLE</h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">Capture your angle. Share your perspective. Discover moments shaped like you.</p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/signup"><a className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold">Get Started</a></Link>
          <Link href="/dashboard"><a className="px-6 py-3 border rounded-lg text-white">Open Dashboard</a></Link>
        </div>
      </div>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
        {Array.from({length:6}).map((_,i) => (
          <div key={i} className="w-full">
            <div className="w-full h-56 triangle-clip overflow-hidden rounded-xl shadow-lg">
              <img src={`https://picsum.photos/800/800?random=${i}`} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </section>
    </Layout>
  )
}
