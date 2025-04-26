import React from 'react';
import { User, Search, Plus, Contact } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const ServiceList = () => {
  const categories = ['Development', 'Design', 'Marketing', 'Business'];
  const navigate = useNavigate();  // Hook for navigation

  const handleAddService = () => {
    navigate('/add-service');  // Navigate to AddService page
  };
  
  const experts = [
    {
      name: "Jonah Elbaz",
      expertise: "Verified Expert in Engineering",
      role: "JavaScript Developer",
      company: "Facebook"
    },
    {
      name: "Casey Arrington",
      expertise: "Verified Expert in Product Management",
      role: "Product Manager",
      company: "SpaceX"
    },
    {
      name: "Vladimir Mitrović",
      expertise: "Verified Expert in Engineering",
      role: "C# Developer",
      company: "Apple",
      featured: true
    },
    {
      name: "Emily Dubow",
      expertise: "Verified Expert in Design",
      role: "UI/UX Designer",
      company: "Samsung"
    },
    {
      name: "Anuar Heberlein",
      expertise: "Verified Expert in Management Consulting",
      role: "M&A Expert",
      company: "Bain & Company"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="relative">
        <header className="fixed top-0 left-0 right-0 bg-white border-b z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold text-[#9b87f5]">yohatech</div>
              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full hover:bg-gray-200">
                  <User className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="pt-24 pb-16 bg-gradient-to-br from-[#9b87f5]/10 via-white to-[#9b87f5]/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Connect with Top-Tier Freelance Talents
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search for services..." 
                  className="pl-10 py-2 px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b87f5] focus:border-[#9b87f5]"
                />
              </div>
              <span className="text-gray-500">Or</span>
              <button
                onClick={handleAddService} // Add click handler
                className="w-full md:w-auto py-2 px-4 rounded-lg bg-[#9b87f5] text-white hover:bg-[#7c66d4] transition-all duration-300"
              >
                <Plus className="h-4 w-4 inline-block mr-2" /> Add Service
              </button>
            </div>
            <button className="py-2 px-4 rounded-lg border-2 border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white transition-all duration-300">
              <Contact className="h-4 w-4 inline-block mr-2" /> Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-gray-50 hover:bg-[#9b87f5]/10 text-gray-700 hover:text-[#9b87f5] transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Expert Services Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-12">
            Explore Our Expert Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {experts.map((expert) => (
              <div
                key={expert.name}
                className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center transform hover:-translate-y-1 ${
                  expert.featured ? 'ring-2 ring-[#9b87f5]' : ''
                }`}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#9b87f5] to-[#7c66d4] rounded-full mb-4 flex items-center justify-center text-white text-2xl font-semibold">
                  {expert.name.charAt(0)}
                </div>
                <h3 className="font-bold text-gray-900">{expert.name}</h3>
                <p className="text-[#9b87f5] text-sm font-medium">{expert.expertise}</p>
                <p className="text-sm text-gray-600 mt-1">{expert.role}</p>
                <p className="text-xs text-gray-400 mt-2">Previously at {expert.company}</p>
                <button 
                  className="mt-4 w-full py-2 px-4 rounded-lg bg-gradient-to-r from-[#9b87f5]/5 to-[#7c66d4]/5 hover:from-[#9b87f5]/10 hover:to-[#7c66d4]/10 text-[#7c66d4] hover:text-[#9b87f5]"
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceList;
