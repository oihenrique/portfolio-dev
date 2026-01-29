// src/pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";
import { Theme } from "@radix-ui/themes";

const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? "/portfolio-dev" : "";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="icon" type="image/svg+xml" href={`${prefix}/favicon.svg`} />
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
