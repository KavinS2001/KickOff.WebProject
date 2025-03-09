import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenu from "../components/PostMenu";
import Search from "../components/Search";
import Comments from "../components/Comments";

const MainPost = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5  flex flex-col gap-8">
          <h1 className="text-xl mt-2 text-gray-950 md:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
            Lamine Yamal-The Rising Star of Barcelona
          </h1>
          <div className="flex items-center gap-2  text-sm">
            <span className="text-gray-700">Written by</span>
            <Link className="font-bold text-grey-800">
              {" "}
              Kavindu Sarathchandra
            </Link>
            <span className="text-gray-700">on</span>
            <Link className="text-grey-800 font-semibold">Rising Star</Link>
            <span className="text-gray-700">2 Days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            At just 16 years old, Lamine Yamal has already become one of the
            most talked-about young talents in world football. Born in Spain,
            Yamal's journey into the world of football has been nothing short of
            impressive. He joined Barcelona’s famed La Masia youth academy at a
            young age, where his natural ability quickly caught the eye of
            coaches and scouts.
          </p>
        </div>

        <div className="hidden lg:block w-2/5">
          <Image src="Post6.jpg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Known for his exceptional dribbling skills, lightning-fast pace, and
            excellent vision, Yamal is a versatile forward who can play across
            the front line. His ability to glide past defenders effortlessly,
            combined with his playmaking intelligence, has already drawn
            comparisons to some of the best players in the world.
          </p>
          <p>
            In 2023, Yamal made his debut for Barcelona's first team at the age
            of just 15 years and 290 days, making him one of the youngest
            players to ever play for the club. He wasted no time in showcasing
            his potential, quickly becoming a key figure in Xavi Hernández's
            squad.
          </p>
          <p>
            With each match, Yamal has continued to impress, playing with
            maturity beyond his years. His performances in domestic competitions
            and the Champions League have demonstrated his composure under
            pressure and his eagerness to learn from the senior players around
            him. His ability to both create and finish chances has made him a
            constant threat on the field.
          </p>
          <p>
            Despite his youth, Yamal's potential is limitless, and many are
            already tipping him for greatness. His rapid rise has also led to
            international attention, with reports suggesting that top clubs
            around Europe have begun monitoring his progress closely.
          </p>
          <p>
            For now, Yamal remains focused on his development at Barcelona,
            where his rise continues to captivate fans and pundits alike. If his
            early performances are anything to go by, the world of football will
            be watching closely as this young star continues to shine.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-bold">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">Kavindu Sarathchandra</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>

          <PostMenu />

          <h1 className="mt-8 mb-4 text-sm font-bold">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All Posts</Link>
            <Link className="underline" to="/">
              Untold Stories
            </Link>
            <Link className="underline" to="/">
              Tactics
            </Link>
            <Link className="underline" to="/">
              Game Reads
            </Link>
            <Link className="underline" to="/">
              Legendary Matches
            </Link>
            <Link className="underline" to="/">
              Rising Stars
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-bold">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default MainPost;
