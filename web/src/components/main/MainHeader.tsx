import Link from "next/link";

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
    <header className="p-5">
      <div className="flex justify-between">
        <h1>Edwces</h1>
        <div className="flex gap-2">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href} passHref>
              <a className="transition ease-in-out duration-150 p-2 rounded-md hover:bg-gray-200">
                {item.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
