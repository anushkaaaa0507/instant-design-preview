
const TrendingStyles = () => {
  const styles = [
    {
      title: "Modern Chic",
      description: "Sleek lines with bold accents",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Luxury Living", 
      description: "Opulent textures and rich materials",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      title: "Minimalist Comfort",
      description: "Clean spaces with warm touches",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Trending Styles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest interior design trends that are transforming homes worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {styles.map((style, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white bg-opacity-80 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${style.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {style.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {style.description}
                </p>
                <button className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300">
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
