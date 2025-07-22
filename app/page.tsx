"use client";

import React, { useState } from 'react';
import { X, Search, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import NavBar from './components/NavBar';
import WhyChooseSection from './components/WhyChooseUs';
import MissionVisionSection from './components/Mission';

const countries = [
  { name: 'Afghanistan', flag: '🇦🇫' },
  { name: 'Albania', flag: '🇦🇱' },
  { name: 'Algeria', flag: '🇩🇿' },
  { name: 'Argentina', flag: '🇦🇷' },
  { name: 'Australia', flag: '🇦🇺' },
  { name: 'Austria', flag: '🇦🇹' },
  { name: 'Bangladesh', flag: '🇧🇩' },
  { name: 'Belgium', flag: '🇧🇪' },
  { name: 'Brazil', flag: '🇧🇷' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'China', flag: '🇨🇳' },
  { name: 'Colombia', flag: '🇨🇴' },
  { name: 'Denmark', flag: '🇩🇰' },
  { name: 'Egypt', flag: '🇪🇬' },
  { name: 'Finland', flag: '🇫🇮' },
  { name: 'France', flag: '🇫🇷' },
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'Ghana', flag: '🇬🇭' },
  { name: 'Greece', flag: '🇬🇷' },
  { name: 'India', flag: '🇮🇳' },
  { name: 'Indonesia', flag: '🇮🇩' },
  { name: 'Ireland', flag: '🇮🇪' },
  { name: 'Italy', flag: '🇮🇹' },
  { name: 'Japan', flag: '🇯🇵' },
  { name: 'Kenya', flag: '🇰🇪' },
  { name: 'Malaysia', flag: '🇲🇾' },
  { name: 'Mexico', flag: '🇲🇽' },
  { name: 'Netherlands', flag: '🇳🇱' },
  { name: 'Nigeria', flag: '🇳🇬' },
  { name: 'Norway', flag: '🇳🇴' },
  { name: 'Pakistan', flag: '🇵🇰' },
  { name: 'Philippines', flag: '🇵🇭' },
  { name: 'Poland', flag: '🇵🇱' },
  { name: 'Portugal', flag: '🇵🇹' },
  { name: 'Russia', flag: '🇷🇺' },
  { name: 'Saudi Arabia', flag: '🇸🇦' },
  { name: 'Singapore', flag: '🇸🇬' },
  { name: 'South Africa', flag: '🇿🇦' },
  { name: 'South Korea', flag: '🇰🇷' },
  { name: 'Spain', flag: '🇪🇸' },
  { name: 'Sweden', flag: '🇸🇪' },
  { name: 'Switzerland', flag: '🇨🇭' },
  { name: 'Thailand', flag: '🇹🇭' },
  { name: 'Turkey', flag: '🇹🇷' },
  { name: 'Ukraine', flag: '🇺🇦' },
  { name: 'United Arab Emirates', flag: '🇦🇪' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'United States', flag: '🇺🇸' },
  { name: 'Vietnam', flag: '🇻🇳' }
];

const SignupModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: ''
  });
  const [selectedCountryFlag, setSelectedCountryFlag] = useState('');
  const [countrySearch, setCountrySearch] = useState('');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCountrySelect = (country: { name: string; flag: string }) => {
    setFormData({
      ...formData,
      country: country.name
    });
    setSelectedCountryFlag(country.flag);
    setCountrySearch('');
    setIsCountryDropdownOpen(false);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    onClose();
    // Reset form
    setFormData({ name: '', email: '', country: '' });
    setSelectedCountryFlag('');
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Join Cogrea</h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1">Start your career journey today</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
              placeholder="Enter your email address"
            />
          </div>

          {/* Country Dropdown */}
          <div className="relative">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
              Country *
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-left bg-white flex items-center justify-between text-sm sm:text-base"
              >
                <span className={`flex items-center gap-2 ${formData.country ? 'text-gray-900' : 'text-gray-400'}`}>
                  {selectedCountryFlag && <span className="text-base">{selectedCountryFlag}</span>}
                  {formData.country || 'Select your country'}
                </span>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform flex-shrink-0 ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown */}
              {isCountryDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-lg">
                  {/* Search Box */}
                  <div className="p-2 sm:p-3 border-b border-gray-200">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4" />
                      <input
                        type="text"
                        placeholder="Search countries..."
                        value={countrySearch}
                        onChange={(e) => setCountrySearch(e.target.value)}
                        className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  {/* Country List */}
                  <div className="max-h-40 sm:max-h-48 overflow-y-auto">
                    {filteredCountries.length > 0 ? (
                      filteredCountries.map((country) => (
                        <button
                          key={country.name}
                          type="button"
                          onClick={() => handleCountrySelect(country)}
                          className="w-full text-left px-3 sm:px-4 py-2 hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors text-sm sm:text-base flex items-center gap-2"
                        >
                          <span className="text-base">{country.flag}</span>
                          {country.name}
                        </button>
                      ))
                    ) : (
                      <div className="px-3 sm:px-4 py-2 text-gray-500 text-sm">
                        No countries found
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!formData.name || !formData.email || !formData.country}
            className="w-full bg-blue-900 hover:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl transition-colors text-sm sm:text-base"
          >
            Join Waitlist
          </button>

          {/* Terms */}
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            By signing up, you agree to our{' '}
            <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and{' '}
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <main className="min-h-screen relative">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row min-h-screen hero-wrapper">
          <div className="hero-section-left px-4 lg:px-40 py-8 lg:py-16 flex-1 flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-4 w-full hero-cta-wrapper px-4">
              <p className="text-blue-600 font-medium text-sm lg:text-base">
                Career powered by human intelligence AI, and ER
              </p>
              <h1 className="text-2xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
                Career Navigation System for Individuals and Organizations
              </h1>
              <p className="text-gray-600 text-md">
                Tailored career guidance, adaptive tools, and personalized growth plans designed to help people thrive in a rapidly evolving world.
              </p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-900 w-48 hover:bg-blue-600 text-white px-6 py-3 rounded-xl mt-2 sm:mt-0 sm:ml-2 transition-colors"
            >
              Join Waitlist
            </button>
          </div>
          <div className="hero-section-right">
            <Image src={'/images/mockup.png'} alt="Cogrea Mockup" width={300} height={600} /> 
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
        <MissionVisionSection />

        {/* Unique Selling Points */}
        <WhyChooseSection />

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
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-xl font-medium transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-gray-900 text-white">
          <div className="flex mx-auto px-6 lg:px-20 w-full justify-between">
            <div className="flex flex-col gap-16">
              <div className='flex flex-col gap-4 w-80'>
                <div>
                  <Image src="/images/logodark.png" alt="Cogrea Logo" width={100} height={50} />
                </div>
                <p className="text-gray-500">
                  Redefining growth through AI-driven career tools and personalized support.
                </p>
                </div>
            </div>
            <div className='flex gap-16 px-32'>
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
          </div>
              <div className="text-gray-500 mt-8 px-16">
                &copy; 2025 Cogrea. All rights reserved.
              </div>
        </footer>
      </main>

      {/* Signup Modal */}
      <SignupModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
