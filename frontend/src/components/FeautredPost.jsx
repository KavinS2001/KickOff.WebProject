import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* Main Post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <Image src="Post1.jpg" className="rounded-3xl object-contain" w="895" h="600" />
        {/* Details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-grey-800 font-semibold lg:text-lg">
            Untold Stories
          </Link>
          <span className="text-gray-700 font-medium">2 Days ago</span>
        </div>
        {/* Title */}
        <Link
          to=""
          className="text-2xl lg:text-3xl text-gray-950 font-bold lg:font-bold"
        >
          The Untold Story of Messi: Beyond the Ball
        </Link>
      </div>

      {/* Left Posts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Post 2 */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="Post2.jpg"
              className="rounded-3xl object-cotain w-full h-full"
              w="298"
            />
          </div>
          {/* Details*/}
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-grey-800 font-semibold">Tactics</Link>
              <span className="text-gray-700 text-sm">3 Days ago</span>
            </div>
            {/*  Title */}
            <Link
              to=""
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-bold"
            >
              Mastering the Art of Pressing: A Deep Dive into Modern Football
              Tactics
            </Link>
          </div>
        </div>

        {/* Post 3 */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="Post3.jpg"
              className="rounded-3xl object-cotain w-full h-full"
              w="298"
            />
          </div>
          {/* Details */}
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-grey-800 font-semibold"> Untold Stories </Link>
              <span className="text-gray-700 text-sm"> 3 Days ago</span>
            </div>
            {/*  Title */}
            <Link
              to=""
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-bold"
            >
              From the Streets to Stardom: The Rise of Neymar Jr.
            </Link>
          </div>
        </div>
        {/* Post 4 */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="Post4.jpg"
              className="rounded-3xl object-cotain w-full h-full"
              w="298"
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">04.</h1>
              <Link className="text-grey-800 font-semibold">Legendery Matches</Link>
              <span className="text-gray-700 text-sm">5 Days ago</span>
            </div>
            <Link
              to=""
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-bold"
            >
              The Greatest Comebacks in Football History
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
