
import { useState } from "react";

const DesignRequest = () => {
  const [selectedRoom, setSelectedRoom] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");

  const roomTypes = [
    "Living Room", "Bedroom", "Kitchen", "Bathroom", "Office", "Dining Room"
  ];

  const aestheticStyles = [
    "Modern", "Minimalist", "Traditional", "Scandinavian", "Industrial", "Bohemian"
  ];

  return (
    <section id="request" className="py-20 px-6 bg-gradient-to-b from-lavender-web to-thistle">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-dark-purple mb-4">
            Design Request Submission
          </h2>
          <p className="text-xl text-cool-gray font-light">
            Tell us about your space and we'll match you with the perfect designer
          </p>
        </div>

        <div className="bg-thistle bg-opacity-80 backdrop-blur-md rounded-xl shadow-xl p-8">
          <form className="space-y-8">
            <div>
              <label className="block text-lg font-semibold text-dark-purple mb-4">
                Room Type
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {roomTypes.map((room) => (
                  <button
                    key={room}
                    type="button"
                    onClick={() => setSelectedRoom(room)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 font-light ${
                      selectedRoom === room
                        ? "border-moonstone bg-mint-green bg-opacity-30 text-dark-purple"
                        : "border-thistle hover:border-moonstone text-english-violet"
                    }`}
                  >
                    {room}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-dark-purple mb-4">
                Aesthetic Preference
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {aestheticStyles.map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setSelectedStyle(style)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 font-light ${
                      selectedStyle === style
                        ? "border-moonstone bg-mint-green bg-opacity-30 text-dark-purple"
                        : "border-thistle hover:border-moonstone text-english-violet"
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-dark-purple mb-4">
                Additional Details
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your vision, budget, timeline, or any specific requirements..."
                className="w-full p-4 rounded-xl border-2 border-thistle focus:border-moonstone focus:outline-none transition-colors duration-300 bg-lavender-web bg-opacity-60 backdrop-blur-sm text-english-violet font-light"
              />
            </div>

            <div className="bg-lavender-web bg-opacity-60 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-dark-purple mb-2">
                What happens next?
              </h3>
              <div className="space-y-2 text-cool-gray font-light">
                <p>✨ Auto Designer Assignment - We'll match you with a perfect expert</p>
                <p>📋 Initial Consultation - Quick call to understand your needs</p>
                <p>🎨 Design Proposal - Receive your customized design plan</p>
                <p>📊 Progress Tracker - Monitor your project every step of the way</p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-moonstone to-mint-green text-white py-4 rounded-xl text-lg font-light hover:from-mint-green hover:to-moonstone transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Submit Design Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DesignRequest;
