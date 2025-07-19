import React from "react";
import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";

const BlogCard = ({ title, excerpt, date, slug, tags = [] }) => {
  return (
    <div className="bg-white dark:bg-warmgray rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5 w-full max-w-md">
      <div className="mb-2 text-sm text-gray-500 flex items-center gap-2">
        <CalendarDays className="w-4 h-4" />
        <span>{new Date(date).toLocaleDateString()}</span>
      </div>
      <h3 className="text-lg font-semibold text-accenttext mb-2">{title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-200 line-clamp-3 mb-4">
        {excerpt}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-sage text-sm text-accenttext px-3 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      <Link
        to={`/blog/${slug}`}
        className="text-skyblue hover:underline font-medium"
      >
        Read More →
      </Link>
    </div>
  );
};

export default BlogCard;
