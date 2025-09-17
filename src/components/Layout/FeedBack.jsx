import React from "react";

const testimonials = [
  {
    text: "As a content creator, I rely on Vivi daily for scriptwriting and editing. The built-in proofreading catches errors that even premium grammar tools miss. The human-like text quality means my audience never knows when I've had AI assistance.",
    name: "Daniel Lee",
    role: "Research Scientist",
   
  },
  {
    text: "As a content creator, I rely on Vivi daily for scriptwriting and editing. The built-in proofreading catches errors that even premium grammar tools miss. The human-like text quality means my audience never knows when I've had AI assistance.",
    name: "Daniel Lee",
    role: "Research Scientist",
    
  },
  {
    text: "As a content creator, I rely on Vivi daily for scriptwriting and editing. The built-in proofreading catches errors that even premium grammar tools miss. The human-like text quality means my audience never knows when I've had AI assistance.",
    name: "Daniel Lee",
    role: "Research Scientist",
    
  }
];

export default function Feedback() {
  return (
    <section className="py-16 px-6 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
          ⚡ Client Voices
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Client <span className="text-purple-600">Feedback</span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Hear from our clients about how our AI-powered solutions are
          transforming education and learning outcomes.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl shadow-md p-6 flex flex-col justify-between"
          >
            <p className="text-gray-700 leading-relaxed">{item.text}</p>
            <div className="flex items-center justify-between mt-6">
              
              <div>
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
              <img
                src="public\images\Ellipse 486.png"
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
    
  );
}
