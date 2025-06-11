
const ProductCatalog = () => {
  const categories = [
    {
      title: "Wallpapers",
      description: "Premium wall coverings and artistic patterns",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
      count: "200+ designs",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Curtains & Drapes",
      description: "Elegant window treatments and fabric selections",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",
      count: "150+ styles",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Sofas & Seating",
      description: "Comfortable luxury furniture and modern designs",
      image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=600&q=80",
      count: "100+ pieces",
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "Lighting",
      description: "Ambient and accent lighting solutions",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80",
      count: "80+ fixtures",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Decorative Elements",
      description: "Art, accessories, and finishing touches",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80",
      count: "300+ items",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Complete Sets",
      description: "Coordinated room bundles and design packages",
      image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=600&q=80",
      count: "50+ bundles",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="catalog" className="py-20 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Product Catalog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our curated collection of premium interior design elements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl glass shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="glass text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-md border border-white/20">
                    {category.count}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {category.description}
                </p>
                <button className={`w-full bg-gradient-to-r ${category.color} text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium`}>
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
