import "./Blog.css";

const posts = [
  {
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85",
    category: "Cleaning Tips",
    date: "August 10, 2026",
    title: "5 Simple Ways to Keep Your Home Cleaner",
    description:
      "Discover simple cleaning habits that can help keep your home fresh, organized and comfortable every day.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=85",
    category: "Home Care",
    date: "August 5, 2026",
    title: "How Often Should You Deep Clean Your Home?",
    description:
      "A deep clean can make a huge difference. Learn how often you should give your home a detailed clean.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
    category: "Office Cleaning",
    date: "July 28, 2026",
    title: "Why a Clean Office Matters",
    description:
      "A clean workplace can create a better environment for employees, clients and visitors.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=900&q=85",
    category: "Cleaning Tips",
    date: "July 20, 2026",
    title: "Cleaning Products You Actually Need",
    description:
      "You don't need dozens of products to keep your space clean. Here are some useful essentials.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=85",
    category: "Bathroom Care",
    date: "July 12, 2026",
    title: "How to Keep Your Bathroom Fresh",
    description:
      "Learn practical ways to keep your bathroom clean, fresh and looking its best.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85",
    category: "Kitchen Care",
    date: "July 5, 2026",
    title: "Keeping Your Kitchen Clean",
    description:
      "Simple routines that can help you maintain a cleaner and more hygienic kitchen.",
  },
];

function Blog() {
  return (
    <main className="blog-page">
      {/* Blog Hero */}
      <section className="blog-hero">
        <div className="blog-hero-overlay"></div>

        <div className="blog-hero-content">
          <p>THE KAVOD BLOG</p>

          <h1>
            Ideas for a<span>cleaner life.</span>
          </h1>

          <p className="blog-intro">
            Cleaning tips, home care advice and helpful ideas to keep your
            spaces looking their best.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="blog-posts">
        <div className="container">
          <div className="blog-heading">
            <p className="section-label">FROM THE BLOG</p>

            <h2 className="section-title">Cleaning tips & insights</h2>
          </div>

          <div className="posts-grid">
            {posts.map((post, index) => (
              <article className="blog-card" key={index}>
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                </div>

                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>

                  <h3>{post.title}</h3>

                  <p>{post.description}</p>

                  <a href="#">Read Article →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
