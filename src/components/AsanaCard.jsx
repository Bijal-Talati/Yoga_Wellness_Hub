import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { slugify } from "../utils/slugify"; // make sure this exists or define it here

const AsanaCard = ({ asana }) => {
  const {
    mainImageUrl,
    sanskritName,
    englishName,
    type = [],
    level,
    shortSummary,
  } = asana;

  const slug = slugify(sanskritName);



  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg"
    >
      <img
        src={mainImageUrl || "/images/placeholder.jpg"}
        alt={`${englishName} - ${sanskritName}`}
        className="w-full h-56 object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-accenttext">{englishName}</h3>
        <h4 className="text-sm italic text-warmgray">{sanskritName}</h4>

        <div className="flex flex-wrap gap-1 mt-2">
          {type.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-skyblue text-accenttext px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
          {level && (
            <span className="text-xs bg-sage text-accenttext px-2 py-0.5 rounded-full">
              {level}
            </span>
          )}
        </div>

        {shortSummary && (
          <p className="text-sm text-gray-700 line-clamp-2">{shortSummary}</p>
        )}

        <div className="mt-4">
          <Link
            to={`/asanas/${slug}`}
            className="inline-block text-sm font-medium text-blue-600 hover:underline"
          >
            View Details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AsanaCard;
