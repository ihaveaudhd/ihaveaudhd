import Link from "next/link";

const pathways = [
  {
    number: "01",
    title: "I’m figuring myself out",
    text: "Start with the signs, the language, and the quiet moments of recognition.",
    href: "/start-here",
    color: "butter",
  },
  {
    number: "02",
    title: "I’m supporting my child",
    text: "Practical, affirming guidance for understanding what behavior is communicating.",
    href: "/for-parents",
    color: "blue",
  },
  {
    number: "03",
    title: "I want the science",
    text: "Research translated into language you don’t need a doctorate to understand.",
    href: "/the-science",
    color: "rose",
  },
];

const articles = [
  ["THE INNER EXPERIENCE", "When everything is too much—but you still look fine", "7 min read"],
  ["LATE DISCOVERY", "The grief and relief of finally having an explanation", "6 min read"],
  ["REAL LIFE", "Why “just make a routine” has never been simple", "5 min read"],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">A calmer place to understand a complicated brain</p>
          <h1>You were never<br />too much.<br /><em>You were carrying too much.</em></h1>
          <p className="hero-intro">
            Clear, compassionate information for autistic people with ADHD—and
            the people who love them.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/start-here">Start here <span>→</span></Link>
            <Link className="text-link" href="/understanding-audhd">What is AuDHD? <span>↗</span></Link>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="sun">✦</div>
          <div className="thought-card card-one">“Why can I do hard things<br />but not the simple ones?”</div>
          <div className="thought-card card-two">Maybe your brain<br />isn’t broken.</div>
          <span className="spark spark-one">✦</span>
          <span className="spark spark-two">✧</span>
        </div>
      </section>

      <section className="recognition">
        <p className="eyebrow">IF YOU’VE EVER WONDERED</p>
        <div className="recognition-grid">
          <h2>How can I be both<br /><em>these things</em> at once?</h2>
          <div className="contrasts">
            <p><span>Craving structure</span><b>and</b><span>resisting routine</span></p>
            <p><span>Deeply focused</span><b>and</b><span>easily distracted</span></p>
            <p><span>Highly capable</span><b>and</b><span>barely keeping up</span></p>
          </div>
        </div>
        <p className="recognition-note">
          That tension has a name. <strong>AuDHD</strong> is the lived experience of
          being both autistic and ADHD—and neither one cancels the other out.
        </p>
      </section>

      <section className="pathways section-wrap">
        <div className="section-heading">
          <p className="eyebrow">CHOOSE YOUR PATH</p>
          <h2>Begin where you are.</h2>
          <p>There is no “right” way to learn about your brain.</p>
        </div>
        <div className="pathway-grid">
          {pathways.map((item) => (
            <Link className={`pathway-card ${item.color}`} href={item.href} key={item.title}>
              <span className="card-number">{item.number}</span>
              <div className="card-symbol" aria-hidden="true">{item.number === "01" ? "〰" : item.number === "02" ? "◡" : "✣"}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="card-link">Explore this path →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="articles section-wrap">
        <div className="section-heading row">
          <div>
            <p className="eyebrow">READ & RECOGNIZE</p>
            <h2>Words for what<br />you’ve been feeling.</h2>
          </div>
          <Link className="text-link" href="/resources">Browse all articles →</Link>
        </div>
        <div className="article-list">
          {articles.map(([category, title, time], index) => (
            <Link href="/resources" className="article-row" key={title}>
              <span className="article-index">0{index + 1}</span>
              <div><p className="eyebrow">{category}</p><h3>{title}</h3></div>
              <span className="read-time">{time}</span>
              <span className="article-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="closing">
        <span aria-hidden="true">✦</span>
        <p>YOU ARE NOT ALONE</p>
        <h2>There’s nothing wrong with<br />the way your mind works.</h2>
        <p className="closing-copy">You deserve support that begins with understanding, not judgment.</p>
        <Link className="button light" href="/start-here">Find a place to begin →</Link>
      </section>
    </>
  );
}
