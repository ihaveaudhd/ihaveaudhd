import Link from "next/link";
import { notFound } from "next/navigation";

const pages: Record<string, { eyebrow: string; title: string; intro: string }> = {
  "start-here": {
    eyebrow: "A GENTLE BEGINNING",
    title: "Start with recognition, not a checklist.",
    intro: "Whether you are newly curious, newly diagnosed, or simply exhausted from trying to make sense of yourself—this is a place to begin.",
  },
  "understanding-audhd": {
    eyebrow: "UNDERSTANDING AUDHD",
    title: "Two neurotypes. One whole person.",
    intro: "AuDHD describes the intertwined experience of autism and ADHD. The traits can amplify, mask, and contradict one another in ways that are deeply personal.",
  },
  "for-adults": {
    eyebrow: "FOR ADULTS",
    title: "Your history looks different with the right context.",
    intro: "Explore late discovery, masking, burnout, work, relationships, sensory needs, and building a life that actually fits.",
  },
  "for-parents": {
    eyebrow: "FOR PARENTS",
    title: "Connection before correction.",
    intro: "Understand what your child’s nervous system may be communicating—and find practical ways to offer safety, dignity, and support.",
  },
  resources: {
    eyebrow: "RESOURCE LIBRARY",
    title: "Useful, readable, and rooted in real life.",
    intro: "Articles, guides, tools, and recommended resources for understanding AuDHD without the shame or jargon.",
  },
  "the-science": {
    eyebrow: "THE SCIENCE",
    title: "Research, translated with care.",
    intro: "Evidence matters. So does making it understandable, nuanced, and relevant to the lives people are actually living.",
  },
  about: {
    eyebrow: "ABOUT THIS PROJECT",
    title: "A place built for clarity and belonging.",
    intro: "I Have AuDHD exists to make reliable information feel human—and to help people replace self-blame with understanding.",
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <section className="inner-page">
      <div className="inner-decoration" aria-hidden="true">✦</div>
      <p className="eyebrow">{page.eyebrow}</p>
      <h1>{page.title}</h1>
      <p className="inner-intro">{page.intro}</p>
      <div className="coming-soon">
        <span>FIRST DRAFT</span>
        <h2>This section is ready for us to build together.</h2>
        <p>The structure is in place. Next, we can shape the content, add articles, and make this page exactly as useful as you want it to be.</p>
        <Link className="button primary" href="/">Return home →</Link>
      </div>
    </section>
  );
}
