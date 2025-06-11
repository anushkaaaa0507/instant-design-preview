
const TrendingStyles = () => {
  const styles = [
    {
      title: "Modern Chic",
      description: "Sleek lines with bold accents and contemporary furniture",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      gradient: "from-moonstone to-mint-green",
    },
    {
      title: "Luxury Living", 
      description: "Opulent textures, rich materials, and sophisticated details",
      image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=800&q=80",
      gradient: "from-dark-purple to-english-violet",
    },
    {
      title: "Minimalist Comfort",
      description: "Clean spaces with warm touches and natural elements",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      gradient: "from-thistle to-lavender-web",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-dark-purple mb-4">
            Trending Styles
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto font-light">
            Discover the latest interior design trends that are transforming homes worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {styles.map((style, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-thistle bg-opacity-80 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer backdrop-blur-md"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${style.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-purple/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2 drop-shadow-lg">
                    {style.title}
                  </h3>
                  <p className="text-sm opacity-90 drop-shadow-md font-light">
                    {style.description}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <button className="w-full bg-gradient-to-r from-moonstone to-mint-green text-white py-3 px-6 rounded-xl hover:from-mint-green hover:to-moonstone transition-all duration-300 transform hover:scale-105 font-light">
                  Explore Style →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingStyles;
