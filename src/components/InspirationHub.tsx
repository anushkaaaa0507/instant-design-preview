
const InspirationHub = () => {
  const articles = [
    {
      title: "2024 Interior Design Trends",
      excerpt: "Discover the latest trends shaping modern interior design this year, from sustainable materials to bold color choices",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
      readTime: "5 min read",
      category: "Trends",
      author: "Design Expert",
    },
    {
      title: "Small Space Design Tips",
      excerpt: "Maximize your space with these expert design strategies and clever storage solutions for modern living",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",
      readTime: "7 min read",
      category: "Tips",
      author: "Space Specialist",
    },
    {
      title: "Color Psychology in Design",
      excerpt: "How colors influence mood and atmosphere in your home, and how to choose the perfect palette for each room",
      image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=600&q=80",
      readTime: "6 min read",
      category: "Psychology",
      author: "Color Expert",
    },
  ];

  return (
    <section id="inspiration" className="py-20 px-6 bg-gradient-to-b from-sage-medium to-sage-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-sage-dark mb-4">
            Inspiration Hub & Blog
          </h2>
          <p className="text-xl text-sage-dark max-w-3xl mx-auto font-light">
            Expert insights, trends, and styling guides to inspire your next design project
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-sage-medium bg-opacity-80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer backdrop-blur-md"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-dark/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-warm-beige text-white px-3 py-1 rounded-xl text-sm font-light">
                    {article.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-sage-medium bg-opacity-80 text-sage-dark px-3 py-1 rounded-xl text-xs backdrop-blur-md border border-sage-medium border-opacity-20 font-light">
                    {article.readTime}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sage-dark mb-2 group-hover:text-warm-beige transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sage-dark mb-4 text-sm line-clamp-3 font-light">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-sage-dark font-light">By {article.author}</span>
                  <button className="text-warm-beige hover:text-warm-brown font-light transition-colors duration-300 text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-sage-medium bg-opacity-80 rounded-xl p-8 shadow-lg max-w-2xl mx-auto backdrop-blur-md">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-warm-beige to-warm-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-semibold text-xl">AI</span>
              </div>
              <h3 className="text-2xl font-semibold text-sage-dark mb-4">
                AI Mood Board Generator
              </h3>
              <p className="text-sage-dark mb-6 font-light">
                Let our AI create personalized interior inspirations based on your preferences, style, and room requirements
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-warm-beige to-warm-brown text-white px-6 py-3 rounded-xl hover:from-warm-brown hover:to-warm-beige transition-all duration-300 transform hover:scale-105 font-light">
                Generate Mood Board
              </button>
              <button className="border-2 border-warm-beige text-warm-beige px-6 py-3 rounded-xl hover:bg-warm-brown hover:bg-opacity-20 transition-all duration-300 font-light">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationHub;
