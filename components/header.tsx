import { useState, useEffect } from "react";
import { RiMenuFill, RiGithubFill } from "react-icons/ri";
import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";

interface HeaderProps {
  darkMode: boolean;
  onThemeChange: (newDarkMode: boolean) => void;
}

export default function Header({ darkMode, onThemeChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);

    if (menuOpen && window.innerWidth >= 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <div className="fixed z-20 w-full p-3 border-b-2 dark:border-gray-700 bg-white dark:bg-blue-950 text-black dark:text-white transition-all">
      <div className="max-w-6xl mx-auto flex items-center">
        <Link
          href="/"
          className="title bg-clip-text md:text-3xl text-2xl text-transparent bg-gradient-to-r from-orange-100 via-pink-300 to-fuchsia-300 hover:text-pink-300 dark:bg-gradient-to-r dark:from-cyan-600 dark:via-blue-700 dark:to-violet-800 dark:hover:text-blue-700 transition-colors"
        >
          Khủng Long 3 Sừng
        </Link>
        <div className="hidden md:flex flex-1 justify-end space-x-8 mr-8">
          <Link
            href="works"
            className="text-fuchsia-300 font-bold transition-opacity hover:opacity-70 dark:text-cyan-500"
          >
            Works
          </Link>
          <Link
            href="https://github.com/minhnguyen142/hikari-portfolio"
            className="space-x-1 flex flex-row items-center text-fuchsia-300 dark:text-cyan-500 font-bold transition-opacity hover:opacity-70"
          >
            <RiGithubFill /> <p>Source</p>
          </Link>
        </div>

        <div
          className="md:hidden flex flex-1 justify-end mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <button className="text-3xl hover:bg-slate-400 rounded-lg p-1 transition-all active:bg-fuchsia-300">
            <RiMenuFill />
          </button>
        </div>
        <ThemeToggle children={undefined} onThemeChange={onThemeChange} />

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:hidden absolute top-12 right-3 mt-1 bg-yellow-50 dark:bg-cyan-950 py-3 px-6 rounded-xl transition-all whitespace-pre`}
        >
          <div className="flex flex-col space-y-3">
            <Link
              href="works"
              className="text-fuchsia-300 dark:text-cyan-500 font-bold transition-opacity hover:opacity-70"
            >
              Works
            </Link>
            <Link
              href="https://github.com/minhnguyen142/hikari-portfolio"
              className="space-x-1 flex flex-row items-center text-fuchsia-300 dark:text-cyan-500 font-bold transition-opacity hover:opacity-70"
            >
              <RiGithubFill /> <p>Source</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
