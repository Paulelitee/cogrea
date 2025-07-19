import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <main className="min-h-screen relative">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row min-h-screen">
          <div className="p-6 lg:p-20 py-16 lg:py-32 flex-1 flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-blue-600 font-medium text-sm lg:text-base">
                Career powered by intelligence and Humans and AI
              </p>
              <h1 className="text-2xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
                Career Navigation System for Individuals and Organizations
              </h1>
              <p className="text-gray-600 text-md">
                Tailored career guidance, adaptive tools, and personalized growth plans designed to help people thrive in a rapidly evolving world.
              </p>
            </div>
              <button className="bg-blue-900 w-48 hover:bg-blue-600 text-white px-6 py-3 rounded-xl mt-2 sm:mt-0 sm:ml-2 transition-colors">
                Join Waitlist
              </button>
          </div>
          <div className="flex items-center justify-center p-6 lg:p-24 bg-white flex-1">
            <Image
              src="/images/mockup.png"
              alt="Mobile UI"
              width={400}
              height={800}
              className="max-w-full h-auto"
            />
          </div>
        </section>

        {/* About Cogrea */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Cogrea</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Cogrea is a Career Tech and EdTech company building an intelligent career navigation system. Our AI-driven platform combines expert guidance, predictive analytics, and multilingual support to empower users and organizations. We redefine growth with intentional learning, career tracking, and personalized development journeys.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                Empower individuals and businesses with AI-powered career guidance, education, and mentorship. Cogrea fosters lifelong learning to help people grow, adapt, and succeed in today’s workforce.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To build a more equitable and sustainable global economy by unlocking human potential at scale through intelligent career pathways and inclusive learning ecosystems.
              </p>
            </div>
          </div>
        </section>

        {/* Unique Selling Points */}
        <section className="py-16 lg:py-24 bg-gray-100">
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-center text-3xl lg:text-4xl font-bold mb-12">
              Why Choose Cogrea?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Personalized AI Guidance",
                "Multilingual Career Platform",
                "Skill Gap Analysis & Tracking",
                "Tailored Career Assistant",
                "Employer Talent Matching",
                "Accountability Metrics"
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow">
                  <h4 className="text-xl font-semibold mb-2">{item}</h4>
                  <p className="text-gray-600">
                    {item === "Personalized AI Guidance"
                      ? "Get career direction  and support unique to you"
                      : item === "Multilingual Career Platform"
                      ? "Grow in your native language."
                      : item === "Skill Gap Analysis & Tracking"
                      ? "Know what to learn and track your growth."
                      : item === "Tailored Career Assistant"
                      ? "Have your own AI-powered coach."
                      : item === "Employer Talent Matching"
                      ? "Connect with the right roles."
                      : "Stay accountable and grow smarter."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white text-center">
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Redefine Your Growth?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Join thousands already navigating their careers with Cogrea's intelligent AI assistant and personalized learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <button className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-xl font-medium transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-gray-900 text-white">
          <div className="container mx-auto px-6 lg:px-20 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Cogrea</h3>
              <p className="text-gray-300">
                Redefining growth through AI-driven career tools and personalized support.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#">Features</a></li>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#">Contact</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-8">
            &copy; 2025 Cogrea. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}
