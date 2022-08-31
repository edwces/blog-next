import Link from "next/link";
import { Links } from "../../types/links";
import { GithubIcon } from "../ui/icons/GithubIcon";
import { RSSIcon } from "../ui/icons/RSSIcon";
import { MEDIUM_ICON } from "./constants";

type IconLinksListProps = { size?: number };

export const IconLinksList = ({ size = MEDIUM_ICON }: IconLinksListProps) => {
  return (
    <div className="flex gap-5">
      <Link href={Links.GITHUB} passHref>
        <a>
          <GithubIcon
            size={size}
            className="transition ease-in-out duration-150 hover:fill-interactive"
          />
        </a>
      </Link>
      <Link href={Links.RSS} passHref>
        <a>
          <RSSIcon
            size={size}
            className="transition ease-in-out duration-150 hover:fill-interactive"
          />
        </a>
      </Link>
    </div>
  );
};
