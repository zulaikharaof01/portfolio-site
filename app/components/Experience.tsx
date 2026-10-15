const jobs = [
  {
    role: "Data & Digital Analytics Executive (K-Youth Programme)",
    company: "Malayan United Industries Berhad (MUI Group)",
    period: "Aug 2026 – Dec 2026",
    points: [
      "Support the Group Data Foundation, Governance & Sovereignty programme, breaking the project plan down by business unit for Metrojaya, A&W, West Synergy and IHM.",
      "Develop standardised SOPs and process flows (data governance, sales performance reporting, workplace inspection) using a consistent template.",
      "Redesign internal workflows on the MUI Hub platform, including department-based routing and approval for incident reporting, as flowcharts for management review.",
      "Coordinate with the project manager, data team and business-unit stakeholders to keep deliverables consistent and on schedule.",
    ],
  },
  {
    role: "IT Intern, Service Delivery Management (SDM)",
    company: "Mesiniaga Berhad",
    period: "Mar 2026 – Jul 2026",
    points: [
      "Enhanced the Business Analytics Template (BAT) Engineering Utilization Reporting System using Streamlit.",
      "Developed Python ETL workflows with Pandas and NumPy to clean, transform and validate raw utilisation data.",
      "Monitored incidents, service requests and SLA compliance while maintaining accurate operational records.",
      "Collaborated with engineers to investigate issues and track requests through resolution.",
    ],
  },
  {
    role: "IT Unit Intern",
    company: "Institut Pendidikan Guru, Kampus Darulaman",
    period: "Mar 2022 – Jul 2022",
    points: [
      "Validated, corrected and updated PHP/MySQL data, improving data quality for the internal e-Surat system.",
      "Performed functional testing and debugging, and produced operational reports and technical documentation.",
      "Installed, configured and maintained workstations and software environments.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-24 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
      <div className="max-w-3xl mx-auto space-y-6 border-l-2 border-indigo-200 pl-6">
        {jobs.map((j) => (
          <div key={j.role} className="bg-white rounded-2xl p-6 shadow">
            <p className="text-sm text-indigo-700 font-medium">{j.period}</p>
            <h3 className="font-semibold text-lg">{j.role}</h3>
            <p className="text-gray-600 mb-3">{j.company}</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              {j.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}