import { ReactNode, useState } from "react";
import { MainFooter } from "../main/MainFooter";
import { MainHeader } from "../main/MainHeader";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader
        isHamburgerOpen={isHamburgerOpen}
        onHamburgerClick={() => setHamburgerOpen(!isHamburgerOpen)}
      />
      <main className="bg-black flex flex-col flex-grow">{children}</main>
      <MainFooter />
    </div>
  );
};
