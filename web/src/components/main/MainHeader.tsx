import { HamburgerButton } from "./HamburgerButton";
import { TriangleIcon } from "../ui/icons/Triangle";
import { NavigationList } from "./NavigationList";
import { NAV_ITEMS } from "./constants";

interface MainHeaderProps {
  isValidSize: boolean;
  isAboveBreakpoint?: boolean;
  isHamburgerOpen?: boolean;
  onHamburgerClick?: () => void;
}

export const MainHeader = ({
  isValidSize,
  isAboveBreakpoint = false,
  isHamburgerOpen = false,
  onHamburgerClick,
}: MainHeaderProps) => {
  return (
    <header className="p-5 bg-black">
      <div className="flex justify-between items-center px-5">
        <div className="flex gap-5 items-center">
          <TriangleIcon />
          <h1 className="text-4xl">Edwces</h1>
        </div>
        {isValidSize &&
          (!isAboveBreakpoint ? (
            <HamburgerButton
              isOpen={isHamburgerOpen}
              onClick={onHamburgerClick}
            />
          ) : (
            <NavigationList items={NAV_ITEMS} />
          ))}
      </div>
    </header>
  );
};
