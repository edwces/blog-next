import Link from "next/link";
import { TriangleIcon } from "../ui/icons/Triangle";

const navItems = [
  {
    href: "/",
    label: "About me",
  },
  {
    href: "/articles",
    label: "Articles",
  },
];

export const MainHeader = () => {
  return (
    <header className="p-5 bg-black">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <TriangleIcon />
          <h1 className="text-4xl">Edwces</h1>
        </div>
        <div className="flex gap-2">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href} passHref>
              <a className="transition ease-in-out duration-150 p-2 rounded-md hover:text-yellow">
                {item.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
