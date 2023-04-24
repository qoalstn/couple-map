import Footer from "@/component/footer";
import Top from "@/component/top";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import { useEffect } from "react";
import Script from "next/script";
import Layout from "@/component/layout";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
  // }, []);

  return (
    <div>
      {/* <Layout> */}
      {/* <Script
          src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false`}
          strategy="beforeInteractive"
        /> */}
      <Top />
      <Component {...pageProps} />
      {/* </Layout> */}
      <Footer />
    </div>
  );
}
