import React, { useEffect, useState } from 'react';
import sequencesData from '../data/sequences.json';
import { motion } from 'framer-motion';

const SequencesPage = () => {
  const [sequences, setSequences] = useState([]);

  useEffect(() => {
    setSequences(sequencesData);
  }, []);

  return (
    <div className="bg-offwhite min-h-screen p-6 lg:p-12 text-accenttext">
      <h1 className="text-4xl font-heading mb-8">🧘‍♀️ Yoga Sequences</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {sequences.map((seq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-xl p-6 border border-sage"
          >
            <h2 className="text-2xl font-heading mb-1">{seq.title}</h2>
            <p className="text-sm mb-2 text-warmgray italic">{seq.level}</p>
            <p className="text-base mb-4">{seq.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {seq.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-skyblue text-sm text-accenttext px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div>
              <h3 className="font-semibold mb-2">Included Asanas:</h3>
              <ul className="list-disc ml-5 space-y-1">
                {seq.asanas.map((a, j) => (
                  <li key={j}>
                    <span className="font-medium">{a.englishName}</span>{' '}
                    <span className="text-sm italic text-warmgray">
                      ({a.sanskritName})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SequencesPage;
