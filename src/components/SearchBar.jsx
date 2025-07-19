import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full">
      <label htmlFor="asana-search" className="sr-only">
        Search Asanas
      </label>
      <input
        id="asana-search"
        type="text"
        placeholder="Search asanas by name, benefit, or type..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-3 border border-warmgray rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-skyblue bg-offwhite text-accenttext"
      />
    </div>
  );
};

export default SearchBar;
