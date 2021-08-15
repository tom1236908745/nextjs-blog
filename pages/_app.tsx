import '../styles/global.css' // global.cssはこのファイルからしかインポート出来ない
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
