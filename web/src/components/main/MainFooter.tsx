import Link from "next/link";
import { GithubIcon } from "../ui/icons/GithubIcon";

export const MainFooter = () => {
  return (
    <footer className="p-5 bg-black">
      <div className="flex gap-5">
        <Link href="https://github.com/edwces/blog-next" passHref>
          <a>
            <GithubIcon />
          </a>
        </Link>
        <p className="text-gray-400">This website was created with next.js</p>
      </div>
    </footer>
  );
};
