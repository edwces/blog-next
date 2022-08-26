import { ReactNode } from "react";
import { MainFooter } from "../main/MainFooter";
import { MainHeader } from "../main/MainHeader";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <main className="flex flex-col flex-grow">{children}</main>
      <MainFooter />
    </div>
  );
};
