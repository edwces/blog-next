import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/ir-black.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="text-gray-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
