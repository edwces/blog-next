import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://unpkg.com/nord-highlightjs@0.1.0/dist/nord.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="text-white selection:text-black-2 selection:bg-interactive">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
