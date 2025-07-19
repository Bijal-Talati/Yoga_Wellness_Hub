// --------------------------
// src/components/Sidebar.jsx
// --------------------------
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ items, title = 'Navigation', onFilterChange, contentType = 'asana' }) => {
  const [openGroups, setOpenGroups] = useState({});
  const location = useLocation();

  const toggleGroup = (group) => {
    setOpenGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
  };

  const handleFilterClick = (type) => {
    if (onFilterChange) {
      onFilterChange((prev) => {
        if (prev.includes(type)) return prev.filter((t) => t !== type);
        return [...prev, type];
      });
    }
  };

  return (
    <nav
      aria-label={`${title} Sidebar`}
      className="bg-beige dark:bg-warmgray rounded-xl shadow p-4 w-full sticky top-24"
    >
      <h2 className="text-lg font-heading mb-4 text-accenttext">{title}</h2>
      <ul className="space-y-2">
        {Object.entries(items).map(([group, entries]) => (
          <li key={group}>
            <button
              onClick={() => toggleGroup(group)}
              className="flex items-center justify-between w-full text-left font-medium text-accenttext hover:underline focus:outline-none"
              aria-expanded={openGroups[group] || false}
              aria-controls={`group-${group}`}
            >
              <span>{group}</span>
              {openGroups[group] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            {openGroups[group] && (
              <ul
                id={`group-${group}`}
                className="ml-4 mt-2 border-l border-warmgray pl-2 space-y-1"
              >
                {entries.map((entry) => {
                  const slug =
                    contentType === 'literature'
                      ? entry.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
                      : entry.sanskritName
                          .toLowerCase()
                          .replace(/\s+/g, '-')
                          .replace(/[^a-z0-9-]/g, '');
                  const isActive = location.pathname.includes(slug);
                  const label = contentType === 'literature' ? entry.title : entry.englishName;

                  return (
                    <li key={label}>
                      <Link
                        to={`/${contentType === 'literature' ? 'literature' : 'asanas'}/${slug}`}
                        className={`block px-2 py-1 rounded-md text-sm font-body transition-all duration-150 ${
                          isActive
                            ? 'bg-sage text-accenttext font-semibold'
                            : 'text-accenttext hover:bg-skyblue hover:text-accenttext'
                        }`}
                        onClick={() => handleFilterClick(group)}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;