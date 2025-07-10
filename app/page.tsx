import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="min-h-screen bg-gray-50 px-6 py-8 relative">
        {/* Navbar */}
        <nav className="flex justify-end gap-6 text-sm text-gray-700 mb-10">
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Investors</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Join Waitlist
          </button>
        </nav>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left */}
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
            <div className="text-sm text-orange-500 font-medium mb-2">
              ✨ Career powered by <span className="text-pink-600">Intelligence</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Intelligent career navigation system for individuals and organizations.
            </h1>
            <p className="text-gray-600 mb-6">
              Booking flights have never been this easy. <br />
              Secure your bookings with voice or chat with our AI Assistant.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow-md transition-all"
              >
                Join Waitlist
              </button>
            </form>
          </div>

          {/* Right */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <img
              src="/mockup.png"
              alt="Mobile UI"
              className="w-[300px] drop-shadow-2xl"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
