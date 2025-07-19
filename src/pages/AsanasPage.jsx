// --------------------------
// src/pages/AsanasPage.jsx
// --------------------------
import React, { useState } from 'react';
import asanasData from '../data/asanas.json';
import AsanaCard from '../components/AsanaCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import Sidebar from '../components/Sidebar';
import MainLayout from '../MainLayout';

const AsanasPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const types = [...new Set(asanasData.flatMap((a) => a.type))];
  const levels = [...new Set(asanasData.map((a) => a.level))];

  const filteredAsanas = asanasData.filter((asana) => {
    const matchesSearch =
      asana.sanskritName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asana.englishName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel ? asana.level === selectedLevel : true;
    const matchesType = selectedType ? asana.type.includes(selectedType) : true;
    return matchesSearch && matchesLevel && matchesType;
  });

  return (
    <MainLayout>
      <div className="flex">
        <aside className="w-64 hidden lg:block sticky top-0 h-screen overflow-y-auto bg-sage p-4">
          <Sidebar title="Asanas by Type" items={types} onSelect={setSelectedType} selected={selectedType} />
        </aside>

        <main className="flex-1 px-6 py-10">
          <div className="mb-6">
            <SearchBar onSearch={setSearchQuery} placeholder="Search Asanas..." />
          </div>
          <div className="mb-6">
            <FilterBar tags={levels} onFilter={setSelectedLevel} selectedTag={selectedLevel} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredAsanas.map((asana) => (
              <AsanaCard key={asana.sanskritName} asana={asana} />
            ))}
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default AsanasPage;