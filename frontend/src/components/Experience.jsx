import React from 'react';
import experience from '../data/experience';

const Badge = ({ type }) =>
  type === 'formation' ? (
    <span className="text-xs rounded-full bg-purple-500/15 text-purple-300 px-2 py-0.5">Formation</span>
  ) : (
    <span className="text-xs rounded-full bg-blue-500/15 text-blue-300 px-2 py-0.5">Expérience</span>
  );

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-500">Parcours</h2>

        {/* La bordure gauche de la liste dessine la ligne verticale de la frise */}
        <ol className="relative border-l border-gray-800 ml-3">
          {experience.map((item) => (
            <li key={`${item.title}-${item.place}`} className="mb-10 ml-8 last:mb-0">
              {/* Point sur la ligne */}
              <span
                aria-hidden="true"
                className={`absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-gray-950 ${
                  item.type === 'formation' ? 'bg-purple-400' : 'bg-blue-500'
                }`}
              />

              <div className="flex flex-wrap items-center gap-2">
                <time className="text-sm text-gray-400">{item.period}</time>
                <Badge type={item.type} />
              </div>
              <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-400">{item.place}</p>

              {item.details && <p className="mt-2 text-gray-300 leading-relaxed">{item.details}</p>}

              {item.tags?.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li key={tag} className="text-xs rounded bg-gray-800 text-gray-300 px-2 py-1">{tag}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
