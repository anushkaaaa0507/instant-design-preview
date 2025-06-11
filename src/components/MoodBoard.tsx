
const MoodBoard = () => {
  const moodBoards = [
    {
      title: "Scandinavian Serenity",
      colors: ["#DFD9E2", "#DACCE1", "#89909F", "#76A4A7"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      theme: "Minimalist & Natural",
      description: "Clean lines, natural materials, and calming neutral tones",
    },
    {
      title: "Luxury Glamour",
      colors: ["#292131", "#443D52", "#76A4A7", "#C2EBBD"],
      image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=800&q=80",
      theme: "Bold & Sophisticated",
      description: "Rich textures, metallic accents, and dramatic contrasts",
    },
    {
      title: "Earthy Warmth",
      colors: ["#DACCE1", "#C2EBBD", "#76A4A7", "#DFD9E2"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      theme: "Organic & Cozy",
      description: "Natural wood tones, plants, and warm earth colors",
    },
  ];

  return (
    <section id="moodboard" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-dark-purple mb-4">
            Interactive Mood Board
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto font-light">
            AI-powered inspiration boards tailored to your unique style preferences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {moodBoards.map((board, index) => (
            <div
              key={index}
              className="group bg-thistle bg-opacity-80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer backdrop-blur-md"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={board.image}
                  alt={board.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-purple/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-thistle bg-opacity-80 px-3 py-1 rounded-xl text-sm font-light backdrop-blur-md border border-thistle border-opacity-20 text-english-violet">
                    {board.theme}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark-purple mb-2">
                  {board.title}
                </h3>
                <p className="text-cool-gray text-sm mb-4 font-light">
                  {board.description}
                </p>
                
                <div className="flex space-x-2 mb-4">
                  {board.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-8 h-8 rounded-full border-2 border-white shadow-md ring-2 ring-thistle hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-moonstone to-mint-green text-white py-3 rounded-xl hover:from-mint-green hover:to-moonstone transition-all duration-300 transform hover:scale-105 font-light">
                  Use This Palette
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-thistle bg-opacity-80 rounded-xl p-8 shadow-lg max-w-2xl mx-auto backdrop-blur-md">
            <h3 className="text-2xl font-semibold text-dark-purple mb-4">
              Create Your Custom Mood Board
            </h3>
            <p className="text-cool-gray mb-6 font-light">
              Use our AI-powered tool to generate personalized design inspirations based on your preferences
            </p>
            <button className="bg-gradient-to-r from-moonstone to-mint-green text-white px-8 py-3 rounded-xl hover:from-mint-green hover:to-moonstone transition-all duration-300 transform hover:scale-105 shadow-lg font-light">
              Start Creating
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodBoard;
