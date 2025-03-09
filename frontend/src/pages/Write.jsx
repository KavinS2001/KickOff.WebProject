import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const Write = () => {
  /*   const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">You should login!</div>;
  } */

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-bold">Create a New Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add a cover image
        </button>
        <input
          className="text-2xl font-medium text-gray-500 placeholder-black bg-transparent outline-none"
          type="text"
          placeholder="Title"
          name="title"
        />

        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm font-medium">
            Choose a category:
          </label>
          <select
            name="category"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value=" unst"> Untold Stories</option>
            <option value="tac">Tactics</option>
            <option value="gamer">Game Reads</option>
            <option value="legmat">Legendary Matches</option>
            <option value="rissta"> Rising Stars</option>
          </select>
        </div>

        <textarea
          className="p-4 rounded-xl bg-white shadow-md"
          name="desc"
          placeholder="Add Short Description"
        />
        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md min-h-[300px]"
        />
        <div className="flex flex-1 ">
          <div className="flex flex-col gap-2 mr-2"></div>
        </div>
        <button className="bg-customBlue text-white font-medium rounded-xl px-1 py-2 w-24 mb-4 transition-colors duration-300 hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed">
          
          Send
        </button>
      </form>
    </div>
  );
};

export default Write;
