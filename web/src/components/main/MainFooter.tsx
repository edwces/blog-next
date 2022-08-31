import { LARGE_ICON, MEDIUM_ICON } from "./constants";
import { IconLinksList } from "./IconLinksList";

interface MainFooterProps {
  isAboveBreakpoint?: boolean;
}

export const MainFooter = ({ isAboveBreakpoint = false }: MainFooterProps) => {
  return (
    <footer className="p-7 bg-black">
      <div
        className={`flex justify-between items-center ${
          isAboveBreakpoint || "flex-col-reverse gap-8"
        }`}
      >
        <p className="text-dimmed text-center">
          This website was created with next.js
        </p>
        <IconLinksList size={isAboveBreakpoint ? MEDIUM_ICON : LARGE_ICON} />
      </div>
    </footer>
  );
};
