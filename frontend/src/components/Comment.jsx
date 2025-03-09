import Image from "./Image";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />

        <span className="font-bold">Ravindu Fernando</span>
        <span className="text-sm font-medium text-gray-500">2 Days ago</span>

        {/*       <span className="text-xs text-red-300 hover:text-red-500 cursor-pointer"></span> */}
      </div>
      <div className="mt-4">
        <p>
          Great read! Lamine Yamal is definitely a rising star, and it's
          exciting to see his journey unfold. His potential is limitless, and
          Barcelona fans must be thrilled to watch his progress!
        </p>
      </div>
    </div>
  );
};

export default Comment;
