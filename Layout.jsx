import Header from './Header'
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto w-full p-4">{children}</main>
      <footer className="text-center text-sm text-gray-400 py-6">© {new Date().getFullYear()} ANGLE SOCIAL MEDIA</footer>
    </div>
  )
}
