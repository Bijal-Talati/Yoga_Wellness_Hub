import React from "react";

const FilterBar = ({
  searchTerm,
  setSearchTerm,
  selectedLevel,
  setSelectedLevel,
  selectedType,
  setSelectedType,
  availableLevels,
  availableTypes,
}) => {
  return (
    <div className="bg-beige p-4 rounded-xl shadow-md flex flex-wrap items-center gap-4 justify-between">
      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search asanas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-1/3 px-3 py-2 rounded-lg border border-warmgray focus:outline-none focus:ring-2 focus:ring-skyblue"
      />

      {/* 🧘 Difficulty Level Filter */}
      <select
        value={selectedLevel}
        onChange={(e) => setSelectedLevel(e.target.value)}
        className="w-full md:w-1/4 px-3 py-2 rounded-lg border border-warmgray bg-white text-gray-800"
      >
        <option value="">All Levels</option>
        {availableLevels.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>

      {/* 🌀 Type Filter */}
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="w-full md:w-1/4 px-3 py-2 rounded-lg border border-warmgray bg-white text-gray-800"
      >
        <option value="">All Types</option>
        {availableTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
