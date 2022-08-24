import Head from "next/head";
import { ReactNode } from "react";
import { MainFooter } from "../main/MainFooter";
import { MainHeader } from "../main/MainHeader";

interface ArticleMetadata {
  title: string;
  description: string;
}

interface MainLayoutProps {
  children: ReactNode;
  meta?: ArticleMetadata;
}

export const MainLayout = ({ children, meta }: MainLayoutProps) => {
  return (
    <>
      {meta && (
        <Head>
          <title>{meta.title}</title>
        </Head>
      )}
      <div className="flex flex-col min-h-screen">
        <MainHeader />
        <main className="bg-gray-200 flex-grow">{children}</main>
        <MainFooter />
      </div>
    </>
  );
};
