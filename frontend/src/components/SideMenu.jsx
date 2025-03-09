import Search from "./Search";

const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      {/* Search */}
      <h1 className="mb-4 text-md text-black font-bold ">Search</h1>
      <Search />

      {/* Filter */}

      <h1 className="mt-8 mb-3 text-md text-black font-bold">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            /* onChange={handleFilterChange} */
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Newest
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            /* onChange={handleFilterChange} */
            value="popular"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Most Popular
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            /*    onChange={handleFilterChange} */
            value="trending"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Trending
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            /*     onChange={handleFilterChange} */
            value="oldest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Oldest
        </label>
      </div>

      {/* Cat */}
      <h1 className="mt-8 mb-4 text-md text-black font-bold">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <span
          className="underline cursor-pointer" /* onClick={()=>handleCategoryChange("general")} */
        >
          All
        </span>
        <span
          className="underline cursor-pointer" /* onClick={()=>handleCategoryChange("web-design")} */
        >
          Untold Stories
        </span>
        <span
          className="underline cursor-pointer" /* onClick={()=>handleCategoryChange("development")} */
        >
          Tactics
        </span>
        <span
          className="underline cursor-pointer" /* onClick={()=>handleCategoryChange("databases")} */
        >
          Game Reads
        </span>
        <span
          className="underline cursor-pointer" /* onClick={()=>handleCategoryChange("seo")} */
        >
          Legendary Matches
        </span>
        <span
          className="underline cursor-pointer" /* onClick={()=>handleCategoryChange("marketing")} */
        >
          Rising Stars
        </span>
      </div>
    </div>
  );
};

export default SideMenu;
