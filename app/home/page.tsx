'use client'
import React, { useState } from 'react';
import FileUploader from '../components/FileUploader';
import LabelInput from '../components/LabelInput';

interface Label {
  id: number;
  text: string;
}

const Home: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [labels, setLabels] = useState<Label[]>([]);

  const handleFileUpload = (uploadedFile: File) => {
    setFile(uploadedFile);
  };

  const handleAddLabel = (labelText: string) => {
    setLabels([...labels, { id: Date.now(), text: labelText }]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Text/Video Labelling Service</h1>
      <FileUploader onFileUpload={handleFileUpload} />
      {file && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Uploaded File: {file.name}</h2>
          <LabelInput onAddLabel={handleAddLabel} />
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Labels:</h3>
            <ul className="list-disc list-inside">
              {labels.map((label) => (
                <li key={label.id}>{label.text}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;