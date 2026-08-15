import { useState } from "react";
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
    article: `
      Keeping your home clean does not have to mean spending hours cleaning every day. 
      Small, consistent habits can make a big difference and help your home stay fresh for longer.

      Start by making your bed each morning and putting items back where they belong. 
      A few minutes of tidying can prevent clutter from building up throughout the day.

      Pay attention to high-touch areas such as door handles, light switches, tables and kitchen surfaces. 
      Cleaning these areas regularly can help maintain a fresher and more hygienic environment.

      It is also helpful to create a simple cleaning routine. Instead of trying to clean everything at once, 
      divide tasks across the week. This makes cleaning easier and much less overwhelming.

      Finally, remember that professional cleaning can help when your space needs more than a quick tidy-up. 
      Kavenora provides professional cleaning solutions designed around your home and your needs.
    `,
  },

  {
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=85",
    category: "Home Care",
    date: "August 5, 2026",
    title: "How Often Should You Deep Clean Your Home?",
    description:
      "A deep clean can make a huge difference. Learn how often you should give your home a detailed clean.",
    article: `
      Regular cleaning keeps your home looking good, but deep cleaning goes further. 
      It focuses on areas that may not receive attention during your normal cleaning routine.

      For most homes, a thorough deep clean every few months can be a useful starting point. 
      However, the ideal frequency depends on the size of your home, how many people live there and your daily routine.

      Kitchens and bathrooms often need extra attention because they are used frequently. 
      Areas such as behind appliances, inside cupboards, windows and hard-to-reach surfaces can also benefit from a deeper clean.

      You may also want to consider a deep clean after moving into a new property, before an important event or 
      when your home simply needs a fresh start.

      A professional deep cleaning service can save time and help ensure that difficult-to-reach areas are not overlooked.
    `,
  },

  {
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
    category: "Office Cleaning",
    date: "July 28, 2026",
    title: "Why a Clean Office Matters",
    description:
      "A clean workplace can create a better environment for employees, clients and visitors.",
    article: `
      Your workplace creates an impression on everyone who walks through the door. 
      A clean and organised office can make employees and visitors feel more comfortable and welcome.

      Regular cleaning also helps maintain shared spaces such as kitchens, meeting rooms, reception areas and washrooms. 
      These areas can experience a lot of daily traffic and therefore require consistent attention.

      A cleaner workspace can also make it easier for employees to stay organised and focused on their work.

      Don't forget the smaller details. Desks, door handles, switches, shared equipment and other frequently touched surfaces 
      should form part of a regular cleaning routine.

      Whether you manage a small office or a larger commercial space, Kavenora can provide a cleaning solution 
      that works around your business and schedule.
    `,
  },

  {
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=900&q=85",
    category: "Cleaning Tips",
    date: "July 20, 2026",
    title: "Cleaning Products You Actually Need",
    description:
      "You don't need dozens of products to keep your space clean. Here are some useful essentials.",
    article: `
      Having a cupboard full of cleaning products does not necessarily mean your home is cleaner. 
      A small collection of useful products can handle many everyday cleaning tasks.

      A good general-purpose cleaner can be useful for many surfaces around the home. 
      Microfibre cloths are another simple essential because they can be used for dusting and wiping surfaces.

      A quality bathroom cleaner can help with sinks, showers and other bathroom surfaces, while a suitable floor cleaner 
      can help keep your floors looking their best.

      It is important to always follow the instructions on cleaning products and avoid mixing different chemicals together.

      The most important part of cleaning is not having the largest collection of products. 
      It is using the right product correctly and cleaning consistently.
    `,
  },

  {
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=85",
    category: "Bathroom Care",
    date: "July 12, 2026",
    title: "How to Keep Your Bathroom Fresh",
    description:
      "Learn practical ways to keep your bathroom clean, fresh and looking its best.",
    article: `
      Bathrooms require regular attention because they are exposed to moisture and frequent daily use.

      One of the simplest ways to keep your bathroom fresh is to wipe down wet surfaces after use. 
      This can help reduce the build-up of soap residue and moisture.

      Regularly clean your sink, toilet, shower and floor. Do not forget smaller areas such as taps, handles and mirrors.

      Good ventilation is also important. Allowing moisture to escape can help keep the bathroom feeling fresher.

      Finally, give your bathroom a deeper clean regularly. Pay attention to areas that are easy to overlook, 
      including corners, grout lines and behind fixtures.

      If your bathroom needs a more detailed clean, Kavenora can help take care of the hard work.
    `,
  },

  {
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85",
    category: "Kitchen Care",
    date: "July 5, 2026",
    title: "Keeping Your Kitchen Clean",
    description:
      "Simple routines that can help you maintain a cleaner and more hygienic kitchen.",
    article: `
      The kitchen is one of the busiest areas in most homes, so keeping it clean requires a simple routine.

      Start by cleaning spills as soon as possible. Allowing food or liquids to sit can make stains harder to remove later.

      Wipe your worktops after preparing meals and regularly clean handles, cupboard doors and other frequently touched surfaces.

      Your sink also deserves regular attention. Rinse it after use and give it a thorough clean to help prevent unpleasant smells.

      Do not forget your appliances. Your refrigerator, microwave, oven and other appliances should be cleaned regularly 
      to prevent dirt and food residue from building up.

      A few minutes of cleaning after each meal can make a big difference and prevent larger cleaning jobs later.
    `,
  },
];
function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <main className="blog-page">
      {/* Blog Hero */}
      <section className="blog-hero">
        <div className="blog-hero-overlay"></div>

        <div className="blog-hero-content">
          <p>THE KAVENORA BLOG</p>

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
              <article
                className="blog-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}>
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

                  <button
                    type="button"
                    className="read-article-btn"
                    onClick={() => setSelectedPost(post)}>
                    Read Article →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Popup */}
      {selectedPost && (
        <div className="article-overlay">
          <div className="article-card">
            <button
              type="button"
              className="article-close"
              onClick={() => setSelectedPost(null)}
              aria-label="Close article">
              ×
            </button>

            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="article-image"
            />

            <div className="article-content">
              <div className="blog-meta">
                <span>{selectedPost.category}</span>
                <span>{selectedPost.date}</span>
              </div>

              <h2>{selectedPost.title}</h2>

              <div className="article-text">
                {selectedPost.article
                  .trim()
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph.trim()}</p>
                  ))}
              </div>

              <a
                href="/Kavod-cleaning/quote"
                className="article-quote-btn"
                onClick={() => setSelectedPost(null)}>
                Need Professional Cleaning? Get a Free Quote →
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Blog;
