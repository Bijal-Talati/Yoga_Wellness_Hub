import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import asanas from '@/data/asanas.json';
import { motion } from 'framer-motion';
import { slugify } from '@/utils/slugify';
import MainLayout from '@/components/layout/MainLayout';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import Tag from '@/components/ui/Tag';
import NotFound from '@/components/NotFound';

const AsanaDetailPage = () => {
  const { slug } = useParams();
  const [asana, setAsana] = useState(null);

  useEffect(() => {
    const found = asanas.find(a => slugify(a.sanskritName) === slug);
    setAsana(found || null);
  }, [slug]);

  if (!asana) return <NotFound message="Asana not found." />;

  return (
    <MainLayout>
      <section className="py-8 px-4 lg:px-16">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <img
            src={asana.mainImageUrl}
            alt={asana.englishName}
            className="w-full rounded-xl shadow"
          />
          <div>
            <h1 className="text-4xl font-serif text-accenttext mb-2">
              {asana.sanskritName}
            </h1>
            <h2 className="text-xl text-gray-700 italic mb-4">
              {asana.englishName}
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <Tag>{asana.level}</Tag>
              {asana.type.map((t, idx) => (
                <Tag key={idx} color="blue">{t}</Tag>
              ))}
            </div>
            <p className="text-sm text-gray-600 italic">
              {asana.symbolism && `Symbolism: ${asana.symbolism}`}
            </p>
          </div>
        </motion.div>

        {/* Technique */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-2">Technique</h3>
          <p><strong>Starting Position:</strong> {asana.startingPosition}</p>
          <ul className="list-decimal ml-6 mt-2 space-y-1">
            {asana.instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
          <p className="mt-4"><strong>Coming Out:</strong> {asana.comingOutOfPose}</p>
        </section>

        {/* Alignment */}
        <section className="mt-8">
          <h3 className="text-2xl font-semibold mb-2">Alignment Principles</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Foundation:</strong> {asana.foundation}</li>
            <li><strong>Spinal Alignment:</strong> {asana.spinalAlignment}</li>
            <li><strong>Joint Awareness:</strong> {asana.jointAwareness.join(', ')}</li>
            <li><strong>Muscle Cues:</strong> {asana.muscleCues.join(', ')}</li>
            <li><strong>Common Mistakes:</strong> {asana.commonMistakes.join(', ')}</li>
            <li><strong>Verbal Cues:</strong> {asana.verbalCues.join(', ')}</li>
          </ul>
        </section>

        {/* Physiology */}
        <section className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Physiological Impact</h3>
          <Accordion>
            {Object.entries(asana.physiologicalImpact).map(([key, value], idx) => (
              <AccordionItem key={idx} title={key.replace(/([A-Z])/g, ' $1')}>
                {Array.isArray(value) ? value.join(', ') : value ? 'Yes' : 'No'}
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Safety */}
        <section className="mt-8">
          <h3 className="text-2xl font-semibold mb-2">Safety & Modifications</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Contraindications:</strong> {asana.contraindications.join(', ')}</li>
            <li><strong>Modifications:</strong> {asana.modificationsForSafety.join(', ')}</li>
            <li><strong>Accessibility:</strong> {asana.accessibilityOptions.join(', ')}</li>
            <li><strong>Advanced Variations:</strong> {asana.advancedVariations.join(', ')}</li>
          </ul>
        </section>

        {/* Breath & Drishti */}
        <section className="mt-8">
          <h3 className="text-2xl font-semibold mb-2">Breath & Drishti</h3>
          <p><strong>Breath Cues:</strong> {asana.breathCues}</p>
          <p><strong>Drishti:</strong> {asana.drishti}</p>
        </section>

        {/* Energetic & Symbolic */}
        {asana.philosophicalConnection || asana.nadisAffected || asana.pranaVayus ? (
          <section className="mt-8">
            <h3 className="text-2xl font-semibold mb-2">Symbolism & Energetics</h3>
            {asana.philosophicalConnection && (
              <p><strong>Philosophy:</strong> {asana.philosophicalConnection}</p>
            )}
            <p><strong>Prana Vayus:</strong> {asana.pranaVayus?.join(', ')}</p>
            <p><strong>Nadis Affected:</strong> {asana.nadisAffected?.join(', ')}</p>
          </section>
        ) : null}

        {/* Related Asanas */}
        <section className="mt-12 border-t pt-6">
          <h3 className="text-xl font-semibold mb-4">Related Asanas</h3>
          <div className="flex flex-wrap gap-4">
            {asanas
              .filter(a =>
                a.sanskritName !== asana.sanskritName &&
                (a.level === asana.level || a.type.some(t => asana.type.includes(t)))
              )
              .slice(0, 3)
              .map((rel, idx) => (
                <Link
                  to={`/asanas/${slugify(rel.sanskritName)}`}
                  key={idx}
                  className="w-60 bg-offwhite p-4 rounded shadow hover:shadow-md transition"
                >
                  <img src={rel.mainImageUrl} alt={rel.englishName} className="rounded mb-2" />
                  <h4 className="font-serif">{rel.sanskritName}</h4>
                  <p className="text-sm text-gray-600">{rel.englishName}</p>
                </Link>
              ))}
          </div>
        </section>
      </section>
    </MainLayout>
  );
};

export default AsanaDetailPage;