import React from 'react';
import { Users, Target, Eye, Lightbulb, TrendingUp, Globe, Award, ChevronRight } from 'lucide-react';

const AboutUsPage = () => {
  const stats = [
    { value: "85M", label: "Global talent shortage by 2030", suffix: "people" },
    { value: "75%", label: "Employers struggling to fill vacancies", suffix: "" },
    { value: "1.1B", label: "Jobs to be transformed by technology", suffix: "jobs" },
    { value: "8%", label: "Career fulfillment increase target", suffix: "goal" }
  ];

  const teamMembers = [
    {
      name: "Adetunbi Hammed Owolabi",
      role: "Founder & CEO",
      image: "/api/placeholder/200/200",
      bio: "Visionary entrepreneur, author, and global economic development advocate with over a decade of professional experience. Former President of an international youth organisation (2019–2022), leading initiatives across 14+ countries.",
      highlights: ["Led initiatives across 14+ countries", "Engaged with world leaders", "Economic development advocate"]
    },
    {
      name: "Brian Hughes",
      role: "President",
      image: "/api/placeholder/200/200",
      bio: "Executive leadership specialist with extensive experience in strategic planning, leadership development, and HR consulting.",
      education: "Bachelor of Commerce, Certified Human Resources Leader",
      highlights: ["Executive leadership", "Strategic planning", "HR consulting"]
    },
    
    {
      name: "Cynthia Owolabi",
      role: "Co-Founder & CTO",
      image: "/api/placeholder/200/200",
      bio: "Ex-Microsoft engineering specialist with expertise in cloud platforms, DevOps, infrastructure, and AI/ML.",
      education: "Bachelor of Engineering in Electrical Electronics",
      highlights: ["Ex-Microsoft", "Cloud platforms", "AI & Machine Learning"]
    },
    {
      name: "Vinicius Miranda de Pinho",
      role: "Quality Assurance Director",
      image: "/api/placeholder/200/200",
      bio: "Quality assurance expert specializing in test automation, hardware & quality development, and network monitoring.",
      education: "Bachelor's in Production Engineering, MBA in Business Administration",
      highlights: ["Test automation", "Quality development", "Network monitoring"]
    },
    {
      name: "David Lanre Messan",
      role: "Non-Executive Startup Advisor",
      image: "/api/placeholder/200/200",
      bio: "Business consulting and venture building specialist with certified expertise in multiple domains.",
      education: "BBA Mass Communication, Multiple Certifications",
      highlights: ["Business consulting", "Venture building", "Strategic planning"]
    }
  ];

  const philosophyPoints = [
    {
      icon: Target,
      title: "Actionable Framework",
      description: "Personal, professional, and organizational growth through structured methodologies"
    },
    {
      icon: Lightbulb,
      title: "Intentional Learning",
      description: "Deeper, more purposeful approach to skill development and knowledge acquisition"
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Emphasis on lifelong learning and continuous adaptation to market changes"
    },
    {
      icon: Award,
      title: "Assured Growth",
      description: "Commitment to guaranteed success and measurable outcomes for all members"
    }
  ];

  const solutions = [
    "AI-powered personalized career development",
    "Immersive Extended Reality training for real-world environments",
    "24/7 personal and career expert assistant",
    "Advanced skill gap analyzer",
    "Navigation support for evolving job markets",
    "Multilingual platform for global accessibility",
    "Tailored career courses and training programs"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About Cogrea
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Where career meets ambition, and exactly what the world needs right now.
            </p>
            <div className="inline-flex items-center bg-blue-800/50 px-6 py-3 rounded-full">
              <Globe className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Empowering careers globally since inception</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                Revolutionizing Career Development
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Cogrea is a Career Tech, ED Tech, and HR Tech company building an intelligent career navigation system for individuals and organizations. We provide tailored career guidance, emerging skill pathways, adaptive tools, and personalized growth plans, all designed to help people thrive in a rapidly evolving world.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                In a time where human capital development is often fragmented and generic, Cogrea brings clarity, structure and direction through our proprietary AI expert assistant, career pathway engine, predictive skill gap analyzer, and multilingual platform.
              </p>
              <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                <span className="font-semibold">Learn about our technology</span>
                <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="Cogrea Platform" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">The Numbers Tell the Story</h2>
            <p className="text-lg text-gray-600">Understanding the global career crisis we're solving</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                {stat.suffix && (
                  <div className="text-xs text-gray-500 mt-1">{stat.suffix}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="bg-blue-50 p-8 lg:p-12 rounded-2xl">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to empower individuals and businesses across the globe with personalized career guidance, education, and mentorship, all powered by AI and supported through multilingual communities. Through actionable strategies and lifelong learning experiences, Cogrea is redefining how people grow, adapt, and succeed in today's workforce.
              </p>
              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm font-semibold text-blue-800">
                  Goal: Increase career fulfillment from 10% to 18% over the next 8-20 years
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-purple-50 p-8 lg:p-12 rounded-2xl">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To build a more productive, equitable, and sustainable global economy by unlocking human potential at scale. Cogrea reimagines how we learn, work, and grow together, democratizing access to opportunity, knowledge, growth and success for all.
              </p>
              <div className="mt-6 p-4 bg-purple-100 rounded-lg">
                <p className="text-sm font-semibold text-purple-800">
                  Impact: Transforming 3.5 billion workers worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              The Cogrea Philosophy: Growth Redefined
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our approach to personal and professional development is built on four core principles that drive meaningful, sustainable growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophyPoints.map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                Our Comprehensive Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                We address career stagnation, skills gaps, and job market challenges through innovative technology and personalized approaches.
              </p>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="ml-3 text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Extended Reality (XR) Training</h3>
              <p className="text-gray-700 mb-6">
                Our XR training solutions provide immersive learning experiences that:
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                  Shorten learning time significantly
                </li>
                <li className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                  Reduce learner mistakes
                </li>
                <li className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                  Boost knowledge retention rates
                </li>
                <li className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                  Enhance long-term memory retention
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Experienced professionals driving innovation in career development
            </p>
          </div>

          {/* Founder Spotlight */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-12">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="relative">
                  <img 
                    src="/api/placeholder/300/300" 
                    alt="Adetunbi Hammed Owolabi" 
                    className="rounded-2xl shadow-lg w-full max-w-xs mx-auto"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    Founder
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-gray-900">
                  Adetunbi Hammed Owolabi
                </h3>
                <p className="text-blue-600 font-semibold mb-4">Founder & CEO</p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Visionary entrepreneur, author, and global economic development advocate with over a decade of professional experience. Former President of an international youth organisation (2019–2022), leading initiatives across 14+ countries, including the U.S. and Brazil. Engaged with world leaders, including the President of Egypt and U.S. delegates, on economic and development issues.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Global Leadership", "Economic Development", "Youth Empowerment", "International Relations"].map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(1).map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">{member.role}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                {member.education && (
                  <p className="text-xs text-gray-500 mb-3 font-medium">{member.education}</p>
                )}
                <div className="flex flex-wrap gap-1">
                  {member.highlights.map((highlight, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Career Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of professionals who are already experiencing the future of career development with Cogrea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-xl font-semibold transition-colors">
              Join Waitlist
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-xl font-semibold transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;