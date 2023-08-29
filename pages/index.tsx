import "@/app/globals.css";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import About from "@/components/about";
import Bio from "@/components/bio";
import SocialMedia from "@/components/social-media";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = (newDarkMode: boolean) => {
    setDarkMode(newDarkMode);
  };
  return (
    <div className="min-h-screen dark:bg-blue-950 text-black dark:text-white">
      <div className="transition-all">
        <title>Mochizuki Hikari - Home</title>
        <Header darkMode={darkMode} onThemeChange={handleThemeChange} />
        <div>
          {darkMode ? (
            <Image
              src="/night-sky.jpg"
              className="w-full h-72 rounded-none"
              alt=""
              width="3000"
              height="3000"
            />
          ) : (
            <Image
              src="/Pastel-pink-sky.jpg"
              className="w-full h-72 rounded-none"
              alt=""
              width="3000"
              height="3000"
            />
          )}
          <div className="text-center flex justify-center bg-yellow-50 dark:bg-indigo-600 mx-auto md:w-fit w-80  my-8 py-4 px-10 rounded-xl">
            <p className="whitespace-nowrap">
              Hi! I&apos;m Hikari, a person who loves&nbsp;
            </p>
            <p className="bg-gradient-to-r from-orange-200 via-amber-600 to-rose-700 bg-clip-text dark:bg-gradient-to-r dark:from-yellow-200 dark:to-pink-600 text-transparent font-bold">
              creative!
            </p>
          </div>
          <div className="space-x-5 md:flex mx-auto w-fit md:space-x-10">
            <div className="text-center md:text-left">
              <p className="font-bold text-4xl">Mochizuki Hikari</p>
              <p>Artist, Developer, Video Editor</p>
            </div>
            <div className="flex justify-center my-2 md:my-0 ">
              <Image
                src="/20230820_225657.jpg"
                className="w-32 rounded-full border-yellow-300 border-2 dark:border-cyan-500"
                alt=""
                width="350"
                height="350"
              />
            </div>
          </div>
          <About />
          <Bio />
          <div className="mx-auto w-80 md:w-96 space-y-5 my-8 md:whitespace-nowrap md:space-x-8">
            <p className="text-2xl font-bold w-fit border-b-4 border-gray-600 dark:border-white">
              Hobbies
            </p>
            <p>Chilling music, Drawing, Photography, Watching Anime</p>
          </div>
          <SocialMedia />
        </div>

        <Footer />
      </div>
    </div>
  );
}
