import Link from "next/link";
import { Links } from "../../types/links";
import { GithubIcon } from "../ui/icons/GithubIcon";
import { RSSIcon } from "../ui/icons/RSSIcon";

export const MainFooter = () => {
  return (
    <footer className="p-7 bg-black">
      <div className="flex justify-between items-center">
        <p className="text-dimmed">This website was created with next.js</p>
        <div className="flex gap-5">
          <Link href={Links.GITHUB} passHref>
            <a>
              <GithubIcon className="transition ease-in-out duration-150 hover:fill-interactive" />
            </a>
          </Link>
          <Link href={Links.RSS} passHref>
            <a>
              <RSSIcon className="transition ease-in-out duration-150 hover:fill-interactive" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
