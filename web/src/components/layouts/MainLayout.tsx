import { ReactNode, useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { BREAKPOINT, NAV_ITEMS } from "../main/constants";
import { MainFooter } from "../main/MainFooter";
import { MainHeader } from "../main/MainHeader";
import { NavigationList } from "../main/NavigationList";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const size = useWindowSize();
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const isValidSize = size.width !== 0;
  const isAboveBreakpoint = size.width > BREAKPOINT;

  // Hide NavigationDropdown if we resize window to aboveBreakpoint
  // while having hamburger open
  useEffect(() => {
    if (isHamburgerOpen && isAboveBreakpoint) setHamburgerOpen(false);
  }, [isHamburgerOpen, size]);

  const NavigationDropdown = () => {
    return (
      <div className="flex-grow flex justify-center items-center">
        <NavigationList
          items={NAV_ITEMS}
          direction="column"
          variant="dropdown"
          onLinkClick={() => setHamburgerOpen(!isHamburgerOpen)}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader
        isValidSize={isValidSize}
        isAboveBreakpoint={isAboveBreakpoint}
        isHamburgerOpen={isHamburgerOpen}
        onHamburgerClick={() => setHamburgerOpen(!isHamburgerOpen)}
      />
      <main className="bg-black flex flex-col flex-grow">
        {!isAboveBreakpoint && isHamburgerOpen
          ? NavigationDropdown()
          : children}
      </main>
      {isValidSize && <MainFooter isAboveBreakpoint={isAboveBreakpoint} />}
    </div>
  );
};
