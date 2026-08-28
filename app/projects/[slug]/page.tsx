import type { Metadata } from "next";
import { projects } from "../../project-data";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const title = project ? `${project.title} — Jiaqi Liu` : "Project — Jiaqi Liu";
  const description = project?.summary ?? "A project case study by Jiaqi Liu.";
  return {
    title,
    description,
    openGraph: { title, description, images: [] },
    twitter: { title, description, images: [] },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <main className="project-file"><a href="/archive">← ARCHIVE</a><h1>FILE NOT FOUND</h1></main>;

  return (
    <main className="project-file">
      <header><a href="/archive">← RECORD ROOM</a><span>JIAQI LIU / {project.number}</span></header>
      <section className="project-file-hero">
        <span>[ CASE STUDY / {project.number} ]</span>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        <p className="project-zh-summary">{project.zhSummary}</p>
      </section>
      <section className="project-pending">
        <div>PERIOD</div><p>{project.period}</p>
        <div>ROLE</div><p>{project.role}</p>
        <div>STACK</div><p>{project.stack}</p>
        <div>KEY WORK</div><ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
        <div>REPOSITORY</div><p>GitHub URL will be connected after the repository link is verified.</p>
      </section>
    </main>
  );
}
