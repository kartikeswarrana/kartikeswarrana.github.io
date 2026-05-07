const certifications = [
  {
    title: 'NPTEL (IIT Kanpur)',
    description: 'Applied Numerical Methods',
    date: '84% (Elite) • Jul-Oct 2025',
  },
  {
    title: 'ISRO IIRS',
    description: 'Remote Sensing & Numerical Ocean Modelling',
    date: 'Aug 2025',
  },
  {
    title: 'NIT Rourkela',
    description: 'Multiscale Modelling in Biophysics Workshop',
    date: 'Jul 2025',
  },
  {
    title: 'IIRA',
    description: 'Data Analysis using Excel',
    date: 'Nov 2025',
  },
  {
    title: 'IIRA',
    description: 'Literature Review & Plagiarism Management',
    date: 'Oct–Nov 2025',
  },
]

export default function Certifications() {
  return (
    <section className="certifications-section">
      <h2>Certifications</h2>

      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div key={cert.title} className="cert-card">
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
            <p>{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
