"use client"

import React, { useState } from 'react';
import NavBar from "../components/NavBar"
import { TrendingUp, Users, Globe, Target, ChevronDown, ChevronUp, Mail, Phone, Calendar, FileText, Download } from 'lucide-react';

const InvestorContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    investmentRange: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Investor inquiry submitted:', formData);
    // Add your form submission logic here
    onClose();
    setFormData({ name: '', company: '', email: '', phone: '', investmentRange: '', message: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Connect with Our Team</h2>
          <p className="text-gray-600 text-sm mt-1">Let's discuss the investment opportunity</p>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Investment firm"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Investment Range</label>
            <select
              name="investmentRange"
              value={formData.investmentRange}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select range</option>
              <option value="100k-500k">$100K - $500K</option>
              <option value="500k-1m">$500K - $1M</option>
              <option value="1m-5m">$1M - $5M</option>
              <option value="5m+">$5M+</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tell us about your investment interests..."
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                console.log('Investor inquiry submitted:', formData);
                onClose();
                setFormData({ name: '', company: '', email: '', phone: '', investmentRange: '', message: '' });
              }}
              className="flex-1 px-6 py-3 bg-blue-900 text-white rounded-xl hover:bg-blue-800 transition-colors"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-xl p-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="font-semibold text-gray-900">{question}</h3>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {isOpen && (
        <p className="mt-4 text-gray-600 leading-relaxed">{answer}</p>
      )}
    </div>
  );
};

export default function InvestorsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const marketStats = [
    { label: "Global Talent Shortage by 2030", value: "85M+", subtitle: "Workers needed" },
    { label: "Annual Revenue Loss", value: "$8.5T", subtitle: "Due to talent gaps" },
    { label: "Employers Struggling to Fill Roles", value: "75%", subtitle: "Highest since 2006" },
    { label: "Jobs Transforming by 2035", value: "1.1B", subtitle: "Technology-driven" }
  ];

  const teamMembers = [
    {
      name: "Adetunbi Hammed Owolabi",
      role: "Founder & CEO",
      background: "Business Leader, Author, Global Economic Development Advocate",
      highlights: ["Former President of international youth organisation (2019–2022)", "Led initiatives across 14+ countries", "Engaged with world leaders including President of Egypt"]
    },
    {
      name: "Cynthia Owolabi",
      role: "Co-Founder and CTO",
      background: "Ex-Microsoft Engineering Specialist",
      highlights: ["Cloud Platforms & DevOps", "AI & Machine Learning", "Electrical Electronics Engineering"]
    },
    {
      name: "Brian Hughes",
      role: "President",
      background: "Executive Leadership & HR Consulting",
      highlights: ["Bachelor of Commerce", "Certified Human Resources Leader", "Strategic Planning & Leadership Development"]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NavBar />

      {/* Market Opportunity */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Massive Market Opportunity
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The global talent crisis presents an unprecedented opportunity for scalable solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                <div className="text-3xl lg:text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Problem */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Critical Problems</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Career Stagnation & Burnout</h3>
                    <p className="text-gray-600">Less than 10% of 3.5B workers are in fulfilling careers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Widening Skills Gap</h3>
                    <p className="text-gray-600">85M talent shortage costing $8.5T in unrealized revenue</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Lack of Personalization</h3>
                    <p className="text-gray-600">Generic career development fails individual needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Global Accessibility Barriers</h3>
                    <p className="text-gray-600">Especially in Africa and Asia where talent is underutilized</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">AI-Powered Personalization</h3>
                    <p className="text-gray-600">Tailored career paths using proprietary algorithms</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Immersive XR Training</h3>
                    <p className="text-gray-600">Extended Reality for real-world skill development</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">24/7 Expert Assistant</h3>
                    <p className="text-gray-600">Always-available career guidance and support</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Multilingual Global Platform</h3>
                    <p className="text-gray-600">Breaking down geographical and language barriers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Impact Goal */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Our Ambitious Mission</h2>
          <div className="bg-blue-50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="text-6xl lg:text-8xl font-bold text-blue-900 mb-4">8%</div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Increase in Fulfilling Careers
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We aim to increase the percentage of workers in fulfilling careers from less than 10% to 18% over the next 8-20 years. That's 280+ million lives transformed.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-blue-900">280M+</div>
                <div className="text-gray-600">Lives Impacted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">8-20</div>
                <div className="text-gray-600">Year Timeline</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900">$2T+</div>
                <div className="text-gray-600">Economic Value Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              World-Class Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Led by experienced entrepreneurs and industry experts with proven track records
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-900 font-bold text-lg">{member.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.background}</p>
                    <ul className="space-y-1">
                      {member.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-500 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Invest in Cogrea?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white border border-gray-200 rounded-2xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Massive TAM</h3>
              <p className="text-gray-600">
                $366B global corporate training market + $280B career services market with 15% annual growth
              </p>
            </div>
            
            <div className="text-center p-8 bg-white border border-gray-200 rounded-2xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Demand</h3>
              <p className="text-gray-600">
                75% of employers struggling to fill roles, creating urgent need for talent development solutions
              </p>
            </div>
            
            <div className="text-center p-8 bg-white border border-gray-200 rounded-2xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Tech</h3>
              <p className="text-gray-600">
                AI-driven platform with proprietary algorithms, multilingual support, and XR integration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Investor FAQ
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <FAQ 
              question="What's the current funding stage?"
              answer="We are currently Pre-Product/Pre-Seed round to help us accelerate development, deployment and market positioning."
            />
            <FAQ 
              question="What is the revenue model?"
              answer="B2B (enterprise subscription) additional revennue from courses, premium feautures and ER training modules."
            />
            <FAQ 
              question="How large is the addressable market?"
              answer="Our TAM includes the $366B corporate training market, $280B career services market, and emerging XR training sector. With 3.5B global workers and 75% of employers struggling to fill roles, the opportunity is massive."
            />
            <FAQ 
              question="What's your competitive advantage?"
              answer="AI-Driven personalized learning and skill gap analysis, career pathway engine, XR integration automated career accountability and AI-Powered talent matching algorithm. Our tean of global expertise, experience and prive  leadership provide execution advantages."
            />
            <FAQ 
              question="What are the key metrics and traction?"
              answer="We track user engagement, career progression success rates, skill gap reduction, and enterprise adoption. Our multilingual approach gives us access to underserved markets in Africa and Asia where talent potential is highest."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform 280 Million Careers?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join us in building the future of career development and unlock unprecedented global talent potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors flex items-center gap-2 justify-center"
            >
              <Calendar className="w-5 h-5" />
              Schedule Due Diligence Call
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-semibold transition-colors flex items-center gap-2 justify-center">
              <Mail className="w-5 h-5" />
              Request Information Package
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold">Cogrea</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Cogrea. All rights reserved. | Confidential Investor Materials
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <InvestorContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}