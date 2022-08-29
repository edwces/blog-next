import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { MDXProvider } from "@mdx-js/react";
import { Header } from "../components/ui/Header";
import { MainLayout } from "../components/layouts/MainLayout";
import { Link } from "../components/ui/Link";
import { Paragraph } from "../components/ui/Paragraph";
import { BlockQuote } from "../components/ui/BlockQuote";

const CustomMDXComponents = {
  h1: Header.H1,
  h2: Header.H2,
  a: Link,
  p: Paragraph,
  blockquote: BlockQuote,
};

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MDXProvider components={CustomMDXComponents}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </MDXProvider>
  );
};

export default MyApp;
