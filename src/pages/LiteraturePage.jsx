// --------------------------
// src/pages/LiteraturePage.jsx
// --------------------------
import React, { useState } from 'react';
import literatureData from '../data/literature.json';
import Sidebar from '../components/Sidebar';
import MainLayout from '../MainLayout';

const LiteraturePage = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleSelectChapter = (bookName, Title) => {
    setSelectedChapter({ bookName, Title });
  };

  const renderChapterContent = () => {
    if (!selectedChapter) return <p className="text-lg">Select a chapter to view its content.</p>;

    const book = literatureData.find((b) => b.bookName === selectedChapter.bookName);
    const chapter = book?.chapters.find((c) => c.title === selectedChapter.Title);

    <Link to={`/literature/${slugify(book.bookName)}/${slugify(chapter.chapterTitle)}`}>
       {chapter.chapterTitle}
    </Link>
    return (
      <div>
        <h2 className="text-2xl font-heading mb-4">{chapter.title}</h2>
        <p className="text-base leading-relaxed">{chapter.summary}</p>
      </div>
    );
  };

  return (
    <MainLayout>
      <div className="bg-offwhite dark:bg-warmgray text-accenttext font-body min-h-screen flex">
        {/* Sidebar */}
        <div className="w-1/4 border-r border-warmgray dark:border-white sticky top-0 h-screen overflow-y-auto">
          <Sidebar
            data={literatureData.map((book) => ({
              label: book.bookName,
              children: book.chapters.map((chapter) => ({
                label: chapter.title,
                onClick: () => handleSelectChapter(book.bookName, chapter.title),
              })),
            }))}
          />
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-10">
          <h1 className="text-4xl font-heading mb-6">Yoga Literature</h1>
          {renderChapterContent()}
        </div>
      </div>
    </MainLayout>
  );
};

export default LiteraturePage;
