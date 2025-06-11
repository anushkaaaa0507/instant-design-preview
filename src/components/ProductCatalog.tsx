
const ProductCatalog = () => {
  const categories = [
    {
      title: "Wallpapers",
      description: "Premium wall coverings",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80",
      count: "200+ designs",
    },
    {
      title: "Curtains & Drapes",
      description: "Elegant window treatments",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80",
      count: "150+ styles",
    },
    {
      title: "Sofas & Seating",
      description: "Comfortable luxury furniture",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80",
      count: "100+ pieces",
    },
    {
      title: "Lighting",
      description: "Ambient and accent lighting",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80",
      count: "80+ fixtures",
    },
    {
      title: "Decorative Elements",
      description: "Art and accessories",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80",
      count: "300+ items",
    },
    {
      title: "Complete Sets",
      description: "Coordinated room bundles",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80",
      count: "50+ bundles",
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
              className="group relative overflow-hidden rounded-xl bg-white bg-opacity-80 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm opacity-90">{category.count}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <button className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300 group-hover:translate-x-1 transform">
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
