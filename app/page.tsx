
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gold" style={{ fontFamily: 'var(--font-pacifico)' }}>
              The Mohit Archive
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-gold transition-colors cursor-pointer">Throne Room</Link>
              <Link href="/about" className="text-gray-300 hover:text-gold transition-colors cursor-pointer">Origin Scroll</Link>
              <Link href="/projects" className="text-gray-300 hover:text-gold transition-colors cursor-pointer">War Room</Link>
              <Link href="/logs" className="text-gray-300 hover:text-gold transition-colors cursor-pointer">Royal Codex</Link>
              <Link href="/gallery" className="text-gray-300 hover:text-gold transition-colors cursor-pointer">Visual Hall</Link>
              <Link href="/contact" className="text-gray-300 hover:text-gold transition-colors cursor-pointer">Royal Courier</Link>
            </div>
            <div className="md:hidden">
              <i className="ri-menu-line text-2xl cursor-pointer"></i>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Epic%20ancient%20warrior%20throne%20room%20with%20cosmic%20nebula%20background%2C%20golden%20accents%2C%20mystical%20atmosphere%2C%20digital%20warrior%20aesthetic%2C%20dark%20stone%20architecture%20with%20glowing%20runes%2C%20majestic%20royal%20setting%2C%20futuristic%20ancient%20fusion%20design%2C%20dramatic%20lighting%2C%20cinematic%20composition%2C%20powerful%20ambiance&width=1920&height=1080&seq=throne-hero&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        ></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
            THE MOHIT ARCHIVE
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Digital vault of a future king — where ancient warrior wisdom meets modern digital mastery
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/about" className="bg-gradient-to-r from-yellow-600 to-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
              <i className="ri-play-circle-line mr-2"></i>
              Watch My Story
            </Link>
            <Link href="/projects" className="border-2 border-yellow-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 hover:text-black transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
              <i className="ri-sword-line mr-2"></i>
              Explore Projects
            </Link>
            <Link href="/contact" className="bg-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
              <i className="ri-robot-line mr-2"></i>
              Meet My AI Assistant
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="ri-arrow-down-line text-2xl text-gold"></i>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gold">Enter the Digital Empire</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the chambers of knowledge, power, and digital mastery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Origin Scroll */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 hover:border-gold transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-ancient-gate-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold">Origin Scroll</h3>
              <p className="text-gray-300 mb-6">
                The journey from small-town dreamer to MMA-trained, AI-driven builder. Discover the values of discipline, legacy, and curiosity that fuel the mission.
              </p>
              <Link href="/about" className="inline-flex items-center text-gold hover:text-yellow-300 transition-colors cursor-pointer">
                Explore Journey <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>

            {/* War Room */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 hover:border-gold transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-sword-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold">War Room</h3>
              <p className="text-gray-300 mb-6">
                AI/ML projects, web development builds, and digital conquests. From Plastic Waste Detection to ISRO AQI forecasting - each victory documented.
              </p>
              <Link href="/projects" className="inline-flex items-center text-gold hover:text-yellow-300 transition-colors cursor-pointer">
                View Arsenal <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>

            {/* Royal Codex */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 hover:border-gold transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-book-open-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gold">Royal Codex</h3>
              <p className="text-gray-300 mb-6">
                Mind Logs, Battle Logs, and Kingdom Logs. Philosophy, progress, and reflections on the path to digital mastery and personal evolution.
              </p>
              <Link href="/logs" className="inline-flex items-center text-gold hover:text-yellow-300 transition-colors cursor-pointer">
                Read Wisdom <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">15+</div>
              <div className="text-gray-400">AI/ML Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">1</div>
              <div className="text-gray-400">Years MMA Training</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">100+</div>
              <div className="text-gray-400">Battle Logs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">∞</div>
              <div className="text-gray-400">Growth Mindset</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-900 to-orange-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Join the Mission?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Connect with a digital warrior building the future through AI, discipline, and relentless growth
          </p>
          <Link href="/contact" className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
            <i className="ri-mail-line mr-2"></i>
            Start the Conversation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gold font-bold text-xl mb-4 md:mb-0" style={{ fontFamily: 'var(--font-pacifico)' }}>
              The Mohit Archive
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <i className="ri-github-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <i className="ri-youtube-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
            </div>
          </div>
          <div className="text-center mt-6 text-gray-500">
            <p>&copy; 2024 The Mohit Archive. Digital Empire in Progress.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
