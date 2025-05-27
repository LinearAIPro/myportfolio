"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8 font-bold">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } font-bold hover:text-accent transition-all capitalize`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
