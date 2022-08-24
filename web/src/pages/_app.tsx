import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { MDXProvider } from "@mdx-js/react";
import { Header } from "../components/ui/Header";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MDXProvider components={{ h1: Header.H1, h2: Header.H2 }}>
      <Component {...pageProps} />;
    </MDXProvider>
  );
};

export default MyApp;
