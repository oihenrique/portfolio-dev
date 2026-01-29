// src/pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";
import { Theme } from "@radix-ui/themes";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <body className="antialiased">
        <Theme accentColor={"teal"} grayColor="mauve">
          <Main />
        </Theme>
        <NextScript />
      </body>
    </Html>
  );
}
