import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* <script src="https://developers.kakao.com/sdk/js/kakao.js"></script> */}
        <Script
          src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false&libraries=services,clusterer,drawing`}
          strategy="beforeInteractive"
        />
      </Head>
      {/* <Head /> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
