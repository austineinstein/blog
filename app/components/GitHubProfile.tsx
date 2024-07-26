import React from 'react';
import Image from 'next/image';

interface GitHubProfileProps {
  username: string;
  bio: string;
  avatarUrl: string;
  stats: {
    repositories: number;
    followers: number;
    following: number;
  };
  githubUrl: string; // Add a new prop for the GitHub URL
}

const GitHubProfile: React.FC<GitHubProfileProps> = ({ username, bio, avatarUrl, stats, githubUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <Image src={avatarUrl} alt={username} width={64} height={64} className="rounded-full mr-4" />
        <div>
          <h2 className="text-2xl font-bold">{username}</h2>
          <p className="text-gray-600">{bio}</p>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-300"
          >
            View my GitHub
          </a>
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Repositories: {stats.repositories}</span>
        <span>Followers: {stats.followers}</span>
        <span>Following: {stats.following}</span>
      </div>
    </div>
  );
};

export default GitHubProfile;
