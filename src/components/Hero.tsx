
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1920&q=80",
      title: "Modern Luxury Living",
      description: "Transform your space with contemporary elegance and sophisticated design",
    },
    {
      image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1920&q=80",
      title: "Minimalist Comfort",
      description: "Clean lines and serene spaces for the modern lifestyle",
    },
    {
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1920&q=80",
      title: "Natural Harmony",
      description: "Bring the outdoors in with organic textures and earth tones",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
          </div>
        </div>
      ))}
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in drop-shadow-2xl">
            {slides[currentSlide].title}
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in drop-shadow-lg max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <button className="glass text-white px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30 backdrop-blur-md">
              Explore Mood Boards
            </button>
            <button className="bg-purple-600/90 backdrop-blur-md text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Start Your Design
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 glass text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 glass text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
