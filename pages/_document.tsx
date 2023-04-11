import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Curiosity rover, read widely, try new things."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="Curiosity Rover" />
        <meta
          property="og:site_name"
          content="https://curiosityrover.vercel.app/"
        />
        <meta
          property="og:description"
          content="Curiosity rover, read widely, try new things."
        />
        <meta
          itemProp="image"
          content="https://curiosityrover.vercel.app/og-image.png"
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://curiosityrover.vercel.app/" />
        <meta property="og:type" content="Curiosity Rover" />
        <meta property="og:title" content="Curiosity Rover" />
        <meta
          property="og:description"
          content="Curiosity rover, read widely, try new things."
        />
        <meta
          property="og:image"
          content="https://curiosityrover.vercel.app/og-image.png"
        />
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Curiosity Rover" />
        <meta
          name="twitter:description"
          content="Curiosity rover, read widely, try new things."
        />
        <meta
          property="og:image"
          content="https://curiosityrover.vercel.app/og-image.png"
        />
        <meta
          name="twitter:image"
          content="https://curiosityrover.vercel.app/og-image.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
