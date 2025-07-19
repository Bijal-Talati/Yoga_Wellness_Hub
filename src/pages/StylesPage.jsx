import React from 'react';

const colors = [
  { name: 'sage', hex: '#DDEAD5' },
  { name: 'skyblue', hex: '#CBE6F2' },
  { name: 'beige', hex: '#F5F0E6' },
  { name: 'warmgray', hex: '#D1CBC3' },
  { name: 'offwhite', hex: '#FAFAF7' },
  { name: 'accenttext', hex: '#3C3C3B' },
];

const StylesPage = () => {
  return (
    <div className="p-10 bg-offwhite min-h-screen text-accenttext">
      <h1 className="text-4xl font-heading mb-6">🎨 Style Guide</h1>

      {/* Color Palette */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading mb-4">Color Palette</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {colors.map((color) => (
            <div key={color.name} className="rounded-xl shadow-md p-4 text-center">
              <div
                className="w-full h-20 rounded mb-2"
                style={{ backgroundColor: color.hex }}
              />
              <div className="font-medium">{color.name}</div>
              <div className="text-sm text-gray-600">{color.hex}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading mb-4">Typography</h2>
        <div className="space-y-4">
          <h1 className="text-4xl font-heading">Heading 1 – Lora</h1>
          <h2 className="text-3xl font-heading">Heading 2 – Lora</h2>
          <h3 className="text-2xl font-heading">Heading 3 – Lora</h3>
          <p className="text-base font-body">
            This is body text using Open Sans. It's calm, easy to read, and pleasant on pastel backgrounds.
          </p>
        </div>
      </section>

      {/* Buttons */}
      <section className="mb-10">
        <h2 className="text-2xl font-heading mb-4">Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-sage text-accenttext px-6 py-2 rounded-full shadow hover:bg-warmgray transition">
            Primary Button
          </button>
          <button className="bg-skyblue text-accenttext px-6 py-2 rounded-full shadow hover:bg-beige transition">
            Secondary Button
          </button>
          <button className="bg-accenttext text-offwhite px-6 py-2 rounded-full hover:bg-skyblue transition">
            Dark Button
          </button>
        </div>
      </section>

      {/* Utilities */}
      <section>
        <h2 className="text-2xl font-heading mb-4">Layout & Utilities</h2>
        <ul className="list-disc ml-5 space-y-2">
          <li>Desktop-first breakpoints: <code>lg:</code>, <code>xl:</code></li>
          <li>Rounded corners: <code>rounded-xl</code></li>
          <li>Soft shadows: <code>shadow-md</code>, <code>shadow-lg</code></li>
          <li>Font families: <code>font-heading</code>, <code>font-body</code></li>
          <li>Color utility: <code>bg-sage</code>, <code>text-accenttext</code></li>
        </ul>
      </section>
    </div>
  );
};

export default StylesPage;
