import { Theme } from "@radix-ui/themes";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className="antialiased">
        <Theme accentColor={"teal" as any} grayColor="mauve">
          <Main />
        </Theme>
        <NextScript />
      </body>
    </Html>
  );
}
