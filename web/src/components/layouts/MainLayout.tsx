import Head from "next/head";
import { ReactNode } from "react";
import { MainHeader } from "../main/MainHeader";

interface ArticleMetadata {
  title: string;
  description: string;
}

interface MainLayoutProps {
  children: ReactNode;
  meta: ArticleMetadata;
}

export const MainLayout = ({ children, meta }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="flex flex-col">
        <MainHeader />
        <main>{children}</main>
      </div>
    </>
  );
};
