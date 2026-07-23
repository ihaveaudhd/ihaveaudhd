import Image from "next/image";
import Link from "next/link";

const pathways = [
  {
    icon: "/images/icon-brain.png",
    title: "Understand AuDHD",
    text: "Learn what it is, how it shows up, and why it often goes unseen.",
    href: "/understanding-audhd",
    color: "coral",
  },
  {
    icon: "/images/icon-heart.png",
    title: "For Adults",
    text: "Late discovery, masking, burnout, relationships, and living authentically.",
    href: "/for-adults",
    color: "purple",
  },
  {
    icon: "/images/icon-people.png",
    title: "For Parents",
    text: "Support, strategies, and real-life tools for raising AuDHD kids.",
    href: "/for-parents",
    color: "blue",
  },
  {
    icon: "/images/icon-book.png",
    title: "The Science",
    text: "Research, explanations, and evidence-based insights in plain English.",
    href: "/the-science",
    color: "green",
  },
  {
    icon: "/images/icon-headphones.png",
    title: "Real Life",
    text: "Sensory overload, school struggles, medication, and what actually helps.",
    href: "/resources",
    color: "yellow",
  },
  {
    icon: "/images/icon-speech.png",
    title: "You’re Not Alone",
    text: "Stories, community, and a space where you belong.",
    href: "/start-here",
    color: "pink",
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
        <Image
          className="hero-photo"
          src="/images/home-hero.png"
          alt="A woman sitting peacefully on a mountain overlooking the sunset"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-copy">
          <p className="eyebrow rainbow-text">Hidden. Real. Not alone.</p>
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
      </section>

      <section className="support-paths section-wrap">
        <div className="support-title">
          <p className="eyebrow">You’ll find support &amp; answers here</p>
          <div className="heart-rule"><span>♡</span></div>
        </div>
        <div className="support-grid">
          {pathways.map((item) => (
            <Link className={`support-card ${item.color}`} href={item.href} key={item.title}>
              <Image className="support-symbol" src={item.icon} alt="" width={88} height={64} />
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <span className="card-link">Learn more →</span>
            </Link>
          ))}
        </div>
        <div className="community-ribbon">
          <span>♡</span>
          <p>This community is about connection, validation, and empowerment.</p>
          <em>Because your story matters.</em>
          <span>♡</span>
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
          {pathways.slice(0, 3).map((item, index) => (
            <Link className={`pathway-card ${item.color}`} href={item.href} key={item.title}>
              <span className="card-number">0{index + 1}</span>
              <Image className="card-symbol-image" src={item.icon} alt="" width={140} height={100} />
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
