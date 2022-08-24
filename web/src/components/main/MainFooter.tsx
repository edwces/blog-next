import Link from "next/link";

export const MainFooter = () => {
  return (
    <footer>
      <div className="flex flex-col gap-2">
        <Link href="https://github.com/edwces/blog-next" passHref>
          <a>Github Logo</a>
        </Link>
        <p>This website was created with next.js</p>
      </div>
    </footer>
  );
};
