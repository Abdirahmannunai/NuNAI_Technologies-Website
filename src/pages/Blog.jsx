import { useEffect } from 'react';
import { Clock3 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import NewsletterSection from '../sections/NewsletterSection';
import { BLOG_POSTS } from '../data/technologies';

function BlogCard({ post, delay }) {
  return (
    <ScrollReveal delay={delay}>
      <article className="blog-card" aria-labelledby={`blog-${post.id}`}>
        <div
          className="blog-visual"
          style={{ background: post.visual.bg }}
          aria-hidden="true"
        >
          <post.visual.icon className="blog-visual-icon" size={54} strokeWidth={1.5} />
        </div>
        <div className="blog-body">
          <span className="blog-category">{post.category}</span>
          <h3 id={`blog-${post.id}`} className="blog-title">
            <a href={`/blog/${post.id}`}>{post.title}</a>
          </h3>
          <p className="blog-excerpt">{post.excerpt}</p>
          <div className="blog-meta">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span className="read-time"><Clock3 size={14} aria-hidden="true" /> {post.readTime}</span>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

export default function Blog() {
  useEffect(() => { document.title = 'Blog | NuNAI Technologies'; }, []);

  return (
    <>
      <section className="page-banner" aria-labelledby="blog-page-heading">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-grid" />
          <div className="hero-orb orb-1" />
          <div className="hero-orb orb-2" />
        </div>
        <div className="page-banner-inner">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-sep" aria-hidden="true">›</span>
            <span aria-current="page">Blog</span>
          </nav>
          <span className="section-label">Insights &amp; Ideas</span>
          <h1 id="blog-page-heading">
            Technology Insights for{' '}
            <span className="gradient-text">Forward-Thinking Businesses</span>
          </h1>
          <p>AI trends, development guides, digital transformation insights, and practical technology advice from the NuNAI team.</p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--clr-bg)' }} aria-labelledby="articles-heading">
        <div className="container">
          <ScrollReveal>
            <SectionTitle
              label="Latest Articles"
              title={<>From the <span className="gradient-text">NuNAI Team</span></>}
              subtitle="Practical technology insights for businesses building in Africa and beyond."
            />
          </ScrollReveal>

          <div className="blog-grid">
            {BLOG_POSTS.map((post, i) => (
              <BlogCard key={post.id} post={post} delay={`${(i % 3) * 0.08}s`} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
