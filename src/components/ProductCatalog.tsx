
const ProductCatalog = () => {
  const categories = [
    {
      title: "Wallpapers",
      description: "Premium wall coverings and artistic patterns",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
      count: "200+ designs",
      color: "from-moonstone to-mint-green",
    },
    {
      title: "Curtains & Drapes",
      description: "Elegant window treatments and fabric selections",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",
      count: "150+ styles",
      color: "from-thistle to-lavender-web",
    },
    {
      title: "Sofas & Seating",
      description: "Comfortable luxury furniture and modern designs",
      image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=600&q=80",
      count: "100+ pieces",
      color: "from-dark-purple to-english-violet",
    },
    {
      title: "Lighting",
      description: "Ambient and accent lighting solutions",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80",
      count: "80+ fixtures",
      color: "from-mint-green to-moonstone",
    },
    {
      title: "Decorative Elements",
      description: "Art, accessories, and finishing touches",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80",
      count: "300+ items",
      color: "from-lavender-web to-thistle",
    },
    {
      title: "Complete Sets",
      description: "Coordinated room bundles and design packages",
      image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=600&q=80",
      count: "50+ bundles",
      color: "from-english-violet to-moonstone",
    },
  ];

  return (
    <section id="catalog" className="py-20 px-6 bg-gradient-to-b from-thistle to-lavender-web">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-dark-purple mb-4">
            Product Catalog
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto font-light">
            Browse our curated collection of premium interior design elements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-thistle bg-opacity-80 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer backdrop-blur-md"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-purple/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-thistle bg-opacity-80 text-english-violet px-3 py-1 rounded-xl text-sm font-light backdrop-blur-md border border-thistle border-opacity-20">
                    {category.count}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-purple mb-2">
                  {category.title}
                </h3>
                <p className="text-cool-gray mb-4 text-sm font-light">
                  {category.description}
                </p>
                <button className={`w-full bg-gradient-to-r ${category.color} text-white py-2 px-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-light`}>
                  Browse Collection →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
