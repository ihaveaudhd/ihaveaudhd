import Link from "next/link";

export default function NotFound() {
  return (
    <section className="inner-page">
      <p className="eyebrow">PAGE NOT FOUND</p>
      <h1>Let’s find a gentler way back.</h1>
      <Link className="button primary" href="/">Return home →</Link>
    </section>
  );
}
