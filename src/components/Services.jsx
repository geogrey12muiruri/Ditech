import React, { useState } from 'react';
// Import images
import project1Image from '../assets/services/county.jpeg';
import project2Image from '../assets/services/sikita.jpg';
import project3Image from '../assets/services/knhpcare.jpg';

const projects = [
  {
    image: project1Image,
    title: 'Proposed construction of Kitui County Headquarters',
    description: 'Preparation of Designs, Supervision and Commissioning of Construction of Kitui County Assembly & Offices plumbing, drainage, Firefighting Facilities and air conditioning with a total built up area of 4,500 SM.',
  },
  {
    image: project2Image,
    title: 'Simasona Towers and Villas Juba Sudan',
    description: 'Review and electromechanical redesign and bill of quantities preparation of 7 floor office building and 2 no 12-bedroom villas for Mr. John Simasona in Juba South Sudan. These were already constructed and required professional input to make them in line with current international building standards. The commissioning is to be CIBSE standards to enable building to attract choosy international clientele.',


  },

  {
    image: project3Image,
    title: 'Rehabilitation of Kenyatta National Hospital Prime Care Center, 9th and 10th Floor',
    description: 'Electrical and Mechanical Engineers in charge of design, tender documents preparation, supervision and commissioning for rehabilitation of 9th and 10th floor Prime care centre Kenyatta National Hospital. Our role was in plumbing, drainage, fire prevention, suppression and fighting, electrical, telecommunication of the two floors',
          
  }
  // Add more projects as needed
];

const FeaturedProjects = () => {
  // State to manage which project's description is visible
  const [visibleDescription, setVisibleDescription] = useState(Array(projects.length).fill(false));

  const toggleDescriptionVisibility = (index) => {
    const newVisibility = [...visibleDescription];
    newVisibility[index] = !newVisibility[index];
    setVisibleDescription(newVisibility);
  };

  return (
    <div className="text-center py-8 px-4">
      <h2 className="text-3xl font-bold mb-8">Our Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={project.image} alt={`Project ${index + 1}`} className="w-full h-50 object-cover" />
            <div className="p-4">
              <h5 className="text-lg font-semibold mb-2">{project.title}</h5>
              <p className="text-sm text-black mb-2">
                {visibleDescription[index] ? project.description : `${project.description.substring(0, 100)}...`}
                <button
                  onClick={() => toggleDescriptionVisibility(index)}
                  className="text-blue-500 ml-2 focus:outline-none"
                >
                  {visibleDescription[index] ? 'View Less' : 'View More'}
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
