import Link from "next/link";

type NavItem = { href: string; label: string };

interface NavigationListProps {
  items?: NavItem[];
  direction?: "row" | "column";
}

export const NavigationList = ({
  items = [],
  direction = "row",
}: NavigationListProps) => {
  return (
    <nav>
      <ul
        className={`flex gap-2 items-center ${
          direction === "column" && "flex-col"
        }`}
      >
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} passHref>
              <a className="transition ease-in-out duration-150 p-2 rounded-md hover:text-yellow">
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
