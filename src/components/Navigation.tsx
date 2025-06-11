
import { Search, Home } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-thistle bg-opacity-80 backdrop-blur-md border-b border-thistle border-opacity-20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-moonstone" />
            <h1 className="text-2xl font-semibold bg-gradient-to-r from-moonstone to-dark-purple bg-clip-text text-transparent">
              DesignSpace
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#catalog" className="text-english-violet hover:text-moonstone transition-colors duration-300 font-light">
              Catalog
            </a>
            <a href="#moodboard" className="text-english-violet hover:text-moonstone transition-colors duration-300 font-light">
              Mood Board
            </a>
            <a href="#request" className="text-english-violet hover:text-moonstone transition-colors duration-300 font-light">
              Design Request
            </a>
            <a href="#inspiration" className="text-english-violet hover:text-moonstone transition-colors duration-300 font-light">
              Inspiration
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cool-gray h-4 w-4" />
              <input
                type="text"
                placeholder="Search designs..."
                className="pl-10 pr-4 py-2 rounded-xl bg-lavender-web bg-opacity-60 backdrop-blur-sm border border-thistle border-opacity-30 focus:outline-none focus:ring-2 focus:ring-moonstone focus:border-transparent transition-all duration-300 text-english-violet"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
