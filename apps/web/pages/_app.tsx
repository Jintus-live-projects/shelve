import "../styles/globals.css"
import { AppProps } from "next/app";

export default function ShelveApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps}/>;
}
