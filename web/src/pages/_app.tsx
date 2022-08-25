import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { MDXProvider } from "@mdx-js/react";
import { Header } from "../components/ui/Header";
import { MainLayout } from "../components/layouts/MainLayout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MDXProvider components={{ h1: Header.H1, h2: Header.H2 }}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </MDXProvider>
  );
};

export default MyApp;
