import Document, { Html, Head, Main, NextScript } from "next/document";


class myDocument extends Document {
  render() {
    return (
      <Html data-theme="base">
        <Head>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9a9a9a" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#000000" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />

          {/**
           * Pass the SVG in this url:
           * https://yoksel.github.io/url-encoder/
           *
           * Then put the encoded version after data:image/svg+xml, => this will make the favicon a crisp SVG
           */}
          <link
            rel="icon"
            type="image/svg+xml"
            href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38.46 38.46'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%236375b8;%7D.cls-2%7Bfill:%23edd812;%7D.cls-3%7Bfill:%23e61d50;%7D.cls-4%7Bfill:%23fff;%7D.cls-5%7Bfill:%233b4395;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Epartago_icon%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Crect class='cls-1' width='38.46' height='38.46' rx='8.38'/%3E%3Ccircle class='cls-2' cx='11.94' cy='9.84' r='3.32'/%3E%3Ccircle class='cls-3' cx='30.05' cy='19.55' r='3.32'/%3E%3Cpath class='cls-4' d='M9.19,19.89A10.67,10.67,0,0,1,10,15.46a5.86,5.86,0,0,1-.69-.28,5.65,5.65,0,0,1-1.85-1.41A12.94,12.94,0,0,0,6.3,19.94a12.2,12.2,0,0,0,1.88,5.91,6.27,6.27,0,0,1,2-2A9.83,9.83,0,0,1,9.19,19.89Zm18.1,5.29a6,6,0,0,1-.74-.43,10.36,10.36,0,0,1-2.4,2.45,9.63,9.63,0,0,1-3.75,1.67,6.27,6.27,0,0,1-.33,2.8,12,12,0,0,0,5.8-2.18,13,13,0,0,0,3.54-3.71A6.09,6.09,0,0,1,27.29,25.18Zm2.49-13.9a12.23,12.23,0,0,0-5-4.32A12.24,12.24,0,0,0,18.3,5.68,12.38,12.38,0,0,0,16.46,6,6.25,6.25,0,0,1,17.7,8.35c0,.05,0,.1,0,.14l.12,0,.81-.12a9,9,0,0,1,5,.91,8.89,8.89,0,0,1,3.79,3.37,8.06,8.06,0,0,1,.54,1,6.22,6.22,0,0,1,2.87-.3A11.12,11.12,0,0,0,29.78,11.28Z'/%3E%3Ccircle class='cls-5' cx='13.74' cy='29.5' r='3.32'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;600&display=swap"
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
