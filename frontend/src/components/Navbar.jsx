import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Image from "./Image";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image
          src="LogoBig.png"
          className="rounded-xl"
          w={64}
          h={64}
          alt="KickOff."
        />
        <span className="font-extrabold text-3xl tracking-widest">
          Kick
          <span className="font-extrabold text-primary text-customBlue ">Off.</span>
        </span>
      </Link>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((p) => !p)}
        >
          {open ? "X" : "☰"}
        </div>
        {/* Mobile Link List */}
        <div
          className={`w-full h-screen absolute top-24 flex flex-col justify-center gap-8 font-medium text-lg items-center bg-[#beecee] ${
            open ? "-right-0" : "-right-[150%]"
          } transition-all duration-300 ease-in-out`}
        >
          <Link to="/" className="hover:text-customBlue">Home</Link>
          <Link to="/" className="hover:text-customBlue">Trending</Link>
          <Link to="/" className="hover:text-customBlue">Top Stories</Link>
          <Link to="/" className="hover:text-customBlue">About</Link>
          <SignedOut>
            <Link to="/login">
              <button className="py-2 px-4 rounded-3xl bg-customBlue text-white">
                Log In
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/" className="hover:text-blue-800">Home</Link>
        <Link to="/" className="hover:text-blue-800">Trending</Link>
        <Link to="/" className="hover:text-blue-800">Top Stories</Link>
        <Link to="/" className="hover:text-blue-800">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-customBlue text-white">
              LogIn
            </button>
          </Link>
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
