import { HamburgerButton } from "./HamburgerButton";
import { TriangleIcon } from "../ui/icons/Triangle";
import { NavigationList } from "./NavigationList";
import { NAV_ITEMS } from "./constants";

interface MainHeaderProps {
  isHamburgerVisible?: boolean;
  isHamburgerOpen?: boolean;
  onHamburgerClick?: () => void;
}

export const MainHeader = ({
  isHamburgerVisible = false,
  isHamburgerOpen = false,
  onHamburgerClick,
}: MainHeaderProps) => {
  return (
    <header className="p-5 bg-black">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <TriangleIcon />
          <h1 className="text-4xl">Edwces</h1>
        </div>
        <NavigationList items={NAV_ITEMS} direction="row" />
        {isHamburgerVisible && (
          <HamburgerButton
            isOpen={isHamburgerOpen}
            onClick={onHamburgerClick}
          />
        )}
      </div>
    </header>
  );
};
