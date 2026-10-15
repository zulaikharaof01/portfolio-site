const skills = [
  { group: "Data Analytics", items: ["Data Cleaning", "ETL", "EDA", "KPI Reporting", "Trend Analysis"] },
  { group: "Visualization & BI", items: ["Power BI", "Tableau", "Streamlit", "Dashboards"] },
  { group: "Data Science & ML", items: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"] },
  { group: "NLP", items: ["Sentiment Analysis", "TF-IDF", "NLTK"] },
  { group: "Databases & Programming", items: ["SQL", "MySQL", "Oracle", "MongoDB", "Java", "JavaScript", "PHP", "Flask"] },
  { group: "Documentation & Process", items: ["SOP Writing", "Flowcharting (draw.io)", "Requirements Gathering", "Project Planning"] },
];

const certificates = [
  "Associate Data Scientist in Python, DataCamp (2025)",
  "Data Analyst in Python, DataCamp (2025)",
  "Python Programming Fundamentals Level 1 & 2, TopCoder (2025)",
  "Power BI Data Analytics Training",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>

      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Computer Science graduate and Data &amp; Digital Analytics Executive at
        MUI Group, supporting a group-wide data foundation and governance
        programme across Retail, Food, Property and Hotel businesses. I have
        hands-on experience in data cleaning, ETL, KPI reporting and dashboards,
        plus machine learning and NLP project work, including a sentiment model
        with 90.01% accuracy.
      </p>

      <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
      <div className="grid gap-6 sm:grid-cols-2 mb-12">
        {skills.map((s) => (
          <div key={s.group}>
            <p className="font-medium text-gray-800 mb-2">{s.group}</p>
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Bachelor of Computer Science (Hons.)</p>
              <p className="text-sm text-gray-600">UiTM Jasin, Melaka · 2026</p>
            </div>
            <div>
              <p className="font-medium">Diploma in Information Technology</p>
              <p className="text-sm text-gray-600">
                Politeknik Sultan Abdul Halim Mu'adzam Shah · 2021 · CGPA 3.82 / 4.00
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Training &amp; Certificates</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
            {certificates.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}