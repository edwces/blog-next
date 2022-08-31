import Link from "next/link";

type NavItem = { href: string; label: string };

interface NavigationListProps {
  items?: NavItem[];
  direction?: "row" | "column";
  variant?: "list" | "dropdown";
  onLinkClick?: () => void;
}

export const NavigationList = ({
  items = [],
  direction = "row",
  variant = "list",
  onLinkClick,
}: NavigationListProps) => {
  return (
    <nav>
      <ul
        className={`flex gap-5 items-center ${
          direction === "column" && "flex-col"
        }`}
      >
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} passHref>
              <a
                onClick={onLinkClick}
                className={`transition ${
                  variant === "dropdown" ? "text-4xl" : "text-lg"
                } ease-in-out duration-150 border-b-2 border-transparent hover:border-anchor hover:text-anchor`}
              >
                {item.label}
              </a>
            </Link>
            {variant === "dropdown" && (
              <div className="border-b-2 border-primary -mx-5 mt-5" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
