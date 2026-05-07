export default function Skills() {
  const skills = [
    'Python',
    'Linux',
    'Windows',
    'LaTeX',
    'Scientific Computing',
    'Quantum Mechanics',
    'Computational Simulation',
    'Mathematical Physics',
    'Cosmology',
    'MS Excel',
    'PowerPoint',
    'Word',
  ]

  return (
    <section className="skills-section">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <span key={skill} className="skill-chip">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
