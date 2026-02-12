import { useState } from "react";
import jobsData from "./data/jobs";
import Filters from "./components/Filters";
import JobCard from "./components/JobCard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("Internship");

  const filteredJobs = jobsData
    .filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((job) =>
      locationFilter === "All" ? true : job.location === locationFilter
    )
    .filter((job) => job.type === typeFilter)
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="min-h-screen px-6 md:px-24 py-20">

      {/* Header */}
      <div className="mb-16 md:flex md:items-end md:justify-between">

        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Explore roles
            <br />
            built for builders.
          </h1>

          <p className="text-neutral-500 mt-4 max-w-md">
            Discover internships and full-time roles curated for ambitious developers.
          </p>
        </div>

        <div className="mt-8 md:mt-0 text-sm text-neutral-400">
          {filteredJobs.length} roles available
        </div>

      </div>

      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />

      {/* Grid */}
      <div className="mt-12">
  {filteredJobs.length === 0 ? (
    <div className="border border-neutral-200 rounded-2xl p-12 text-center bg-neutral-50">
      <h3 className="text-xl font-semibold mb-3">
        No results found
      </h3>
      <p className="text-neutral-500 text-sm max-w-md mx-auto">
        We couldn’t find any roles matching your current filters.
        Try adjusting your search or selecting a different job type.
      </p>
    </div>
  ) : (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} searchTerm={searchTerm} />
      ))}
    </div>
  )}
</div>


    </div>
  );
}

export default App;
