import React from 'react';

interface ProjectInfoProps {
  name: string;
  description: string;
  currentFocus: string;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ name, description, currentFocus }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <h3 className="text-xl font-semibold mb-2">Current Focus</h3>
      <p className="text-gray-600">{currentFocus}</p>
    </div>
  );
};

export default ProjectInfo;
