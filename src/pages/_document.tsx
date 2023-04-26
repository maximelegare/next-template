import Document, { Html, Head, Main, NextScript } from "next/document";

class myDocument extends Document {
  render() {
    return (
      <Html data-theme="myTheme">
        <Head>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9a9a9a" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#000000" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default myDocument;
