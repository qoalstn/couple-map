import Footer from "@/component/footer";
import Top from "@/component/top";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
