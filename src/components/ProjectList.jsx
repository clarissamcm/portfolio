const projects = [
  {
    title: 'Project One',
    url: 'https://example.com',
    year: 2024
  },
  {
    title: 'Project Two',
    url: 'https://example.com',
    year: 2023
  }
];

export default function ProjectList() {
  return (
    <section className="space-y-6">
      {projects.map((project, idx) => (
        <div key={idx} className="flex justify-between items-center group">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:underline group-hover:text-blue-600 transition"
          >
            {project.title}
          </a>
          <span className="text-sm text-gray-500">{project.year}</span>
        </div>
      ))}
    </section>
  );
}