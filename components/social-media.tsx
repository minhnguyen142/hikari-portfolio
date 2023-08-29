import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function SocialMedia() {
  return (
    <div className="mx-auto w-80 md:w-96 space-y-5 my-8 md:space-x-8">
      <p className="text-2xl font-bold w-fit border-b-4 border-gray-600 dark:border-white">
        Social Media
      </p>
      <div>
        <a
          href="https://www.facebook.com/Hikari.13864"
          className="flex items-center space-x-2 w-fit p-3 rounded-lg transition-all font-bold hover:bg-cyan-100 text-blue-700 dark:hover:bg-cyan-600"
        >
          <BsFacebook />
          <p>@Hikari.13864</p>
        </a>
        <a
          href="https://www.instagram.com/minhnguyen14022k3"
          className="flex items-center space-x-2 w-fit p-3 rounded-lg transition-all font-bold hover:bg-cyan-100 text-purple-700 dark:hover:bg-cyan-600"
        >
          <BsInstagram />
          <p>@minhnguyen14022k3</p>
        </a>
      </div>
    </div>
  );
}
