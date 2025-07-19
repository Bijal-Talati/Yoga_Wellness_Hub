import React from 'react';
import { useParams, Link } from 'react-router-dom';
import literatureData from '../data/literature.json';

const LiteratureDetailPage = () => {
  const { bookSlug, chapterSlug } = useParams();

  const book = literatureData.find(
    (b) => slugify(b.bookName) === bookSlug
  );

  const chapter = book?.chapters.find(
    (ch) => slugify(ch.Title) === chapterSlug
  );

  if (!book || !chapter) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-semibold text-red-700 mb-4">Chapter not found</h1>
        <Link to="/literature" className="text-blue-600 hover:underline">
          Back to Literature
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">{chapter.Title}</h1>
      <p className="text-warmgray mb-4 italic">From <strong>{book.bookName}</strong></p>

      <div className="prose max-w-none prose-p:leading-relaxed prose-headings:mb-3 prose-headings:mt-6 prose-a:text-blue-600">
        {chapter.summary.split('\n').map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>

      <div className="mt-10">
        <Link
          to={`/literature/${bookSlug}`}
          className="inline-block text-sm text-blue-600 hover:underline"
        >
          ← Back to all chapters of {book.bookName}
        </Link>
      </div>
    </div>
  );
};

// Helper: convert to URL-safe slug
function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
}

export default LiteratureDetailPage;
