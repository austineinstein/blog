import React from 'react';

interface Musing {
  date: string;
  content: string;
}

interface MusingsProps {
  musings: Musing[];
}

const Musings: React.FC<MusingsProps> = ({ musings }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Musings</h2>
      {musings.map((musing, index) => (
        <div key={index} className="mb-4">
          <p className="text-sm text-gray-500">{musing.date}</p>
          <p className="text-gray-700">{musing.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Musings;
