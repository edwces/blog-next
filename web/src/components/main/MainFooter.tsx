import Link from "next/link";
import { GithubIcon } from "../ui/icons/GithubIcon";

export const MainFooter = () => {
  return (
    <footer className="p-5 bg-black">
      <div className="flex justify-between items-center">
        <p className="text-gray-400">This website was created with next.js</p>
        <Link href="https://github.com/edwces" passHref>
          <a>
            <GithubIcon />
          </a>
        </Link>
      </div>
    </footer>
  );
};
