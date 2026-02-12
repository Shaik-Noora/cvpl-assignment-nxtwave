const Filters = ({
  searchTerm,
  setSearchTerm,
  locationFilter,
  setLocationFilter,
  typeFilter,
  setTypeFilter,
}) => {
  return (
    <div className="mt-8 border border-neutral-200 bg-neutral-50 rounded-2xl p-6">

      {/* Container */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">

        {/* Search */}
        <input
          type="text"
          placeholder="Search roles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:flex-1 bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black transition"
        />

        {/* Location Filter */}
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="w-full md:w-auto bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black transition"
        >
          <option value="All">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="On-site">On-site</option>
        </select>

        {/* Job Type Toggle */}
        <div className="w-full md:w-auto flex border border-neutral-200 rounded-xl overflow-hidden bg-white">
          {["Internship", "Full-time"].map((type) => (
            <button
              key={type}
              onClick={() => setTypeFilter(type)}
              className={`flex-1 md:flex-none px-4 py-3 text-sm font-medium transition
                ${
                  typeFilter === type
                    ? "bg-black text-white"
                    : "text-neutral-600 hover:bg-neutral-100"
                }`}
            >
              {type}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Filters;
