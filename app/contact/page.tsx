"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    'General Inquiry',
    'Partnership Opportunities',
    'Product Demo Request',
    'Technical Support',
    'Media & Press',
    'Career Opportunities',
    'Investment Inquiries'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        inquiryType: ''
      });
    }, 3000);
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your career journey? We'd love to hear from you. 
            Whether you're looking for partnerships, have questions, or want to join our mission.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Company and Inquiry Type Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select inquiry type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full bg-blue-900 hover:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">hello@cogrea.com</p>
                      <p className="text-gray-600">support@cogrea.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Headquarters</h4>
                      <p className="text-gray-600">
                        123 Innovation Drive<br />
                        Tech City, TC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Response Time</h4>
                      <p className="text-gray-600">We typically respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h3>
                <div className="grid grid-cols-1 gap-4">
                  <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 hover:text-blue-600">Schedule a Product Demo</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 hover:text-blue-600">Partnership Opportunities</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 hover:text-blue-600">Career Opportunities</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 hover:text-blue-600">Press & Media Kit</span>
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">We're Here to Help</h3>
                <p className="text-blue-100 mb-4">
                  Whether you're an individual looking to advance your career or an organization 
                  seeking to develop your talent, we're ready to support your journey.
                </p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM EST</p>
                  <p><span className="font-semibold">Saturday:</span> 10:00 AM - 2:00 PM EST</p>
                  <p><span className="font-semibold">Sunday:</span> Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact us directly and we'll be happy to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">How does Cogrea work?</h3>
              <p className="text-gray-600 text-sm">
                Cogrea uses AI-powered career guidance, personalized learning paths, and expert mentorship 
                to help individuals and organizations navigate career development effectively.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Is Cogrea available globally?</h3>
              <p className="text-gray-600 text-sm">
                Yes! Our multilingual platform serves users worldwide, with support for multiple 
                languages and regional career markets.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">How can I become a partner?</h3>
              <p className="text-gray-600 text-sm">
                We're always looking for strategic partnerships. Contact us with "Partnership" 
                as your inquiry type to discuss collaboration opportunities.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Do you offer enterprise solutions?</h3>
              <p className="text-gray-600 text-sm">
                Absolutely! We provide tailored solutions for organizations looking to develop 
                their talent and improve employee career satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
