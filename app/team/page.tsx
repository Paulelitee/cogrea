"use client";

import React from "react";
import { User, Mail, Twitter } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  description: string;
  experience: string[];
  education?: string;
  image: string;
  linkedin: string;
  twitter: string;
  email: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Adetunbi Hammed Owolabi",
    role: "Founder & CEO",
    description:
      "Business Leader, Author, Global Leader and Economic Development Advocate",
    experience: [
      "Visionary entrepreneur, author, and global economic development advocate with over a decade of professional experience",
      "Former President of an international youth organisation (2019–2022), leading initiatives across 14+ countries, including the U.S. and Brazil",
      "Engaged with world leaders, including the President of Egypt and U.S. delegates, on economic and development issues",
      "Passionate about purpose, legacy, and inspiring the next generation through empowerment and career adaptability",
    ],
    image: "/images/team/adetunbi.jpg",
    linkedin: "#",
    twitter: "#",
    email: "#",
  },
  {
    name: "Brian Hughes",
    role: "President",
    description: "Executive Leadership & Strategic Planning Expert",
    experience: [
      "Executive Roles, Leadership Development, Strategic Planning, and HR Consulting",
    ],
    education: "Bachelor of Commerce/Certified Human Resources Leader",
    image: "/images/team/brian.jpg",
    linkedin: "#",
    twitter: "#",
    email: "#",
  },
  {
    name: "Hassan Afaq",
    role: "Chief Product Officer",
    description: "Product Development & Technology Strategy Leader",
    experience: [
      "Product Development Specialist, Senior Technology Consultant and Business Operations Manager",
    ],
    education:
      "MSC IT (Information Technology) and Bachelor's degree in Mathematics and Computer Science",
    image: "/images/team/hassan.jpg",
    linkedin: "#",
    twitter: "#",
    email: "#",
  },
  {
    name: "Cynthia Owolabi",
    role: "Principal Software Engineer / Tech Lead",
    description: "Engineering Excellence & AI Innovation Specialist",
    experience: [
      "Ex-Microsoft, Engineering Specialists, Cloud Platforms, DevOps & Infrastructure, Artificial Intelligence & Machine Learning",
    ],
    education:
      "Bachelor of Engineering in Electrical Electronics Engineering, The Federal University of Technology, Akure, Ondo State",
    image: "/images/team/cynthia.jpg",
    linkedin: "#",
    twitter: "#",
    email: "#",
  },
  {
    name: "Vinicius Miranda de Pinho",
    role: "Quality Assurance Director",
    description: "Quality Engineering & Systems Optimization Expert",
    experience: [
      "Test Automation, Hardware & Quality, Development, Networking & Monitoring",
    ],
    education:
      "Bachelor's Degree in Production Engineering, MBA in Business Administration",
    image: "/images/team/vinicius.jpg",
    linkedin: "#",
    twitter: "#",
    email: "#",
  },
  {
    name: "David Lanre Messan",
    role: "Non-Executive Startup Advisor",
    description: "Business Strategy & Venture Development Consultant",
    experience: ["Business consulting and Venture builder"],
    education:
      "BBA in Mass Communication, Certified Team Leadership, Certified Finance and Marketing Strategist, Certified Entrepreneurial and Innovation Analyst",
    image: "/images/team/david.jpg",
    linkedin: "#",
    twitter: "#",
    email: "#",
  },
];

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Profile Image */}
      <div className="relative h-80 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
        {/* Placeholder for actual image */}
        <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-600">
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </span>
        </div>
        {/* Uncomment this when images are ready */}
        {/* <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        /> */}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Name and Role */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
          <p className="text-blue-600 font-medium mt-1">{member.role}</p>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm text-center">
          {member.description}
        </p>

        {/* Experience Points */}
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800 text-sm">Key Experience:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {member.experience.map((exp, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>{exp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Education */}
        {member.education && (
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800 text-sm">Education:</h4>
            <p className="text-xs text-gray-600">{member.education}</p>
          </div>
        )}

        {/* Social Links */}
        <div className="flex justify-center gap-3 pt-4 border-t border-gray-100">
          <a
            href={member.linkedin}
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
          >
            <User className="w-4 h-4" />
          </a>
          <a
            href={member.twitter}
            className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-50 rounded-full transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href={member.email}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            The visionary minds behind Cogrea, bringing together decades of
            experience in technology, business leadership, and career
            development to revolutionize how the world approaches growth.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Founder Section */}
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4 text-gray-900">
              Our Founder
            </h2>
            <div className="max-w-4xl mx-auto">
              <TeamCard member={teamMembers[0]} />
            </div>
          </div>

          {/* Executive Team */}
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-gray-900">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.slice(1, 5).map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Advisors */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-gray-900">
              Strategic Advisors
            </h2>
            <div className="max-w-md mx-auto">
              <TeamCard member={teamMembers[5]} />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            We're always looking for passionate individuals who share our
            vision of revolutionizing career development and unlocking human
            potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-xl font-medium transition-colors">
              View Open Positions
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-xl font-medium transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
