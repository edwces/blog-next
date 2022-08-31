import { useWindowSize } from "../../hooks/useWindowSize";
import { BREAKPOINT, LARGE_ICON, MEDIUM_ICON } from "./constants";
import { IconLinksList } from "./IconLinksList";

export const MainFooter = () => {
  const size = useWindowSize();

  const isAboveBreakpoint = size.width !== 0 && size.width > BREAKPOINT;

  return (
    <footer className="p-7 bg-black">
      <div
        className={`flex justify-between items-center ${
          isAboveBreakpoint || "flex-col-reverse gap-8"
        }`}
      >
        <p className="text-dimmed">This website was created with next.js</p>
        <IconLinksList size={isAboveBreakpoint ? MEDIUM_ICON : LARGE_ICON} />
      </div>
    </footer>
  );
};
