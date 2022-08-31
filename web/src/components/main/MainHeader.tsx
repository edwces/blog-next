import { HamburgerButton } from "./HamburgerButton";
import { TriangleIcon } from "../ui/icons/Triangle";
import { NavigationList } from "./NavigationList";
import { BREAKPOINT, NAV_ITEMS } from "./constants";
import { useWindowSize } from "../../hooks/useWindowSize";

interface MainHeaderProps {
  isHamburgerOpen?: boolean;
  onHamburgerClick?: () => void;
}

export const MainHeader = ({
  isHamburgerOpen = false,
  onHamburgerClick,
}: MainHeaderProps) => {
  const size = useWindowSize();

  const NavPresenter = () => {
    if (size.width > BREAKPOINT)
      return <NavigationList items={NAV_ITEMS} direction="row" />;
    return (
      <HamburgerButton isOpen={isHamburgerOpen} onClick={onHamburgerClick} />
    );
  };

  return (
    <header className="p-5 bg-black">
      <div className="flex justify-between items-center px-5">
        <div className="flex gap-5 items-center">
          <TriangleIcon />
          <h1 className="text-4xl">Edwces</h1>
        </div>
        {size.width !== 0 && NavPresenter()}
      </div>
    </header>
  );
};
