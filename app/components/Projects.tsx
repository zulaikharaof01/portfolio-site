const projects = [
  {
    title: "Sentiment Analysis on Hiker Reviews",
    tag: "Final Year Project · 2025–2026",
    desc: "End-to-end NLP application: data cleaning, EDA, TF-IDF features, classifier comparison, deployed as a Flask web app.",
    tech: "Python, Pandas, Scikit-learn, Flask",
  },
  {
    title: "IMDb Sentiment Analysis",
    tag: "2025",
    desc: "Preprocessed 500+ reviews and compared Naïve Bayes and Decision Tree, reaching 90.01% accuracy with Naïve Bayes.",
    tech: "Python, NLTK, TF-IDF, Scikit-learn",
  },
  {
    title: "Big Data Analytics & Classification",
    tag: "2025",
    desc: "Analysed a 500+ record dataset (cleaning, feature selection, cross-validation) and built supervised models with Matplotlib visuals.",
    tech: "Python, Pandas, NumPy, Matplotlib",
  },
  {
    title: "E-Barber System",
    tag: "Gold Medal · ICTeX 2021",
    desc: "Android appointment management app. Won Gold Medal (1st Place) at the ICTeX 2021 National Innovation Competition.",
    tech: "Java, Firebase",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-24 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
          >
            <p className="text-xs text-indigo-700 font-medium mb-1">{p.tag}</p>
            <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{p.desc}</p>
            <span className="text-xs bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
              {p.tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}