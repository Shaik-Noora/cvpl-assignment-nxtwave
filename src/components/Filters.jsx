const Filters = ({
  searchTerm,
  setSearchTerm,
  locationFilter,
  setLocationFilter,
  typeFilter,
  setTypeFilter,
}) => {
  return (
    <div className="border border-neutral-200 rounded-2xl p-6 bg-neutral-50">

      <div className="flex flex-col md:flex-row md:items-center gap-6">

        <input
          type="text"
          placeholder="Search roles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black transition"
        />

        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="All">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="On-site">On-site</option>
        </select>

        <div className="flex border border-neutral-200 rounded-xl overflow-hidden bg-white">
          {["Internship", "Full-time"].map((type) => (
            <button
              key={type}
              onClick={() => setTypeFilter(type)}
              className={`px-5 py-3 text-sm font-medium transition
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
