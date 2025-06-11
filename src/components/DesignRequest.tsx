
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
    <section id="request" className="py-20 px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Design Request Submission
          </h2>
          <p className="text-xl text-gray-600">
            Tell us about your space and we'll match you with the perfect designer
          </p>
        </div>

        <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-xl p-8">
          <form className="space-y-8">
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-4">
                Room Type
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {roomTypes.map((room) => (
                  <button
                    key={room}
                    type="button"
                    onClick={() => setSelectedRoom(room)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedRoom === room
                        ? "border-purple-500 bg-purple-50 text-purple-700"
                        : "border-gray-200 hover:border-purple-300 text-gray-700"
                    }`}
                  >
                    {room}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-4">
                Aesthetic Preference
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {aestheticStyles.map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setSelectedStyle(style)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedStyle === style
                        ? "border-purple-500 bg-purple-50 text-purple-700"
                        : "border-gray-200 hover:border-purple-300 text-gray-700"
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-4">
                Additional Details
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your vision, budget, timeline, or any specific requirements..."
                className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors duration-300 bg-white bg-opacity-60 backdrop-blur-sm"
              />
            </div>

            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                What happens next?
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>✨ Auto Designer Assignment - We'll match you with a perfect expert</p>
                <p>📋 Initial Consultation - Quick call to understand your needs</p>
                <p>🎨 Design Proposal - Receive your customized design plan</p>
                <p>📊 Progress Tracker - Monitor your project every step of the way</p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
