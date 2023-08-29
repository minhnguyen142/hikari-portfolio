import "@/app/globals.css";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import React from "react";
import Image from "next/image";

export default function Works() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = (newDarkMode: boolean) => {
    setDarkMode(newDarkMode);
  };
  return (
    <div className="min-h-screen dark:bg-blue-950 text-black dark:text-white ">
      <div className="transition-all">
        <title>Mochizuki Hikari - Works</title>
        <Header darkMode={darkMode} onThemeChange={handleThemeChange} />
        {darkMode ? (
          <Image
            src="/night-sky.jpg"
            className="w-full h-72"
            alt=""
            width="3000"
            height="3000"
          />
        ) : (
          <Image
            src="/Pastel-pink-sky.jpg"
            className="w-full h-72"
            alt=""
            width="3000"
            height="3000"
          />
        )}
        <div className="mx-auto w-80 md:w-5/12 space-y-16 my-8 md:whitespace-nowrap md:space-x-8">
          <p className="text-2xl font-bold w-fit border-b-4 border-gray-600 dark:border-white">
            Works
          </p>
          <div className="space-y-4">
            <p
              id="video"
              className="text-center text-pink-300 dark:text-cyan-600"
            >
              Videos
            </p>
            <div className="md:grid md:grid-cols-2 flex flex-col gap-10 text-center">
              <div className="flex jusitfy-center flex-col">
                <iframe
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fvnu.connect%2Fvideos%2F-vnu-check-s%25E1%25BB%2591-%25C4%2591%25E1%25BA%25A7u-ti%25C3%25AAn-%2F1190572965147992%2F&width=300&show_text=false&height=150&appId"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
                <p className="mt-2">VNU Check</p>
              </div>
              <div className="flex jusitfy-center flex-col">
                <iframe
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSDC.TLU%2Fvideos%2F181429724692175%2F&width=300&show_text=false&height=169&appId"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
                <p className="mt-2">SDC's Birthday</p>
              </div>
            </div>
            <div className="space-y-4 ">
              <p
                id="art"
                className="text-center mt-20 text-fuchsia-300 dark:text-violet-600"
              >
                Arts
              </p>
              <div className="md:grid md:grid-cols-2 flex flex-col gap-10 text-center">
                <div className="">
                  <Image
                    src="/20230825_215659.jpg"
                    alt=""
                    width="3000"
                    height="3000"
                  />
                  <p className="my-2">Kitashirakawa Tamako</p>
                </div>
                <div className="">
                  <Image
                    src="/20230825_215811.jpg"
                    alt=""
                    width="3000"
                    height="3000"
                  />
                  <p className="my-2">Nishimiya Shouko</p>
                </div>
                <div className="">
                  <Image
                    src="/20230825_192430.jpg"
                    alt=""
                    width="3000"
                    height="3000"
                  />
                  <p className="my-2">Kuriyama Mirai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
