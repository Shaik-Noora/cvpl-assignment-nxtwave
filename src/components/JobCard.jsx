const highlightText = (text, keyword) => {
  if (!keyword) return text;

  const regex = new RegExp(`(${keyword})`, "gi");
  return text.split(regex).map((part, index) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <span key={index} className="bg-yellow-200">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const JobCard = ({ job, searchTerm }) => {
  return (
    <div className="group border border-neutral-200 rounded-2xl p-6 transition-all duration-200 hover:border-black hover:shadow-lg">

      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-semibold tracking-tight">
          {highlightText(job.title, searchTerm)}
        </h3>

        <span
          className={`text-xs px-3 py-1 rounded-full font-medium
            ${
              job.type === "Internship"
                ? "bg-neutral-100 text-neutral-700"
                : "bg-black text-white"
            }`}
        >
          {job.type}
        </span>
      </div>

      <p className="text-sm text-neutral-500">
        {job.company}
      </p>

      <p className="text-sm text-neutral-400 mt-1">
        {job.location}
      </p>

    </div>
  );
};

export default JobCard;
