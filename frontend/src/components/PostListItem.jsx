import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="Post6.jpg"
          className="rounded-2xl object-cover"
          w="735"
          
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-bold">
          Lamine Yamal-The Rising Star of Barcelona 
        </Link>
        <div className="flex items-center gap-2 text-gray-800 text-sm">
          <span className="text-gray-700">Written by</span>
          <Link className="font-bold text-grey-800" to="">
            Kavindu Sarathchandra
          </Link>
          <span className="text-gray-700">on</span>
          <Link className="text-grey-800 font-semibold">Rising Star</Link>
          <span className="text-gray-700">2 Days ago</span>
        </div>
        <p className="text-justify">
          At just 16, Lamine Yamal is already making waves in world football. A
          product of Barcelona's youth academy, his lightning-fast dribbling and
          playmaking skills have earned him a place in the first team. The young
          talent is certainly one to watch as he embarks on his journey to
          stardom.
        </p>
        <Link to="" className="underline font-bold text-customBlue text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
