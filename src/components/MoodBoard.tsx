
const MoodBoard = () => {
  const moodBoards = [
    {
      title: "Scandinavian Serenity",
      colors: ["#F5F5DC", "#E6E6FA", "#D3D3D3", "#A52A2A"],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
      theme: "Minimalist & Natural",
    },
    {
      title: "Luxury Glamour",
      colors: ["#FFD700", "#800080", "#000000", "#FFFFFF"],
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      theme: "Bold & Sophisticated",
    },
    {
      title: "Earthy Warmth",
      colors: ["#8B4513", "#DEB887", "#228B22", "#FF6347"],
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
      theme: "Organic & Cozy",
    },
  ];

  return (
    <section id="moodboard" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Interactive Mood Board
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered inspiration boards tailored to your unique style preferences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {moodBoards.map((board, index) => (
            <div
              key={index}
              className="group bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={board.image}
                  alt={board.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {board.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {board.theme}
                </p>
                
                <div className="flex space-x-2 mb-4">
                  {board.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300">
                  Use This Palette
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Create Your Custom Mood Board
            </h3>
            <p className="text-gray-600 mb-6">
              Use our AI-powered tool to generate personalized design inspirations
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105">
              Start Creating
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodBoard;
