import { Target, Eye } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div 
            className="group mission-card bg-white/70 backdrop-blur-sm p-8 lg:p-10 rounded-3xl shadow hover:shadow-lg transform transition-all duration-500 hover:-translate-y-2 border border-white/50"
            style={{
              animation: `slideInLeft 0.8s ease-out forwards`,
              opacity: 0
            }}
          >
            {/* Mission Icon */}
            <div className="mission-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Target className="w-8 h-8 text-white" strokeWidth={2} />
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 group-hover:text-gray-700 transition-colors">
              Our Mission
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-500 transition-colors">
              Empower individuals and businesses with AI-powered career guidance, education, and mentorship. Cogrea fosters lifelong learning to help people grow, adapt, and succeed in today's workforce.
            </p>

            {/* Decorative element */}
            <div className="mission-bar mt-8 h-1 w-16 rounded-full group-hover:w-24 transition-all duration-300"></div>
          </div>

          {/* Vision Card */}
          <div 
            className="group vision-card bg-white/70 backdrop-blur-sm p-8 lg:p-10 rounded-3xl shadow hover:shadow-lg transform transition-all duration-500 hover:-translate-y-2 border border-white/50"
            style={{
              animation: `slideInRight 0.8s ease-out forwards`,
              animationDelay: '0.2s',
              opacity: 0
            }}
          >
            {/* Vision Icon */}
            <div className="vision-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Eye className="w-8 h-8 text-white" strokeWidth={2} />
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 group-hover:text-gray-700 transition-colors">
              Our Vision
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-500 transition-colors">
              To build a more equitable and sustainable global economy by unlocking human potential at scale through intelligent career pathways and inclusive learning ecosystems.
            </p>

            {/* Decorative element */}
            <div className="vision-bar mt-8 h-1 w-16 rounded-full group-hover:w-24 transition-all duration-300"></div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .mission-icon, .vision-icon {
          background-color: hsl(215, 70%, 50%);
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        
        .group:hover .mission-icon,
        .group:hover .vision-icon {
          background-color: hsl(25, 90%, 55%);
        }
        
        .mission-bar, .vision-bar {
          background-color: hsl(215, 70%, 50%);
          transition: background-color 0.3s ease, width 0.3s ease;
        }
        
        .group:hover .mission-bar,
        .group:hover .vision-bar {
          background-color: hsl(25, 90%, 55%);
        }
      `}</style>
    </section>
  );
}
