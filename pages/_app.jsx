import '../styles/globals.css'
import { useEffect } from 'react'
export default function App({ Component, pageProps }) {
  useEffect(() => {
    const s = document.createElement('script')
    s.src = 'https://js.paystack.co/v1/inline.js'
    s.async = true
    document.head.appendChild(s)
    return () => document.head.removeChild(s)
  }, [])
  return <Component {...pageProps} />
}
