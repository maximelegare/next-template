import Document, { Html, Head, Main, NextScript } from "next/document";

class myDocument extends Document {
  render() {
    return (
      <Html>
        <Head>  
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9a9a9a" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#000000" />
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
