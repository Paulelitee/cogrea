import { Brain, Languages, Target, Bot, Users, TrendingUp } from "lucide-react";

export default function CogreaFeaturesSection() {
      const features = [
    {
      title: "Personalized AI Guidance",
      description: "Get career direction and support unique to you",
      icon: Brain,
      bgColor: "bg-purple-50",
      delay: "0ms"
    },
    {
      title: "Multilingual Career Platform",
      description: "Grow in your native language.",
      icon: Languages,
      bgColor: "bg-blue-50",
      delay: "100ms"
    },
    {
      title: "Skill Gap Analysis & Tracking",
      description: "Know what to learn and track your growth.",
      icon: Target,
      bgColor: "bg-green-50",
      delay: "200ms"
    },
    {
      title: "Tailored Career Assistant",
      description: "Have your own AI-powered coach.",
      icon: Bot,
      bgColor: "bg-orange-50",
      delay: "300ms"
    },
    {
      title: "Employer Talent Matching",
      description: "Connect with the right roles.",
      icon: Users,
      bgColor: "bg-indigo-50",
      delay: "400ms"
    },
    {
      title: "Accountability Metrics",
      description: "Stay accountable and grow smarter.",
      icon: TrendingUp,
      bgColor: "bg-teal-50",
      delay: "500ms"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            Why Choose Cogrea?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock your potential with AI-powered career intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className={`group bg-white p-8 rounded-3xl shadow hover:shadow-lg transform transition-all duration-500 hover:-translate-y-2 ${feature.bgColor} border border-white/50 backdrop-blur-sm`}
                style={{
                  animation: `fadeInUp 0.6s ease-out forwards`,
                  animationDelay: feature.delay,
                  opacity: 0
                }}
              >
                {/* Icon container with blue to orange animation */}
                <div className="icon-container w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <div className="decorative-bar mt-6 h-1 w-12 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Call to action section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">Ready to transform your career journey?</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .icon-container {
          background-color: hsl(215, 70%, 50%);
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        
        .group:hover .icon-container {
          background-color: hsl(25, 90%, 55%);
        }
        
        .decorative-bar {
          background-color: hsl(215, 70%, 50%);
          transition: background-color 0.3s ease, width 0.3s ease;
        }
        
        .group:hover .decorative-bar {
          background-color: hsl(25, 90%, 55%);
        }
      `}</style>
    </section>
  );
}
