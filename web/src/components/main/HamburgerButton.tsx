interface HamburgerButtonProps {
  isOpen?: boolean;
  onClick?: () => void;
}

export const HamburgerButton = ({
  onClick,
  isOpen = false,
}: HamburgerButtonProps) => {
  const line = "h-0.5 w-6 bg-white transition ease transform duration-300";

  return (
    <button
      className="flex flex-col p-2 gap-1.5 border-2 border-yellow"
      onClick={onClick}
    >
      <div className={`${line} ${isOpen && "rotate-45 translate-y-2"}`} />
      <div className={`${line} ${isOpen && "bg-transparent"}`} />
      <div className={`${line} ${isOpen && "-rotate-45 -translate-y-2"}`} />
    </button>
  );
};
