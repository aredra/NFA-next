import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  </>
}

export default MyApp
